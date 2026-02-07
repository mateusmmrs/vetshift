'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button, Input } from '@/components/ui';
import type { UserRole } from '@/lib/types';
import styles from '../login/auth.module.css';

function SignupForm() {
    const searchParams = useSearchParams();
    const [role, setRole] = useState<UserRole>(
        (searchParams.get('role') as UserRole) || 'vet'
    );
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            window.location.href = role === 'clinic' ? '/clinic' : '/vet';
        }, 1000);
    };

    return (
        <div className={styles.authContainer}>
            <Link href="/" className={styles.backLink}>← Voltar</Link>

            <div className={styles.authHeader}>
                <h1 className={styles.authLogo}>
                    🐾 Vet<span className={styles.accent}>Shift</span>
                </h1>
                <h2 className={styles.authTitle}>Criar sua conta</h2>
                <p className={styles.authSubtitle}>
                    Junte-se ao VetShift e comece a conectar plantões.
                </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.authForm}>
                <div className={styles.roleSelector}>
                    <span className={styles.roleSelectorLabel}>Eu sou:</span>
                    <div className={styles.roleOptions}>
                        <div
                            className={`${styles.roleOption} ${role === 'clinic' ? styles.roleOptionActive : ''}`}
                            onClick={() => setRole('clinic')}
                        >
                            <span className={styles.roleIcon}>🏥</span>
                            <span className={styles.roleLabel}>Clínica</span>
                        </div>
                        <div
                            className={`${styles.roleOption} ${role === 'vet' ? styles.roleOptionActive : ''}`}
                            onClick={() => setRole('vet')}
                        >
                            <span className={styles.roleIcon}>🩺</span>
                            <span className={styles.roleLabel}>Veterinário</span>
                        </div>
                    </div>
                </div>

                <Input
                    label={role === 'clinic' ? 'Nome da Clínica' : 'Nome Completo'}
                    type="text"
                    placeholder={role === 'clinic' ? 'Ex: Centervet Salvador' : 'Ex: Dr. Lucas Martins'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <Input
                    label="Email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <Input
                    label="Senha"
                    type="password"
                    placeholder="Mínimo 8 caracteres"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                />

                {role === 'vet' && (
                    <Input
                        label="CRMV"
                        type="text"
                        placeholder="Ex: 12345-BA"
                        hint="Você poderá enviar o documento para verificação depois."
                    />
                )}

                {role === 'clinic' && (
                    <Input
                        label="Endereço"
                        type="text"
                        placeholder="Rua, número - Bairro, Salvador-BA"
                    />
                )}

                <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    disabled={loading}
                >
                    {loading ? 'Criando conta...' : 'Criar Conta Gratuita'}
                </Button>
            </form>

            <p className={styles.authFooter}>
                Já tem conta?{' '}
                <Link href="/login" className={styles.authLink}>Fazer login</Link>
            </p>
        </div>
    );
}

export default function SignupPage() {
    return (
        <div className={styles.authPage}>
            <Suspense fallback={
                <div className={styles.authContainer}>
                    <div className={styles.authHeader}>
                        <h1 className={styles.authLogo}>
                            🐾 Vet<span className={styles.accent}>Shift</span>
                        </h1>
                        <p className={styles.authSubtitle}>Carregando...</p>
                    </div>
                </div>
            }>
                <SignupForm />
            </Suspense>
        </div>
    );
}

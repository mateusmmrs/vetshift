'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button, Input } from '@/components/ui';
import styles from './auth.module.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login - will integrate with Supabase
        setTimeout(() => {
            // Demo: redirect based on email pattern
            if (email.includes('clinica') || email.includes('clinic')) {
                window.location.href = '/clinic';
            } else {
                window.location.href = '/vet';
            }
        }, 1000);
    };

    return (
        <div className={styles.authPage}>
            <div className={styles.authContainer}>
                <Link href="/" className={styles.backLink}>← Voltar</Link>

                <div className={styles.authHeader}>
                    <h1 className={styles.authLogo}>
                        🐾 Vet<span className={styles.accent}>Shift</span>
                    </h1>
                    <h2 className={styles.authTitle}>Entrar na sua conta</h2>
                    <p className={styles.authSubtitle}>
                        Bem-vindo de volta! Faça login para acessar seu painel.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className={styles.authForm}>
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
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <div className={styles.forgotPassword}>
                        <a href="#">Esqueceu a senha?</a>
                    </div>

                    <Button
                        type="submit"
                        fullWidth
                        size="lg"
                        disabled={loading}
                    >
                        {loading ? 'Entrando...' : 'Entrar'}
                    </Button>
                </form>

                <div className={styles.authDivider}>
                    <span>ou</span>
                </div>

                <div className={styles.demoButtons}>
                    <p className={styles.demoLabel}>Acesso Demo:</p>
                    <div className={styles.demoRow}>
                        <Link href="/clinic">
                            <Button variant="secondary" size="sm">🏥 Demo Clínica</Button>
                        </Link>
                        <Link href="/vet">
                            <Button variant="secondary" size="sm">🩺 Demo Vet</Button>
                        </Link>
                    </div>
                </div>

                <p className={styles.authFooter}>
                    Não tem conta?{' '}
                    <Link href="/signup" className={styles.authLink}>Criar conta</Link>
                </p>
            </div>
        </div>
    );
}

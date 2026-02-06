'use client';

import { useState } from 'react';
import { Button, Input, Textarea, Select } from '@/components/ui';
import { SPECIALTY_LABELS, type ShiftSpecialty } from '@/lib/types';
import { calculateDuration, formatCurrency } from '@/lib/utils';
import Link from 'next/link';
import styles from './publish.module.css';

export default function PublishShiftPage() {
    const [specialty, setSpecialty] = useState<string>('clinica_geral');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('19:00');
    const [endTime, setEndTime] = useState('07:00');
    const [value, setValue] = useState('200');
    const [description, setDescription] = useState('');
    const [acceptProposals, setAcceptProposals] = useState(true);
    const [requirements, setRequirements] = useState<string[]>(['CRMV ativo']);
    const [submitted, setSubmitted] = useState(false);

    const duration = calculateDuration(startTime, endTime);

    const specialtyOptions = Object.entries(SPECIALTY_LABELS).map(([val, label]) => ({
        value: val,
        label,
    }));

    const toggleRequirement = (req: string) => {
        setRequirements(prev =>
            prev.includes(req) ? prev.filter(r => r !== req) : [...prev, req]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            window.location.href = '/clinic';
        }, 2000);
    };

    if (submitted) {
        return (
            <div className={styles.success}>
                <div className={styles.successIcon}>✅</div>
                <h2 className={styles.successTitle}>Plantão Publicado!</h2>
                <p className={styles.successDesc}>
                    Veterinários da sua região serão notificados. Você receberá candidaturas em breve.
                </p>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <Link href="/clinic" className={styles.backBtn}>←</Link>
                <h1 className={styles.title}>Publicar Plantão</h1>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <Select
                    label="Especialidade"
                    options={specialtyOptions}
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                />

                <Input
                    label="Data"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />

                <div className={styles.timeRow}>
                    <Input
                        label="Início"
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        required
                    />
                    <Input
                        label="Fim"
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.durationBadge}>
                    Duração: <strong>{duration}h</strong>
                </div>

                <Input
                    label="Valor do Plantão (R$)"
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    min="50"
                    step="10"
                    required
                    hint={`Veterinário recebe ${formatCurrency(Number(value))} • Taxa VetShift: ${formatCurrency(Number(value) * 0.15)}`}
                />

                <Textarea
                    label="Descrição"
                    placeholder="Descreva o plantão, rotina da clínica, equipamentos disponíveis..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                />

                {/* Requirements */}
                <div className={styles.reqSection}>
                    <label className={styles.reqLabel}>Requisitos</label>
                    <div className={styles.reqGrid}>
                        {[
                            'CRMV ativo',
                            'Experiência com emergências',
                            'Mínimo 3 anos de experiência',
                            'Mínimo 5 anos de experiência',
                            'Experiência cirúrgica',
                        ].map(req => (
                            <label key={req} className={styles.reqOption}>
                                <input
                                    type="checkbox"
                                    checked={requirements.includes(req)}
                                    onChange={() => toggleRequirement(req)}
                                    className={styles.reqCheckbox}
                                />
                                <span>{req}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Accept proposals toggle */}
                <div className={styles.toggleRow}>
                    <div>
                        <div className={styles.toggleLabel}>Aceitar propostas de valor</div>
                        <div className={styles.toggleHint}>Veterinários podem sugerir um valor diferente</div>
                    </div>
                    <button
                        type="button"
                        className={`${styles.toggle} ${acceptProposals ? styles.toggleOn : ''}`}
                        onClick={() => setAcceptProposals(!acceptProposals)}
                    >
                        <span className={styles.toggleThumb} />
                    </button>
                </div>

                <Button type="submit" fullWidth size="lg">
                    Publicar Plantão
                </Button>
            </form>
        </div>
    );
}

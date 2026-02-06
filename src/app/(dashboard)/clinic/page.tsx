'use client';

import { Badge, Button } from '@/components/ui';
import { mockShifts, mockApplications } from '@/lib/mock-data';
import { formatCurrency, formatRelativeDate, formatTime } from '@/lib/utils';
import { SPECIALTY_LABELS } from '@/lib/types';
import Link from 'next/link';
import styles from './clinic.module.css';

export default function ClinicDashboard() {
    const activeShifts = mockShifts.filter(s => ['open', 'confirmed'].includes(s.status));
    const confirmedCount = mockShifts.filter(s => s.status === 'confirmed').length;
    const openCount = mockShifts.filter(s => s.status === 'open').length;
    const monthTotal = mockShifts.reduce((sum, s) => sum + s.value, 0);

    return (
        <div className={styles.page}>
            {/* Greeting */}
            <div className={styles.greeting}>
                <h1 className={styles.greetingName}>Olá, Dr. Ana 👋</h1>
                <p className={styles.greetingClinic}>Centervet Salvador</p>
            </div>

            {/* Stats Cards */}
            <div className={styles.statsGrid}>
                <div className={`glass-card-static ${styles.statCard}`}>
                    <span className={styles.statIcon}>📋</span>
                    <span className={styles.statValue}>{openCount}</span>
                    <span className={styles.statLabel}>Abertos</span>
                </div>
                <div className={`glass-card-static ${styles.statCard}`}>
                    <span className={styles.statIcon}>✅</span>
                    <span className={styles.statValue}>{confirmedCount}</span>
                    <span className={styles.statLabel}>Confirmados</span>
                </div>
                <div className={`glass-card-static ${styles.statCard}`}>
                    <span className={styles.statIcon}>💰</span>
                    <span className={styles.statValue}>{formatCurrency(monthTotal)}</span>
                    <span className={styles.statLabel}>Este mês</span>
                </div>
            </div>

            {/* Active Shifts */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Plantões Ativos</h2>
                <div className={styles.shiftList}>
                    {activeShifts.map((shift) => (
                        <div key={shift.id} className={`glass-card ${styles.shiftCard}`}>
                            <div className={styles.shiftHeader}>
                                <div>
                                    <div className={styles.shiftDate}>
                                        {formatRelativeDate(shift.date)}
                                    </div>
                                    <div className={styles.shiftTime}>
                                        {formatTime(shift.start_time)} — {formatTime(shift.end_time)} • {shift.duration_hours}h
                                    </div>
                                </div>
                                <Badge color={shift.specialty === 'emergencia' ? 'red' : 'green'}>
                                    {SPECIALTY_LABELS[shift.specialty]}
                                </Badge>
                            </div>
                            <div className={styles.shiftBody}>
                                <div className={styles.shiftValue}>{formatCurrency(shift.value)}</div>
                                {shift.status === 'confirmed' && shift.assigned_vet && (
                                    <div className={styles.shiftAssigned}>
                                        <span className={styles.assignedBadge}>✓ Confirmado</span>
                                        <span className={styles.assignedName}>{shift.assigned_vet.name}</span>
                                    </div>
                                )}
                                {shift.status === 'open' && (
                                    <div className={styles.shiftCandidates}>
                                        <Badge color={shift.applicant_count > 0 ? 'yellow' : 'neutral'}>
                                            {shift.applicant_count} candidato{shift.applicant_count !== 1 ? 's' : ''}
                                        </Badge>
                                        {shift.applicant_count > 0 && (
                                            <Button variant="ghost" size="sm">Ver Candidatos</Button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick Actions */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Ações Rápidas</h2>
                <div className={styles.quickActions}>
                    <Link href="/clinic/publish" className={`glass-card ${styles.actionCard} ${styles.actionPrimary}`}>
                        <span className={styles.actionIcon}>➕</span>
                        <span className={styles.actionLabel}>Publicar Plantão</span>
                    </Link>
                    <Link href="/clinic/history" className={`glass-card ${styles.actionCard}`}>
                        <span className={styles.actionIcon}>📊</span>
                        <span className={styles.actionLabel}>Histórico</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}

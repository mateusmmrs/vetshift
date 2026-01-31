'use client';

import { useState } from 'react';
import { Badge, Button } from '@/components/ui';
import { mockShifts } from '@/lib/mock-data';
import { formatCurrency, formatRelativeDate, formatTime } from '@/lib/utils';
import { SPECIALTY_LABELS, type ShiftSpecialty } from '@/lib/types';
import styles from './vet.module.css';

const FILTER_OPTIONS: { value: ShiftSpecialty | 'all'; label: string }[] = [
    { value: 'all', label: 'Todos' },
    { value: 'clinica_geral', label: 'Clínica Geral' },
    { value: 'cirurgia', label: 'Cirurgia' },
    { value: 'emergencia', label: 'Emergência' },
    { value: 'dermatologia', label: 'Dermatologia' },
    { value: 'ortopedia', label: 'Ortopedia' },
];

export default function VetFeedPage() {
    const [filter, setFilter] = useState<ShiftSpecialty | 'all'>('all');
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const openShifts = mockShifts
        .filter(s => s.status === 'open')
        .filter(s => filter === 'all' || s.specialty === filter);

    const getBadgeColor = (spec: ShiftSpecialty) => {
        switch (spec) {
            case 'emergencia': return 'red' as const;
            case 'cirurgia': return 'blue' as const;
            case 'dermatologia': return 'yellow' as const;
            default: return 'green' as const;
        }
    };

    return (
        <div className={styles.page}>
            {/* Header */}
            <div className={styles.feedHeader}>
                <h1 className={styles.feedTitle}>Plantões Disponíveis</h1>
                <div className={styles.location}>
                    📍 Salvador, BA • <span className={styles.radius}>15km</span>
                </div>
            </div>

            {/* Search */}
            <div className={styles.searchBar}>
                <span className={styles.searchIcon}>🔍</span>
                <input
                    type="text"
                    placeholder="Buscar clínica ou especialidade..."
                    className={styles.searchInput}
                />
            </div>

            {/* Filter Pills */}
            <div className={styles.filterRow}>
                {FILTER_OPTIONS.map(opt => (
                    <button
                        key={opt.value}
                        className={`${styles.filterPill} ${filter === opt.value ? styles.filterActive : ''}`}
                        onClick={() => setFilter(opt.value)}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>

            {/* Results count */}
            <p className={styles.resultsCount}>{openShifts.length} plantões encontrados</p>

            {/* Shift Cards */}
            <div className={styles.shiftList}>
                {openShifts.map((shift, index) => (
                    <div
                        key={shift.id}
                        className={`glass-card ${styles.shiftCard}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => setExpandedId(expandedId === shift.id ? null : shift.id)}
                    >
                        <div className={styles.cardTop}>
                            <div className={styles.clinicInfo}>
                                <div className={styles.clinicAvatar}>
                                    {shift.clinic?.name?.charAt(0) || 'C'}
                                </div>
                                <div>
                                    <div className={styles.clinicName}>{shift.clinic?.name}</div>
                                    <div className={styles.clinicRating}>
                                        ⭐ {shift.clinic?.rating} ({shift.clinic?.total_reviews})
                                    </div>
                                </div>
                            </div>
                            <Badge color={getBadgeColor(shift.specialty)}>
                                {SPECIALTY_LABELS[shift.specialty]}
                            </Badge>
                        </div>

                        <div className={styles.cardDetails}>
                            <div className={styles.detailRow}>
                                <span>📅</span>
                                <span>{formatRelativeDate(shift.date)} {formatTime(shift.start_time)} — {formatTime(shift.end_time)} ({shift.duration_hours}h)</span>
                            </div>
                            <div className={styles.detailRow}>
                                <span>📍</span>
                                <span>{shift.clinic?.address?.split(' - ')[1] || 'Salvador'} • 3.2km</span>
                            </div>
                        </div>

                        <div className={styles.cardBottom}>
                            <div className={styles.cardPrice}>{formatCurrency(shift.value)}</div>
                            <Button variant="primary" size="sm">
                                {expandedId === shift.id ? 'Candidatar-se' : 'Ver Detalhes'}
                            </Button>
                        </div>

                        {/* Expanded details */}
                        {expandedId === shift.id && (
                            <div className={styles.expandedSection}>
                                <div className={styles.expandedDivider} />
                                {shift.description && (
                                    <div className={styles.expandedBlock}>
                                        <h4>Descrição</h4>
                                        <p>{shift.description}</p>
                                    </div>
                                )}
                                {shift.requirements.length > 0 && (
                                    <div className={styles.expandedBlock}>
                                        <h4>Requisitos</h4>
                                        <ul>
                                            {shift.requirements.map((req, i) => (
                                                <li key={i}>✓ {req}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {shift.accept_proposals && (
                                    <p className={styles.proposalNote}>
                                        💡 Esta clínica aceita propostas de valor diferente
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

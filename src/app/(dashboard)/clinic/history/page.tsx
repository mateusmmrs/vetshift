'use client';

import { mockShifts } from '@/lib/mock-data';
import { formatCurrency, formatRelativeDate, formatDate, formatTime } from '@/lib/utils';
import { SPECIALTY_LABELS } from '@/lib/types';
import { Badge } from '@/components/ui';
import styles from '../clinic.module.css';
import histStyles from './history.module.css';

export default function ClinicHistoryPage() {
    const completedShifts = mockShifts;

    return (
        <div className={histStyles.page}>
            <h1 className={histStyles.title}>Histórico de Plantões</h1>
            <p className={histStyles.subtitle}>{completedShifts.length} plantões no total</p>

            <div className={styles.shiftList}>
                {completedShifts.map((shift) => (
                    <div key={shift.id} className={`glass-card-static ${styles.shiftCard}`}>
                        <div className={styles.shiftHeader}>
                            <div>
                                <div className={styles.shiftDate}>{formatDate(shift.date)}</div>
                                <div className={styles.shiftTime}>
                                    {formatTime(shift.start_time)} — {formatTime(shift.end_time)} • {shift.duration_hours}h
                                </div>
                            </div>
                            <Badge color={shift.status === 'completed' ? 'green' : shift.status === 'confirmed' ? 'blue' : 'neutral'}>
                                {shift.status === 'completed' ? 'Concluído' : shift.status === 'confirmed' ? 'Confirmado' : shift.status === 'open' ? 'Aberto' : shift.status}
                            </Badge>
                        </div>
                        <div className={styles.shiftBody}>
                            <Badge color="neutral">{SPECIALTY_LABELS[shift.specialty]}</Badge>
                            <div className={styles.shiftValue}>{formatCurrency(shift.value)}</div>
                            {shift.assigned_vet && (
                                <div className={styles.shiftAssigned}>
                                    <span className={styles.assignedName}>🩺 {shift.assigned_vet.name}</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

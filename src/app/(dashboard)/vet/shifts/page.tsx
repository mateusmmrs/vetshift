'use client';

import { Badge } from '@/components/ui';
import { mockShifts } from '@/lib/mock-data';
import { formatCurrency, formatRelativeDate, formatTime } from '@/lib/utils';
import { SPECIALTY_LABELS } from '@/lib/types';
import styles from './shifts.module.css';

export default function VetShiftsPage() {
    const myShifts = mockShifts.filter(s => s.assigned_vet_id === 'vet-1' || s.status === 'open');

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Meus Plantões</h1>

            <div className={styles.tabs}>
                <button className={`${styles.tab} ${styles.tabActive}`}>Próximos</button>
                <button className={styles.tab}>Concluídos</button>
                <button className={styles.tab}>Cancelados</button>
            </div>

            <div className={styles.shiftList}>
                {myShifts.map(shift => (
                    <div key={shift.id} className={`glass-card-static ${styles.shiftCard}`}>
                        <div className={styles.cardHeader}>
                            <div>
                                <div className={styles.shiftDate}>{formatRelativeDate(shift.date)}</div>
                                <div className={styles.shiftTime}>
                                    {formatTime(shift.start_time)} — {formatTime(shift.end_time)} • {shift.duration_hours}h
                                </div>
                            </div>
                            <Badge color={
                                shift.status === 'confirmed' ? 'green' :
                                    shift.status === 'open' ? 'yellow' : 'neutral'
                            }>
                                {shift.status === 'confirmed' ? 'Confirmado' :
                                    shift.status === 'open' ? 'Aguardando' : shift.status}
                            </Badge>
                        </div>
                        <div className={styles.cardBody}>
                            <span className={styles.clinicName}>🏥 {shift.clinic?.name}</span>
                            <Badge color="neutral">{SPECIALTY_LABELS[shift.specialty]}</Badge>
                        </div>
                        <div className={styles.cardFooter}>
                            <span className={styles.value}>{formatCurrency(shift.value)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

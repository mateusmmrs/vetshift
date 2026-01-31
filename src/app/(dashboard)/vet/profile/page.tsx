'use client';

import { Badge, Button } from '@/components/ui';
import { mockVets, mockReviews } from '@/lib/mock-data';
import { SPECIALTY_LABELS } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import styles from './profile.module.css';

export default function VetProfilePage() {
    const vet = mockVets[0]; // Dr. Lucas Martins
    const reviews = mockReviews;

    return (
        <div className={styles.page}>
            {/* Profile Header */}
            <div className={styles.profileHeader}>
                <div className={styles.avatarWrapper}>
                    <div className={styles.avatar}>
                        {vet.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <span className={styles.availableDot} />
                </div>
                <h1 className={styles.name}>{vet.name}</h1>
                <div className={styles.crmv}>
                    <Badge color="green">CRMV-{vet.crmv_state} {vet.crmv} ✓ Verificado</Badge>
                </div>
                <div className={styles.rating}>
                    ⭐ {vet.rating} ({vet.total_reviews} avaliações)
                </div>
                <div className={styles.availability}>
                    <span className={styles.availIndicator} />
                    Disponível Agora
                </div>
                <div className={styles.locationText}>
                    📍 {vet.city}, {vet.state} • Raio de {vet.radius_km}km
                </div>
            </div>

            {/* Stats */}
            <div className={styles.statsRow}>
                <div className={styles.statItem}>
                    <div className={styles.statNum}>{vet.total_shifts}</div>
                    <div className={styles.statLbl}>Plantões</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statNum}>{vet.rating}</div>
                    <div className={styles.statLbl}>Rating</div>
                </div>
                <div className={styles.statItem}>
                    <div className={styles.statNum}>{vet.completion_rate}%</div>
                    <div className={styles.statLbl}>Conclusão</div>
                </div>
            </div>

            {/* Specialties */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Especialidades</h2>
                <div className={styles.specList}>
                    {vet.specialties.map((spec) => (
                        <Badge key={spec} color="neutral">
                            {SPECIALTY_LABELS[spec]}
                        </Badge>
                    ))}
                </div>
            </section>

            {/* About */}
            {vet.bio && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Sobre</h2>
                    <p className={styles.bio}>{vet.bio}</p>
                </section>
            )}

            {/* Reviews */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Avaliações Recentes</h2>
                <div className={styles.reviewList}>
                    {reviews.map(review => (
                        <div key={review.id} className={`glass-card-static ${styles.reviewCard}`}>
                            <div className={styles.reviewHeader}>
                                <span className={styles.reviewerName}>{review.reviewer_name}</span>
                                <span className={styles.reviewDate}>{formatDate(review.created_at)}</span>
                            </div>
                            <div className={styles.reviewStars}>
                                {'⭐'.repeat(review.rating)}
                            </div>
                            {review.comment && (
                                <p className={styles.reviewComment}>{review.comment}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Edit Profile Button */}
            <Button variant="secondary" fullWidth>
                ✏️ Editar Perfil
            </Button>
        </div>
    );
}

// ===========================
// VetShift — Type Definitions
// ===========================

export type UserRole = 'clinic' | 'vet';

export type ShiftStatus = 'open' | 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';

export type ShiftSpecialty =
    | 'clinica_geral'
    | 'cirurgia'
    | 'emergencia'
    | 'dermatologia'
    | 'ortopedia'
    | 'cardiologia'
    | 'exoticos'
    | 'oftalmologia'
    | 'oncologia'
    | 'neurologia';

export const SPECIALTY_LABELS: Record<ShiftSpecialty, string> = {
    clinica_geral: 'Clínica Geral',
    cirurgia: 'Cirurgia',
    emergencia: 'Emergência',
    dermatologia: 'Dermatologia',
    ortopedia: 'Ortopedia',
    cardiologia: 'Cardiologia',
    exoticos: 'Exóticos',
    oftalmologia: 'Oftalmologia',
    oncologia: 'Oncologia',
    neurologia: 'Neurologia',
};

export type TransactionType = 'credit' | 'debit' | 'withdrawal';

// === User & Auth ===
export interface UserProfile {
    id: string;
    email: string;
    role: UserRole;
    name: string;
    avatar_url: string | null;
    phone: string | null;
    created_at: string;
}

// === Clinic ===
export interface Clinic {
    id: string;
    user_id: string;
    name: string;
    cnpj: string | null;
    logo_url: string | null;
    address: string;
    city: string;
    state: string;
    latitude: number | null;
    longitude: number | null;
    phone: string;
    is_24h: boolean;
    rating: number;
    total_reviews: number;
    total_shifts: number;
    created_at: string;
}

// === Veterinarian ===
export interface Veterinarian {
    id: string;
    user_id: string;
    name: string;
    crmv: string;
    crmv_state: string;
    crmv_verified: boolean;
    crmv_document_url: string | null;
    avatar_url: string | null;
    specialties: ShiftSpecialty[];
    bio: string | null;
    city: string;
    state: string;
    latitude: number | null;
    longitude: number | null;
    radius_km: number;
    is_available: boolean;
    rating: number;
    total_reviews: number;
    total_shifts: number;
    completion_rate: number;
    created_at: string;
}

// === Shift ===
export interface Shift {
    id: string;
    clinic_id: string;
    clinic?: Clinic;
    specialty: ShiftSpecialty;
    date: string;
    start_time: string;
    end_time: string;
    duration_hours: number;
    value: number;
    description: string | null;
    requirements: string[];
    accept_proposals: boolean;
    status: ShiftStatus;
    assigned_vet_id: string | null;
    assigned_vet?: Veterinarian;
    applicant_count: number;
    created_at: string;
}

// === Shift Application ===
export interface ShiftApplication {
    id: string;
    shift_id: string;
    vet_id: string;
    vet?: Veterinarian;
    proposed_value: number | null;
    message: string | null;
    status: 'pending' | 'accepted' | 'rejected';
    created_at: string;
}

// === Review ===
export interface Review {
    id: string;
    shift_id: string;
    reviewer_id: string;
    reviewer_name: string;
    reviewer_role: UserRole;
    target_id: string;
    rating: number;
    comment: string | null;
    created_at: string;
}

// === Wallet / Transactions ===
export interface WalletTransaction {
    id: string;
    user_id: string;
    type: TransactionType;
    amount: number;
    description: string;
    reference_id: string | null;
    status: 'pending' | 'completed' | 'failed';
    created_at: string;
}

export interface WalletBalance {
    available: number;
    pending: number;
}

// === UI State ===
export interface FilterState {
    specialty: ShiftSpecialty | 'all';
    city: string;
    radius_km: number;
    min_value: number | null;
    max_value: number | null;
    date: string | null;
}

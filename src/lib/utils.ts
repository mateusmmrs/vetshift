// ===========================
// VetShift — Utility Functions
// ===========================

/**
 * Format a number as BRL currency
 */
export function formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}

/**
 * Format a date string to Brazilian format
 */
export function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).format(date);
}

/**
 * Format a date as relative ("Hoje", "Amanhã", or date)
 */
export function formatRelativeDate(dateStr: string): string {
    const date = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) return 'Hoje';
    if (date.toDateString() === tomorrow.toDateString()) return 'Amanhã';
    return formatDate(dateStr);
}

/**
 * Format time (HH:mm)
 */
export function formatTime(time: string): string {
    return time.slice(0, 5);
}

/**
 * Calculate duration between two times in hours
 */
export function calculateDuration(startTime: string, endTime: string): number {
    const [startH, startM] = startTime.split(':').map(Number);
    const [endH, endM] = endTime.split(':').map(Number);
    let diffMinutes = (endH * 60 + endM) - (startH * 60 + startM);
    if (diffMinutes <= 0) diffMinutes += 24 * 60; // crosses midnight
    return Math.round(diffMinutes / 60 * 10) / 10;
}

/**
 * Generate initials from a name
 */
export function getInitials(name: string): string {
    return name
        .split(' ')
        .map(word => word[0])
        .filter(Boolean)
        .slice(0, 2)
        .join('')
        .toUpperCase();
}

/**
 * Join class names, filtering out falsy values
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}

/**
 * Calculate distance between two coordinates (Haversine formula)
 */
export function calculateDistance(
    lat1: number, lon1: number,
    lat2: number, lon2: number
): number {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c * 10) / 10;
}

/**
 * Generate star rating display
 */
export function renderStars(rating: number): string {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}

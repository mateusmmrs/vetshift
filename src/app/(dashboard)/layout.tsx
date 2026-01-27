'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './layout.module.css';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isClinic = pathname.startsWith('/clinic');
    const isVet = pathname.startsWith('/vet');

    const clinicNav = [
        { href: '/clinic', icon: '🏠', label: 'Home', exact: true },
        { href: '/clinic/publish', icon: '➕', label: 'Publicar' },
        { href: '/wallet', icon: '💰', label: 'Carteira' },
        { href: '/clinic/history', icon: '📋', label: 'Histórico' },
    ];

    const vetNav = [
        { href: '/vet', icon: '🏠', label: 'Home', exact: true },
        { href: '/vet/shifts', icon: '📋', label: 'Meus Plantões' },
        { href: '/wallet', icon: '💰', label: 'Carteira' },
        { href: '/vet/profile', icon: '👤', label: 'Perfil' },
    ];

    const navItems = isClinic ? clinicNav : vetNav;

    const isActive = (href: string, exact?: boolean) => {
        if (exact) return pathname === href;
        return pathname.startsWith(href);
    };

    return (
        <div className={styles.dashLayout}>
            {/* Header */}
            <header className={styles.dashHeader}>
                <Link href="/" className={styles.dashLogo}>
                    🐾 Vet<span className={styles.dashLogoAccent}>Shift</span>
                </Link>
                <div className={styles.dashActions}>
                    <button className={styles.notifBtn}>
                        🔔
                        <span className={styles.notifDot} />
                    </button>
                </div>
            </header>

            {/* Content */}
            <main className={styles.dashContent}>
                {children}
            </main>

            {/* Bottom Navigation */}
            <nav className={styles.bottomNav}>
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`${styles.navItem} ${isActive(item.href, item.exact) ? styles.navItemActive : ''}`}
                    >
                        <span className={styles.navIcon}>{item.icon}</span>
                        <span className={styles.navLabel}>{item.label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
}

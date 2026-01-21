import styles from './Badge.module.css';
import { cn } from '@/lib/utils';

interface BadgeProps {
    color?: 'green' | 'blue' | 'red' | 'yellow' | 'neutral';
    children: React.ReactNode;
    className?: string;
}

export function Badge({ color = 'green', children, className }: BadgeProps) {
    return (
        <span className={cn(styles.badge, styles[color], className)}>
            {children}
        </span>
    );
}

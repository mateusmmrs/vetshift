import styles from './Button.module.css';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    children: React.ReactNode;
}

export function Button({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                styles.button,
                styles[variant],
                styles[size],
                fullWidth && styles.fullWidth,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}

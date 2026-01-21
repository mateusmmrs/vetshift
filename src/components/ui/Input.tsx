import styles from './Input.module.css';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    hint?: string;
}

export function Input({ label, error, hint, className, id, ...props }: InputProps) {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    return (
        <div className={styles.inputGroup}>
            {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
            <input
                id={inputId}
                className={cn(styles.input, error && styles.error, className)}
                {...props}
            />
            {error && <span className={styles.errorText}>{error}</span>}
            {hint && !error && <span className={styles.hint}>{hint}</span>}
        </div>
    );
}

// Textarea
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export function Textarea({ label, error, className, id, ...props }: TextareaProps) {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');
    return (
        <div className={styles.inputGroup}>
            {label && <label htmlFor={textareaId} className={styles.label}>{label}</label>}
            <textarea
                id={textareaId}
                className={cn(styles.input, styles.textarea, error && styles.error, className)}
                {...props}
            />
            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    );
}

// Select
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: { value: string; label: string }[];
}

export function Select({ label, error, options, className, id, ...props }: SelectProps) {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');
    return (
        <div className={styles.inputGroup}>
            {label && <label htmlFor={selectId} className={styles.label}>{label}</label>}
            <select
                id={selectId}
                className={cn(styles.input, styles.select, error && styles.error, className)}
                {...props}
            >
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    );
}

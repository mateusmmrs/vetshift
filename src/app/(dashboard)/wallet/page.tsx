'use client';

import { Button } from '@/components/ui';
import { mockTransactions, mockWalletBalance } from '@/lib/mock-data';
import { formatCurrency, formatDate } from '@/lib/utils';
import styles from './wallet.module.css';

export default function WalletPage() {
    const balance = mockWalletBalance;
    const transactions = mockTransactions;

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Carteira</h1>

            {/* Balance Card */}
            <div className={styles.balanceCard}>
                <div className={styles.balanceLabel}>Saldo Disponível</div>
                <div className={styles.balanceAmount}>{formatCurrency(balance.available)}</div>
                <div className={styles.balancePending}>
                    Pendente: {formatCurrency(balance.pending)}
                </div>
                <div className={styles.balanceActions}>
                    <Button variant="secondary" size="sm">Sacar</Button>
                    <Button variant="primary" size="sm">Adicionar</Button>
                </div>
            </div>

            {/* Transactions */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Extrato Recente</h2>
                <div className={styles.txList}>
                    {transactions.map(tx => (
                        <div key={tx.id} className={styles.txItem}>
                            <div className={styles.txIcon}>
                                {tx.type === 'credit' ? '↑' : tx.type === 'withdrawal' ? '↓' : '→'}
                            </div>
                            <div className={styles.txInfo}>
                                <div className={styles.txDesc}>{tx.description}</div>
                                <div className={styles.txDate}>{formatDate(tx.created_at)}</div>
                            </div>
                            <div className={`${styles.txAmount} ${tx.type === 'credit' ? styles.txCredit : styles.txDebit}`}>
                                {tx.type === 'credit' ? '+' : '-'}{formatCurrency(tx.amount)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Withdrawal Method */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Método de Saque</h2>
                <div className={`glass-card-static ${styles.methodCard}`}>
                    <div className={styles.methodInfo}>
                        <div className={styles.methodBank}>🏦 Banco do Brasil • ****1234</div>
                        <div className={styles.methodPix}>Pix: CPF •••.•••.123-45</div>
                    </div>
                    <button className={styles.methodEdit}>✏️</button>
                </div>
            </section>
        </div>
    );
}

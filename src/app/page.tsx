import styles from './page.module.css';
import { Button } from '@/components/ui';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main>
      {/* === Navbar === */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🐾</span>
          <span>Vet<span className={styles.logoAccent}>Shift</span></span>
        </div>
        <div className={styles.navLinks}>
          <a href="#como-funciona" className={styles.navLink}>Como Funciona</a>
          <a href="#clinicas" className={styles.navLink}>Para Clínicas</a>
          <a href="#veterinarios" className={styles.navLink}>Para Veterinários</a>
          <Link href="/login">
            <Button variant="primary" size="sm">Começar Agora</Button>
          </Link>
        </div>
      </nav>

      {/* === Hero === */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroGlow} />
          <span className={styles.heroTag}>
            🚀 Novo em Salvador
          </span>
          <h1 className={styles.heroTitle}>
            Encontre veterinários{' '}
            <span className={styles.heroTitleAccent}>plantonistas em minutos</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Conectamos clínicas veterinárias a profissionais qualificados
            disponíveis na sua região. Publique seu plantão e tenha um
            veterinário confirmado rapidamente.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/signup?role=clinic">
              <Button variant="primary" size="lg">🏥 Sou Clínica</Button>
            </Link>
            <Link href="/signup?role=vet">
              <Button variant="secondary" size="lg">🩺 Sou Veterinário</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* === Stats === */}
      <section className={styles.statsBar}>
        <div className={styles.stat}>
          <div className={styles.statValue}>150+</div>
          <div className={styles.statLabel}>Veterinários</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>40+</div>
          <div className={styles.statLabel}>Clínicas</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>500+</div>
          <div className={styles.statLabel}>Plantões</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>4.9</div>
          <div className={styles.statLabel}>Avaliação</div>
        </div>
      </section>

      {/* === Features === */}
      <section className={styles.features} id="clinicas">
        <h2 className={styles.sectionTitle}>Por que VetShift?</h2>
        <p className={styles.sectionSubtitle}>
          Tudo que você precisa para gerenciar plantões veterinários em um só lugar.
        </p>
        <div className={styles.featureGrid}>
          <div className={`glass-card ${styles.featureCard}`}>
            <div className={styles.featureIcon}>📍</div>
            <h3 className={styles.featureTitle}>Localização em Tempo Real</h3>
            <p className={styles.featureDesc}>
              Encontre veterinários disponíveis perto da sua clínica com busca por raio de distância.
            </p>
          </div>
          <div className={`glass-card ${styles.featureCard}`}>
            <div className={styles.featureIcon}>💰</div>
            <h3 className={styles.featureTitle}>Pagamento Seguro</h3>
            <p className={styles.featureDesc}>
              Pagamentos via Pix, cartão ou boleto com carteira digital integrada. Sem surpresas.
            </p>
          </div>
          <div className={`glass-card ${styles.featureCard}`}>
            <div className={styles.featureIcon}>⭐</div>
            <h3 className={styles.featureTitle}>Avaliações Verificadas</h3>
            <p className={styles.featureDesc}>
              Sistema de avaliação bilateral. Clínicas avaliam vets e vets avaliam clínicas.
            </p>
          </div>
          <div className={`glass-card ${styles.featureCard}`}>
            <div className={styles.featureIcon}>🔒</div>
            <h3 className={styles.featureTitle}>CRMV Verificado</h3>
            <p className={styles.featureDesc}>
              Todos os veterinários passam por verificação de registro profissional ativo.
            </p>
          </div>
          <div className={`glass-card ${styles.featureCard}`}>
            <div className={styles.featureIcon}>⚡</div>
            <h3 className={styles.featureTitle}>Match Instantâneo</h3>
            <p className={styles.featureDesc}>
              Publique seu plantão e receba candidaturas em minutos. Aceite o melhor profissional.
            </p>
          </div>
          <div className={`glass-card ${styles.featureCard}`}>
            <div className={styles.featureIcon}>📊</div>
            <h3 className={styles.featureTitle}>Dashboard Completo</h3>
            <p className={styles.featureDesc}>
              Acompanhe plantões, pagamentos, histórico e avaliações em um painel intuitivo.
            </p>
          </div>
        </div>
      </section>

      {/* === How it Works === */}
      <section className={styles.howItWorks} id="como-funciona">
        <h2 className={styles.sectionTitle}>Como Funciona</h2>
        <p className={styles.sectionSubtitle}>
          Simples para clínicas, simples para veterinários.
        </p>
        <div className={styles.stepsGrid}>
          <div className={styles.stepsColumn}>
            <h3 className={styles.stepsColumnTitle}>
              🏥 Para Clínicas
            </h3>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>Publique seu plantão</div>
                <div className={styles.stepDesc}>
                  Defina data, horário, especialidade e valor. Leva menos de 1 minuto.
                </div>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>Receba candidaturas</div>
                <div className={styles.stepDesc}>
                  Veterinários qualificados da sua região se candidatam ao plantão.
                </div>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>Confirme e pague</div>
                <div className={styles.stepDesc}>
                  Escolha o melhor candidato. Pagamento seguro via plataforma após o plantão.
                </div>
              </div>
            </div>
          </div>

          <div className={styles.stepsColumn} id="veterinarios">
            <h3 className={styles.stepsColumnTitle}>
              🩺 Para Veterinários
            </h3>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>Crie seu perfil</div>
                <div className={styles.stepDesc}>
                  Cadastre suas especialidades, CRMV e área de atuação.
                </div>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>Explore plantões</div>
                <div className={styles.stepDesc}>
                  Veja plantões disponíveis filtrados por localização, especialidade e valor.
                </div>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>Trabalhe e receba</div>
                <div className={styles.stepDesc}>
                  Aceite plantões, trabalhe com segurança e receba na sua carteira digital.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>
            Pronto para começar?
          </h2>
          <p className={styles.ctaDesc}>
            Cadastre-se gratuitamente e comece a usar o VetShift hoje.
            Sem mensalidades, sem compromisso.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/signup?role=clinic">
              <Button variant="primary" size="lg">Cadastrar Clínica</Button>
            </Link>
            <Link href="/signup?role=vet">
              <Button variant="secondary" size="lg">Cadastrar como Vet</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* === Footer === */}
      <footer className={styles.footer}>
        <p>
          © 2026 <span className={styles.footerBrand}>VetShift</span> — Uma solução{' '}
          <span className={styles.footerBrand}>Codexor</span>. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}

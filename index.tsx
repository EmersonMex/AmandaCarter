import React from 'react';
import ReactDOM from 'react-dom/client';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

// --- Configuração de Cores e Estilos Globais ---
const colors = {
  white: '#ffffff',
  primary: '#d4af37', // Tom dourado elegante
  primaryHover: '#b5952f',
  text: '#333333',
  background: '#f9f9f9',
  secondary: '#2c3e50'
};

const styles = {
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: colors.primary,
    color: colors.white,
    padding: '12px 24px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease',
    marginTop: '20px'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  }
};

// Link novo para todos os botões
const QUIZ_LINK = "https://quiz-amanda.vercel.app/";

// --- Componentes ---

const Header = () => (
  <header style={{
    padding: '1rem 0',
    backgroundColor: colors.white,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  }}>
    <nav style={{ ...styles.container, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img 
          src="/logo.jpg" 
          alt="Amanda Carter Logo" 
          style={{ height: '50px', width: 'auto', display: 'block' }} 
        />
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: "'Playfair Display', serif", color: colors.text }}>
          Amanda Carter
        </div>
      </div>
      {/* Botão 1: Quero saber mais */}
      <a href={QUIZ_LINK} 
         target="_blank" 
         rel="noopener noreferrer" 
         style={{
           ...styles.btn,
           marginTop: 0, 
           fontSize: '0.9rem', 
           padding: '10px 20px'
         }}>
         Quero saber mais
      </a>
    </nav>
  </header>
);

const Hero = () => (
  <section style={{ 
    backgroundColor: colors.background, 
    padding: '4rem 0', 
    textAlign: 'center',
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }}>
    <div style={styles.container}>
      <h1 style={{ 
        fontFamily: "'Playfair Display', serif", 
        fontSize: '3rem', 
        marginBottom: '1rem', 
        color: colors.secondary 
      }}>
        Metodologia Híbrida Exclusiva
      </h1>
      <p style={{ 
        fontFamily: "'Montserrat', sans-serif", 
        fontSize: '1.2rem', 
        color: '#555', 
        maxWidth: '800px', 
        margin: '0 auto 2rem auto',
        lineHeight: '1.6'
      }}>
        Descubra o caminho para transformar seus resultados e alcançar o próximo nível profissional com estratégias validadas.
      </p>
      
      {/* Botão 2: Aumentar meu faturamento */}
      <a href={QUIZ_LINK}
         target="_blank"
         rel="noopener noreferrer"
         style={styles.btn}>
         Aumentar meu faturamento
         <ArrowRight size={20} />
      </a>
    </div>
  </section>
);

const Features = () => (
  <section style={{ padding: '4rem 0', backgroundColor: colors.white }}>
    <div style={styles.container}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginBottom: '1.5rem' }}>
            Por que escolher nossa metodologia?
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              "Estratégias personalizadas para o seu negócio",
              "Acompanhamento focado em resultados",
              "Ferramentas práticas de aplicação imediata",
              "Suporte contínuo durante o processo"
            ].map((item, index) => (
              <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                <CheckCircle size={20} color={colors.primary} />
                {item}
              </li>
            ))}
          </ul>
          
          {/* Botão 3: Descubra como */}
          <div style={{ marginTop: '2rem' }}>
            <a href={QUIZ_LINK}
               target="_blank"
               rel="noopener noreferrer"
               style={{ ...styles.btn, backgroundColor: colors.secondary }}>
               Descubra como
               <Star size={18} />
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Placeholder para uma imagem ilustrativa se tiveres uma, senão fica um box elegante */}
            <div style={{ 
                width: '100%', 
                height: '300px', 
                backgroundColor: '#eee', 
                borderRadius: '10px',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#aaa'
            }}>
                <span style={{textAlign: 'center'}}>Imagem Ilustrativa<br/>(Adicione em public e refira aqui)</span>
            </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ backgroundColor: colors.secondary, color: colors.white, padding: '2rem 0', textAlign: 'center' }}>
    <div style={styles.container}>
      <p>&copy; {newXZate().getFullYear()} Amanda Carter. Todos os direitos reservados.</p>
    </div>
  </footer>
);

// --- Componente Principal ---
const App = () => {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

// --- Renderização ---
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
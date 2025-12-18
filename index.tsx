import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const colors = {
  gray: '#333333',
  nude: '#F5EBE0',
  gold: '#b8860b',
  white: '#FFFFFF',
  black: '#000000',
  brown: '#5C4033'
};

const logoBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAEOAQoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1VWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP0BooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z";

const GlobalStyles = () => (
  <style>{`
    :root {
      --gray: ${colors.gray};
      --nude: ${colors.nude};
      --gold: ${colors.gold};
      --white: ${colors.white};
      --black: ${colors.black};
      --brown: ${colors.brown};
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html, body {
      font-family: 'Montserrat', sans-serif;
      background-color: var(--white);
      color: var(--gray);
      line-height: 1.6;
      scroll-behavior: smooth;
    }

    h1, h2, h3 {
      font-family: 'Playfair Display', serif;
      color: var(--black);
      margin-bottom: 1rem;
    }

    h1 { font-size: 2.8rem; }
    h2 { font-size: 2rem; }
    
    section {
      padding: 4rem 2rem;
      text-align: center;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
    }

    .btn {
      display: inline-block;
      padding: 1rem 2.5rem;
      background-color: var(--gold);
      color: var(--white);
      text-decoration: none;
      font-weight: 700;
      border-radius: 5px;
      transition: background-color 0.3s ease;
      margin-top: 1.5rem;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }

    .btn:hover {
      background-color: #A37A0A;
    }
    
    .solution-icon {
      height: 60px;
      width: 60px;
      margin-bottom: 1rem;
      color: var(--gold);
    }
    
    .chart-container {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 3rem;
        flex-wrap: wrap;
    }

    .chart {
        background: var(--white);
        padding: 2rem;
        border-radius: 12px;
        width: 100%;
        max-width: 350px;
        flex-grow: 1;
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        border: 1px solid var(--nude);
    }
    
    .chart h3 {
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }

    .chart-area {
      height: 200px;
      position: relative;
      display: flex;
      justify-content: space-around;
      border-left: 2px solid var(--nude);
      border-bottom: 2px solid var(--nude);
    }

    .chart-grid {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .chart-grid-line {
        width: 100%;
        height: 1px;
        background-color: var(--nude);
    }
    
    /* Remove bottom-most grid line since chart-area has a border-bottom */
    .chart-grid-line:last-child {
        background-color: transparent;
    }

    .bar-group {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 45%;
        position: relative;
        z-index: 2;
    }

    .bar {
        width: 60%;
        max-width: 50px;
        background-image: linear-gradient(to top, #b8860b, #daa520);
        animation: grow 1.5s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
        transform-origin: bottom;
        position: relative;
        border-radius: 6px 6px 0 0;
    }

    .bar-value {
        position: absolute;
        top: -28px;
        left: 50%;
        transform: translateX(-50%);
        font-weight: 700;
        color: var(--brown);
        opacity: 0;
        animation: fadeIn 0.5s 1.5s ease-out forwards;
        font-size: 1.1rem;
    }

    .axis-label {
        margin-top: 0.75rem;
        font-weight: 600;
        font-size: 0.9rem;
        color: var(--gray);
    }
    
    @keyframes grow {
        from {
            transform: scaleY(0);
        }
        to {
            transform: scaleY(1);
        }
    }
    
    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
      h1 { font-size: 2.2rem; }
      h2 { font-size: 1.8rem; }
      section { padding: 3rem 1rem; }
      .chart-container {
          flex-direction: column;
          align-items: center;
      }
    }
  `}</style>
);

const Header = () => (
  <header style={{
    padding: '1rem 2rem',
    backgroundColor: colors.white,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  }}>
    <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src={logoBase64} alt="Amanda Carter Logo" style={{ height: '40px' }} />
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: "'Playfair Display', serif" }}>Amanda Carter</div>
      </div>
      <a href="https://wa.me/5511988465800?text=Ola%20Amanda.%20Quero%20vender%20mais%20me%20ajuda%20" target="_blank" rel="noopener noreferrer" className="btn" style={{marginTop: 0}}>Quero saber mais</a>
    </nav>
  </header>
);

const Hero = () => (
  <section id="home" style={{ backgroundColor: colors.brown, color: colors.white, minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="container">
      <h1 style={{color: colors.white}}>Post bonito não traz boleto pago. Estratégia sim. 👍</h1>
      <p style={{maxWidth: '700px', margin: '0 auto 1.5rem auto', color: colors.nude, fontSize: '1.2rem'}}>
          Me contratando, você não precisa se preocupar com nada em relação ao online. Temos vendedores qualificados que entendem do nosso sistema, de estratégia e marketing, e são devoradores de meta. Vamos unir seus anjos chamados vendedores e aumentar o faturamento da sua empresa com qualidade.
      </p>
      <a href="https://wa.me/5511988465800?text=Ola%20Amanda.%20Quero%20vender%20mais%20me%20ajuda%20" target="_blank" rel="noopener noreferrer" className="btn">Aumentar meu faturamento agora</a>
    </div>
  </section>
);

const Problem = () => (
  <section>
    <div className="container">
      <h2>Chega de preocupações desnecessárias.</h2>
      <p style={{maxWidth: '800px', margin: '0 auto 2rem auto'}}>
        Não se preocupe com vendedores na loja física tendo que responder o WhatsApp, sem saber de fato gerar um CRM ou receber um lead qualificado para a compra. Se preocupe em treinar sua equipe para o chão de loja para clientes de alto nível qualificados e fidelizados à sua marca. Nós cuidamos do conteúdo que gera autoridade, mas o principal: <strong>que gera dinheiro.</strong>
      </p>
    </div>
  </section>
);

const Solution = () => (
    <section style={{ backgroundColor: colors.nude }}>
        <div className="container">
            <h2>Uma equipe completa, sem o custo de uma agência.</h2>
            <p style={{maxWidth: '800px', margin: '0 auto 2.5rem auto'}}>
                Você recebe gestor de tráfego, social media e estrategista de vendas. E o mais legal: não paga por uma agência. Por que? Porque tudo isso é um marketing estratégico personalizado para o seu nicho.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ background: colors.white, padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', flex: 1, minWidth: '280px', maxWidth: '320px' }}>
                    <svg className="solution-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg>
                    <h3>Gestor de Tráfego</h3>
                    <p>Atraindo clientes qualificados que estão prontos para comprar.</p>
                </div>
                <div style={{ background: colors.white, padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', flex: 1, minWidth: '280px', maxWidth: '320px' }}>
                    <svg className="solution-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.17 48.17 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>
                    <h3>Social Media</h3>
                    <p>Construindo autoridade e um relacionamento sólido com seu público.</p>
                </div>
                <div style={{ background: colors.white, padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', flex: 1, minWidth: '280px', maxWidth: '320px' }}>
                   <svg className="solution-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>
                    <h3>Estrategista de Vendas</h3>
                    <p>Unindo o digital e o físico para maximizar cada oportunidade.</p>
                </div>
            </div>
        </div>
    </section>
);

const About = () => (
    <section style={{
        position: 'relative',
        backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: colors.white,
    }}>
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(40, 40, 40, 0.7)',
            zIndex: 1,
        }}></div>
        <div className="container" style={{
            textAlign: 'left', 
            maxWidth: '800px',
            position: 'relative',
            zIndex: 2,
        }}>
            <h2 style={{color: colors.white}}>Uma metodologia nascida da experiência real.</h2>
            <p>Eu, Amanda Carter, desenvolvi uma metodologia única integrando o digital e o físico tentando entender o que se passava na cabeça do cliente de ambos os lados. A palavra 'meta' já não era mais desejo, se tornou meu maior pesadelo. Eu passava horas como vendedora abrindo e fechando sistema, fazendo conta de quanto faltava pra bater a tal da meta. Reclamava do fluxo da loja e que só tinha o cliente que estava "dando uma olhadinha".</p>
            <p style={{marginTop: '1rem'}}>Foi onde resolvi estudar marketing digital e, por gostar muito de redes sociais, me identifiquei com a criação de conteúdo. Atuando na área, percebi que a culpa era sempre do marketing e nunca do time de vendas. E toda essa competição me deixou confusa.</p>
            <p style={{marginTop: '1rem'}}>Imaginando que eu era a vitrine da loja, comecei a perceber que com o movimento feito no Instagram e no site, toda cliente que entrava dizia que tinha visto por lá. Isso gerou competição, e não união, entre o vendedor físico e o digital.</p>
            <p style={{marginTop: '1rem'}}>Então eu criei uma estratégia onde eu fazia meta para vendedor de loja e vendedor online e o mapeamento de tudo isso. Após 3 meses de nova metodologia, atingi 40% de lucro na meta, sendo somente digital. A loja, que não batia meta há mais de 6 meses, atingiu a meta diamante.</p>
            <p style={{marginTop: '1rem'}}>O método estava sendo validado bem diante dos meus olhos. Eu entendi que não era esforço, mas sim a linguagem do consumidor. Eu dei a ele o que ele queria: processo, agilidade, rapidez e eficiência.</p>
            <p style={{marginTop: '1rem'}}>Com o método validado, me dei a chance de mostrar pro mundo do comércio varejista que não existe competição entre online e físico e que todos estamos com um único propósito: bater a tal da meta. Dinheiro no bolso é o que deixa o brasileiro feliz.</p>
        </div>
    </section>
);

const Graphs = () => (
    <section>
        <div className="container">
            <h2>Resultados Visíveis: O Antes e Depois</h2>
            <p style={{maxWidth: '800px', margin: '0 auto'}}>Nossa metodologia transforma dados em resultados concretos.</p>
            <div className="chart-container">
                <div className="chart">
                    <h3>Aumento de Faturamento</h3>
                    <div className="chart-area">
                        <div className="chart-grid">
                            <div className="chart-grid-line"></div>
                            <div className="chart-grid-line"></div>
                            <div className="chart-grid-line"></div>
                            <div className="chart-grid-line"></div>
                        </div>
                        <div className="bar-group">
                            <div className="bar" style={{height: '35%'}}><span className="bar-value">35%</span></div>
                            <span className="axis-label">Antes</span>
                        </div>
                        <div className="bar-group">
                            <div className="bar" style={{height: '90%'}}><span className="bar-value">90%</span></div>
                            <span className="axis-label">Depois</span>
                        </div>
                    </div>
                </div>
                <div className="chart">
                    <h3>Leads Qualificados</h3>
                    <div className="chart-area">
                         <div className="chart-grid">
                            <div className="chart-grid-line"></div>
                            <div className="chart-grid-line"></div>
                            <div className="chart-grid-line"></div>
                            <div className="chart-grid-line"></div>
                        </div>
                        <div className="bar-group">
                            <div className="bar" style={{height: '30%'}}><span className="bar-value">30%</span></div>
                            <span className="axis-label">Antes</span>
                        </div>
                        <div className="bar-group">
                            <div className="bar" style={{height: '80%'}}><span className="bar-value">80%</span></div>
                            <span className="axis-label">Depois</span>
                        </div>
                    </div>
                </div>
                <div className="chart">
                    <h3>Taxa de Conversão</h3>
                     <div className="chart-area">
                         <div className="chart-grid">
                            <div className="chart-grid-line"></div>
                            <div className="chart-grid-line"></div>
                            <div className="chart-grid-line"></div>
                            <div className="chart-grid-line"></div>
                        </div>
                       <div className="bar-group">
                            <div className="bar" style={{height: '25%'}}><span className="bar-value">25%</span></div>
                            <span className="axis-label">Antes</span>
                        </div>
                        <div className="bar-group">
                            <div className="bar" style={{height: '75%'}}><span className="bar-value">75%</span></div>
                            <span className="axis-label">Depois</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const CTA = () => (
  <section id="contact" style={{ backgroundColor: colors.nude }}>
    <div className="container">
      <h2 style={{ color: colors.brown }}>Sua equipe de vendas não precisa mais competir com o digital.</h2>
      <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto'}}>Apresentamos uma metodologia híbrida que une o físico e o online, transformando sua equipe em uma força de vendas unificada e de alta performance.</p>
      <a href="https://wa.me/5511988465800?text=Ola%20Amanda.%20Quero%20vender%20mais%20me%20ajuda%20" target="_blank" rel="noopener noreferrer" className="btn">Descubra como</a>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: colors.black, color: colors.nude}}>
    <p>&copy; {new Date().getFullYear()} Amanda Carter - Todos os direitos reservados.</p>
  </footer>
);

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <About />
        <Graphs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

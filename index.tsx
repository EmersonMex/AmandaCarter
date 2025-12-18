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
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* Usamos o nome exato logo.jpg que está na pasta public */}
        <img 
          src="/logo.jpg" 
          alt="Amanda Carter Logo" 
          style={{ height: '60px', width: 'auto', display: 'block' }} 
        />
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: "'Playfair Display', serif" }}>
          Amanda Carter
        </div>
      </div>
      <a href="https://wa.me/5511988465800?text=Ola%20Amanda.%20Quero%20vender%20mais%20me%20ajuda%20" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="btn" 
         style={{marginTop: 0}}>
         Quero saber mais
      </a>
    </nav>
  </header>
);
const Header = () => (
  <header style={{
    padding: '1rem 2rem',
    backgroundColor: colors.white,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* Tente usar o nome 'logo.jpg' ou o nome exato que está no seu PC */}
        <img 
          src="/logo.jpg" 
          alt="Amanda Carter" 
          style={{ height: '50px', width: 'auto', display: 'block' }} 
          onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150?text=Logo+Nao+Encontrada"; }}
        />
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: "'Playfair Display', serif", color: colors.brown }}>
          Amanda Carter
        </div>
      </div>
      <a href="#contact" className="btn" style={{ marginTop: 0, padding: '0.5rem 1rem' }}>Falar com Amanda</a>
    </div>
  </header>
);

import Link from "next/link";

export function TopNav() {
  return (
    <div className="card" style={{ marginBottom: 12, background: 'var(--panel)', borderRadius: '10px', boxShadow: '0px 8px 20px rgba(0,0,0,.1)' }}>
      <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
        <div className="row" style={{ gap: 10 }}>
          <div style={{ fontWeight: 900, letterSpacing: .3, fontSize: '1.5rem', color: 'var(--accent)' }}>
            PetOrkut <span className="small">🐾</span>
          </div>
          <span className="badge" style={{ background: 'var(--accent2)', color: '#fff' }}>rede social pet • funcional</span>
        </div>
        <div className="nav" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Link href="/home">
            <a style={{ padding: '6px 12px', borderRadius: '8px', textDecoration: 'none', color: 'var(--accent)', fontWeight: 'bold', backgroundColor: 'var(--panel2)', transition: 'all 0.3s ease' }}>Início</a>
          </Link>
          <Link href="/search">
            <a style={{ padding: '6px 12px', borderRadius: '8px', textDecoration: 'none', color: 'var(--accent)', fontWeight: 'bold', backgroundColor: 'var(--panel2)', transition: 'all 0.3s ease' }}>Buscar</a>
          </Link>
          <Link href="/notifications">
            <a style={{ padding: '6px 12px', borderRadius: '8px', textDecoration: 'none', color: 'var(--accent)', fontWeight: 'bold', backgroundColor: 'var(--panel2)', transition: 'all 0.3s ease' }}>Notificações</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

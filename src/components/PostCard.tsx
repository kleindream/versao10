
import Link from "next/link";

type Post = {
  id: string;
  content: string;
  created_at: string;
  author_type: "profile" | "pet";
  author_id: string;
  visibility: string;
  owner_profile_id: string;
  author_label?: string;
};

export function PostCard({ post }: { post: Post }) {
  const dt = new Date(post.created_at);

  return (
    <div className="card" style={{ 
      marginBottom: 12, 
      background: 'var(--panel)', 
      borderRadius: '12px', 
      boxShadow: '0px 8px 20px rgba(0,0,0,.15)',
      transition: 'all 0.3s ease' 
    }}>
      <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-start", padding: '12px' }}>
        <div style={{ fontWeight: 600, fontSize: '16px', color: 'var(--accent)' }}>
          {post.author_label ? `${post.author_label}:` : 'Postagem de '}
          <Link href={`/u/${post.author_id}`}>
            <a style={{ color: 'var(--accent)', fontWeight: 'bold' }}>
              {post.author_type === 'profile' ? 'Perfil' : 'Pet'}
            </a>
          </Link>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{dt.toLocaleDateString()}</div>
      </div>
      <div style={{ padding: '12px', fontSize: '14px', color: 'var(--text)' }}>
        {post.content}
      </div>
      <div style={{ padding: '12px', display: 'flex', gap: '10px', justifyContent: 'flex-start' }}>
        <button 
          style={{
            background: 'linear-gradient(180deg, var(--accent), var(--accent2))', 
            border: 'none', 
            borderRadius: '8px', 
            padding: '8px 16px', 
            color: '#fff', 
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }} 
          onClick={() => alert("Curtido!")}
        >
          Curtir
        </button>
        <button 
          style={{
            background: 'var(--panel2)', 
            border: '1px solid var(--border)', 
            borderRadius: '8px', 
            padding: '8px 16px', 
            color: 'var(--accent)', 
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }} 
          onClick={() => alert("Comentado!")}
        >
          Comentar
        </button>
      </div>
    </div>
  );
}

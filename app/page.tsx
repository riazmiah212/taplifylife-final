export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '4rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Taplify</h1>
      <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
        Launch a powerful one-page site on a subdomain. Instantly.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a
          href="/signup"
          style={{
            background: '#000',
            color: '#fff',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block',
          }}
        >
          Get Started
        </a>
      </div>
    </main>
  );
}

export default function SubdomainPage({ params }: { params: { subdomain: string } }) {
  return (
    <main style={{ padding: '4rem', textAlign: 'center' }}>
      <h1>Welcome to {params.subdomain}.taplifylife.vercel.app!</h1>
      <p>This is your live subdomain page.</p>
    </main>
  )
}

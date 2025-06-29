'use client'
import { useState } from 'react'

export default function Dashboard() {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'customer@example.com' }) // You'll replace this later
    })
    const data = await res.json()
    window.location.href = `https://checkout.stripe.com/pay/${data.id}`
  }

  return (
    <main style={{ padding: '4rem', textAlign: 'center' }}>
      <h1>Your Dashboard</h1>
      <p>Manage your subdomain and membership features here.</p>
      <button
        onClick={handleCheckout}
        style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          background: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem'
        }}
      >
        {loading ? 'Redirecting...' : 'Buy Subdomain – £10'}
      </button>
    </main>
  )
}

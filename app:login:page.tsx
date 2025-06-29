'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    if (email) router.push('/dashboard')
  }

  return (
    <main style={{ padding: '4rem', textAlign: 'center' }}>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        style={{ padding: '0.5rem', width: '100%', maxWidth: '300px' }}
      />
      <button
        onClick={handleLogin}
        style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}
      >
        Login
      </button>
    </main>
  )
}

import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
  return (
    <><div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 dark:from-zinc-800 dark:to-zinc-900">
    <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
      <h2 className="text-3xl font-semibold mb-6 text-zinc-900 dark:text-zinc-100 text-center">Login</h2>
      <form>
        <div className="mb-4">
          <label for="email" className="block text-zinc-700 dark:text-zinc-300 mb-2">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="you@example.com"
            required
          />
          <p className="text-sm text-muted-foreground mt-1">We'll never share your email with anyone else.</p>
        </div>
        <div className="mb-6">
          <label for="password" className="block text-zinc-700 dark:text-zinc-300 mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="••••••••"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-transform transform hover:scale-105"
          >
            Login
          </button>
          <button
            type="button"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-transform transform hover:scale-105"
          >
            Create user
          </button>
        </div>
      </form>
    </div>
  </div>

    </>
  )
}

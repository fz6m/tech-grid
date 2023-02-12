import { inject } from '@vercel/analytics'
import { useEffect } from 'react'

export const Analytics = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      inject()
    }
  }, [])

  return null
}

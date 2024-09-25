// middleware/detectDevice.ts
import type { Context } from '@nuxt/types'

export default function ({ req, redirect, route }: Context) {
  let userAgent: string

  if (process.server) {
    userAgent = req.headers['user-agent'] || ''
  } else {
    userAgent = navigator.userAgent
  }

  const isMobile = /mobile|android|iphone|ipad|ipod/i.test(userAgent)

  console.log('Current route:', route.path)
  console.log('User Agent:', userAgent)

  if (route.path === '/') {
    if (isMobile) {
      console.log('Redirecting to mobile...')
      return redirect('/mobile')
    } else {
      console.log('Redirecting to desktop...')
      return redirect('/desktop')
    }
  }
}

// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const BASIC_USER = 'ntv'
const BASIC_PASS = 'wands'

export const config = { matcher: '/:path*' } // 全ページ対象
export function middleware(req: NextRequest) {
  const auth = req.headers.get('authorization')
  if (auth) {
    const [scheme, encoded] = auth.split(' ')
    if (scheme === 'Basic') {
      const [user, pass] = atob(encoded).split(':')
      if (user === BASIC_USER && pass === BASIC_PASS) {
        return NextResponse.next()
      }
    }
  }
  return new NextResponse('Auth required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
  })
}

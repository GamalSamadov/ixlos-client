import { NextResponse, type NextRequest } from 'next/server'

export default async function middleware(req: NextRequest) {
  const session = req.cookies.get('session')?.value

  const isAuthPage = req.url.includes('/account')

  if (isAuthPage) {
    if (session) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
    return NextResponse.next()
  }

  if (!session) {
    return NextResponse.redirect(new URL('/account/login', req.url))
  }
}

export const config = {
  matcher: ['/account/:path*', '/dashboard/:path*'],
}

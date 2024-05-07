import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const policyCookie = request.cookies.get('acceptPolicy')
  if(!policyCookie){
    return
  }
    return NextResponse.redirect(new URL(process.env.NODE_ENV === "production" ? `https://shop.${process.env.APP_DOMAIN}` : `http://shop.${process.env.DEV_DOMAIN}:3002`, request.url))
}
 
export const config = {
  matcher: ['/'], 
}
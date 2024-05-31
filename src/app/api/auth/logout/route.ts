import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Construct absolute URL for redirect
  const redirectUrl = new URL('/', req.url);

  // Create a response with a redirect
  const response = NextResponse.redirect(redirectUrl.toString());

  // Set the cookie to expire in the past to effectively delete it
  response.cookies.set('user', '', { httpOnly: true, path: '/', expires: new Date(0) });

  return response;
}
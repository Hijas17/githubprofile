import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
    const cookieStore = cookies();
    console.log("HELLO")
    const tokenCookie = cookieStore.get("accessToken");
    const token = tokenCookie ? tokenCookie.value : null;

  try {
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    console.log("userREsponse",userResponse);
    return NextResponse.json({userResponse}, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
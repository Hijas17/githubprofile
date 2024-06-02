import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const CALLBACK_URL = process.env.CALLBACK_URL;
  const redirectUri = encodeURIComponent(`${CALLBACK_URL}`);
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;
  console.log("url:", url);
  return NextResponse.redirect(url);
}

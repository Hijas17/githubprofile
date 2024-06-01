import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const weburl = process.env.WEB_URL;
  const redirectUri = encodeURIComponent(
    `https://${weburl}/api/auth/callback`
  );
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;
  console.log("url:", url);
  return NextResponse.redirect(url);
}

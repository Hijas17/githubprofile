import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code") as string;
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  try {
    const tokenResponse = await axios.post(
      `https://github.com/login/oauth/access_token`,
      {
        client_id: clientId,
        client_secret: clientSecret,
        code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;
    const redirectUrl = new URL("/", req.url);

    const response = NextResponse.redirect(redirectUrl.toString());
    response.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    );
  }
}

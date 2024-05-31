// // import { User } from "@prisma/client";
// // import { getToken } from "next-auth/jwt";
// // import { getSession, useSession } from "next-auth/react";
// import { cookies } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(request: NextRequest) {
//   const cookieStore = cookies();
//   console.log("HELLOOOOOOOOO");
//   const userCookie = cookieStore.get("user");
//   let user = null;
//   console.log(cookieStore);
//   console.log(userCookie);

//   if (userCookie) {
//     user = JSON.parse(userCookie.value);
//   }
//   console.log(user);
//   if (!user) {
//     return NextResponse.redirect(new URL("/auth/login", request.url));
//   } else {
//     return NextResponse.next();
//   }
// }

// export const config = {
//   matcher: ["/:path*"],
// };

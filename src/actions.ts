"use server";
import { cookies } from "next/headers";
export async function setMyCookies() {
  cookies().set("acceptPolicy", "true", {
    domain:
      process.env.NODE_ENV === "production"
        ? `.${process.env.NEXT_PUBLIC_CLIENT_APP_DOMAIN}`
        : `.${process.env.NEXT_PUBLIC_CLIENT_DEV_DOMAIN}`,
    path: '/',
    secure: process.env.NODE_ENV === "production",
  });
}

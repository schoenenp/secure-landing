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


export async function checkCookies() {
  let acceptPolicyCookie;

  acceptPolicyCookie = cookies().get("acceptPolicy")

  const hasAccept = acceptPolicyCookie !== undefined
  
  return hasAccept
}

export async function logCheckCookies() {
  const hasCookies = checkCookies();
  return hasCookies !== undefined
}
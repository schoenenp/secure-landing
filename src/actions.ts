'use server'
import { cookies } from "next/headers"
export async function setMyCookies(){
    cookies().set('acceptPolicy', 'true', {domain: process.env.NODE_ENV === "production" ? `.${process.env.APP_DOMAIN}` : `.${process.env.DEV_DOMAIN}`  })
  }
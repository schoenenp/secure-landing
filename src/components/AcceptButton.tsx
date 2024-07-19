'use client'

import { setMyCookies } from "@/actions"
import { useRouter } from "next/navigation"
import { type MouseEvent } from "react"

type AcceptButtonProps = {
    text: string
}


export default function AcceptButton(props: AcceptButtonProps) {
    const router = useRouter()

    async function handleAcceptCookies(event: MouseEvent<HTMLButtonElement>){
      event.preventDefault()
      await setMyCookies()
      router.push(process.env.NODE_ENV === "production"
        ? `https://shop.${process.env.NEXT_PUBLIC_CLIENT_APP_DOMAIN}`
        : `http://shop.${process.env.NEXT_PUBLIC_CLIENT_DEV_DOMAIN}`)
     }

  return (
    <button type="button" onClick={handleAcceptCookies} className="bg-white cursor-pointer shadow-sm shadow-white/80 bg-pirrot-blue-900 border-2 border-pirrot-green-500 rounded-md p-4 px-6  w-full h-full">{props.text}</button>
)
}

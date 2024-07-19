'use client'

import { setMyCookies } from "@/actions"
import { useRouter } from "next/navigation"


type AcceptButtonProps = {
    text: string
}

export default function AcceptButton(props: AcceptButtonProps) {
    const router = useRouter()

    function handleAcceptCookies(){
      setMyCookies()
      router.refresh()
     }

  return (
    <button type="button" onClick={handleAcceptCookies} className="bg-white cursor-pointer shadow-sm shadow-white/80 bg-pirrot-blue-900 border-2 border-pirrot-green-500 rounded-md p-4 px-6  w-full h-full">{props.text}</button>
)
}

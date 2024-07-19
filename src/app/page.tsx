
import React from "react";

import Image from "next/image";
import Link from "next/link";
import AcceptButton from "@/components/AcceptButton";

export default function About() {

    return (
      <main className="flex text-pirrot-green-100 min-h-screen flex-col gap-5 items-center justify-center md:p-24 text-neutral-200 relative bg-gradient-to-br from-pirrot-blue-500 to-pirrot-blue-950">
      <div className="w-full max-w-2xl justify-center min-h-screen md:min-h-0  flex flex-col gap-5 md:rounded shadow-sm bg-pirrot-blue-950/50 p-4 pt-8">
          <div className="flex gap-5 w-full flex-col md:flex-row text-center md:text-left justify-center items-center">
            <div className="w-28">
          <div className="w-28 h-28 rounded-full p-4 border border-pirrot-blue-500 flex justify-center items-center bg-gradient-to-br from-pirrot-blue-500 to-pirrot-blue-900"><Image className="w-full h-full bg-contain" src="/logo.svg" alt="logo" width={128} height={128} /></div>
            </div>
        <div className="flex-[2]">
        <h1 className="font-black text-4xl">PIRROT.DE</h1>
        <h2 className="font-light text-3xl">Cookie-Richtlinien</h2>
        </div>
          </div>
       <div className="flex gap-5 flex-col bg-pirrot-blue-950/20  p-4 rounded max-h-80 overflow-y-scroll">

     
        <h3 className="font-black text-2xl text-left">Was sind Cookies?</h3>
        <p>Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie Websites besuchen. Sie helfen uns, Ihr Benutzererlebnis zu verbessern.</p>
        
        <h3 className="font-black text-2xl text-left">Wie nutzen wir Cookies?</h3>
        <ul>
          <li><span className="font-bold">Notwendige Cookies:</span> Für den grundlegenden Betrieb der Website erforderlich.</li>
          <li><span className="font-bold">Präferenz-Cookies:</span> Speichern Ihre Einstellungen und Präferenzen.</li>
          <li><span className="font-bold">Statistik-Cookies:</span> Sammeln anonyme Daten zur Website-Nutzung. </li>
        </ul>
        <h3 className="font-black text-2xl text-left">Ihre Wahlmöglichkeiten</h3>
        <p>Sie können Cookies über die Einstellungen Ihres Browsers verwalten und löschen. Die Deaktivierung kann jedoch die Funktionalität unserer Website einschränken.</p>
        <h3 className="font-black text-2xl text-left">Zustimmung</h3>
        <p>Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu, wie in dieser Richtlinie beschrieben.</p>
        <h3 className="font-black text-2xl text-left">Änderungen</h3>
        <p>Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Wir ermutigen Sie, diese Seite regelmäßig zu überprüfen, um sich über unsere Nutzung von Cookies und verwandten Technologien zu informieren.</p>
        <h3 className="font-black text-2xl text-left">Kontaktieren Sie uns</h3>
        <p>Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte unter <Link href="mailto:datenschutz@pirrot.de">datenschutz@pirrot.de</Link>.</p>
        </div>
        <div className="w-full flex gap-5">
          <div className="flex-1 h-full">
            <AcceptButton text="Erforderliche erlauben" />
          </div>
          <div className="flex-1 h-full">
            <AcceptButton text="Alle erlauben" />
          </div>
        </div>
        </div>
      </main>
    );
  }
  
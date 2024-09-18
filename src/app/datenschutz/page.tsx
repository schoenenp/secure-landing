"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import React from "react";


export default function About() {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient)
    return (
      <div className=" min-h-screen flex justify-center items-center w-full h-full bg-black">
      <LoadingSpinner />
      </div>
    );

  return (
    <main className="flex min-h-screen flex-col gap-5 items-center justify-center  md:p-24 bg-pirrot-blue-700 text-info-100 relative">
      <h2 className="text-3xl font-bold">Datenschutzerklärung</h2>
      <div className="w-full text-left max-w-4xl bg-pirrot-blue-900 shadow-sm p-8 rounded-md">
        <p>
          <strong>Allgemeine Angaben</strong>
        </p>
        <p>
          <em>
            <strong>Angaben zur verantwortlichen Stelle</strong>
          </em>
        </p>
<br />
        <p>
          <strong>Unternehmen:</strong>
          <br />
          Digitaldruck Pirrot GmbH
          <br />
          <br />
          Gesetzlicher Vertreter:
          <br />
          Herrn Björn Frey &amp; Jörg Mühlhöfer
          <br />
          <br />
          <strong>Adresse:</strong>
          <br />
          Triererstraße 7
          <br />
          66125 Saarbrücken
          <br />
          <br />
          Ust.ID DE 188516815
          <br />
          Steuernummer: 040/107/51018
          <br />
          Amtsgericht Saarbrücken HRB 11071
          <br />

          Kontaktdaten Datenschutzbeauftragter:
          <br />
          datenschutz@pirrot.de
        </p>
<br />
        <p>
          <em>
            <strong>Allgemeine Datenverarbeitungs-Informationen</strong>
          </em>
        </p>
        <br />
        <p>
          <strong>Betroffene Daten:</strong>
        </p>
        <p>
          Personenbezogene Daten werden nur erhoben, wenn Sie uns diese von sich
          aus mitteilen. Darüber hinaus werden keine personenbezogenen Daten
          erhoben. Eine über die Reichweite der gesetzlichen
          Erlaubnistatbestände hinausgehende Verarbeitung Ihrer
          personenbezogenen Daten erfolgt nur auf Grundlage Ihrer ausdrücklichen
          Einwilligung.
        </p>
        <br />
        <p>
          <strong>Verarbeitungszweck:</strong>
          <br />
          Vertragsdurchführung
        </p>
        <p>
          <strong>Kategorien von Empfängern:</strong>
          <br />
          Öffentliche Stellen bei Vorliegen vorrangiger Rechtsvorschriften.
          <br />
          Externe Dienstleister oder sonstige Auftragnehmer.
          <br />
          Weitere externe Stellen soweit der Betroffene seine Einwilligung
          erteilt hat oder eine Übermittlung aus überwiegendem Interesse
          zulässig ist.
        </p>
        <br />
        <p>
          <strong>Drittlandtransfers:</strong>
        </p>
        <p>
          Im Rahmen der Vertragsdurchführung können auch Auftragsverarbeiter
          außerhalb der Europäischen Union zum Einsatz kommen.
        </p>
        <br />
        <p>
          <strong>Dauer Datenspeicherung:</strong>
          <br />
          Die Dauer der Datenspeicherung richtet sich nach den gesetzlichen
          Aufbewahrungspflichten und beträgt in der Regel 10 Jahre.
        </p>
        <br />
        <p>
          <em>
            <strong>Spezifische Angaben zur Webseite</strong>
          </em>
        </p>
        <br />
        <p>
          <strong>Einsatz eines Newsletters</strong>
        </p>
        <p>
          Im Rahmen der Registrierung unseres Newsletters teilen Sie uns Ihre
          E-Mail-Adresse und optional weitere Daten mit. Diese Angaben verwenden
          wir ausschließlich, um Ihnen den Newsletter zuzusenden. Ihre bei der
          Newsletter-Anmeldung eingegebenen Daten bleiben bei uns gespeichert,
          bis Sie sich wieder von unserem Newsletter abmelden. Eine Abmeldung
          ist jederzeit über den dafür vorgesehenen Link im Newsletter oder eine
          entsprechende Mitteilung an uns möglich. Mit der Abmeldung
          widersprechen Sie der Nutzung Ihrer E-Mail-Adresse.
          <br />
          hre E-Mailadresse, die wir im Zusammenhang mit dem Verkauf einer Ware
          oder Dienstleistung erhalten, nutzen wir darüber hinaus ausschließlich
          für Direktwerbung in Form unseres Newsletters für eigene ähnliche
          Waren oder Dienstleistungen, wie die von Ihnen bestellten, sofern Sie
          dieser Verwendung nicht widersprochen haben. Sie können der Verwendung
          Ihrer E-Mail-Adresse jederzeit widersprechen, ohne dass hierfür andere
          als die Übermittlungskosten nach den Basistarifen entstehen. Ihr
          Widerspruch (und damit die Abbestellung unseres Newsletters) kann
          durch entsprechende Nachricht an unsere E-Mail-Adresse (siehe
          Impressum) ausgeübt werden.
        </p>
        <br />
        <p>
          <strong>Nutzungsdaten</strong>
        </p>
        <p>
          Wenn Sie unsere Webseiten aufrufen, übermitteln Sie (aus technischer
          Notwendigkeit) über Ihren Internetbrowser Daten an unseren Webserver.
          Folgende Daten werden während einer laufenden Verbindung zur
          Kommunikation zwischen Ihrem Internetbrowser und unserem Webserver
          aufgezeichnet:
        </p>
        <p>
          &#8211; Datum und Uhrzeit der Anforderung
          <br />
          &#8211; Name der angeforderten Datei
          <br />
          &#8211; Seite, von der aus die Datei angefordert wurde
          <br />
          &#8211; Zugriffsstatus (Datei übertragen, Datei nicht gefunden, etc.)
          <br />
          &#8211; verwendeter Webbrowser und verwendetes Betriebssystem
          <br />
          &#8211; vollständige IP-Adresse des anfordernden Rechners
          <br />
          &#8211; übertragene Datenmenge.
        </p>
        <p>
          Aus Gründen der technischen Sicherheit, insbesondere zur Abwehr von
          Angriffsversuchen auf unseren Webserver, werden diese Daten von uns
          kurzzeitig gespeichert. Ein Rückschluss auf einzelne Personen ist uns
          anhand dieser Daten nicht möglich. Nach spätestens 30 Tagen werden die
          Daten durch Verkürzung der IP-Adresse auf Domain-Ebene anonymisiert,
          so dass es nicht mehr möglich ist, einen Bezug zum einzelnen Nutzer
          herzustellen. In anonymisierter Form werden die Daten daneben zu
          statistischen Zwecken verarbeitet; ein Abgleich mit anderen
          Datenbeständen oder eine Weitergabe an Dritte, auch in Auszügen,
          findet nicht statt.
        </p>
        <p>
          [Anmerkung: Quelle der Formulierung Landesamt für Datenschutz-Aufsicht
          Bayern]
        </p>
        <p>
          <br />
          <strong>
            <em>
              Einsatz von Google Analytics mit Einwilligung der
              Webseiten-Besucher
            </em>
          </strong>
        </p>
        <p>
          Diese Website benutzt auf Basis der Einwilligung der
          Webseiten-Besucher Google Analytics, einen Webanalysedienst der Google
          Ireland Limited („Google“). Google Analytics verwendet sog. „Cookies“
          also Textdateien, die auf Ihrem Computer gespeichert werden und die
          eine Analyse der Benutzung der Website durch Sie ermöglichen. Die
          durch das Cookie erzeugten Informationen über Ihre Benutzung dieser
          Website werden in der Regel auch an einen Server von Google in den USA
          übertragen und dort gespeichert. Im Auftrag des Betreibers dieser
          Website wird Google diese Informationen benutzen, um Ihre Nutzung der
          Website auszuwerten, um Reports über die Websiteaktivitäten
          zusammenzustellen und um weitere mit der Websitenutzung und der
          Internetnutzung verbundene Dienstleistungen gegenüber dem
          Websitebetreiber zu erbringen. Wir möchten darauf hinweisen, dass
          diese Website Google Analytics nur nach der vorher erteilten
          Zustimmung sowie mit gekürzter Fassung der IP-Adressen verwendet, um
          eine direkte Personenbeziehbarkeit auszuschließen.
        </p>
        <br />
        <p>
          <em>
            <strong>
              Google Ads Conversion Tracking mit Einwilligung der
              Webseiten-Besucher
            </strong>
          </em>
        </p>
        <p>
          Diese Webseite benutzt auf Basis der Einwilligung der
          Webseiten-Besucher Google Ads Conversion Tracking, einen
          Webanalysedienst der Google Ireland Limited („Google“). Google Ads
          Conversion Tracking verwendet „Cookies“, die auf Ihrem Computer
          gespeichert werden und die eine Analyse der Benutzung der Webseite
          durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen
          über Ihre Benutzung dieser Webseite werden an einen Server von Google
          in den USA übertragen und dort gespeichert. Google wird diese
          Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten, um
          Reports über die Webseitenaktivitäten für die Webseitenbetreiber
          zusammenzustellen und um weitere mit der Webseitennutzung und der
          Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird
          Google diese Informationen gegebenenfalls an Dritte übertragen, sofern
          dies gesetzlich vorgeschrieben ist oder soweit Dritte diese Daten im
          Auftrag von Google verarbeiten.
        </p>
        <br />
        <p>
          <strong>
            <em>
              Einsatz eigener für die Webseiten-Anzeige erforderlicher „Cookies“
            </em>
          </strong>
        </p>
        <p>
          Diese Webseite verwendet eigene „Cookies“, um für die
          Webseiten-Anzeige erforderliche Einstellungen zu speichern („Cookies“
          sind Datensätze, die vom Webserver an den Browser des Nutzers gesandt
          und dort für einen späteren Abruf gespeichert werden). In unseren
          eigenen „Cookies“ werden keinerlei personenbezogene Daten gespeichert.
          Sie können die Verwendung von „Cookies“ generell verhindern, wenn Sie
          in Ihrem Browser die Speicherung von „Cookies“ untersagen.
        </p>
        <br />
        <p>
          <strong>
            <em>Angaben zu weiteren Datenverarbeitungsverfahren</em>
          </strong>
        </p>
        <p className="text-xl"><em>Spezifische Angaben zum Bewerbungsverfahren</em>
        </p>
        <br />
        <p>
          <strong>Betroffene Daten:</strong>
          <br />
          Bewerbungsangaben
          <br />
          Verarbeitungszweck:
          <br />
          Durchführung Bewerbungsverfahren.
          <br />
          Kategorien von Empfängern:
          <br />
          Öffentliche Stellen bei Vorliegen vorrangiger Rechtsvorschriften.
          Externe Dienstleister oder sonstige Auftragnehmer, u.a. zur
          Datenverarbeitung und Hosting.
        </p>
        <p>
          Weitere externe Stellen soweit der Betroffene seine Einwilligung
          erteilt hat oder eine Übermittlung aus überwiegendem Interesse
          zulässig ist, u.a. Kunden und Interessenten im Rahmen der
          Auftragsakquise. [Ggfs. konkretisieren]
        </p>
        <br />
        <p>
          <strong>Drittlandtransfers:</strong>
          <br />
          Im Rahmen der Vertragsdurchführung können auch Auftragsverarbeiter
          außerhalb der Europäischen Union zum Einsatz kommen, u.a.
          Email-Provider.
        </p>
        <br />
        <p>
          <strong>Dauer Datenspeicherung:</strong> <br />
          Bewerbungsdaten werden nach Mitteilung der Entscheidung in der Regel
          binnen vier Monaten gelöscht, soweit nicht eine Einwilligung in eine
          längere Datenspeicherung im Rahmen der Aufnahme in den Bewerberpool
          vorliegt.
        </p>
        <br />
        <p className="text-xl"><em>Spezifische Angaben zur Verarbeitung von Beschäftigtendaten</em></p>
        <br />
        <p>
          <strong>Betroffene Daten:</strong>
          <br />
          Zur Vertragsdurchführung mitgeteilte Daten; ggfs. darüber hinaus
          gehende Daten zur Verarbeitung auf Basis Ihrer ausdrücklichen
          Einwilligung.
        </p>
        <br />
        <p>
          <strong>Verarbeitungszweck:</strong>
          <br />
          Vertragsdurchführung im Rahmen des Beschäftigungsverhältnisses.
        </p>
        <br />
        <p>
          <strong>Kategorien von Empfängern:</strong>
          <br />
          Öffentliche Stellen bei Vorliegen vorrangiger Rechtsvorschriften, u.a.
          Finanzamt, Sozialversicherungsträger, Berufsgenossenschaft.
        </p>
        <p>
          Externe Dienstleister oder sonstige Auftragnehmer, u.a. zur
          Datenverarbeitung und Hosting, zur Entgeltabrechnung, zur
          Reisekostenabrechnung, zu Versicherungsleistungen, zur
          Fahrzeugnutzung.
          <br />
          <br />
          Weitere externe Stellen soweit der Betroffene seine Einwilligung
          erteilt hat oder eine Übermittlung aus überwiegendem Interesse
          zulässig ist, u.a. zur Auftragsakquise, zu Versicherungsleistungen.
        </p>
        <br />
        <p>
          <strong>Drittlandtransfers:</strong>
          <br />
          Im Rahmen der Vertragsdurchführung können auch Auftragsverarbeiter
          außerhalb der Europäischen Union zum Einsatz kommen, u.a.
          Email-Provider. [Ggfs. konkretisieren] alternativ -Keiner-.
        </p>
        <br />
        <p>
          <strong>Dauer Datenspeicherung:</strong>
          <br />
          Die Dauer der Datenspeicherung richtet sich nach den gesetzlichen
          Aufbewahrungspflichten und beträgt in der Regel 10 Jahre. [Ggfs.
          konkretisieren]
        </p>
        <br />
        <p className="text-xl"><em>Spezifische Angaben zur Verarbeitung von Lieferantendaten</em></p>
        <br />
        <p>
          <strong>Betroffene Daten:</strong>
          <br />
          Zur Vertragsdurchführung mitgeteilte Daten; ggfs. darüber hinaus
          gehende Daten zur Verarbeitung auf Basis Ihrer ausdrücklichen
          Einwilligung.
        </p>
        <br />
        <p>
          <strong>Verarbeitungszweck:</strong>
          <br />
          Vertragsdurchführung, u.a. Anfragen, Einkauf, Qualitätssicherung.
        </p>
        <br />
        <p>
          <strong>Kategorien von Empfängern:</strong>
          <br />
          Öffentliche Stellen bei Vorliegen vorrangiger Rechtsvorschriften, u.a.
          Finanzamt, Zoll-[Ggfs. konkretisieren]
        </p>
        <p>
          Externe Dienstleister oder sonstige Auftragnehmer, u.a. zur
          Datenverarbeitung und Hosting, Buchhaltung, Zahlungsabwicklung. [Ggfs.
          konkretisieren]
        </p>
        <p>
          Weitere externe Stellen soweit der Betroffene seine Einwilligung
          erteilt hat oder eine Übermittlung aus überwiegendem Interesse
          zulässig ist.
        </p>
        <br />
        <p>
          <strong>Drittlandtransfers:</strong> <br />
          Im Rahmen der Vertragsdurchführung können auch Auftragsverarbeiter
          außerhalb der Europäischen Union zum Einsatz kommen, u.a.
          Email-Provider. [Ggfs. konkretisieren] alternativ -Keiner-.
        </p>
        <br />
        <p>
          <strong>Dauer Datenspeicherung:</strong>
          <br />
          Die Dauer der Datenspeicherung richtet sich nach den gesetzlichen
          Aufbewahrungspflichten und beträgt in der Regel 10 Jahre. [Ggfs.
          konkretisieren]
        </p>
        <br />
        <p>
          <em>
            <strong>Weitere Informationen und Kontakte</strong>
          </em>
        </p>
        <p>
          Darüber hinaus können Sie jederzeit ihre Ansprüche auf Auskunft,
          Berichtigung oder Löschung oder auf Einschränkung der Verarbeitung
          oder der Wahrnehmung Ihres Widerspruchsrechts gegen die Verarbeitung
          sowie das Recht auf Datenübertragbarkeit geltend machen. Hier finden
          Sie die Möglichkeit, uns per E-Mail oder Brief [bitte individuell
          verlinken i.d.R. Impressum] zu kontaktieren. Sie haben ferner das
          Recht, sich bei Beschwerden an die Datenschutz-Aufsichtsbehörde zu
          wenden.
        </p>
     
      <br />
      <br />
      </div>
    </main>
  );
}

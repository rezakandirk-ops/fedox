// lib/service-details.ts
// SEO- und Detail-Inhalte pro Service fuer /leistungen/[slug]
// Jeder Eintrag ist handgeschrieben, lokal (Dortmund) und einzigartig.

export type ServiceFaq = { question: string; answer: string }
export type ServiceBenefit = { title: string; description: string }
export type ServiceStep = { title: string; description: string }

export type ServiceDetail = {
  seoTitle: string
  seoDescription: string
  keywords: string[]
  intro: string
  paragraphs: string[]
  benefits: ServiceBenefit[]
  process: ServiceStep[]
  faq: ServiceFaq[]
  priceHint?: string
  heroImage?: string
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "unterhalts-buerorein": {
    seoTitle: "Unterhaltsreinigung & Büroreinigung Dortmund | Fedox Facility Services",
    seoDescription:
      "Professionelle Unterhalts- & Büroreinigung in Dortmund. Zuverlässig, termintreu, individuell abgestimmt. Jetzt kostenloses Angebot anfordern.",
    keywords: [
      "Unterhaltsreinigung Dortmund",
      "Büroreinigung Dortmund",
      "Gebäudereiniger Dortmund",
      "Reinigungsfirma Dortmund",
      "Gewerbereinigung Dortmund",
    ],
    intro:
      "Saubere Büros sind in Dortmund ein Aushängeschild. Für Mitarbeiter genauso wie für Kunden. Wir von Fedox übernehmen die Unterhalts- und Büroreinigung für Unternehmen im gesamten Dortmunder Stadtgebiet: zuverlässig, diskret und exakt in den Intervallen, die zu Ihrem Betriebsablauf passen. Vom kleinen Agenturbüro in der City bis zur Verwaltungsetage im Technologiepark.",
    paragraphs: [
      "Eine gut organisierte Büroreinigung in Dortmund ist kein Kostenfaktor, sondern eine Investition in Gesundheit, Motivation und den Eindruck, den Ihr Unternehmen hinterlässt. Staub auf Oberflächen, Fingerabdrücke auf Glastüren und unsaubere Sanitärbereiche fallen Besuchern sofort auf. Und wirken noch lange nach. Wir schaffen mit klar definierten Leistungsverzeichnissen und festen Ansprechpartnern eine Reinigungsqualität, die Sie nicht überwachen müssen.",
      "Unsere Dortmunder Teams reinigen Arbeitsplätze, Besprechungsräume, Teeküchen, Sanitäranlagen, Empfangsbereiche und Verkehrswege nach einem auf Ihr Objekt zugeschnittenen Plan. Wir arbeiten mit farbcodierten Mikrofasersystemen, umweltverträglichen Reinigungsmitteln und dosiergenauen Geräten. So vermeiden wir Kreuzkontamination und schonen sowohl Oberflächen als auch Ressourcen. Für die tägliche oder mehrmals wöchentliche Reinigung stellen wir feste Teams, damit Ihre Mitarbeiter bekannte Gesichter sehen und Abläufe sich einspielen.",
      "Ob Einzelbüro in Hörde, Coworking-Space in der Nordstadt, Kanzlei am Phoenix-See oder mehrstöckiges Verwaltungsgebäude in Aplerbeck. Wir kennen die Besonderheiten Dortmunder Gewerbeobjekte und liefern ein Reinigungskonzept, das tatsächlich funktioniert. Auf Wunsch übernehmen wir zusätzlich Fensterreinigung, Teppichpflege oder Grundreinigungen in festen Zyklen.",
    ],
    benefits: [
      {
        title: "Individuelle Intervalle",
        description:
          "Täglich, mehrmals wöchentlich oder einmal pro Woche. Wir passen den Plan an Ihre Nutzung an.",
      },
      {
        title: "Feste Ansprechpartner",
        description:
          "Sie haben eine direkte Kontaktperson, die Ihr Objekt kennt und schnell reagiert.",
      },
      {
        title: "Umweltfreundliche Mittel",
        description:
          "Wir setzen auf schonende, zertifizierte Reinigungsmittel ohne aggressive Chemie.",
      },
      {
        title: "Diskret und pünktlich",
        description:
          "Wir reinigen außerhalb Ihrer Kernzeiten oder genau dann, wenn es am wenigsten stört.",
      },
      {
        title: "Dokumentierte Qualität",
        description:
          "Leistungsverzeichnis, Kontrollen und regelmäßige Rücksprachen sorgen für gleichbleibende Qualität.",
      },
      {
        title: "Vollversichert",
        description:
          "Haftpflicht-, Sachschaden- und Schlüsselversicherung schützen Ihr Eigentum.",
      },
    ],
    process: [
      {
        title: "1. Objektbegehung in Dortmund",
        description:
          "Wir besichtigen Ihre Räumlichkeiten kostenlos und unverbindlich und erfassen Quadratmeter, Oberflächen und Besonderheiten.",
      },
      {
        title: "2. Angebot & Leistungsverzeichnis",
        description:
          "Sie erhalten ein transparentes Angebot mit genau aufgeschlüsseltem Leistungsumfang.",
      },
      {
        title: "3. Einweisung und Start",
        description:
          "Wir stimmen Zugang, Schlüsselübergabe und Zeitfenster ab und starten pünktlich zum vereinbarten Termin.",
      },
      {
        title: "4. Laufende Qualitätskontrolle",
        description:
          "Feste Ansprechpartner, regelmäßige Rücksprachen und Anpassung bei veränderten Anforderungen.",
      },
    ],
    faq: [
      {
        question: "In welchen Dortmunder Stadtteilen sind Sie aktiv?",
        answer:
          "Wir reinigen Büros und Gewerbeobjekte in ganz Dortmund. Darunter Innenstadt, Hörde, Aplerbeck, Hombruch, Brackel, Huckarde, Nordstadt, Eving, Mengede, Lütgendortmund und Scharnhorst. Sowie im direkten Umland.",
      },
      {
        question: "Wie läuft die Schlüsselübergabe ab?",
        answer:
          "Nach Vertragsabschluss wird ein dokumentierter Schlüsselübergabeprozess vereinbart. Schlüssel werden verschlüsselt und versichert aufbewahrt, Ihr Objekt ist bei uns sicher.",
      },
      {
        question: "Reinigen Sie auch außerhalb der Geschäftszeiten?",
        answer:
          "Ja. Auf Wunsch reinigen wir früh morgens, abends oder am Wochenende, damit Ihr Tagesgeschäft nicht gestört wird.",
      },
      {
        question: "Wie wird die Reinigungsqualität sichergestellt?",
        answer:
          "Durch ein schriftliches Leistungsverzeichnis, regelmäßige Objektbegehungen mit dem Vorarbeiter und feste Teams, die Ihr Objekt kennen.",
      },
      {
        question: "Was kostet die Büroreinigung in Dortmund?",
        answer:
          "Der Preis richtet sich nach Fläche, Intervall, Bodenbelag und Leistungsumfang. Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot.",
      },
      {
        question: "Sind Sie versichert?",
        answer:
          "Ja, Fedox ist vollständig haftpflicht-, sachschaden- und schlüsselversichert. Details senden wir Ihnen gerne mit dem Angebot zu.",
      },
    ],
  },

  "glas-rahmenreinigung": {
    seoTitle: "Glas- & Rahmenreinigung Dortmund | Fedox Facility Services",
    seoDescription:
      "Streifenfreie Glas- und Rahmenreinigung in Dortmund. Innen und außen, Privat und Gewerbe. Jetzt kostenloses Angebot anfordern.",
    keywords: [
      "Glasreinigung Dortmund",
      "Fensterreinigung Dortmund",
      "Rahmenreinigung Dortmund",
      "Glasreiniger Dortmund",
      "Fensterputzer Dortmund Gewerbe",
    ],
    intro:
      "Saubere Fenster sind der erste Eindruck, den ein Dortmunder Gebäude hinterlässt. Und zugleich der am schnellsten unterschätzte. Staub, Pollen, Regenränder und die hohe Feinstaubbelastung an Hauptstraßen wie dem Wallring setzen Glasflächen ständig zu. Fedox reinigt Fenster, Rahmen und Fensterbänke streifenfrei, materialschonend und termintreu. Vom Einfamilienhaus in Aplerbeck bis zur Glasfassade am Phoenix-See.",
    paragraphs: [
      "Fenster bestehen aus deutlich mehr als nur Glas. Gummi- und Silikondichtungen, Rahmenprofile aus Aluminium oder Kunststoff und die Falze sammeln über die Zeit Schmutz, der bei einer reinen Glasreinigung übersehen wird. Wir reinigen das komplette Fensterelement: Glas innen und außen, Rahmen, Griffe, Falze und Fensterbänke. So bleibt Ihr Fenster nicht nur optisch perfekt, sondern technisch länger intakt, Dichtungen bleiben elastisch, Beschläge gängig.",
      "Für die Glasreinigung in Dortmund nutzen wir klassische Einwischer-Technik für bodennahe Flächen und professionelle Reinstwasser-Teleskopsysteme für Fensterbänder und Fassaden in Höhen bis rund 15 Metern. Das spart Gerüste, ist leiser und hinterlässt keinerlei Streifen. Bei anspruchsvolleren Objekten wie Atrien oder Verglasungen in mehrstöckigen Bürogebäuden arbeiten wir mit gesicherter Steigtechnik und zertifizierten Höhenarbeitern.",
      "Wir betreuen in Dortmund Einfamilienhäuser, Mehrfamilienhäuser, Praxen, Kanzleien, Restaurants, Hotels und Gewerbeobjekte in festen Intervallen. Monatlich, quartalsweise oder halbjährlich, je nach Verschmutzungsgrad und Lage. Unternehmen, deren Fensterfronten zur Straße hin liegen, empfehlen wir häufigere Intervalle; bei geschützten Innenhof-Objekten reichen oft zwei Reinigungen pro Jahr.",
    ],
    benefits: [
      {
        title: "Streifenfreies Ergebnis",
        description:
          "Mit professioneller Technik und hochwertigen Abziehern. Garantiert ohne Schlieren.",
      },
      {
        title: "Komplette Elemente",
        description:
          "Glas, Rahmen, Dichtungen, Falze und Fensterbänke werden vollständig gereinigt.",
      },
      {
        title: "Reinstwasser-Technik",
        description:
          "Für hohe Glasflächen: mineralfreies Wasser trocknet völlig rückstandsfrei auf.",
      },
      {
        title: "Innen und außen",
        description:
          "Einzeltermin oder kombiniert. Wir stimmen den Ablauf mit Ihnen ab.",
      },
      {
        title: "Feste Intervalle",
        description:
          "Auf Wunsch als regelmäßiger Wartungsvertrag mit Termin-Erinnerung.",
      },
      {
        title: "Auch schwer zugängliche Flächen",
        description:
          "Atrien, Oberlichter und Glasfassaden mit gesicherter Steigtechnik.",
      },
    ],
    process: [
      {
        title: "1. Besichtigung vor Ort",
        description:
          "Wir prüfen Fenstergrößen, Höhen, Anzahl und Zugänglichkeit direkt bei Ihnen in Dortmund.",
      },
      {
        title: "2. Festpreisangebot",
        description:
          "Transparente Kalkulation pro Fensterelement oder als Pauschalpreis pro Termin.",
      },
      {
        title: "3. Reinigung",
        description:
          "Wir reinigen innen und/oder außen, Rahmen und Dichtungen. Inklusive Abdeckung sensibler Bereiche.",
      },
      {
        title: "4. Sichtprüfung",
        description:
          "Gemeinsame Abnahme nach der Reinigung und bei Bedarf Nachbearbeitung einzelner Flächen.",
      },
    ],
    faq: [
      {
        question: "Reinigen Sie in Dortmund auch hohe Glasfassaden?",
        answer:
          "Ja. Bis rund 15 Meter Höhe mit Reinstwasser-Teleskopsystem, darüber mit Hub- oder Steigtechnik. Wir kennen die Anforderungen bei Dortmunder Gewerbeobjekten.",
      },
      {
        question: "Wie oft sollten Fenster in Dortmund gereinigt werden?",
        answer:
          "Private Haushalte: zwei- bis dreimal pro Jahr. Gewerbe mit Straßenlage: vier- bis sechsmal pro Jahr. Gastronomie und Einzelhandel oft monatlich.",
      },
      {
        question: "Werden Fensterbänke und Rahmen mitgereinigt?",
        answer:
          "Ja, unsere Standardleistung umfasst Glas, Rahmen, Dichtungen und Fensterbänke außen. Innenfensterbänke auf Wunsch ebenfalls.",
      },
      {
        question: "Bieten Sie Wartungsverträge an?",
        answer:
          "Ja. Viele unserer Dortmunder Kunden buchen feste Intervalle mit automatischer Terminplanung und Preisstabilität.",
      },
      {
        question: "Was kostet eine Fensterreinigung?",
        answer:
          "Preise starten bei kleineren Privatobjekten ab rund 80 Euro. Exakte Kosten ermitteln wir nach kurzer Besichtigung.",
      },
      {
        question: "Hinterlassen Sie Schmutz durch Leitern und Wasser?",
        answer:
          "Nein. Wir decken Innenbereiche ab, nutzen Abdeckvlies und reinigen sofort nach. Bei uns geht nichts kaputt.",
      },
    ],
  },

  treppenhausreinigung: {
    seoTitle: "Treppenhausreinigung Dortmund | Fedox Facility Services",
    seoDescription:
      "Zuverlässige Treppenhausreinigung in Dortmund für Mehrfamilienhäuser, Bürogebäude und Gewerbeobjekte. Feste Intervalle, faire Preise.",
    keywords: [
      "Treppenhausreinigung Dortmund",
      "Hausreinigung Dortmund",
      "Treppenhausreiniger Dortmund",
      "Mehrfamilienhaus Reinigung Dortmund",
      "Hausbetreuung Dortmund",
    ],
    intro:
      "Das Treppenhaus ist die Visitenkarte jedes Mehrfamilienhauses und jedes Bürogebäudes. Wer in Dortmund ein gepflegtes Treppenhaus zeigt, signalisiert Wertschätzung. Gegenüber Mietern, Besuchern und Eigentümern gleichermaßen. Wir von Fedox übernehmen die regelmäßige Treppenhausreinigung in Dortmund: mit festen Teams, klaren Intervallen und fairer Preisgestaltung.",
    paragraphs: [
      "Eine professionelle Treppenhausreinigung umfasst deutlich mehr als nur das Wischen der Stufen. Wir reinigen Treppenstufen, Podeste, Geländer und Handläufe, Haustüren innen und außen, Briefkastenanlagen, Fensterbänke, Lichtschalter, Klingelanlagen und den Eingangsbereich. Spinnweben werden entfernt, Kellertreppen bei Bedarf mit integriert und Wischproben zur Qualitätskontrolle dokumentiert.",
      "Für Dortmunder Hausverwaltungen und private Eigentümer sind vor allem drei Dinge wichtig: Termintreue, gleichbleibende Qualität und klare Kommunikation. Genau das liefern wir. Jedes Objekt hat bei uns einen festen Ansprechpartner, einen schriftlich fixierten Reinigungsplan und dokumentierte Reinigungstermine. So wissen Eigentümer, Mieter und Verwaltung jederzeit, wann gereinigt wurde und was konkret enthalten ist.",
      "Wir betreuen Mehrfamilienhäuser, Eigentumswohnanlagen und Bürogebäude in der Dortmunder Innenstadt, in Hörde, Aplerbeck, Hombruch, Brackel, Huckarde, der Nordstadt und allen weiteren Stadtteilen. Egal ob klassisches Gründerzeithaus, Plattenbau oder moderner Neubau. Unsere Dortmunder Teams bringen passende Reinigungstechnik mit und arbeiten zuverlässig und zügig.",
    ],
    benefits: [
      {
        title: "Feste Reinigungsintervalle",
        description:
          "Wöchentlich, 14-täglich oder monatlich. Exakt nach Reinigungsplan.",
      },
      {
        title: "Umfassender Leistungsumfang",
        description:
          "Treppen, Geländer, Fensterbänke, Eingangsbereich und Briefkastenanlage. Alles inklusive.",
      },
      {
        title: "Termintreue",
        description:
          "Feste Wochentage, dokumentierte Ausführung, keine kurzfristigen Ausfälle.",
      },
      {
        title: "Faire Pauschalpreise",
        description:
          "Transparente Monatspauschale ohne versteckte Zusatzkosten.",
      },
      {
        title: "Hausverwaltung-freundlich",
        description:
          "Zentrale Abrechnung, klare Kommunikation und geregelte Reklamationswege.",
      },
      {
        title: "Zusatzleistungen auf Wunsch",
        description:
          "Grundreinigung, Glasreinigung im Treppenhaus oder Winterdienst lassen sich kombinieren.",
      },
    ],
    process: [
      {
        title: "1. Kostenlose Besichtigung",
        description:
          "Wir besichtigen das Treppenhaus in Dortmund und erfassen Größe, Belag und Besonderheiten.",
      },
      {
        title: "2. Angebot mit Fixpreis",
        description:
          "Sie erhalten ein schriftliches Angebot mit Leistungsbeschreibung und Monatspauschale.",
      },
      {
        title: "3. Regelmäßige Reinigung",
        description:
          "Nach festem Wochenplan durch unser eingespieltes Team. Inklusive Dokumentation.",
      },
      {
        title: "4. Quartalsweise Qualitätskontrolle",
        description:
          "Rücksprache mit Verwaltung oder Eigentümer und Anpassung bei Bedarf.",
      },
    ],
    faq: [
      {
        question: "Wie oft wird das Treppenhaus gereinigt?",
        answer:
          "Für Dortmunder Mehrfamilienhäuser empfehlen wir wöchentlich oder 14-täglich. Bei Bürogebäuden häufig wöchentlich oder zwei- bis dreimal pro Woche.",
      },
      {
        question: "Können Hausverwaltungen zentral abrechnen?",
        answer:
          "Ja. Wir arbeiten mit vielen Dortmunder Hausverwaltungen zusammen. Zentrale Rechnungsstellung und objektweise Leistungsnachweise sind Standard.",
      },
      {
        question: "Übernehmen Sie auch die Fensterreinigung im Treppenhaus?",
        answer:
          "Ja, entweder als Bestandteil der Unterhaltsreinigung oder in festen Zyklen. Auf Wunsch kombiniert mit einer Grundreinigung.",
      },
      {
        question: "Was passiert im Krankheitsfall Ihres Teams?",
        answer:
          "Wir haben für jedes Dortmunder Objekt eine eingearbeitete Vertretung. Termine fallen nicht aus.",
      },
      {
        question: "Was kostet die Treppenhausreinigung in Dortmund?",
        answer:
          "Monatspauschalen starten je nach Größe und Intervall ab etwa 80 Euro für kleine Objekte. Wir rechnen transparent pro Etage und Stufenanzahl.",
      },
      {
        question: "Bieten Sie auch Grundreinigungen an?",
        answer:
          "Ja. Bei stark verschmutzten oder sehr lange nicht gepflegten Treppenhäusern starten wir mit einer Grundreinigung und übernehmen danach die Unterhaltsreinigung.",
      },
    ],
  },

  "hygiene-desinfektion": {
    seoTitle: "Hygiene- & Desinfektionsreinigung Dortmund | Fedox Facility Services",
    seoDescription:
      "Zertifizierte Hygiene- und Desinfektionsreinigung in Dortmund für Praxen, Büros und sensible Bereiche. Jetzt Angebot anfordern.",
    keywords: [
      "Desinfektionsreinigung Dortmund",
      "Hygienereinigung Dortmund",
      "Praxisreinigung Dortmund",
      "Arztpraxis Reinigung Dortmund",
      "Sanitärreinigung Dortmund",
    ],
    intro:
      "Hygiene ist in Dortmunder Arztpraxen, Bürogebäuden und öffentlichen Einrichtungen kein Detail, sondern Grundvoraussetzung. Wir von Fedox liefern eine professionelle Hygiene- und Desinfektionsreinigung, die messbar funktioniert. Mit zertifizierten Mitteln, geschultem Personal und dokumentierten Abläufen. Unsere Kunden in Dortmund reichen von Arztpraxen über Büros bis zu Seniorenheimen und Gemeinschaftsanlagen.",
    paragraphs: [
      "Der Unterschied zwischen normaler Reinigung und echter Desinfektion liegt in der Prozess-Sicherheit. Einfaches Wischen entfernt Schmutz, aber eine fachgerechte Desinfektionsreinigung reduziert Keime messbar und verhindert Kreuzkontaminationen zwischen Flächen. Wir arbeiten nach klar definierten Hygieneplänen: Handkontaktflächen, Sanitärbereiche, Patientenkontaktzonen und Gemeinschaftsflächen werden nach RKI-Empfehlungen gereinigt und mit VAH-gelisteten Mitteln desinfiziert.",
      "Für Dortmunder Arztpraxen, Zahnarztpraxen und Therapieeinrichtungen ist zuverlässige Hygiene keine Option, sondern gesetzliche Pflicht. Wir kennen die Anforderungen, stimmen Reinigungszyklen mit dem Praxisalltag ab und arbeiten außerhalb der Sprechzeiten. Farbcodierte Mikrofaser-Systeme, dosiergenaue Mittel und klar getrennte Arbeitsbereiche sind bei uns Standard. Nichts wird vermischt, nichts wird verschleppt.",
      "Neben Praxen unterstützen wir Dortmunder Unternehmen nach Krankheitsfällen im Team, bei erhöhtem Publikumsverkehr oder zur präventiven Grundhygiene. Gemeinschaftsräume, Küchen, Sanitärbereiche und stark frequentierte Verkehrswege werden gezielt desinfiziert. Schnell, diskret und gründlich.",
    ],
    benefits: [
      {
        title: "VAH-gelistete Mittel",
        description:
          "Wir verwenden ausschließlich Desinfektionsmittel aus der VAH-Liste. Geprüft und zertifiziert.",
      },
      {
        title: "RKI-konforme Abläufe",
        description:
          "Unsere Reinigungsprozesse orientieren sich an den Empfehlungen des Robert-Koch-Instituts.",
      },
      {
        title: "Farbcodierte Systeme",
        description:
          "Keine Kreuzkontamination. Sensible Bereiche werden mit eigenen Tuchfarben gereinigt.",
      },
      {
        title: "Dokumentation",
        description:
          "Reinigungs- und Desinfektionsnachweise auf Anforderung schriftlich dokumentiert.",
      },
      {
        title: "Außerhalb der Sprechzeiten",
        description:
          "Wir reinigen, wenn keine Patienten anwesend sind, Abläufe bleiben ungestört.",
      },
      {
        title: "Auch kurzfristig verfügbar",
        description:
          "Nach Krankheitsfällen oder bei akutem Bedarf übernehmen wir kurzfristig Einsätze in Dortmund.",
      },
    ],
    process: [
      {
        title: "1. Hygieneplan entwickeln",
        description:
          "Gemeinsam legen wir Reinigungsbereiche, Intervalle und Desinfektionsstufen fest.",
      },
      {
        title: "2. Schulung des Teams",
        description:
          "Das eingesetzte Personal wird auf Ihre Räume und Prozesse individuell eingewiesen.",
      },
      {
        title: "3. Reinigung nach Plan",
        description:
          "Regelmäßige Durchführung nach Hygieneplan mit dokumentierten Terminen.",
      },
      {
        title: "4. Nachweise und Audit",
        description:
          "Auf Wunsch stellen wir Protokolle und Nachweise für interne Audits zur Verfügung.",
      },
    ],
    faq: [
      {
        question: "Sind Sie für Dortmunder Arztpraxen zugelassen?",
        answer:
          "Ja. Wir arbeiten nach RKI-Empfehlungen und setzen ausschließlich VAH-gelistete Mittel ein. Die Grundlage für praxiskonforme Reinigung.",
      },
      {
        question: "Welche Flächen werden desinfiziert?",
        answer:
          "Handkontaktflächen, Türgriffe, Lichtschalter, Patientenstühle, Sanitärbereiche und alle Flächen, die im Hygieneplan festgelegt sind.",
      },
      {
        question: "Bieten Sie auch Einmalreinigungen an?",
        answer:
          "Ja, z. B. nach Krankheitsfällen im Büro, bei Neueröffnungen oder zur Grundhygiene vor einem wichtigen Termin.",
      },
      {
        question: "Wird die Desinfektion dokumentiert?",
        answer:
          "Ja. Auf Wunsch führen wir Reinigungsbücher und stellen Nachweise für Audits und Zertifizierungen zur Verfügung.",
      },
      {
        question: "Arbeiten Sie auch außerhalb der Sprechzeiten?",
        answer:
          "Ja. Die meisten Dortmunder Praxen reinigen wir abends oder früh morgens. So wird der Praxisbetrieb nicht gestört.",
      },
      {
        question: "Wie unterscheidet sich Desinfektions- von normaler Reinigung?",
        answer:
          "Reinigung entfernt sichtbaren Schmutz. Desinfektion reduziert zusätzlich Krankheitserreger auf ein hygienisch unbedenkliches Maß. Mit geprüften Mitteln und definierten Einwirkzeiten.",
      },
    ],
  },

  fassadenreinigung: {
    seoTitle: "Fassadenreinigung Dortmund | Fedox Facility Services",
    seoDescription:
      "Professionelle Fassadenreinigung in Dortmund. Schonend, gründlich, wertsteigernd. Jetzt unverbindliches Angebot anfordern.",
    keywords: [
      "Fassadenreinigung Dortmund",
      "Hausfassade reinigen Dortmund",
      "Algenentfernung Fassade Dortmund",
      "Fassadenreiniger Dortmund",
      "Fassadensanierung Dortmund",
    ],
    intro:
      "Eine saubere Fassade steigert den Wert jeder Immobilie in Dortmund. Und eine vernachlässigte Fassade frisst sich irgendwann ins Material. Algen, Moos, Ruß und Staub haften besonders an Nord- und Wetterseiten, die im Dortmunder Klima reichlich Feuchtigkeit abbekommen. Wir reinigen Fassaden schonend, materialschützend und wirksam. Ohne Hochdruck, ohne aggressive Chemie, ohne Substanzverlust.",
    paragraphs: [
      "Der Schlüssel zu einer langlebigen Fassadenreinigung liegt in der richtigen Methode. Putzfassaden, WDVS-Systeme, Klinker, Holzfassaden und Naturstein brauchen jeweils einen eigenen Ansatz. Wir setzen je nach Untergrund auf Niederdruck-Verfahren, Heißwasser-Reinigung, biologisch abbaubare Fassadenreiniger oder reine mechanische Bürstenreinigung. Die Auswahl erfolgt nach Besichtigung. Nie pauschal.",
      "Gerade an Dortmunder Altbauten und gut gepflegten Mehrfamilienhäusern zeigen sich typische Verschmutzungsmuster: grünlich-gräuliche Streifen unter Fensterbänken, Algenbefall an Nordseiten, Rußablagerungen an verkehrsnahen Fassaden und verfärbte Bereiche rund um Dachrinnen. Wir analysieren die Ursache, behandeln die Fläche und entfernen nicht nur die Verschmutzung, sondern reduzieren auch Neubefall deutlich. Bei Bedarf mit einer schützenden Nachbehandlung.",
      "Für Eigentümer und Hausverwaltungen in Dortmund bedeutet das: weniger Folgekosten durch Materialschäden, eine deutlich sichtbar aufgewertete Optik und eine verlängerte Lebensdauer des Fassadenputzes. Wir arbeiten mit gesicherter Steigtechnik, Hubarbeitsbühnen oder Gerüst. Je nach Objekt und Zugänglichkeit in den Dortmunder Stadtteilen.",
    ],
    benefits: [
      {
        title: "Schonende Verfahren",
        description:
          "Niederdruck, Heißwasser und biologische Reiniger. Keine Substanzschäden.",
      },
      {
        title: "Für jede Fassade",
        description:
          "Putz, WDVS, Klinker, Holz, Naturstein. Wir wählen die passende Methode.",
      },
      {
        title: "Algen dauerhaft entfernt",
        description:
          "Wir reinigen gründlich und behandeln bei Bedarf präventiv nach.",
      },
      {
        title: "Werterhaltung",
        description:
          "Regelmäßige Reinigung verlängert die Lebensdauer des Putzes deutlich.",
      },
      {
        title: "Saubere Arbeit",
        description:
          "Abdeckungen, abfließendes Wasser wird kontrolliert, Gehwege bleiben sauber.",
      },
      {
        title: "Gerüst und Hubtechnik",
        description:
          "Wir organisieren bei Bedarf Gerüst oder Hubarbeitsbühne. Alles aus einer Hand.",
      },
    ],
    process: [
      {
        title: "1. Objektbesichtigung",
        description:
          "Wir kommen zu Ihnen nach Dortmund und bewerten Fassade, Untergrund und Verschmutzungsgrad.",
      },
      {
        title: "2. Methodenwahl",
        description:
          "Je nach Material und Zustand wählen wir das passende Reinigungsverfahren.",
      },
      {
        title: "3. Reinigung",
        description:
          "Gründliche Reinigung mit kontrolliertem Wasserabfluss und Schutz für Fenster und Grünflächen.",
      },
      {
        title: "4. Optionale Nachbehandlung",
        description:
          "Präventive Behandlung gegen erneuten Algenbefall für langanhaltend saubere Fassaden.",
      },
    ],
    faq: [
      {
        question: "Wie oft sollte eine Fassade in Dortmund gereinigt werden?",
        answer:
          "Je nach Lage und Material alle 3 bis 10 Jahre. Nordseiten und Objekte in der Nähe stark befahrener Straßen benötigen häufigere Reinigung.",
      },
      {
        question: "Ist Hochdruck-Reinigung schädlich?",
        answer:
          "Bei vielen Putzfassaden ja. Wir setzen fast ausschließlich Niederdruck- und Heißwasser-Verfahren ein, die den Putz nicht aufreißen.",
      },
      {
        question: "Werden Fenster und Pflanzen geschützt?",
        answer:
          "Selbstverständlich. Wir decken Grünflächen ab, schützen Fenster und kontrollieren den Wasserabfluss.",
      },
      {
        question: "Können Sie auch große Fassaden reinigen?",
        answer:
          "Ja. Wir organisieren bei Bedarf Gerüst oder Hubarbeitsbühne. Auch für mehrgeschossige Objekte in Dortmund.",
      },
      {
        question: "Was kostet eine Fassadenreinigung?",
        answer:
          "Kleinere Einfamilienhäuser starten ab rund 800 Euro. Große Mehrfamilienhäuser oder Gewerbeobjekte kalkulieren wir nach Quadratmetern und Zugänglichkeit.",
      },
      {
        question: "Entfernen Sie auch Graffiti?",
        answer:
          "Ja, Graffitientfernung bieten wir als Teil der Sonderreinigung an. Sprechen Sie uns darauf an.",
      },
    ],
  },

  sonderreinigung: {
    seoTitle: "Sonderreinigung Dortmund | Fedox Facility Services",
    seoDescription:
      "Professionelle Sonderreinigung in Dortmund. Flexibel, gründlich, lösungsorientiert. Für alles, was nicht Standard ist. Jetzt anfragen.",
    keywords: [
      "Sonderreinigung Dortmund",
      "Spezialreinigung Dortmund",
      "Grundreinigung Dortmund",
      "Teppichreinigung Dortmund",
      "Polsterreinigung Dortmund",
    ],
    intro:
      "Nicht jede Reinigungsaufgabe passt in ein festes Leistungsverzeichnis. Wenn Sie in Dortmund eine Reinigung brauchen, die über den Alltag hinausgeht. Ob Teppich, Polster, Nikotin-Belastung, Wasserschaden oder Vor-Vermietungs-Reinigung. Sind wir für Sie da. Fedox übernimmt Sonderreinigungen kurzfristig, diskret und lösungsorientiert, mit passender Technik für jedes Problem.",
    paragraphs: [
      "Typische Sonderreinigungen in Dortmund sind Teppich- und Polsterreinigungen in Büros und Praxen, Nikotinentfernung in Mietwohnungen vor der Neuvermietung, Grundreinigungen nach jahrelanger Nutzung, Reinigungen nach Handwerker-Einsätzen und Einmalreinigungen vor wichtigen Terminen wie Besichtigungen, Audits oder Firmenevents. Jede dieser Aufgaben braucht eigene Maschinen und Chemie. Und vor allem Erfahrung, um das richtige Verfahren zu wählen.",
      "Wir arbeiten mit professionellen Sprühextraktions-Geräten für Teppiche, Polster und Matratzen, mit Einscheibenmaschinen für Grundreinigungen harter Böden, mit Hochdruck und speziellen Lösungen für hartnäckige Flecken und Beläge. Bei Nikotin- oder Geruchsbelastung kombinieren wir chemische Reinigung mit Geruchsneutralisation und sorgen dafür, dass Wohnung oder Büro wieder frei nutzbar sind.",
      "Unser Vorteil als Dortmunder Anbieter: Wir sind kurzfristig verfügbar, kennen die Objekte in der Region und kommen schnell vor Ort. Gerade bei Wasserschäden oder vor der Neuvermietung zählt jede Stunde. Rufen Sie uns an. Wir schauen uns das an und geben Ihnen noch am selben Tag eine klare Einschätzung.",
    ],
    benefits: [
      {
        title: "Flexibel und individuell",
        description:
          "Jede Sonderreinigung wird auf Ihr konkretes Problem zugeschnitten.",
      },
      {
        title: "Kurzfristig verfügbar",
        description:
          "Wir kommen auf Wunsch kurzfristig, Dortmund und Umgebung meist binnen 24 bis 48 Stunden.",
      },
      {
        title: "Professionelle Maschinen",
        description:
          "Sprühextraktion, Einscheibenmaschine, Hochdruck, Einscheibenpoliermaschine. Alles im Einsatz.",
      },
      {
        title: "Erfahrung mit Schwierigem",
        description:
          "Nikotin, starker Kalk, hartnäckige Flecken, Bauschmutz. Kein Standardfall schreckt uns.",
      },
      {
        title: "Transparentes Angebot",
        description:
          "Nach kurzer Besichtigung erhalten Sie einen klaren Festpreis.",
      },
      {
        title: "Diskret und zuverlässig",
        description:
          "Wir arbeiten respektvoll und diskret. Auch in sensiblen Situationen.",
      },
    ],
    process: [
      {
        title: "1. Bedarfsklärung",
        description:
          "Sie beschreiben uns das Problem per Telefon oder Foto. Wir geben eine erste Einschätzung.",
      },
      {
        title: "2. Besichtigung",
        description:
          "Bei größeren Aufträgen kommen wir kurzfristig zur Besichtigung nach Dortmund.",
      },
      {
        title: "3. Angebot und Ausführung",
        description:
          "Sie erhalten ein schriftliches Angebot und wir führen die Reinigung termingerecht durch.",
      },
      {
        title: "4. Abnahme",
        description:
          "Gemeinsame Abnahme vor Ort. Bei Bedarf Nachbearbeitung noch am selben Tag.",
      },
    ],
    faq: [
      {
        question: "Was fällt alles unter Sonderreinigung?",
        answer:
          "Alles, was über die regelmäßige Unterhaltsreinigung hinausgeht. Z. B. Teppich- und Polsterreinigung, Nikotinentfernung, Wasserschäden, Grundreinigung nach Handwerker-Einsätzen oder Vor-Vermietungs-Reinigungen.",
      },
      {
        question: "Wie schnell können Sie in Dortmund vor Ort sein?",
        answer:
          "In dringenden Fällen meist am selben Tag oder am nächsten Werktag. Rufen Sie uns direkt an.",
      },
      {
        question: "Können Sie auch Teppiche und Polster reinigen?",
        answer:
          "Ja, mit professioneller Sprühextraktions-Technik. Tief reinigend, schnell trocknend und schonend zum Material.",
      },
      {
        question: "Entfernen Sie Nikotinbelastung?",
        answer:
          "Ja. Wände und Decken werden entsprechend vorbehandelt, Bodenbeläge gereinigt oder entfernt und der Raum mit Geruchsneutralisation behandelt.",
      },
      {
        question: "Übernehmen Sie Grundreinigungen vor dem Einzug?",
        answer:
          "Sehr oft. Vor dem Bezug einer Dortmunder Wohnung oder eines Büros reinigen wir alle Flächen, Armaturen und Böden gründlich.",
      },
      {
        question: "Was kostet eine Sonderreinigung?",
        answer:
          "Da jede Aufgabe anders ist, kalkulieren wir individuell. Entweder nach Stundenaufwand oder als Pauschale, in jedem Fall vor Auftragsbeginn transparent.",
      },
    ],
  },

  photovoltaikreinigung: {
    seoTitle: "Photovoltaik-Reinigung Dortmund | Fedox Facility Services",
    seoDescription:
      "Fachgerechte Photovoltaik-Reinigung in Dortmund für maximale Erträge. Schonend, materialschützend, mit vollem Versicherungsschutz.",
    keywords: [
      "Photovoltaikreinigung Dortmund",
      "Solaranlagen reinigen Dortmund",
      "PV-Reinigung Dortmund",
      "Solarpanel Reinigung Dortmund",
      "Photovoltaik Wartung Dortmund",
    ],
    intro:
      "Verschmutzte Photovoltaik-Anlagen verlieren mehr Ertrag, als viele Betreiber in Dortmund ahnen. Pollen, Staub, Laub, Moos, Vogelkot und vor allem der charakteristische Niederschlagsfilm aus Feinstaub und Ruß bilden gemeinsam eine Schicht, die die Lichtdurchlässigkeit und damit die Leistung spürbar reduziert. Wir reinigen PV-Anlagen in Dortmund schonend, materialschützend und wirtschaftlich sinnvoll.",
    paragraphs: [
      "Eine professionelle PV-Reinigung ist kein Luxus, sondern eine Wartungsmaßnahme mit messbarer Rendite. Je nach Standort, Neigungswinkel und Verschmutzungsgrad liegen Ertragsverluste bei ungereinigten Dortmunder Anlagen zwischen 5 und 20 Prozent pro Jahr. Gerade bei Flachdach-Anlagen auf Industrie- und Gewerbehallen sammelt sich Schmutz besonders schnell. Dort ist der Effekt einer regelmäßigen Reinigung am deutlichsten.",
      "Wir arbeiten mit entionisiertem, osmosegefiltertem Reinstwasser und weichen Teleskop-Bürsten, die speziell für PV-Module konstruiert sind. Kein Hochdruck, keine aggressive Chemie, keine Scheuermittel. Alles, was die Antireflexbeschichtung der Module angreifen könnte, kommt bei uns nicht zum Einsatz. Bei Satteldächern sichern wir unsere Mitarbeiter über Anschlagpunkte oder Steigtechnik; auf Flachdächern arbeiten wir mit mobilen Sicherungssystemen.",
      "Für Dortmunder PV-Betreiber empfehlen wir eine jährliche Sichtprüfung und je nach Standort alle 1 bis 3 Jahre eine vollständige Reinigung. Vor allem Anlagen in Nähe zu Äckern (Pollen und Staub), zu Industrie (Feinstaub) oder unter Bäumen (Laub und Harz) profitieren deutlich. Wir beraten ehrlich und reinigen nur, wenn es sich wirtschaftlich lohnt.",
    ],
    benefits: [
      {
        title: "Mehr Ertrag",
        description:
          "Spürbar höhere Leistung Ihrer Anlage. Oft zwischen 5 und 20 Prozent.",
      },
      {
        title: "Reinstwasser-Technik",
        description:
          "Kein Chemie-Einsatz, keine Kalkflecken. Trocknet rückstandsfrei.",
      },
      {
        title: "Schonend für Module",
        description:
          "Weiche Bürsten und Niederdruck. Die Antireflexbeschichtung bleibt unberührt.",
      },
      {
        title: "Mit Versicherungsschutz",
        description:
          "Wir sind vollständig versichert, Ihre Anlage ist bei uns sicher.",
      },
      {
        title: "Dokumentation",
        description:
          "Vorher-/Nachher-Fotos auf Wunsch. Für Betriebstagebuch und Nachweise.",
      },
      {
        title: "Feste Wartungsintervalle",
        description:
          "Regelmäßige Termine mit automatischer Erinnerung. Bequem für Gewerbebetriebe.",
      },
    ],
    process: [
      {
        title: "1. Anlagen-Check",
        description:
          "Wir prüfen Größe, Neigung und Erreichbarkeit Ihrer Dortmunder PV-Anlage.",
      },
      {
        title: "2. Angebot",
        description:
          "Festpreis pro Quadratmeter oder pauschal pro Reinigungstermin. Schriftlich und transparent.",
      },
      {
        title: "3. Fachgerechte Reinigung",
        description:
          "Mit Reinstwasser, weichen Teleskopbürsten und gesicherter Dacharbeit.",
      },
      {
        title: "4. Sichtkontrolle",
        description:
          "Abschließende Sichtprüfung und Dokumentation. Auf Wunsch mit Ertragsberichten vergleichbar.",
      },
    ],
    faq: [
      {
        question: "Wie viel mehr Ertrag bringt eine Reinigung?",
        answer:
          "Das hängt vom Verschmutzungsgrad ab. Typisch sind in Dortmund 5–15 Prozent bei stark verschmutzten Anlagen nach 2–3 Jahren ohne Reinigung.",
      },
      {
        question: "Geht durch Reinigung die Garantie verloren?",
        answer:
          "Nein. Im Gegenteil. Die meisten Hersteller schreiben regelmäßige Reinigung sogar als Pflicht vor. Wir reinigen fachgerecht und dokumentiert.",
      },
      {
        question: "Wie oft soll eine PV-Anlage in Dortmund gereinigt werden?",
        answer:
          "Privatanlagen meist alle 2–3 Jahre, gewerbliche Anlagen je nach Standort jährlich. Anlagen unter Bäumen oder in Industrienähe häufiger.",
      },
      {
        question: "Arbeiten Sie auch auf großen Flachdach-Anlagen?",
        answer:
          "Ja. Besonders Gewerbe- und Industrieanlagen in Dortmund und Umgebung gehören zu unseren Kern-Einsatzgebieten.",
      },
      {
        question: "Welche Jahreszeit eignet sich am besten?",
        answer:
          "Frühjahr (nach Pollen- und Winterablagerungen) und Herbst (nach Laub). Vermieden wird direkte Mittagssonne im Hochsommer.",
      },
      {
        question: "Was kostet die PV-Reinigung?",
        answer:
          "Je nach Zugänglichkeit und Fläche rechnen wir pro Quadratmeter. Kleinere Dachanlagen in Dortmund meist pauschal. Wir erstellen nach kurzem Check ein Festpreisangebot.",
      },
    ],
  },

  gebaeudemanagement: {
    seoTitle: "Gebäudemanagement Dortmund | Fedox Facility Services",
    seoDescription:
      "Professionelles Gebäudemanagement in Dortmund. Werterhaltung, technische Betreuung und Reinigung aus einer Hand. Jetzt anfragen.",
    keywords: [
      "Gebäudemanagement Dortmund",
      "Facility Management Dortmund",
      "Hausmeisterservice Dortmund",
      "Objektbetreuung Dortmund",
      "Gebäudereinigung Dortmund",
    ],
    intro:
      "Gebäudemanagement in Dortmund bedeutet: ein Ansprechpartner für alles, was die Immobilie am Laufen hält. Reinigung, Außenanlagen, Winterdienst, kleinere Reparaturen, Entrümpelungen und die regelmäßige Kontrolle des Gesamtzustands. Wir von Fedox bündeln diese Leistungen für Eigentümer, Hausverwaltungen und Unternehmen in Dortmund. Verlässlich, transparent und mit klarer Zuständigkeit.",
    paragraphs: [
      "Der größte Vorteil eines strukturierten Gebäudemanagements liegt in der Entlastung des Eigentümers oder der Verwaltung. Statt mit fünf verschiedenen Dienstleistern zu koordinieren, haben Sie einen einzigen Ansprechpartner, der die Abläufe kennt, Termine plant und Probleme vor Ort löst. Wir übernehmen die klassische Hausmeistertätigkeit, kombinieren sie mit Reinigung, Grünpflege und Winterdienst und ergänzen bei Bedarf kleinere Reparaturen.",
      "Für Dortmunder Wohn- und Gewerbeobjekte bieten wir individuelle Betreuungspakete: von der einmaligen Objektbegehung über wöchentliche Betreuung bis zum vollumfänglichen Facility-Paket inklusive 24/7-Bereitschaft. Wir kontrollieren Technikräume, Beleuchtung, Dach- und Keller-Bereiche, dokumentieren Mängel und koordinieren Handwerker, wenn größere Arbeiten notwendig werden. Sie bekommen regelmäßige Berichte und wissen immer, was in Ihrem Gebäude passiert.",
      "Gerade bei älteren Dortmunder Bestandsimmobilien lohnt sich ein strukturiertes Gebäudemanagement, weil viele Schäden dann entdeckt werden, wenn sie noch klein sind. Eine undichte Regenrinne, ein lockerer Dachziegel oder ein defekter Lichtschalter kostet wenig, wenn er früh behoben wird. Und kann teuer werden, wenn er monatelang unbemerkt bleibt.",
    ],
    benefits: [
      {
        title: "Ein Ansprechpartner",
        description:
          "Sie koordinieren nicht fünf Firmen, sondern haben einen festen Kontakt bei Fedox.",
      },
      {
        title: "Regelmäßige Kontrollen",
        description:
          "Feste Objektbegehungen mit Dokumentation kleiner Mängel.",
      },
      {
        title: "Alle Leistungen gebündelt",
        description:
          "Reinigung, Grünpflege, Winterdienst, Entrümpelung und Reparaturen. Alles aus einer Hand.",
      },
      {
        title: "Entlastung der Verwaltung",
        description:
          "Weniger Organisationsaufwand für Eigentümer und Hausverwalter.",
      },
      {
        title: "Wertsteigerung",
        description:
          "Gut gepflegte Objekte behalten ihren Wert und wirken professionell.",
      },
      {
        title: "Transparente Abrechnung",
        description:
          "Monatliche Berichte und klar gegliederte Rechnungen ohne Überraschungen.",
      },
    ],
    process: [
      {
        title: "1. Objektaufnahme",
        description:
          "Wir begehen das Gebäude mit Ihnen und erfassen Zustand, Technik und Außenanlagen.",
      },
      {
        title: "2. Betreuungskonzept",
        description:
          "Individueller Plan mit festen Terminen, klaren Zuständigkeiten und Pauschalpreisen.",
      },
      {
        title: "3. Laufende Betreuung",
        description:
          "Regelmäßige Einsätze nach Plan. Ergänzt durch kurzfristige Einsätze bei Bedarf.",
      },
      {
        title: "4. Reporting",
        description:
          "Monatliche oder quartalsweise Berichte mit Fotos und Mängel-Dokumentation.",
      },
    ],
    faq: [
      {
        question: "Was umfasst Ihr Gebäudemanagement in Dortmund?",
        answer:
          "Reinigung (innen und außen), Grünflächenpflege, Winterdienst, Hausmeistertätigkeiten, kleinere Reparaturen, Entrümpelungen und regelmäßige Objektbegehungen.",
      },
      {
        question: "Übernehmen Sie auch größere Reparaturen?",
        answer:
          "Kleinere Reparaturen führen wir selbst aus. Bei größeren Arbeiten koordinieren wir vertrauenswürdige Dortmunder Handwerker und bleiben Ihr zentraler Ansprechpartner.",
      },
      {
        question: "Gibt es eine Bereitschaft?",
        answer:
          "Auf Wunsch richten wir eine feste Rufbereitschaft ein. Besonders sinnvoll für Gewerbeobjekte und größere Wohnanlagen.",
      },
      {
        question: "Wie wird abgerechnet?",
        answer:
          "Meist über eine feste monatliche Pauschale, die alle Leistungen gemäß Vertrag abdeckt. Zusatzleistungen werden separat ausgewiesen.",
      },
      {
        question: "Arbeiten Sie mit Hausverwaltungen in Dortmund zusammen?",
        answer:
          "Ja. Das ist einer unserer Schwerpunkte. Wir kennen die Anforderungen an Dokumentation, Kommunikation und Termintreue, die Verwaltungen brauchen.",
      },
      {
        question: "Können bestehende Dienstleister eingebunden werden?",
        answer:
          "Ja. Wenn Sie bereits gute Partner für bestimmte Aufgaben haben, koordinieren wir diese gerne mit. Oder übernehmen ausschließlich die fehlenden Teilbereiche.",
      },
    ],
  },

  industriereinigung: {
    seoTitle: "Industriereinigung Dortmund | Fedox Facility Services",
    seoDescription:
      "Professionelle Industriereinigung in Dortmund für Hallen, Produktion und Logistik. Abgestimmt auf Ihren Betriebsablauf. Jetzt anfragen.",
    keywords: [
      "Industriereinigung Dortmund",
      "Hallenreinigung Dortmund",
      "Produktionsreinigung Dortmund",
      "Logistikreinigung Dortmund",
      "Industriebodenreinigung Dortmund",
    ],
    intro:
      "Industrie- und Produktionsbetriebe in Dortmund stellen besondere Anforderungen an Reinigung: große Flächen, spezielle Böden, laufender Betrieb und oft enge Zeitfenster. Wir von Fedox liefern Industriereinigung, die sich in Ihren Betriebsablauf einfügt. Mit professioneller Maschinentechnik, geschultem Personal und klaren Prozessen.",
    paragraphs: [
      "Typische Einsatzgebiete in Dortmund sind Produktionshallen, Lagerflächen, Logistikzentren, Werkstätten und Montagebereiche. Überall dort, wo klassische Reinigungstechnik an Grenzen stößt, arbeiten wir mit Aufsitz-Scheuersaugmaschinen, Handscheuersaug-Geräten, Einscheiben- und Kehrmaschinen. Unsere Teams beherrschen Industrieböden aus Beton, Estrich, Epoxidharz und Fliesen. Und wissen, welche Reinigungsmittel zum Material passen.",
      "Neben Böden reinigen wir auf Wunsch auch Hallendecken, Leuchten, Traversen, Regale und Stapler-Fahrwege. Gerade stark beanspruchte Gewerbebereiche. Etwa Wareneingänge, Verladezonen und Bereiche mit Staplerverkehr. Werden bei uns gezielter behandelt als der Rest der Halle. So bleiben sicherheitsrelevante Markierungen gut sichtbar und die Unfallgefahr sinkt.",
      "Wir planen die Reinigung so, dass Ihre Produktion möglichst nicht gestört wird. Nacht- und Wochenend-Einsätze sind für uns Standard, genauso wie Tageseinsätze in verkehrsschwachen Zeiten. Mit der richtigen Planung kombinieren wir Unterhalts- und Grundreinigung so, dass Ihre Dortmunder Halle dauerhaft sauber bleibt, ohne dass der Betrieb darunter leidet.",
    ],
    benefits: [
      {
        title: "Große Maschinen",
        description:
          "Aufsitz-Scheuersaugmaschinen bewältigen auch große Hallenflächen effizient.",
      },
      {
        title: "Industrie-Böden sicher",
        description:
          "Beton, Epoxid, Estrich, Fliesen. Wir wählen die richtige Chemie und Technik.",
      },
      {
        title: "Flexible Zeitfenster",
        description:
          "Nacht-, Wochenend- und Schichtarbeit möglich. Abgestimmt auf Ihren Betrieb.",
      },
      {
        title: "Decken und Traversen",
        description:
          "Staub und Verunreinigungen werden auch in der Höhe entfernt. Auf Wunsch mit Hubtechnik.",
      },
      {
        title: "Unterhalt und Grundreinigung",
        description:
          "Regelmäßige Pflege kombiniert mit periodischer Intensivreinigung.",
      },
      {
        title: "Sicherheitskonform",
        description:
          "Unterweisung, Schutzkleidung und Abstimmung mit Ihrer Sicherheitsabteilung.",
      },
    ],
    process: [
      {
        title: "1. Hallenbegehung in Dortmund",
        description:
          "Wir besichtigen Ihre Halle und erfassen Größe, Böden, Verschmutzungsgrad und betriebliche Besonderheiten.",
      },
      {
        title: "2. Reinigungskonzept",
        description:
          "Wir entwickeln einen Plan aus Unterhalts- und Grundreinigung. Samt Zeitfenstern.",
      },
      {
        title: "3. Durchführung",
        description:
          "Mit professionellen Maschinen und geschultem Personal. Auf Wunsch nachts oder am Wochenende.",
      },
      {
        title: "4. Laufende Anpassung",
        description:
          "Bei Veränderungen im Betrieb passen wir Zyklen und Umfang an.",
      },
    ],
    faq: [
      {
        question: "Welche Dortmunder Industrieböden reinigen Sie?",
        answer:
          "Beton, Estrich, Epoxidharz, Fliesen, Steinbelag. Wir wählen Chemie und Maschinen passend zum Material.",
      },
      {
        question: "Reinigen Sie auch im laufenden Betrieb?",
        answer:
          "Ja, wenn es die Arbeitssicherheit erlaubt. Bei sehr aktiven Bereichen empfehlen wir jedoch Nacht- oder Wochenend-Einsätze.",
      },
      {
        question: "Können Sie auch Hallendecken und Leuchten reinigen?",
        answer:
          "Ja, entweder im Rahmen einer Grundreinigung oder als Einzelauftrag. Wir organisieren bei Bedarf Hubarbeitsbühnen.",
      },
      {
        question: "Arbeiten Sie sicherheitskonform?",
        answer:
          "Selbstverständlich. Unser Personal ist unterwiesen, trägt passende PSA und hält sich an Ihre Sicherheitsvorschriften.",
      },
      {
        question: "Was kostet die Industriereinigung?",
        answer:
          "Wir kalkulieren nach Fläche, Häufigkeit und Zusatzleistungen. Nach einer Besichtigung erhalten Sie ein verbindliches Festpreisangebot.",
      },
      {
        question: "Übernehmen Sie auch einmalige Einsätze?",
        answer:
          "Ja. Viele Dortmunder Unternehmen buchen einmalige Grundreinigungen nach Umbauten, vor Audits oder zum Jahreswechsel.",
      },
    ],
  },

  baustellenreinigung: {
    seoTitle: "Baustellenreinigung & Bauendreinigung Dortmund | Fedox Facility Services",
    seoDescription:
      "Professionelle Baustellen- und Bauendreinigung in Dortmund nach Neubau, Umbau oder Sanierung. Bezugsfertig übergeben. Jetzt anfragen.",
    keywords: [
      "Baustellenreinigung Dortmund",
      "Bauendreinigung Dortmund",
      "Feinreinigung Dortmund",
      "Bauschutt entfernen Dortmund",
      "Neubaureinigung Dortmund",
    ],
    intro:
      "Am Ende jeder Baustelle in Dortmund steht derselbe Moment: der Schlüssel soll übergeben werden. Aber vorher muss das Gebäude bezugsfertig gereinigt sein. Wir von Fedox übernehmen Baustellen- und Bauendreinigung für Bauunternehmen, Handwerker, Bauträger und private Bauherren in Dortmund: gründlich, schnell und termintreu.",
    paragraphs: [
      "Die Bauendreinigung ist eine der anspruchsvollsten Reinigungsarten überhaupt. Feinstaub setzt sich überall ab, Klebereste und Folienrückstände müssen entfernt werden, Farbspritzer auf Böden und Armaturen wollen gelöst werden, und Silikonfugen müssen sauber von Randschmutz befreit sein. Wer hier oberflächlich arbeitet, sieht den Schmutz, sobald die Sonne zum ersten Mal durch die Fenster fällt. Und der Bauherr ebenfalls.",
      "Wir reinigen nach festem Schema: erst Grob-Reinigung mit Entsorgung von Bauresten, dann Feinreinigung aller Oberflächen, Böden, Fenster, Sanitärbereiche, Türen und Einbauten. Fugen werden nachgezogen, Armaturen entkalkt, Fliesen auf Zementschleier geprüft, Bodenbeläge je nach Material versiegelt oder imprägniert. Am Ende bekommen Sie ein Objekt, das nicht nur sauber aussieht, sondern auch sauber ist.",
      "Für Bauträger und Handwerker in Dortmund bieten wir auch die laufende Baustellenreinigung an: regelmäßiges Entfernen von Verpackungsmaterial, Baustaub und Schutt während der Bauphase. Das hält die Baustelle sicher, beschleunigt nachfolgende Gewerke und reduziert den Aufwand der finalen Bauendreinigung erheblich.",
    ],
    benefits: [
      {
        title: "Grob- und Feinreinigung",
        description:
          "Von der ersten groben Räumung bis zur bezugsfertigen Feinreinigung aus einer Hand.",
      },
      {
        title: "Fenster und Rahmen",
        description:
          "Silikonfugen, Klebereste, Folienrückstände. Alles wird entfernt.",
      },
      {
        title: "Zementschleier-Entfernung",
        description:
          "Fliesen und Naturstein werden professionell von Bauresten befreit.",
      },
      {
        title: "Sanitärbereiche",
        description:
          "Armaturen, Fugen und Fliesen werden entkalkt und poliert.",
      },
      {
        title: "Termintreue",
        description:
          "Wir arbeiten zum Schlüsselübergabe-Termin. Auch am Wochenende.",
      },
      {
        title: "Auch laufende Baureinigung",
        description:
          "Während der Bauphase zur Sicherheit und Beschleunigung der Folgegewerke.",
      },
    ],
    process: [
      {
        title: "1. Objektaufnahme",
        description:
          "Wir schauen uns die Dortmunder Baustelle an und erfassen Größe und Zustand.",
      },
      {
        title: "2. Angebot",
        description:
          "Transparente Kalkulation nach Quadratmeter und Leistungsumfang.",
      },
      {
        title: "3. Grobreinigung",
        description:
          "Entsorgung von Baumaterial, Staub und Schutt. Passend zu Ihrem Zeitplan.",
      },
      {
        title: "4. Feinreinigung",
        description:
          "Sanitär, Fenster, Böden, Einbauten. Bezugsfertig für die Schlüsselübergabe.",
      },
    ],
    faq: [
      {
        question: "Wie schnell können Sie in Dortmund reinigen?",
        answer:
          "Oft innerhalb von 24–72 Stunden nach Anfrage. Gerade bei Bauendreinigungen mit festem Übergabetermin reagieren wir schnell.",
      },
      {
        question: "Entsorgen Sie auch Bauschutt?",
        answer:
          "Ja, auf Wunsch inklusive fachgerechter Entsorgung. Wir kombinieren das gerne mit unseren Entrümpelungs-Leistungen.",
      },
      {
        question: "Versiegeln Sie Fliesen- und Steinböden?",
        answer:
          "Nach Absprache ja. Imprägnierung und Versiegelung schützen frische Dortmunder Neubauten vor Fleckenbildung.",
      },
      {
        question: "Arbeiten Sie auch am Wochenende?",
        answer:
          "Ja. Da Schlüsselübergaben oft montags stattfinden, reinigen viele Dortmunder Bauträger bei uns am Wochenende.",
      },
      {
        question: "Was kostet die Bauendreinigung?",
        answer:
          "Je nach Größe und Zustand meist zwischen 3 und 8 Euro pro Quadratmeter. Kleinere Einzelaufträge kalkulieren wir pauschal.",
      },
      {
        question: "Reinigen Sie auch während der Bauphase?",
        answer:
          "Ja, als laufende Baustellenreinigung. Besonders sinnvoll auf großen Dortmunder Baustellen mit vielen Gewerken.",
      },
    ],
  },

  "stein-pflasterreinigung": {
    seoTitle: "Stein- & Pflasterreinigung Dortmund | Fedox Facility Services",
    seoDescription:
      "Heißwasser-Reinigung für Stein und Pflaster in Dortmund. Moos, Algen und Unkraut entfernen. Mit Neuverfugung und Versiegelung.",
    keywords: [
      "Pflasterreinigung Dortmund",
      "Steinreinigung Dortmund",
      "Einfahrt reinigen Dortmund",
      "Terrassenreinigung Dortmund",
      "Heißwasserreinigung Dortmund",
    ],
    intro:
      "Pflastersteine, Terrassen und gepflasterte Einfahrten in Dortmund leiden über die Jahre an Moos, Algen, Grünbelag und hartnäckigem Schmutz. Was früher einladend wirkte, wirkt plötzlich alt und rutschig. Wir bringen gepflasterte Flächen zurück in Form. Mit Heißwasserreinigung bis 100 °C, professioneller Fugensanierung und schützender Versiegelung.",
    paragraphs: [
      "Heißwasserreinigung ist bei Pflaster- und Natursteinflächen der Goldstandard: sie löst Moos und Algen schneller als kaltes Wasser, benötigt weniger oder keine Chemie und ist deutlich materialschonender als scharfer Hochdruck allein. Wir fahren mit 100 °C heißem Wasser über die Fläche, und der Unterschied ist sofort sichtbar. Oft wird aus einer grau-grünen Einfahrt wieder eine fast neue.",
      "Nach der Reinigung stellt sich die wichtigere Frage: Was passiert mit den Fugen? Bei vielen Dortmunder Objekten sind die Fugen nach Jahren leer gewaschen, mit Unkrautwurzeln durchsetzt oder bröckelig. Wir entfernen das Unkraut mechanisch und verfugen neu. Wahlweise mit Quarzsand oder mit modernem Polymer-Fugensand, der aushärtet und Unkraut für viele Jahre fernhält. Eine abschließende Imprägnierung oder Versiegelung schützt die Fläche vor Wasser, Öl und erneutem Bewuchs.",
      "Wir reinigen in Dortmund Einfahrten von Einfamilienhäusern, Terrassen, Hof-Pflaster, Gehwege, Parkplätze und gepflasterte Außenbereiche von Gewerbeobjekten. Für private Haushalte lohnt sich meist ein Rhythmus von 3–5 Jahren; gewerblich genutzte Flächen häufiger. Unsere Schutzwirkung mit Imprägnierung hält je nach Lage und Nutzung zwischen 2 und 5 Jahren.",
    ],
    benefits: [
      {
        title: "Heißwasser bis 100 °C",
        description:
          "Löst Moos und Algen effizient und materialschonend. Ohne aggressive Chemie.",
      },
      {
        title: "Mechanische Unkrautentfernung",
        description:
          "Wurzelreste werden entfernt, nicht nur überdeckt.",
      },
      {
        title: "Neuverfugung",
        description:
          "Quarzsand oder Polymer-Fugensand. Für langlebige, stabile Fugen.",
      },
      {
        title: "Imprägnierung",
        description:
          "Schutzwirkung zwischen 2 und 5 Jahren gegen Wasser und Verschmutzung.",
      },
      {
        title: "Für jede Fläche",
        description:
          "Einfahrten, Terrassen, Gehwege, Parkplätze. Privat wie gewerblich.",
      },
      {
        title: "Sichtbarer Unterschied",
        description:
          "Vorher-/Nachher-Effekt, der Ihr Grundstück sofort aufwertet.",
      },
    ],
    process: [
      {
        title: "1. Flächenbesichtigung",
        description:
          "Wir prüfen Material, Zustand und Verfugung Ihrer Dortmunder Fläche.",
      },
      {
        title: "2. Heißwasserreinigung",
        description:
          "Gründliche Reinigung mit bis zu 100 °C, Moos und Algen verschwinden.",
      },
      {
        title: "3. Fugen und Neuverfugung",
        description:
          "Unkrautentfernung und optional Neuverfugung mit Quarz- oder Polymer-Fugensand.",
      },
      {
        title: "4. Imprägnierung",
        description:
          "Abschließender Schutz gegen Wasser, Schmutz und erneuten Bewuchs.",
      },
    ],
    faq: [
      {
        question: "Wie oft sollte Pflaster in Dortmund gereinigt werden?",
        answer:
          "Privat alle 3–5 Jahre, gewerblich häufiger. Mit Imprägnierung verlängern sich die Intervalle deutlich.",
      },
      {
        question: "Hält der Polymer-Fugensand tatsächlich länger?",
        answer:
          "Ja. Polymer-Fugensand härtet aus und verhindert Ein- und Bewuchs für mehrere Jahre. Deutlich länger als klassischer Quarzsand.",
      },
      {
        question: "Kann ich meine Terrasse auch reinigen lassen?",
        answer:
          "Sehr gerne. Terrassenreinigung ist einer unserer häufigsten Aufträge in Dortmund. Meist kombiniert mit Imprägnierung.",
      },
      {
        question: "Ist Heißwasserreinigung für alle Steine geeignet?",
        answer:
          "Für fast alle. Bei sehr empfindlichen Natursteinen beraten wir individuell und setzen ggf. andere Verfahren ein.",
      },
      {
        question: "Was kostet die Pflasterreinigung in Dortmund?",
        answer:
          "Je nach Zustand und Größe zwischen 2 und 6 Euro pro Quadratmeter Reinigung, Fugensanierung und Imprägnierung kommen optional hinzu.",
      },
      {
        question: "Arbeiten Sie umweltfreundlich?",
        answer:
          "Ja. Durch Heißwasser reduzieren wir den Chemieeinsatz auf ein Minimum. Reste werden fachgerecht entsorgt.",
      },
    ],
  },

  gartenpflege: {
    seoTitle: "Gartenpflege Dortmund | Fedox Facility Services",
    seoDescription:
      "Professionelle Gartenpflege in Dortmund für Privat- und Gewerbekunden. Rasen, Hecken, Sträucher. Regelmäßig und zuverlässig.",
    keywords: [
      "Gartenpflege Dortmund",
      "Gärtner Dortmund",
      "Hecke schneiden Dortmund",
      "Rasenpflege Dortmund",
      "Garten Gewerbe Dortmund",
    ],
    intro:
      "Ein gepflegter Garten oder eine gut gewartete Grünanlage prägt den Gesamteindruck jedes Dortmunder Grundstücks. Wir von Fedox übernehmen die regelmäßige Gartenpflege für Privatkunden und Gewerbe in Dortmund: Rasenpflege, Hecken- und Strauchschnitt, Unkrautbekämpfung und saisonale Arbeiten. Zuverlässig, termintreu und mit eigenem Maschinenpark.",
    paragraphs: [
      "Gartenpflege ist weit mehr als Rasenmähen. Regelmäßige Schnittarbeiten an Hecken und Sträuchern, das Vertikutieren und Düngen von Rasenflächen, das Entfernen von Laub im Herbst, das Auslichten überwachsener Bereiche und die regelmäßige Pflege von Beeten sind alles Teil eines guten Pflegekonzepts. Wer das vernachlässigt, zahlt später drauf. Mit verwilderten Flächen, kahlen Rasenstellen und abgestorbenen Pflanzen.",
      "Für Dortmunder Privatkunden bieten wir feste Pflegeintervalle oder Einzeltermine nach Bedarf. Typisch sind wöchentliches Mähen in der Hauptsaison, zwei Heckenschnitte pro Jahr, Herbst-Laub-Einsätze und einmaliges Frühjahrs-Auslichten. Für Gewerbekunden und Hausverwaltungen arbeiten wir mit Jahresverträgen, die alle Arbeiten enthalten, Sie haben einen Festpreis pro Monat und keine Überraschungen.",
      "Unsere Teams bringen eigene Maschinen mit: Rasenmäher, Aufsitzmäher für größere Flächen, Heckenscheren, Laubbläser, Vertikutierer und Freischneider. Grünabfälle entsorgen wir fachgerecht. Auf Wunsch inklusive Abtransport. So ist die Pflege für Sie ohne eigenen Aufwand erledigt, und die Fläche ist nach jedem Einsatz besenrein.",
    ],
    benefits: [
      {
        title: "Alles aus einer Hand",
        description:
          "Rasen, Hecken, Sträucher, Laub, Unkraut und Beete. Ein Team für alles.",
      },
      {
        title: "Eigene Maschinen",
        description:
          "Moderner Maschinenpark für jede Fläche. Vom Reihenhaus-Garten bis zur Außenanlage.",
      },
      {
        title: "Feste Intervalle",
        description:
          "Wöchentlich, 14-täglich oder saisonal. Nach Ihrem Bedarf.",
      },
      {
        title: "Grünabfall-Entsorgung",
        description:
          "Auf Wunsch inklusive Abtransport, Sie bleiben sauber.",
      },
      {
        title: "Termintreu",
        description:
          "Feste Wochentage und verlässliche Ausführung.",
      },
      {
        title: "Jahrespauschalen möglich",
        description:
          "Eine klare Monatspauschale für alle Pflegearbeiten eines ganzen Jahres.",
      },
    ],
    process: [
      {
        title: "1. Beratung und Begehung",
        description:
          "Wir besichtigen Ihren Garten in Dortmund und erfassen Pflanzenbestand und Pflegeziele.",
      },
      {
        title: "2. Pflegeplan",
        description:
          "Individueller Plan mit saisonalen Arbeiten, Intervallen und Festpreis.",
      },
      {
        title: "3. Laufende Pflege",
        description:
          "Durchführung nach Plan durch geschultes Personal mit professioneller Ausrüstung.",
      },
      {
        title: "4. Saisonale Zusatzarbeiten",
        description:
          "Herbstlaub, Frühjahrsarbeiten und Winterpflege. Ergänzend zum Grundvertrag.",
      },
    ],
    faq: [
      {
        question: "Übernehmen Sie regelmäßige Gartenpflege in Dortmund?",
        answer:
          "Ja. Wir arbeiten mit Privatkunden und Gewerbe in ganz Dortmund zusammen. Von wöchentlicher Pflege bis zu saisonalen Einzeltermin.",
      },
      {
        question: "Schneiden Sie auch große Hecken?",
        answer:
          "Ja, mit professionellen Heckenscheren und bei Bedarf Hubtechnik. Wir entsorgen den Schnitt auf Wunsch gleich mit.",
      },
      {
        question: "Bieten Sie Jahresverträge an?",
        answer:
          "Ja. Ein Jahresvertrag mit Monatspauschale ist besonders für Gewerbe- und Hausverwaltungskunden beliebt, Preise bleiben stabil, Leistungen sind festgelegt.",
      },
      {
        question: "Kümmern Sie sich auch um Beete und Unkraut?",
        answer:
          "Ja, Beetpflege gehört zum Standardumfang unserer Gartenpflege. Mechanisch und ohne aggressive Chemie.",
      },
      {
        question: "Was kostet die Gartenpflege in Dortmund?",
        answer:
          "Für private Gärten starten Monatspauschalen meist ab rund 60 Euro in der Hauptsaison. Einzeltermine rechnen wir nach Aufwand.",
      },
      {
        question: "Übernehmen Sie auch den Winterdienst?",
        answer:
          "Ja, viele unserer Dortmunder Gartenkunden buchen Gartenpflege und Winterdienst als Kombipaket.",
      },
    ],
  },

  winterdienst: {
    seoTitle: "Winterdienst Dortmund | Fedox Facility Services",
    seoDescription:
      "Zuverlässiger Winterdienst in Dortmund, Schneeräumung und Glättebekämpfung für Gewerbe und Privatkunden. Jetzt Saison sichern.",
    keywords: [
      "Winterdienst Dortmund",
      "Schneeräumung Dortmund",
      "Räumdienst Dortmund",
      "Glättebekämpfung Dortmund",
      "Winterdienst Gewerbe Dortmund",
    ],
    intro:
      "Wer in Dortmund seine Räum- und Streupflicht ernst nimmt, schläft im Winter deutlich besser. Wir von Fedox übernehmen den Winterdienst für Gewerbekunden, Hausverwaltungen und private Eigentümer in Dortmund. Mit fester Rufbereitschaft, professioneller Räumtechnik und umweltgerechten Streumitteln.",
    paragraphs: [
      "Die Räum- und Streupflicht in Dortmund ist klar geregelt: Gehwege müssen werktags zwischen 7 und 20 Uhr (sonntags ab 9 Uhr) schnee- und eisfrei sein. Wer das nicht macht, haftet bei Stürzen und Unfällen selbst. Für Eigentümer mit mehreren Immobilien, für Unternehmen mit Mitarbeiter- und Kundenverkehr und für jeden, der früh morgens nicht selbst mit der Schippe loslegen will, ist ein professioneller Winterdienst keine Luxuslösung. Sondern eine Notwendigkeit.",
      "Wir überwachen die Wetterlage, rücken bei Schneefall oder Glätte automatisch aus und räumen Ihre Flächen rechtzeitig vor Beginn der gesetzlich festgelegten Zeiten. Unsere Einsätze dokumentieren wir schriftlich. Das ist wichtig, falls es trotz aller Sorgfalt zu einem Schadensfall kommen sollte. Sie haben damit eine lückenlose Nachweiskette und sind rechtlich auf der sicheren Seite.",
      "Für die Glättebekämpfung nutzen wir in Dortmund bevorzugt umweltfreundliche Streumittel wie Splitt und Lavagranulat. In vielen Dortmunder Stadtteilen ist Streusalz auf Gehwegen ohnehin eingeschränkt. Auf Gewerbeflächen und Parkplätzen kommen je nach Situation zusätzlich Sole- und Salzlösungen zum Einsatz, wo dies zulässig und sinnvoll ist.",
    ],
    benefits: [
      {
        title: "Feste Rufbereitschaft",
        description:
          "24/7-Einsatz während der Saison. Auch nachts und am Wochenende.",
      },
      {
        title: "Wetterüberwachung",
        description:
          "Wir beobachten die Wetterlage und rücken automatisch aus, bevor es kritisch wird.",
      },
      {
        title: "Umweltfreundliches Streugut",
        description:
          "Splitt und Lavagranulat schützen Pflanzen, Pflaster und Tiere.",
      },
      {
        title: "Rechtliche Sicherheit",
        description:
          "Dokumentierte Einsätze mit Uhrzeit und Maßnahme. Wichtig im Schadensfall.",
      },
      {
        title: "Für jeden Bedarf",
        description:
          "Privathaus, Mehrfamilienhaus, Bürogebäude, Parkplatz oder Einfahrt. Wir machen alles.",
      },
      {
        title: "Saisonverträge",
        description:
          "Klare Saisonpauschale für den kompletten Winter.",
      },
    ],
    process: [
      {
        title: "1. Besichtigung und Angebot",
        description:
          "Wir prüfen Flächen, Zugänge und Lagermöglichkeiten für Streugut in Dortmund.",
      },
      {
        title: "2. Vertrag",
        description:
          "Klarer Saisonvertrag mit Räumzeiten, Streugutart und Festpreis.",
      },
      {
        title: "3. Überwachung und Einsatz",
        description:
          "Wetter-Monitoring und automatisches Ausrücken bei Schneefall und Glätte.",
      },
      {
        title: "4. Dokumentation",
        description:
          "Jeder Einsatz wird schriftlich festgehalten. Für Ihre Unterlagen und den Versicherungsfall.",
      },
    ],
    faq: [
      {
        question: "Ab wann sind Sie in Dortmund einsatzbereit?",
        answer:
          "Wir rücken vor Beginn der gesetzlichen Räumpflicht aus. Bei Bedarf ab 5 Uhr morgens, auch sonn- und feiertags.",
      },
      {
        question: "Was kostet der Winterdienst in Dortmund?",
        answer:
          "Meist in Form einer Saisonpauschale. Je nach Fläche starten Privatkunden ab rund 150 Euro pro Saison, Gewerbeflächen individuell.",
      },
      {
        question: "Streuen Sie mit Salz?",
        answer:
          "Auf privaten Gehwegen in Dortmund ist Streusalz meist nicht zulässig. Wir setzen auf Splitt und Lavagranulat. Auf Gewerbeflächen nach Rücksprache auch Sole.",
      },
      {
        question: "Übernehmen Sie die Räumpflicht rechtlich?",
        answer:
          "Ja. Mit einem schriftlichen Vertrag wird die Räum- und Streupflicht vertraglich auf uns übertragen. Dokumentierte Einsätze sichern Sie zusätzlich ab.",
      },
      {
        question: "Wie oft wird geräumt?",
        answer:
          "So oft wie nötig. Bei mehreren Schneefällen am Tag rücken wir entsprechend mehrmals aus.",
      },
      {
        question: "Was passiert bei extremen Wetterlagen?",
        answer:
          "Auch bei Extremereignissen reagieren wir priorisiert auf Ihre Dortmunder Objekte, arbeiten bei Bedarf mit zusätzlichen Teams und halten Sie auf dem Laufenden.",
      },
    ],
  },

  entruempelung: {
    seoTitle: "Entrümpelung & Räumung Dortmund | Fedox Facility Services",
    seoDescription:
      "Schnelle und seriöse Entrümpelung in Dortmund. Wohnungen, Häuser, Keller und Gewerbe. Mit besenreiner Übergabe. Jetzt anfragen.",
    keywords: [
      "Entrümpelung Dortmund",
      "Haushaltsauflösung Dortmund",
      "Wohnungsauflösung Dortmund",
      "Kellerentrümpelung Dortmund",
      "Räumung Dortmund",
    ],
    intro:
      "Entrümpelungen und Haushaltsauflösungen sind selten angenehme Aufgaben. Oft stehen sie im Zusammenhang mit einem Umzug, einem Todesfall in der Familie oder einer Mieteranzeige. Wir von Fedox übernehmen Entrümpelungen in Dortmund respektvoll, diskret und zügig. Mit fairen Festpreisen, klarer Kommunikation und besenreiner Übergabe.",
    paragraphs: [
      "Typische Aufträge in Dortmund sind vollständige Wohnungsauflösungen nach Todesfall oder Auszug, Entrümpelungen von Kellern, Speichern und Garagen, Räumungen ganzer Einfamilienhäuser und Auflösungen von kleineren Büros und Praxen. Für jeden dieser Fälle bieten wir klare Abläufe: Besichtigung, Festpreisangebot, Durchführung und Endkontrolle. Keine Überraschungen, keine versteckten Kosten.",
      "Was mitgenommen werden kann, wird mitgenommen. Der Rest wird fachgerecht entsorgt. Wir trennen Sperrmüll, Elektroaltgeräte, Sondermüll und verwertbare Gegenstände sauber, geben brauchbare Dinge sinnvoll weiter und dokumentieren auf Wunsch die Entsorgungswege. Persönliche Gegenstände, die Sie nicht verlieren wollen (Dokumente, Fotos, Schmuck, Erinnerungsstücke), sortieren wir in Rücksprache gesondert heraus.",
      "Am Ende jeder Entrümpelung steht die besenreine Übergabe: die Flächen sind leer, grob gefegt und bereit für den nächsten Mieter, die Übergabe an den Vermieter oder den Verkauf der Immobilie. Auf Wunsch übernehmen wir direkt im Anschluss eine Grundreinigung. So bekommen Sie ein Paket, das den gesamten Prozess abdeckt, von der vollen Wohnung bis zum bezugsfertigen Zustand.",
    ],
    benefits: [
      {
        title: "Festpreisgarantie",
        description:
          "Nach der Besichtigung erhalten Sie einen verbindlichen Festpreis. Kein Aufwand mehr, keine Nachforderungen.",
      },
      {
        title: "Diskret und respektvoll",
        description:
          "Besonders bei Haushaltsauflösungen nach Todesfällen arbeiten wir sensibel und mit Respekt.",
      },
      {
        title: "Fachgerechte Entsorgung",
        description:
          "Sperrmüll, Elektro- und Sondermüll werden getrennt und ordnungsgemäß abgeführt.",
      },
      {
        title: "Besenrein übergeben",
        description:
          "Nach der Räumung sind Ihre Flächen gefegt und für die nächste Nutzung vorbereitet.",
      },
      {
        title: "Wertausgleich möglich",
        description:
          "Bei wertvollen Gegenständen rechnen wir den Wiederverkaufswert fair an.",
      },
      {
        title: "Schnelle Umsetzung",
        description:
          "Kurzfristige Termine in Dortmund möglich. Meist innerhalb weniger Tage.",
      },
    ],
    process: [
      {
        title: "1. Besichtigung",
        description:
          "Wir kommen kostenlos zu Ihnen nach Dortmund und schauen uns die Räumlichkeiten an.",
      },
      {
        title: "2. Festpreisangebot",
        description:
          "Sie erhalten noch am selben oder nächsten Tag ein schriftliches Festpreisangebot.",
      },
      {
        title: "3. Durchführung",
        description:
          "Geschultes Team, eigene Fahrzeuge. Wir räumen zügig und sauber.",
      },
      {
        title: "4. Besenreine Übergabe",
        description:
          "Nach der Räumung gemeinsame Abnahme der Flächen. Auf Wunsch mit anschließender Grundreinigung.",
      },
    ],
    faq: [
      {
        question: "Wie schnell können Sie in Dortmund entrümpeln?",
        answer:
          "Oft innerhalb weniger Tage nach Besichtigung. Bei dringenden Fällen reagieren wir noch schneller.",
      },
      {
        question: "Was kostet eine Entrümpelung?",
        answer:
          "Das hängt von Größe, Zugänglichkeit und Menge ab. Nach unserer kostenlosen Besichtigung in Dortmund erhalten Sie einen verbindlichen Festpreis.",
      },
      {
        question: "Werden Wertgegenstände angerechnet?",
        answer:
          "Ja. Bei verwertbaren Gegenständen oder Antiquitäten rechnen wir den Wiederverkaufswert fair gegen den Entrümpelungspreis an.",
      },
      {
        question: "Entsorgen Sie auch Elektrogeräte und Sondermüll?",
        answer:
          "Ja. Alles wird sortengerecht getrennt und ordnungsgemäß entsorgt. Dokumentation auf Wunsch inklusive.",
      },
      {
        question: "Übernehmen Sie auch Haushaltsauflösungen nach Todesfall?",
        answer:
          "Ja. Das ist einer unserer häufigsten Auftragstypen in Dortmund. Wir arbeiten diskret, respektvoll und mit Rücksicht auf die Angehörigen.",
      },
      {
        question: "Ist die Übergabe wirklich besenrein?",
        answer:
          "Ja. Nach jeder Entrümpelung fegen wir die Räume grob durch. Auf Wunsch übernehmen wir eine komplette Grundreinigung.",
      },
    ],
  },
}

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails[slug]
}

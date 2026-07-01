export type Therapy = {
  slug: string;
  name: string;
  tagline: string;
  teaser: string;
  icon: "needle" | "laser" | "herb" | "injection" | "plasma" | "immune" | "homeopathy" | "child";
};

export const practice = {
  doctorName: "Dr. med. Martina Bucar",
  doctorTitle: "Ärztin für Allgemeinmedizin",
  focus: "Schwerpunkt Traditionelle Chinesische Medizin & Ganzheitliche Heilmethoden",
  tagline: "Im Fluss der Lebensenergie",
  phone: "+49 157 559 66677",
  phoneHref: "+4915755966677",
  email: "tcm@arztpraxis-bucar.de",
  website: "arztpraxis-bucar.de",
  region: "Ganzheitliche Allgemeinarztpraxis in Oberbayern",
};

export const locations = [
  {
    name: "Huglfing",
    address: "Kapellenleite 6, 82386 Huglfing",
    hours: "Mo, Mi, Fr · 10–18 Uhr",
    note: "Bitte telefonisch anmelden",
    primary: true,
  },
  {
    name: "Grünwald",
    address: "Rathausstraße 2, Eingang über Luitpoldweg",
    hours: "Nach Vereinbarung",
    note: "Bitte telefonisch anmelden",
    primary: false,
  },
];

export const hero = {
  headline: "Der Mensch in seiner Ganzheit",
  subheadline: practice.doctorTitle,
  focus: "Traditionelle Chinesische Medizin & ganzheitliche Heilmethoden",
  intro:
    "Mein Interesse gilt der Zusammenführung wirksamer Methoden unterschiedlicher Therapierichtungen — westlicher Therapiestandard vereint mit ganzheitlichem Wissen aus der Chinesischen Medizin.",
  ctaPrimary: "Telefonisch anmelden",
  ctaSecondary: "Therapien entdecken",
};

export const pillars = [
  {
    title: "Ganzheitliches Verstehen",
    body: "Zeit und Raum, Ihre persönliche Krankengeschichte gründlich zu erfassen — vom körperlichen Befund bis in die feinstofflichen Meridiane.",
  },
  {
    title: "Ganzheitliche Diagnostik",
    body: "Puls und Zunge tasten, den Bauch deuten, Körpersprache lesen. So entsteht ein Bild des ganzen Menschen, nicht nur des Symptoms.",
  },
  {
    title: "Individuelle Therapie",
    body: "Ein Behandlungskonzept, das Ihrer Individualität gerecht wird — schulmedizinische Basis vereint mit Akupunktur, Phytotherapie und mehr.",
  },
  {
    title: "Prävention & Balance",
    body: "Das vegetative Nervensystem ins Gleichgewicht bringen — vom Fluchtmodus in die Regeneration, der Ursache statt dem Symptom folgen.",
  },
];

export const therapies: Therapy[] = [
  {
    slug: "tcm",
    name: "TCM — Traditionelle Chinesische Medizin",
    tagline: "Einheit von Körper, Geist und Seele",
    teaser:
      "Meridiane durchziehen den ganzen Körper und stehen untereinander in Verbindung. Über Akupunkturpunkte wirke ich modulierend auf die Lebensenergie Qi.",
    icon: "needle",
  },
  {
    slug: "akupunktur",
    name: "Akupunktur & Laserakupunktur",
    tagline: "Energie folgt der Aufmerksamkeit",
    teaser:
      "Feine Nadeln oder der schmerzfreie Laser öffnen die Tore zum System — von der Balancing Methode nach Dr. Tan bis zur Schädelakupunktur nach Yamamoto.",
    icon: "needle",
  },
  {
    slug: "chinesische-heilpflanzen-therapie",
    name: "Chinesische Heilpflanzen",
    tagline: "Natürliches für die Natur des Menschen",
    teaser:
      "Die Königsdisziplin der TCM. Heilpflanzen nähren, stützen, leiten aus und durchbrechen Stagnationen — auf sanfte Weise im Dialog mit Körper, Geist und Seele.",
    icon: "herb",
  },
  {
    slug: "mesotherapie",
    name: "Mesotherapie",
    tagline: "Wenig – selten – am richtigen Ort",
    teaser:
      "Schmerzmittel sparsamst direkt am Ort des Geschehens. Oft lassen sich herkömmliche Mittel durch homöopathische Wirksubstanzen ersetzen.",
    icon: "injection",
  },
  {
    slug: "plasmatherapie",
    name: "Plasmatherapie",
    tagline: "Wachstumsfaktoren aus eigenem Blut",
    teaser:
      "Aus Ihrem Blutplasma gewonnen — vielseitig einsetzbar durch die hohe Konzentration an Wachstumsfaktoren aus den Blutplättchen.",
    icon: "plasma",
  },
  {
    slug: "mikroimmuntherapie",
    name: "Mikroimmuntherapie",
    tagline: "Auf Anfrage",
    teaser:
      "Ein weniger bekanntes Heilverfahren, das das Immunsystem auf feinstofflicher Ebene moduliert — ergänzend zur ganzheitlichen Behandlung.",
    icon: "immune",
  },
  {
    slug: "banerji-protokolle",
    name: "Banerji Protokolle",
    tagline: "Strukturierte Homöopathie",
    teaser:
      "Auf dem Erfahrungsschatz von Dr. Prasanta Banerji basierende Protokolle, die in 80 % der Fälle bereits im ersten Durchgang Wirkung zeigten.",
    icon: "homeopathy",
  },
  {
    slug: "behandlung-von-kindern",
    name: "Behandlung von Kindern",
    tagline: "Sanft und schmerzfrei",
    teaser:
      "Von vor der Geburt bis ins Jugendalter — per Laserakupunktur, Heiltees oder Aku-Tapes, damit Kinder die positive Wirkung spüren.",
    icon: "child",
  },
];

export const philosophy = {
  eyebrow: "Philosophie",
  heading: "Im Mittelpunkt der Mensch in seiner Ganzheit",
  quote:
    "Die Wirkung meiner Behandlungen beruht auf Interaktion mit dem gesamten System des Menschen. Von der strukturell körperlichen Ebene bis in den feinstofflichen nicht sichtbaren Bereich, wie die Meridiane.",
  body:
    "Das breite Therapiespektrum und die solide schulmedizinische Basis als Ärztin für Allgemeinmedizin ermöglichen es mir, Ihrer Individualität gerecht zu werden.",
  methodsNote:
    "Ergänzend finden auch weniger bekannte Heilverfahren wie Mikroimmuntherapie, Plasmatherapie und Mesotherapie Anwendung. Allen gemeinsam ist: die ausgewählten Therapieformen behandeln den Menschen in seiner Ganzheit.",
  motto: "Wenn du es eilig hast, behandle das Symptom — sonst die Ursache.",
  thichNhatHanh:
    "Etwas Schönes berührt, offenbart sie dessen Schönheit. Wenn sie etwas Schmerzvolles berührt, wandelt sie es um und heilt es.",
  thichNhatHanhSource: "Thich Nhat Hanh",
};

export const about = {
  heading: "Dr. Martina Bucar",
  subtitle: "Ärztin für Allgemeinmedizin",
  intro:
    "Vereint in ihrer Praxis westlichen Therapiestandard mit ganzheitlichem Wissen aus der Chinesischen Medizin.",
  quote:
    "Ich schaue die Zunge, ich taste den Puls und den Bauch und beobachte die Körpersprache und Körpermerkmale. Daraus ergibt sich ein ganzheitliches Behandlungskonzept, das der Individualität jedes einzelnen Menschen Rechnung trägt.",
  milestones: [
    "Ärztin für Allgemeinmedizin (Ö) seit 2010",
    "3 Jahre Stations- und Ambulanzärztin der TCM-Klinik Silima",
    "2 Jahre HNO-Praxis Holzkirchen (Teilzeit)",
    "seit 2019 Chefärztin der Abteilung für Chinesische Medizin, Privatklinik Jägerwinkel, Bad Wiessee",
  ],
  qualifications: [
    "TCM-Ausbildung seit 1998",
    "Akupunkturdiplom der Österreichischen Ärztekammer",
    "Chinesische Phytotherapie (DECA / AGTCM)",
    "Balancing Acupuncture nach Dr. TAN",
    "Banerji Protokolle (Dr. Corty & Dr. Dane)",
    "PRP-Plasmatherapie & Mesotherapie",
  ],
};

export const process = [
  {
    step: "01",
    title: "Telefonischer Erstkontakt",
    body: "Rufen Sie an — gemeinsam klären wir Ihr Anliegen und vereinbaren einen passenden Termin.",
  },
  {
    step: "02",
    title: "Ganzheitliche Diagnostik",
    body: "Puls, Zunge, Bauch und Körpersprache. Ich höre zu und verstehe Ihr Anliegen im ganzen System.",
  },
  {
    step: "03",
    title: "Individueller Therapieplan",
    body: "Ein auf Sie zugeschnittenes Konzept — einzeln oder kombiniert, immer der Ursache folgend.",
  },
  {
    step: "04",
    title: "Behandlung & Begleitung",
    body: "Sanft und nachhaltig. Wir aktivieren Ihre Selbstheilungskräfte und bringen das System in Balance.",
  },
];

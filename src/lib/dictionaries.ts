export const locales = ["es", "eu"] as const
export type Locale = (typeof locales)[number]

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

const LEGACY = "https://barakaldomakers.org"

export const links = {
  email: "barakaldomakers@gmail.com",
  formacion: "https://formacion.barakaldomakers.org",
  sobreNosotros: `${LEGACY}/sobre-nosotros/`,
  social: {
    telegram: "https://t.me/barakaldomakers",
    facebook: "https://www.facebook.com/Barakaldo-Makers-102662331480029",
    x: "https://x.com/BarakaldoMakers",
    gitlab: "https://gitlab.com/brkmk",
    github: "https://github.com/Barakaldo-Makers",
  },
}


export type ProjectVisual = "canairio" | "meshtastic" | "openflexure" | "minicnc"

type Project = {
  code: string
  visual: ProjectVisual
  image?: string
  imageAlt?: string
  tag: string
  name: string
  summary: string
  body: string
  href: string
  linkLabel: string
}

type ActivityItem = {
  year: string
  title: string
  image?: string
  imageAlt?: string
  body: string
}

const projectLinks = {
  canairio: "https://canair.io",
  meshtastic: "https://meshtastic.org",
  openflexure: `${LEGACY}/microscopio-openflexure/`,
  minicnc: `${LEGACY}/mini-cnc-pcb/`,
}

const es = {
  meta: {
    title: "Barakaldo Makers · Asociación tecnológica en Barakaldo",
    description:
      "Asociación sin ánimo de lucro de Barakaldo que investiga y prueba tecnologías nuevas: sensores de calidad del aire, redes LoRa, un microscopio impreso en 3D y más. Proyectos abiertos para profesionales, curiosos y familias.",
  },
  ui: {
    skip: "Saltar al contenido",
    language: "Idioma",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menu: "Menú",
    newTab: "(se abre en otra pestaña)",
    home: "Barakaldo Makers, inicio",
  },
  nav: [
    { href: "#proyectos", label: "Proyectos" },
    { href: "#quienes-somos", label: "Quiénes somos" },
    { href: "#formacion", label: "Formación" },
    { href: "#contacto", label: "Contacto" },
    { href: "/galeria", label: "Galería" },
  ],
  gallery: {
    eyebrow: "Galería",
    title: "Nuestras creaciones Maker",
    intro: "Fotos de proyectos, eventos y actividades del makerspace.",
    items: [
      { src: "/images/artemis.jpg", alt: "Mesa con láser, grid y cohete modelo" },
      { src: "/images/ArtemisII.jpg", alt: "Detalle del proyecto Artemis" },
      { src: "/images/velutinas.jpg", alt: "Exposición sobre el ecosistema marino y las velutinas" },
      { src: "/images/catenarias.jpg", alt: "Catenarias y estructuras del taller" },
      { src: "/images/dispositivos.jpg", alt: "Exhibición de proyectos maker en feria" },
      { src: "/images/dispositivos_2.jpg", alt: "Stand con impresora 3D Prusa i3 y robot oruga" },
      { src: "/images/makerio.jpg", alt: "Electrónica DIY con carcasas impresas en 3D" },
      { src: "/images/soldadora_filamento.jpg", alt: "Dispositivo de soldadura de filamento" },
      { src: "/images/steam_gunea2.jpg", alt: "Actividad STEAM GUNEA con familias" },
      { src: "/images/canairio_No2.jpg", alt: "Caja estanca CanAIRIO con M5Stamp y cámara" },
      { src: "/images/triturando.jpg", alt: "Triturando botellas PET para reciclaje" },
    ],
  },
  hero: {
    kicker: "Asociación tecnológica · Barakaldo · desde 2020",
    titleLead: "Abrimos la tecnología para ver",
    titleMark: "qué lleva dentro.",
    lead: "Somos una asociación sin ánimo de lucro que investiga y prueba tecnologías nuevas. Sensores que miden el aire, radios que funcionan sin cobertura, un microscopio impreso en 3D. Todo con planos y código abiertos.",
    cta: "Ver los proyectos",
    secondary: "Escríbenos",
    facts: [
      { value: "10+", label: "Eventos" },
      { value: "300+", label: "Participantes" },
      { value: "5+", label: "Proyectos" },
      { value: "6.000€", label: "Gestionados" },
    ],
    specCode: "PRY-03 · FICHA",
    specName: "Microscopio OpenFlexure",
    imageAlt:
      "Microscopio OpenFlexure montado por Barakaldo Makers: estructura blanca impresa en 3D, iluminación encendida y una Raspberry Pi en la base negra",
    annotations: ["Platina impresa en 3D", "Enfoque motorizado", "Raspberry Pi + cámara"],
  },
  projects: {
    eyebrow: "01 · Banco de trabajo",
    title: "Proyectos abiertos",
    intro:
      "Cada proyecto es un experimento. Lo montamos, lo medimos, a veces lo rompemos, y publicamos lo que aprendemos para que puedas repetirlo.",
    items: [
      {
        code: "PRY-01",
        visual: "canairio",
        image: "/images/canairio.jpg",
        imageAlt: "Caja estanca CanAIRIO con M5Stamp, cámara y sensor",
        tag: "Ciencia ciudadana · Sensores",
        name: "CanAIRIO",
        summary: "Una red de sensores para medir la calidad del aire que respiramos.",
        body: "Sensores de bajo coste que cuentan las partículas finas (PM2.5) y publican los datos en abierto. Un sensor en un balcón no dice mucho. Cien repartidos por Barakaldo dibujan el mapa del aire calle a calle.",
        href: projectLinks.canairio,
        linkLabel: "Proyecto CanAIRIO",
      },
      {
        code: "PRY-02",
        visual: "meshtastic",
        tag: "Radio · LoRa",
        name: "Meshtastic",
        summary: "Una red de comunicaciones descentralizada con señales LoRa.",
        body: "Pequeños nodos de radio que se pasan los mensajes de uno a otro, sin antenas de telefonía ni internet. Sirven en el monte, en un apagón o cuando la red se cae. Cada nodo nuevo amplía el alcance de todos.",
        href: projectLinks.meshtastic,
        linkLabel: "Proyecto Meshtastic",
      },
      {
        code: "PRY-03",
        visual: "openflexure",
        tag: "Óptica · Impresión 3D",
        name: "Microscopio OpenFlexure",
        summary: "Un microscopio de laboratorio que puedes imprimir.",
        body: "Diseñado en la Universidad de Bath para laboratorios con poco presupuesto. Lo hemos impreso y montado pieza a pieza: platina motorizada, óptica y una Raspberry Pi que hace las fotos.",
        href: projectLinks.openflexure,
        linkLabel: "Fotos del montaje",
      },
      {
        code: "PRY-04",
        visual: "minicnc",
        tag: "Electrónica · Fabricación digital",
        name: "Mini CNC-PCB",
        summary: "Una fresadora pequeña para hacer placas de circuito.",
        body: "Perfiles de aluminio, varillas, correas y piezas impresas. Con ella fresamos nuestras propias placas en una tarde, en vez de encargarlas fuera y esperar semanas.",
        href: projectLinks.minicnc,
        linkLabel: "Fotos del montaje",
      },
      {
        code: "PRY-05",
        visual: "openflexure",
        image: "/images/velutinas_ecosistema.jpg",
        imageAlt: "Mesa de trabajo con impresora 3D y piezas impresas para las trampas Velutinas BRKMK",
        tag: "Medio ambiente · Fabricación",
        name: "Velutinas BRKMK",
        summary: "Trampas selectivas para avispa asiática con filamento reciclado.",
        body: "Diseño propio para la captura selectiva de avispa asiática (Vespa velutina). Fabricadas con filamento reciclado de botellas PET. Distribuidas a voluntarios de la comarca desde 2024.",
        href: `${LEGACY}/velutinas-brkmk/`,
        linkLabel: "Sobre Velutinas BRKMK",
      },
      {
        code: "PRY-06",
        visual: "canairio",
        image: "/images/Sonometro.jpg",
        imageAlt: "Sonómetro digital DIY con ESP32, pantalla OLED y micrófono",
        tag: "Sensor · Acústica",
        name: "Sonómetro Digital",
        summary: "Sensor de ruido ambiental integrado con la red CanAIRIO.",
        body: "Dispositivo de medición de nivel sonoro instalado en colegios y espacios públicos. Forma parte de la red CanAIRIO, aportando datos de contaminación acústica en tiempo real.",
        href: projectLinks.canairio,
        linkLabel: "Ver CanAIRIO",
      },
      {
        code: "PRY-07",
        visual: "minicnc",
        image: "/images/trituradora botellas.jpg",
        imageAlt: "Trituradora de botellas PET para reciclaje de filamento",
        tag: "Reciclaje · Economía circular",
        name: "Sistema de Reciclaje de Filamento",
        summary: "Conversión de botellas PET en filamento 3D para impresoras.",
        body: "Proceso de transformación de botellas PET en filamento para impresión 3D. Cerramos el ciclo: del residuo al material de fabricación en nuestro propio taller.",
        href: `${LEGACY}/reciclaje-filamento/`,
        linkLabel: "Sobre el reciclaje",
      },
    ] satisfies Project[] as Project[],
    visualAlt: {
      canairio: "Esquema de una red de sensores de aire repartidos por un mapa",
      meshtastic: "Esquema de nodos de radio conectados entre sí formando una malla",
      openflexure: "Microscopio OpenFlexure impreso en 3D, sostenido en la mano",
      minicnc: "Mini fresadora CNC con estructura de perfiles de aluminio y varillas",
    } as Record<ProjectVisual, string>,
  },
  audiences: {
    eyebrow: "02 · Para quién",
    title: "Un taller, tres maneras de entrar",
    items: [
      {
        title: "Si trabajas en tecnología",
        body: "Prueba hardware y software nuevos sin la presión de un cliente. Aquí se puede fallar, preguntar y empezar de cero. Y casi siempre hay alguien que ya se peleó con ese mismo error.",
      },
      {
        title: "Si te preocupa el planeta",
        body: "Medimos el aire en lugar de suponer. Reparamos antes de tirar. Y preferimos diseños abiertos, que se puedan arreglar dentro de diez años.",
      },
      {
        title: "Si vienes con peques",
        body: "Ver cómo gira un motor o cómo crece una pieza en la impresora engancha a cualquier edad. Los talleres en familia son para tocar, montar y hacer preguntas.",
      },
    ],
  },
  about: {
    eyebrow: "03 · Quiénes somos",
    title: "Nacimos en 2020, con la impresora en marcha",
    body: [
      "Nos inscribimos como asociación el 11 de junio de 2020, en plena pandemia. Las primeras piezas que salieron de nuestras impresoras fueron pantallas faciales, salvaorejas para mascarillas y abrepuertas sin contacto.",
      "Desde entonces seguimos igual. Con las manos, en abierto y sin fronteras: trabajamos en proyectos locales, estatales e internacionales.",
    ],
    facts: [
      { label: "11·06·2020", value: "Inscripción en el registro de asociaciones del Gobierno Vasco" },
      { label: "Sin ánimo de lucro", value: "Lo que se aprende aquí se comparte" },
      { label: "Código abierto", value: "Planos y software publicados en GitLab y GitHub" },
    ],
    link: "Leer más sobre nosotros",
    teamImage: "/images/equipo.jpg",
    teamImageAlt: "Equipo de Barakaldo Makers en evento STEAM-GUNEA con robot e impresora 3D",
    collaboratorsLabel: "Colaboraciones institucionales",
    collaborators: [
      "Inguralde",
      "ETB",
      "Ayuntamiento de Barakaldo",
      "Protección Civil de Barakaldo",
      "CIME de Etxebarri",
      "Meshtastic Euskadi",
      "Agencia de Desarrollo Local",
    ],
  },
  activities: {
    eyebrow: "04 · Actividades",
    title: "Lo que hemos hecho",
    items: [
      {
        year: "2025",
        title: "STEAM GUNEA",
        image: "/images/steam_gunea.jpg",
        imageAlt: "Feria STEAM con familias y mesas de actividades",
        body: "Espacio maker para familias con el Ayuntamiento de Barakaldo. Sesión Oct 2025 en Centro Cívico de Cruces. Previstas 3ª y 4ª sesiones en 2026.",
      },
      {
        year: "2025",
        title: "Semana de la Ciencia",
        body: "Taller de sensores ambientales y sonómetro. El taller más exitoso del evento. Participación en CIME Etxebarri y otros.",
      },
      {
        year: "2025",
        title: "Reportaje ETB2",
        body: "Las Avispas de Barakaldo. Nov 2025. Sobre las trampas de avispa asiática.",
      },
      {
        year: "2024-2026",
        title: "Campaña Velutinas",
        body: "Diseño y distribución de trampas selectivas para avispa asiática.",
      },
      {
        year: "2024",
        title: "Formación Avispas Asiáticas",
        body: "Oct 2024, impartida por técnico forestal.",
      },
      {
        year: "2024",
        title: "Innpulso Emprende",
        body: "Participación en la 7ª edición con el Ministerio de Ciencia, Innovación y Universidades.",
      },
    ] satisfies ActivityItem[] as ActivityItem[],
  },
  training: {
    eyebrow: "05 · Formación",
    title: "Hemos impartido formación",
    body: "Entre otras cosas, hemos dado un curso de programación en Python.",
  },
  contact: {
    eyebrow: "06 · Contacto",
    title: "Trae tu proyecto. O tus ganas.",
    body: "¿Quieres hacerte socio, proponer un taller o colaborar en un proyecto? Escríbenos y te contestamos. Si prefieres algo más rápido, entra en el grupo de Telegram.",
    form: {
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      submit: "Enviar mensaje",
      note: "Al enviar se abrirá tu programa de correo con el mensaje listo.",
      subject: "Contacto desde la web",
      privacyPrefix: "Tratamos tus datos según nuestra",
      privacy: "política de privacidad",
      privacySuffix: ".",
    },
    direct: "O escríbenos directamente",
    telegram: "Grupo de Telegram",
  },
  footer: {
    tagline: "Asociación tecnológica sin ánimo de lucro. Barakaldo, Bizkaia.",
    legal: [
      { href: "/es/galeria", label: "Galería" },
      { href: "/es/aviso-legal", label: "Aviso legal" },
      { href: "/es/privacidad", label: "Política de privacidad" },
      { href: "/es/cookies", label: "Política de cookies" },
    ],
    social: "Redes",
  },
  legal: {
    privacidad: {
      updated: "[FECHA] · v1.0",
      sections: [
        {
          title: "1. Responsable del tratamiento",
          body: "El responsable del tratamiento de los datos personales recogidos a través de este sitio web es la asociación Barakaldo Makers, con domicilio en Barakaldo (Bizkaia) y NIF [NIF]. Puede contactar con nosotros a través del correo electrónico {email} o del grupo de Telegram."
        },
        {
          title: "2. Finalidad del tratamiento",
          body: "Los datos personales que nos facilite a través del formulario de contacto serán tratados exclusivamente para gestionar su consulta, propuesta de colaboración o solicitud de alta como socio. No se utilizarán para ninguna otra finalidad sin su consentimiento expreso."
        },
        {
          title: "3. Legitimación",
          body: "La base legal para el tratamiento de sus datos es el consentimiento del interesado, otorgado mediante el envío del formulario de contacto, así como la ejecución de medidas precontractuales en el caso de solicitudes de alta como socio."
        },
        {
          title: "4. Conservación de los datos",
          body: "Los datos personales proporcionados se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos y para determinar las posibles responsabilidades derivadas de dicha finalidad, además de los períodos establecidos en la normativa de archivos y documentación."
        },
        {
          title: "5. Destinatarios",
          body: "No se cederán datos a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio solicitado. No se realizan transferencias internacionales de datos."
        },
        {
          title: "6. Derechos",
          body: "Cualquier persona tiene derecho a obtener confirmación sobre si se están tratando datos personales que les conciernan. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o solicitar su supresión, limitación, portabilidad u oposición al tratamiento. Puede ejercer estos derechos escribiendo a {email} indicando el derecho que desea ejercer."
        },
        {
          title: "7. Menores de edad",
          body: "Este sitio web no está dirigido a menores de 14 años. La asociación no recaba conscientemente datos personales de menores de edad. Si usted es menor de 14 años, por favor, no nos facilite ningún dato personal."
        }
      ]
    },
    avisoLegal: {
      updated: "[FECHA] · v1.0",
      sections: [
        {
          title: "1. Datos identificativos",
          body: "En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa que este sitio web es titularidad de la asociación Barakaldo Makers, con NIF [NIF] y domicilio en Barakaldo (Bizkaia). Correo electrónico de contacto: {email}."
        },
        {
          title: "2. Objeto y ámbito",
          body: "Este sitio web tiene por finalidad dar a conocer las actividades, proyectos y servicios de la asociación Barakaldo Makers, así como facilitar el contacto con personas y entidades interesadas en colaborar, participar o recibir información sobre nuestras iniciativas."
        },
        {
          title: "3. Propiedad intelectual e industrial",
          body: "Todos los contenidos de este sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, software, diseño gráfico y códigos fuente, son propiedad de la asociación Barakaldo Makers o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública y transformación sin la autorización expresa del titular."
        },
        {
          title: "4. Responsabilidad",
          body: "La asociación no garantiza la disponibilidad continua del sitio web ni la ausencia de errores en sus contenidos. No se responsabiliza de los daños y perjuicios que puedan derivarse de la interrupción, retraso o mal funcionamiento del sitio web, ni del uso de la información contenida en el mismo."
        },
        {
          title: "5. Enlaces externos",
          body: "Este sitio web puede contener enlaces a sitios web de terceros. La asociación no se responsabiliza del contenido, políticas de privacidad o prácticas de los sitios web enlazados. La inclusión de un enlace no implica necesariamente la aprobación o recomendación del sitio web enlazado."
        },
        {
          title: "6. Legislación aplicable y jurisdicción",
          body: "El presente aviso legal se rige por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso de este sitio web, las partes se someten expresamente a los juzgados y tribunales de Bilbao, con renuncia expresa a cualquier otro fuero."
        }
      ]
    },
    cookies: {
      updated: "[FECHA] · v1.0",
      sections: [
        {
          title: "1. ¿Qué son las cookies?",
          body: "Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo (ordenador, tableta, teléfono móvil) cuando los visitan. Son ampliamente utilizadas para que los sitios web funcionen correctamente, o de manera más eficiente, así como para proporcionar información a los propietarios del sitio web."
        },
        {
          title: "2. Tipos de cookies que utilizamos",
          body: "En este sitio web utilizamos cookies técnicas y de preferencias, necesarias para el correcto funcionamiento de la web y para recordar sus preferencias de navegación. No utilizamos cookies de seguimiento, analíticas o publicitarias sin su consentimiento expreso."
        },
        {
          title: "3. Cookies de terceros",
          body: "Al utilizar enlaces a redes sociales externas (Telegram, GitLab, GitHub, Facebook, X), dichas plataformas pueden instalar cookies en su dispositivo. Le recomendamos consultar las políticas de privacidad y cookies de dichas plataformas para obtener más información."
        },
        {
          title: "4. Gestión y desactivación de cookies",
          body: "Puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración de las opciones del navegador. A continuación, le proporcionamos enlaces con información sobre cómo hacerlo en los principales navegadores: Chrome, Firefox, Safari, Edge."
        },
        {
          title: "5. Cambios en la política de cookies",
          body: "Esta política de cookies puede ser actualizada periódicamente para reflejar cambios en las cookies que utilizamos o por motivos operativos, legales o regulatorios. Le recomendamos revisar esta política de forma regular para mantenerse informado sobre cómo utilizamos las cookies."
        },
        {
          title: "6. Contacto",
          body: "Si tiene cualquier duda sobre esta política de cookies, puede contactar con nosotros a través del correo electrónico {email}."
        }
      ]
    }
  }
,
}

export type Dictionary = typeof es

// Traducción al euskera: pendiente de revisión por una persona nativa.
const eu: Dictionary = {
  meta: {
    title: "Barakaldo Makers · Barakaldoko elkarte teknologikoa",
    description:
      "Barakaldoko irabazi asmorik gabeko elkartea, teknologia berriak ikertu eta probatzen dituena: airearen kalitatea neurtzeko sentsoreak, LoRa sareak, 3Dn inprimatutako mikroskopio bat eta gehiago. Proiektu irekiak profesionalentzat, jakin-minez daudenentzat eta familientzat.",
  },
  ui: {
    skip: "Joan edukira",
    language: "Hizkuntza",
    openMenu: "Ireki menua",
    closeMenu: "Itxi menua",
    menu: "Menua",
    newTab: "(beste fitxa batean irekitzen da)",
    home: "Barakaldo Makers, hasiera",
  },
  nav: [
    { href: "#proyectos", label: "Proiektuak" },
    { href: "#quienes-somos", label: "Nor gara" },
    { href: "#formacion", label: "Prestakuntza" },
    { href: "#contacto", label: "Harremanak" },
    { href: "/galeria", label: "Galeria" },
  ],
  gallery: {
    eyebrow: "Galeria",
    title: "Gure maker sorkuntzak",
    intro: "Maker-espazioaren proiektu, ekitaldi eta jardueren argazkiak.",
    items: [
      { src: "/images/artemis.jpg", alt: "Mahaia laserrarekin, sareta eta eredu-hegazkinarekin" },
      { src: "/images/ArtemisII.jpg", alt: "Artemis proiektuaren xehetasuna" },
      { src: "/images/velutinas.jpg", alt: "Itsas-ekosistema eta velutinei buruzko erakusketa" },
      { src: "/images/catenarias.jpg", alt: "Taileraren katenariak eta egiturak" },
      { src: "/images/dispositivos.jpg", alt: "Maker azokan maker-proiektuen erakusketa" },
      { src: "/images/dispositivos_2.jpg", alt: "Prusa i3 inprimagailua eta robot aurkarabe dituen standa" },
      { src: "/images/makerio.jpg", alt: "3Dn inprimatutako kaxelekin DIY elektronika" },
      { src: "/images/soldadora_filamento.jpg", alt: "Filamendu soldagailua" },
      { src: "/images/steam_gunea2.jpg", alt: "STEAM GUNEA familien jarduera" },
      { src: "/images/canairio_No2.jpg", alt: "M5Stamp, kamera eta sentsorea duen CanAIRIO kaxa estanka" },
      { src: "/images/triturando.jpg", alt: "Botella PETak birziklapen xurrunbidean" },
    ],
  },
  hero: {
    kicker: "Elkarte teknologikoa · Barakaldo · 2020tik",
    titleLead: "Teknologia irekitzen dugu,",
    titleMark: "barruan zer daraman ikusteko.",
    lead: "Irabazi asmorik gabeko elkartea gara, eta teknologia berriak ikertu eta probatzen ditugu. Airea neurtzen duten sentsoreak, estaldurarik gabe dabiltzan irratiak, 3Dn inprimatutako mikroskopio bat. Dena plano eta kode irekiekin.",
    cta: "Ikusi proiektuak",
    secondary: "Idatzi iezaguzu",
    facts: [
      { value: "10+", label: "Ekitaldi" },
      { value: "300+", label: "Parte-hartzaile" },
      { value: "5+", label: "Proiektu" },
      { value: "6.000€", label: "Kudeatua" },
    ],
    specCode: "PRY-03 · FITXA",
    specName: "OpenFlexure mikroskopioa",
    imageAlt:
      "Barakaldo Makers-ek muntatutako OpenFlexure mikroskopioa: 3Dn inprimatutako egitura zuria, argia piztuta eta Raspberry Pi bat oinarri beltzean",
    annotations: ["3Dn inprimatutako platina", "Fokatze motorduna", "Raspberry Pi + kamera"],
  },
  projects: {
    eyebrow: "01 · Lan-mahaia",
    title: "Proiektu irekiak",
    intro:
      "Proiektu bakoitza esperimentu bat da. Muntatu, neurtu, batzuetan apurtu, eta ikasitakoa argitaratzen dugu, zuk ere errepikatu ahal izateko.",
    items: [
      {
        code: "PRY-01",
        visual: "canairio",
        image: "/images/canairio.jpg",
        imageAlt: "CanAIRIO kaxa estanka M5Stamp, kamera eta sentsorearekin",
        tag: "Herritarren zientzia · Sentsoreak",
        name: "CanAIRIO",
        summary: "Arnasten dugun airearen kalitatea neurtzeko sentsore-sare bat.",
        body: "Kostu txikiko sentsoreak, partikula finak (PM2.5) zenbatu eta datuak modu irekian argitaratzen dituztenak. Balkoi bateko sentsore batek ez du asko esaten. Barakaldon zehar ehun sentsorek, berriz, airearen mapa kalez kale marrazten dute.",
        href: projectLinks.canairio,
        linkLabel: "CanAIRIO proiektua",
      },
      {
        code: "PRY-02",
        visual: "meshtastic",
        tag: "Irratia · LoRa",
        name: "Meshtastic",
        summary: "LoRa seinaleak erabiltzen dituen komunikazio-sare deszentralizatua.",
        body: "Irrati-nodo txikiak, mezuak batetik bestera pasatzen dituztenak, telefonia-antenarik eta internetik gabe. Mendian, itzalaldi batean edo sarea erortzen denean balio dute. Nodo berri bakoitzak denon irismena handitzen du.",
        href: projectLinks.meshtastic,
        linkLabel: "Meshtastic proiektua",
      },
      {
        code: "PRY-03",
        visual: "openflexure",
        tag: "Optika · 3D inprimaketa",
        name: "OpenFlexure mikroskopioa",
        summary: "Zuk zeuk inprimatu dezakezun laborategiko mikroskopioa.",
        body: "Bath-eko Unibertsitatean diseinatua, aurrekontu txikiko laborategietarako. Guk pieza bakoitza inprimatu eta muntatu dugu: platina motorduna, optika eta argazkiak ateratzen dituen Raspberry Pi bat.",
        href: projectLinks.openflexure,
        linkLabel: "Muntaketaren argazkiak",
      },
      {
        code: "PRY-04",
        visual: "minicnc",
        tag: "Elektronika · Fabrikazio digitala",
        name: "Mini CNC-PCB",
        summary: "Zirkuitu-plakak egiteko fresatzeko makina txikia.",
        body: "Aluminiozko profilak, hagaxkak, uhalak eta inprimatutako piezak. Horrekin gure plakak arratsalde batean fresatzen ditugu, kanpoan eskatu eta asteak itxaron beharrean.",
        href: projectLinks.minicnc,
        linkLabel: "Muntaketaren argazkiak",
      },
      {
        code: "PRY-05",
        visual: "openflexure",
        image: "/images/velutinas_ecosistema.jpg",
        imageAlt: "3D inprimagailua eta Velutinas BRKMK trampentzat inprimatutako piezak dituen lan-mahaia",
        tag: "Ingurumen · Fabrikazioa",
        name: "Velutinas BRKMK",
        summary: "Avispa asiatikarentzat trampa eleiboak filamento eraberritua erabiliz.",
        body: "Vespa velutina harrapatzeko diseinu proprioa. Botella PETetako filamento eraberritua erabiliz fabrikatuta. 2024tik eskualdeko boluntarioak banatuta.",
        href: `${LEGACY}/velutinas-brkmk/`,
        linkLabel: "Velutinas BRKMK-ri buruz",
      },
      {
        code: "PRY-06",
        visual: "canairio",
        image: "/images/Sonometro.jpg",
        imageAlt: "ESP32, OLED pantaila eta mikrofonodun DIY sonometro digitala",
        tag: "Sentsore · Akustika",
        name: "Sonometro Digitala",
        summary: "CanAIRIO sarean integratutako ingurumen-zarata neurgailua.",
        body: "Eskola eta espazio publikoetan instalatutako maila soinu neurgailua. CanAIRIO sarearen parte da, akustika-kutsaduraren datuak ematen dituena.",
        href: projectLinks.canairio,
        linkLabel: "Ikusi CanAIRIO",
      },
      {
        code: "PRY-07",
        visual: "minicnc",
        image: "/images/trituradora botellas.jpg",
        imageAlt: "3D inprimaketako filamendurako botella PETak triturgailua",
        tag: "Birziklapen · Zirkuitu ekonomikoa",
        name: "Filamento Birziklapen Sistema",
        summary: "Botella PETak 3D inprimaketako filamendu bihurtzea.",
        body: "Botella PETak inprimaketako filamendu bihurtzeko prozesua. Zikloa ixten dugu: hondoretatik fabrikazio-materiala gure tailer berean.",
        href: `${LEGACY}/reciclaje-filamento/`,
        linkLabel: "Birziklapenari buruz",
      },
    ],
    visualAlt: {
      canairio: "Mapa batean banatutako aire-sentsoreen sarearen eskema",
      meshtastic: "Elkarrekin konektatutako irrati-nodoen sare-eskema",
      openflexure: "3Dn inprimatutako OpenFlexure mikroskopioa, eskuan",
      minicnc: "Aluminiozko profilez eta hagaxkez egindako CNC fresatzeko makina txikia",
    },
  },
  audiences: {
    eyebrow: "02 · Norentzat",
    title: "Tailer bat, sartzeko hiru modu",
    items: [
      {
        title: "Teknologian lan egiten baduzu",
        body: "Probatu hardware eta software berriak, bezero baten presiorik gabe. Hemen huts egin, galdetu eta hutsetik hasi daiteke. Eta ia beti dago akats berarekin borrokatu den norbait.",
      },
      {
        title: "Planetak kezkatzen bazaitu",
        body: "Airea neurtu egiten dugu, suposatu beharrean. Bota aurretik, konpondu. Eta diseinu irekiak nahiago ditugu, hamar urte barru ere konpon daitezkeenak.",
      },
      {
        title: "Txikiekin bazatoz",
        body: "Motor bat nola biratzen den edo pieza bat inprimagailuan nola hazten den ikusteak edozein adinetan harrapatzen du. Familiako tailerrak ukitu, muntatu eta galderak egiteko dira.",
      },
    ],
  },
  about: {
    eyebrow: "03 · Nor gara",
    title: "2020an jaio ginen, inprimagailua martxan zela",
    body: [
      "2020ko ekainaren 11n erregistratu ginen elkarte gisa, pandemia betean. Gure inprimagailuetatik ateratako lehen piezak babes-pantailak, maskarentzako belarri-babesak eta ukitu gabe ateak irekitzeko gailuak izan ziren.",
      "Ordutik, berdin jarraitzen dugu. Eskuekin, modu irekian eta mugarik gabe: tokiko, estatuko eta nazioarteko proiektuetan lan egiten dugu.",
    ],
    facts: [
      { label: "2020·06·11", value: "Eusko Jaurlaritzaren elkarteen erregistroan inskribatua" },
      { label: "Irabazi asmorik gabe", value: "Hemen ikasten dena partekatu egiten da" },
      { label: "Kode irekia", value: "Planoak eta softwarea GitLab-en eta GitHub-en argitaratuta" },
    ],
    link: "Irakurri gehiago guri buruz",
    teamImage: "/images/equipo.jpg",
    teamImageAlt: "Barakaldo Makers taldea STEAM-GUNEA ekitaldian, robot eta 3D inprimagailuarekin",
    collaboratorsLabel: "Erakundeen lankidetzak",
    collaborators: [
      "Inguralde",
      "ETB",
      "Ayuntamiento de Barakaldo",
      "Protección Civil de Barakaldo",
      "CIME de Etxebarri",
      "Meshtastic Euskadi",
      "Agencia de Desarrollo Local",
    ],
  },
  activities: {
    eyebrow: "04 · Jarduerak",
    title: "Egin duguna",
    items: [
      {
        year: "2025",
        title: "STEAM GUNEA",
        image: "/images/steam_gunea.jpg",
        imageAlt: "Feria STEAM con familias y mesas de actividades",
        body: "Barakaldoko Udalarekin familiaentzat maker-espazioa. 2025eko Arrabetako saioa Crukes zentroziban. 2026an 3. eta 4. saioak aurreikusita.",
      },
      {
        year: "2025",
        title: "Zientzia Astea",
        body: "Sentsore ambientalak eta sonometroa tailer. Ekitaldien arrakastatsuena. CIME Etxebarriren parte-hartzea eta beste batzuk.",
      },
      {
        year: "2025",
        title: "ETB2 Reportajea",
        body: "Barakaldoko Avispeak. 2025eko Azaroa. Avispa asiatarren trampen inguruan.",
      },
      {
        year: "2024-2026",
        title: "Velutinas Kanpaina",
        body: "Avispa asiatarrentzat trampa eleiboen diseinua eta banaketa.",
      },
      {
        year: "2024",
        title: "Avispa Asiatikako Prestakuntza",
        body: "2024eko Urria, basozaintza-teknikariak emana.",
      },
      {
        year: "2024",
        title: "Innpulso Emprende",
        body: "7. edizioan parte-hartzea Zientzia, Berrikuntza eta Unibertsitate Ministeriarekin.",
      },
    ] satisfies ActivityItem[] as ActivityItem[],
  },
  training: {
    eyebrow: "05 · Prestakuntza",
    title: "Prestakuntza eman dugu",
    body: "Besteak beste, Python programazio-ikastaro bat eman dugu.",
  },
  contact: {
    eyebrow: "06 · Harremanak",
    title: "Ekarri zure proiektua. Edo zure gogoa.",
    body: "Bazkide egin, tailer bat proposatu edo proiektu batean lagundu nahi duzu? Idatzi iezaguzu eta erantzungo dizugu. Azkarrago nahi baduzu, sartu Telegrameko taldean.",
    form: {
      name: "Izena",
      email: "Helbide elektronikoa",
      message: "Mezua",
      submit: "Bidali mezua",
      note: "Bidaltzean, zure posta-programa irekiko da, mezua prest duela.",
      subject: "Harremana webgunetik",
      privacyPrefix: "Zure datuak gure",
      privacy: "pribatutasun-politikaren",
      privacySuffix: " arabera tratatzen ditugu.",
    },
    direct: "Edo idatzi zuzenean",
    telegram: "Telegrameko taldea",
  },
  footer: {
    tagline: "Irabazi asmorik gabeko elkarte teknologikoa. Barakaldo, Bizkaia.",
    legal: [
      { href: "/eu/galeria", label: "Galeria" },
      { href: "/eu/aviso-legal", label: "Lege-oharra" },
      { href: "/eu/privacidad", label: "Pribatutasun-politika" },
      { href: "/eu/cookies", label: "Cookie-politika" },
    ],
    social: "Sareak",
  },
  legal: {
    privacidad: {
      updated: "[FECHA] · v1.0",
      sections: [
        {
          title: "1. Tratamenduaren arduraduna",
          body: "Webgune honen bidez bildutako datu pertsonalen tratamenduaren arduraduna Barakaldo Makers elkartea da, helbidea Barakaldon (Bizkaia) eta [NIF] NIF-a duena. Gurekin harremanetan jar zaitezke {email} posta elektronikoaren bidez edo Telegram taldearen bidez."
        },
        {
          title: "2. Tratamenduaren helburua",
          body: "Harremanako formularioaren bidez ematen dituzun datu pertsozialak zure kontsulta, lankidetza-proposamena edo bazkide-izena kudeatzeko soilik erabiliko dira. Ez dira beste inongo helburuetarako erabiliko zure baimen esplikiturik gabe."
        },
        {
          title: "3. Legaltasuna",
          body: "Zure datuen tratamenduaren oinarri legala interesatuaren baimena da, harremanako formularioa bidaltzean ematen dena, eta aurrekontraktual neurriak exekutatzea bazkide-izena eskabetzean."
        },
        {
          title: "4. Datuen kontserbazioa",
          body: "Emandako datu pertsonalak jasotzeko helburua betetzeko denboran kontserbatuko dira, eta helburu horretatik eratorritakoantzukizunak zehazteko, artxibuen eta dokumentazioaren arautako epeak gainera."
        },
        {
          title: "5. Hartzaileak",
          body: "Ez dira datukik hirugarrenen partekatuko, legezko betebeharretan edo eskatutako zerbitzua eman behar denean. Ez dira nazioarteko datu-transferentziak egiten."
        },
        {
        title: "6. Eskubideak",
          body: "Pertsona orok du bere datu pertsonalak tratatzen diren berreskuratzeko eskubidea. Interesatuek bere datu pertsonalak atzitzeko eskubidea dute, eta datu zuzenak zuzendu, ezabatu, mugatu, mugakortasuna edo tratamenduaren aurka eskatzeko. Eskubide horiek {email} helbidera idatziz erabili ditzakezu, zein eskubide erabili nahi duzun adierazita."
        },
        {
          title: "7. Adin txikikoak",
          body: "Webgune hau 14 urte baino gutxiago daudenentzat ez dago zuzenduta. Elkarteak ez ditu nahitaez adin txikikoen datu pertsonalik biltzen. 14 urte baino gutxiago badituzu, mesedez, ez emon datu pertsonalik."
        }
      ]
    },
    avisoLegal: {
      updated: "[FECHA] · v1.0",
      sections: [
        {
          title: "1. Datu identifikatzaileak",
          body: "2002ko uztailaren 11ko 34/2002 Legearen betetzerakoan, Informazio Gizartea eta Elektronika Merkataritza Zerbitzuei buruzkoa (LSSI-CE), webgune honen titularra Barakaldo Makers elkartea dela jakinarazten da, [NIF] NIF-a eta Barakaldoko (Bizkaia) helbidea duena. Harremaneko posta elektronikoa: {email}."
        },
        {
          title: "2. Objektua eta esparrua",
          body: "Webgune honen helburua Barakaldo Makers elkartearen jarduerak, proiektuak eta zerbitzuak ezagutzatzea da, eta lankidetzan, parte-hartzean edo gure ekiburuei buruzko informazioa jasotzeko interesa duten pertsona eta erakundeekin harremana erraztea."
        },
        {
          title: "3. Jabetza intelektuala eta industriala",
          body: "Webgune honen eduki guztiak, testuak, argazkiak, grafikoak, irudiak, ikonoak, softwarea, diseinu grafikoa eta iturri-kodeak Barakaldo Makers elkartearenak edo erabiltzeko baimena duten hirugarrenenak dira, eta jabetza intelektual eta industrialaren araupean babestuta daude. Erreprodukzioa, banaketa, komunikazio publikoa eta eraldaketa debekatuta dago titularraren baimen esplikirik gabe."
        },
        {
          title: "4.antzukizuna",
          body: "Elkarteak ez du bermatzen webgunean etengabeko erabilera eta eduki akatsik egoterik. Ez da erantzule etenaldi, atzerapen edo gaizki funtzionamenduarekin erlazionatutako kaltea edo erabiltzaileek edukian duten informazioaren erabileratik eratorritako kalteetarako."
        },
        {
          title: "5. Kanpoko estekak",
          body: "Webgune honek hirugarren webguneen estekak izan ditzake. Elkarteak ez da erantzule estekatutako webguneen edukietatik, pribatutasun-politiketatik edo praktiketatik. Esteka bat ez da derrigorrezko onarpena edo gomendioa."
        },
        {
          title: "6. Arautzailea eta jurisdikzioa",
          body: "Lege-oharra espainiar arautzailearen menpe dago. Webgune honen edo erabileran edo erabileran datozen edozein eztabaidari emateko, aldeak Bilboko epaileku eta epitazioetara dira, beste inongo eskumenik ukatuz."
        }
      ]
    },
    cookies: {
      updated: "[FECHA] · v1.0",
      sections: [
        {
          title: "1. Zer dira cookie-ak?",
          body: "Cookie-ak dokumentu txikiak dira, webguneek zure gailuan (ordenagailua, tableta, telefono mugikorra) gordetzen dituztenak bisitatzen direnean. Erabiliak dira webguneak ondo funtzionatzeko, eraginkortasun handiagoz, eta webgune jabeentzako informazioa emateko."
        },
        {
          title: "2. Erabilitako cookie motak",
          body: "Webgune honek cookie teknikokoak eta hobespenak erabiltzen ditu, webguneak ondo funtzionatzeko eta zure nabigazio-hobespenak gogoratzeko beharrezkoak direnak. Ez dugu jarraipen, analitika edo publizitaterik erabiltzen baimen esplikirik gabe."
        },
        {
          title: "3. Hirugarren cookie-ak",
          body: "Kanpoko sare sozialetara (Telegram, GitLab, GitHub, Facebook, X) estekak erabilitzean, plataformek zure gailuan cookie-ak instala ditzakete. Zure informazio gehiago lortzeko, gomendatzen dugu plataformek beraien pribatutasun-politika eta cookie-politika kontsultatzea."
        },
        {
          title: "4. Cookie-en kudeaketa eta desaktibazioa",
          body: "Zure gailuan instalatutako cookie-ak ondo, blokeatu edo ezabatu ditzakezu nabigatzailearen aukera konfiguratuz. Jarraian, nabigatzaile nagusietan nola egin ibilbideak ematen ditugu: Chrome, Firefox, Safari, Edge."
        },
        {
          title: "5. Cookie-politika-aldaketak",
          body: "Cookie-politika hau aldian behin eguneratzen da erabili ditugun cookie-ekin aldaketak erakusteko edo operazio, lege edo arazo erregulatzaileak direla eta. Gomendatzen dugu cookie-politika hau maiz berrikustea, cookie-ak nola erabiltzen dugun jakin izateko."
        },
        {
          title: "6. Harremana",
          body: "Cookie-politika honen inguruko galderarik baduzu, gurekin harremanetan jar zaitezke {email} posta elektronikoaren bidez."
        }
      ]
    }
  }
,
}

const dictionaries: Record<Locale, Dictionary> = { es, eu }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

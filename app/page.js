"use client";

import { useState, useMemo } from "react";

/* ═══════════════════════════════════════════
   8 WORLDS WITH VISIÓN 2036
   ═══════════════════════════════════════════ */
const worlds = [
  {
    id: "mente", emoji: "🧠", name: "La Mente Humana", color: "#7C3AED", light: "#EDE9FE",
    tagline: "¿Te fascina por qué pensamos, sentimos y soñamos?",
    desc: "Desde entender por qué nos enamoramos hasta crear máquinas que aprenden como nosotros.",
    carreras: ["Neurociencia", "Psicología", "Neurología", "Neuroeducación", "IA Cognitiva", "Psiquiatría", "Bioingeniería Neural", "Terapia Ocupacional"],
    historia: { nombre: "Valentina, 24", pais: "🇨🇴→🇩🇪", texto: "En el colegio me decían que era rara porque me fascinaba entender por qué la gente actúa como actúa. Hoy estudio Neurociencia Cognitiva en Berlín con beca completa." },
    dia: "Un neurocientífico puede pasar su mañana analizando imágenes cerebrales, la tarde diseñando un experimento sobre memoria, y la noche leyendo sobre cómo la música afecta nuestras emociones.",
    vision2036: {
      titulo: "En 2036 serás el puente entre la mente humana y la IA",
      tendencias: [
        { icon: "🤖", titulo: "IA como copiloto", desc: "Los neurocientíficos trabajarán junto a sistemas de IA para mapear el cerebro a velocidades imposibles hoy. Tu valor estará en hacer las preguntas correctas, no en calcular las respuestas." },
        { icon: "🧬", titulo: "Salud mental preventiva", desc: "La salud mental será estructural en la sociedad. Se crearán miles de nuevos roles dedicados al bienestar integral — desde coaches de neurociencia hasta terapeutas digitales personalizados." },
        { icon: "🎓", titulo: "Aprendizaje permanente", desc: "Acumularás microcredenciales constantemente: neurotecnología, terapias genéticas, interfaces cerebro-máquina. La universidad será solo el punto de partida." },
      ],
      dato: "Se estima que el 70% de los roles en salud mental de 2036 aún no existen hoy. Esto significa oportunidades enormes para quienes lleguen primero.",
    },
  },
  {
    id: "tech", emoji: "💻", name: "Tecnología y Digital", color: "#0891B2", light: "#E0F7FA",
    tagline: "¿Te imaginas construir el futuro con código, datos o diseño?",
    desc: "No es solo programar. Es crear apps que salvan vidas, videojuegos, IA que traduce idiomas y robots que exploran otros planetas.",
    carreras: ["Ingeniería de Software", "Ciencia de Datos", "Ciberseguridad", "Diseño UX/UI", "IA", "Desarrollo de Videojuegos", "Robótica", "Cloud Computing"],
    historia: { nombre: "Andrés, 22", pais: "🇵🇦→🇺🇸", texto: "Yo no sabía programar en el colegio. Solo me gustaban los videojuegos. Un mentor me mostró que detrás de cada juego hay miles de líneas de código, y me enamoré." },
    dia: "Un diseñador UX puede pasar la mañana entrevistando usuarios, la tarde creando prototipos interactivos, y cerrar el día probando su diseño.",
    vision2036: {
      titulo: "En 2036 no competirás con la IA — la dirigirás",
      tendencias: [
        { icon: "🤝", titulo: "IA como colaborador", desc: "Dejarás de escribir código línea por línea. Tu trabajo será arquitectar sistemas, cuestionar los resultados de los algoritmos y aportar el juicio ético que las máquinas no tienen." },
        { icon: "🛡️", titulo: "Demanda consolidada", desc: "Ciencia de Datos, IA y Ciberseguridad serán las áreas con mayor demanda y los salarios más competitivos del mundo. No habrá suficientes profesionales para cubrir los puestos." },
        { icon: "🌍", titulo: "Trabajo global sin fronteras", desc: "Trabajarás desde Panamá para empresas en Tokio, Berlín o Silicon Valley sin moverte físicamente. La colaboración digital será la norma, no la excepción." },
      ],
      dato: "Para 2036, se proyecta que el 85% de los trabajos tecnológicos serán híbridos: combinarán programación con ética, diseño, negocios o ciencias sociales.",
    },
  },
  {
    id: "salud", emoji: "❤️‍🩹", name: "Salud y Bienestar", color: "#DC2626", light: "#FEE2E2",
    tagline: "¿Sientes que tu misión es cuidar y sanar a otros?",
    desc: "Va mucho más allá de ser doctor. Es nutrición, fisioterapia, salud pública, investigación de vacunas y medicina deportiva.",
    carreras: ["Medicina", "Enfermería", "Nutrición", "Fisioterapia", "Salud Pública", "Biotecnología", "Medicina Deportiva", "Farmacología"],
    historia: { nombre: "Camila, 26", pais: "🇲🇽→🇯🇵", texto: "Siempre quise ayudar pero la sangre me daba miedo. Descubrí la salud pública y hoy trabajo en prevención de epidemias. No necesité ser cirujana para salvar miles de vidas." },
    dia: "Un biotecnólogo puede pasar la mañana en el laboratorio modificando células, la tarde analizando resultados con IA, y la noche preparando una presentación.",
    vision2036: {
      titulo: "En 2036 curarás antes de que la enfermedad aparezca",
      tendencias: [
        { icon: "🧬", titulo: "Medicina personalizada", desc: "Usarás bioinformática para adaptar tratamientos al perfil genético de cada paciente. Ya no habrá 'medicina para todos' — habrá medicina para ti, para mí, para cada persona." },
        { icon: "🤖", titulo: "Robótica y telemedicina", desc: "Operarás pacientes a distancia con robótica quirúrgica, consultarás desde tu casa con telemedicina avanzada, y la IA te ayudará a diagnosticar enfermedades antes de que aparezcan síntomas." },
        { icon: "🧠", titulo: "Salud mental central", desc: "La salud mental será tan importante como la física. Se crearán miles de roles dedicados al bienestar integral de la sociedad — un área con crecimiento explosivo." },
      ],
      dato: "Se estima que para 2036, el 60% del tiempo de un médico será dedicado a prevención y salud mental, no a curar enfermedades ya establecidas.",
    },
  },
  {
    id: "creativo", emoji: "🎨", name: "Arte y Creatividad", color: "#EA580C", light: "#FFF7ED",
    tagline: "¿El mundo es tu lienzo y las ideas no paran?",
    desc: "Diseño, cine, arquitectura, moda, música, escritura, animación... la creatividad es tu herramienta profesional.",
    carreras: ["Diseño Gráfico", "Arquitectura", "Cine", "Diseño de Moda", "Animación 3D", "Música y Producción", "Diseño Industrial", "Publicidad Creativa"],
    historia: { nombre: "Sebastián, 23", pais: "🇨🇱→🇨🇦", texto: "Mi papá decía que del arte no se vive. Hoy soy animador 3D en un estudio de Vancouver y gano más que muchos ingenieros." },
    dia: "Un director de arte puede empezar el día en un brainstorming, pasar la tarde dirigiendo una sesión de fotos, y cerrar revisando la identidad visual de una marca global.",
    vision2036: {
      titulo: "En 2036 la creatividad humana será más valiosa que nunca",
      tendencias: [
        { icon: "🎨", titulo: "IA como herramienta creativa", desc: "Usarás IA para generar ideas, prototipos y variaciones infinitas — pero la visión, el juicio estético y la emoción genuina seguirán siendo 100% humanos. Y ese será tu mayor activo." },
        { icon: "🌱", titulo: "Diseño sostenible", desc: "Cada proyecto creativo tendrá que considerar el impacto ambiental. Diseñarás para la economía circular, con materiales regenerativos y procesos que restauran en lugar de destruir." },
        { icon: "🔀", titulo: "Creativos híbridos", desc: "Combinarás tu arte con tecnología, ciencia o negocios. Los diseñadores puros serán reemplazados por creativos que también entienden código, datos o sostenibilidad." },
      ],
      dato: "La industria creativa generará más de 3.5 billones de dólares en 2036, con la demanda más alta en creativos que sepan dirigir IA sin perder su esencia humana.",
    },
  },
  {
    id: "negocios", emoji: "📈", name: "Negocios y Emprendimiento", color: "#059669", light: "#ECFDF5",
    tagline: "¿Ves oportunidades donde otros ven problemas?",
    desc: "Liderar equipos, crear empresas, mover mercados, negociar acuerdos internacionales. No es solo dinero — es impacto y visión.",
    carreras: ["Administración", "Marketing Digital", "Finanzas", "Comercio Internacional", "Economía", "Emprendimiento", "Recursos Humanos", "Logística"],
    historia: { nombre: "María José, 25", pais: "🇪🇨→🇸🇬", texto: "Vendía galletas en el recreo. Hoy dirijo un e-commerce que vende a 12 países. La carrera de negocios me dio las herramientas." },
    dia: "Un consultor de estrategia puede desayunar analizando datos de mercado, presentar a un CEO, almorzar con un cliente y cerrar diseñando un plan de expansión.",
    vision2036: {
      titulo: "En 2036 liderarás con datos, IA y propósito",
      tendencias: [
        { icon: "🤖", titulo: "Decisiones con IA", desc: "Cada decisión de negocio será apoyada por IA analizando millones de datos en segundos. Tu valor estará en cuestionar los algoritmos, ver lo que la máquina no ve, y aportar el juicio ético que define a los grandes líderes." },
        { icon: "🌍", titulo: "Negocios sostenibles", desc: "Las empresas que no integren sostenibilidad en su modelo dejarán de existir. Serás parte de la 'economía verde' — creando negocios que son rentables y regeneran el planeta al mismo tiempo." },
        { icon: "💪", titulo: "Power skills", desc: "Las habilidades que te harán destacar no serán las técnicas — serán el pensamiento crítico, la resiliencia, la comunicación empática y el liderazgo humano. La IA hace lo demás." },
      ],
      dato: "Se proyecta que los profesionales de negocios cambiarán de rol 7-10 veces en su carrera. La adaptabilidad y el aprendizaje continuo serán tus mayores activos.",
    },
  },
  {
    id: "naturaleza", emoji: "🌿", name: "Naturaleza y Medio Ambiente", color: "#16A34A", light: "#F0FDF4",
    tagline: "¿Sientes que proteger el planeta es tu llamado?",
    desc: "Cambio climático, energías renovables, conservación marina, agricultura sostenible... las carreras verdes son las más demandadas del futuro.",
    carreras: ["Ing. Ambiental", "Biología Marina", "Energías Renovables", "Agronomía", "Veterinaria", "Ciencias del Clima", "Gestión Ambiental", "Ecología"],
    historia: { nombre: "Diego, 27", pais: "🇨🇷→🇳🇴", texto: "Crecí en una finca. Estudié ingeniería ambiental y hoy diseño sistemas de energía solar para comunidades rurales en Escandinavia." },
    dia: "Un biólogo marino puede empezar el día buceando para tomar muestras, analizarlas en laboratorio, y cerrar escribiendo un artículo que puede cambiar políticas.",
    vision2036: {
      titulo: "En 2036 serás el arquitecto del futuro del planeta",
      tendencias: [
        { icon: "☀️", titulo: "Economía verde dominante", desc: "Serás parte de la mayor transformación económica de la historia. Ingenieros en energías renovables, especialistas en economía circular y urbanistas de ciudades inteligentes lideraran el mercado laboral del futuro." },
        { icon: "🌱", titulo: "Restauración, no conservación", desc: "Ya no solo protegerás — regenerarás. Tu trabajo será restaurar ecosistemas dañados, repoblar océanos y rehabilitar tierras. El mundo necesita que hagas más que evitar daño: necesita que repares." },
        { icon: "🤖", titulo: "Tecnología al servicio del planeta", desc: "Usarás IA, drones y sensores para monitorear ecosistemas enteros en tiempo real. Serás un profesional híbrido: mitad biólogo, mitad ingeniero de datos." },
      ],
      dato: "Las carreras verdes son las de mayor crecimiento proyectado: 24 millones de empleos nuevos para 2030 y se espera que se dupliquen para 2036.",
    },
  },
  {
    id: "social", emoji: "🤝", name: "Impacto Social y Humanidades", color: "#9333EA", light: "#FAF5FF",
    tagline: "¿Crees que puedes cambiar el mundo cambiando a las personas?",
    desc: "Derecho, educación, trabajo social, relaciones internacionales... carreras que transforman sociedades.",
    carreras: ["Derecho", "Educación", "Trabajo Social", "Relaciones Internacionales", "Periodismo", "Sociología", "Filosofía", "Cooperación Internacional"],
    historia: { nombre: "Isabella, 28", pais: "🇵🇪→🇨🇭", texto: "Estudié derecho porque quería justicia para mi comunidad. Hoy trabajo en derechos humanos en Ginebra. Nunca imaginé que una chica de Cusco llegaría a la ONU." },
    dia: "Un profesional de cooperación puede pasar la mañana reunido con un gobierno local, la tarde visitando una comunidad, y la noche redactando un informe.",
    vision2036: {
      titulo: "En 2036 defenderás lo que ninguna IA puede reemplazar: la humanidad",
      tendencias: [
        { icon: "⚖️", titulo: "Ética de la IA", desc: "Los abogados y filósofos que entiendan cómo regular la inteligencia artificial serán los profesionales más buscados. Cada país necesitará expertos en el impacto ético de la tecnología." },
        { icon: "📚", titulo: "Educación reinventada", desc: "La educación ya no será aulas tradicionales. Diseñarás experiencias de aprendizaje personalizadas con IA, acompañarás a estudiantes que aprenden toda su vida, y ayudarás a sociedades a adaptarse a cambios rápidos." },
        { icon: "🌐", titulo: "Colaboración global digital", desc: "Trabajarás con colegas de 20 países diferentes sin moverte. Los grandes problemas sociales — migración, desigualdad, polarización — requieren soluciones globales construidas en equipo." },
      ],
      dato: "Las power skills como pensamiento crítico, empatía y comunicación serán las más valoradas en 2036. Son exactamente lo que las humanidades enseñan.",
    },
  },
  {
    id: "accion", emoji: "🛩️", name: "Acción, Servicio y Aventura", color: "#B45309", light: "#FEF3C7",
    tagline: "¿Sueñas con una vida de acción, disciplina y propósito?",
    desc: "Pilotos, marinos mercantes, militares, bomberos, paramédicos... profesiones donde el coraje y el servicio son tu día a día.",
    carreras: ["Piloto Comercial", "Marina Mercante", "Oficial Militar", "Policía / Investigación", "Bombero y Rescate", "Paramédico", "Control Tráfico Aéreo", "Guardacostas"],
    historia: { nombre: "Carlos, 26", pais: "🇵🇦→🌊 Los 7 mares", texto: "En mi colegio nadie hablaba de la marina mercante. Hoy soy oficial de navegación en un buque portacontenedores. Gano más que muchos con maestría y he conocido 30 países." },
    dia: "Un piloto comercial puede despertarse en Madrid, revisar su plan de vuelo, cruzar el Atlántico en un Boeing 787, y cenar en Ciudad de Panamá. Un marino mercante navega semanas por el Pacífico y luego tiene semanas libres.",
    vision2036: {
      titulo: "En 2036 combinarás disciplina humana con tecnología avanzada",
      tendencias: [
        { icon: "✈️", titulo: "Automatización con supervisión humana", desc: "Los aviones, barcos y vehículos serán semi-autónomos, pero siempre necesitarán supervisión humana experta. Tu entrenamiento será en tomar decisiones críticas en segundos cuando la tecnología falle." },
        { icon: "🛰️", titulo: "Misiones con IA y satélites", desc: "Rescates guiados por drones, navegación con IA predictiva, operaciones coordinadas con datos satelitales en tiempo real. La disciplina y el coraje se combinarán con tecnología de última generación." },
        { icon: "🌊", titulo: "Nuevos escenarios climáticos", desc: "El cambio climático generará más emergencias: incendios, inundaciones, rescates. Los profesionales de la acción serán esenciales para responder a un mundo con eventos extremos cada vez más frecuentes." },
      ],
      dato: "Panamá tiene el registro marítimo más grande del mundo y el Canal. Para 2036, la demanda de oficiales de marina mercante capacitados crecerá un 40% por el aumento del comercio global.",
    },
  },
];

/* ═══════════════════════════════════════════
   CAREER DATABASE
   ═══════════════════════════════════════════ */
const carrerasDB = {
  "Neurociencia": { emoji:"🧠", color:"#7C3AED", duracion:"4-5 años + especialización", resumen:"Estudia el sistema nervioso — desde las neuronas individuales hasta cómo el cerebro genera pensamientos, emociones y comportamientos. Una de las ciencias más fascinantes del siglo XXI.", queEstudias:["Anatomía del cerebro","Biología molecular","Neuroimagen","Neuropsicología","Farmacología"], campoLaboral:"Investigación, empresas de neurotecnología, hospitales, consultoría en IA.", salario:"$45,000 - $120,000 USD/año", dato:"El mercado de neurotecnología alcanzará los $21 mil millones para 2026.", relacionadas:["Psicología","Neurología","IA Cognitiva","Neuroeducación","Bioingeniería Neural","Psiquiatría"] },
  "Psicología": { emoji:"💬", color:"#7C3AED", duracion:"4-5 años", resumen:"Ciencia que estudia el comportamiento humano y los procesos mentales. Abarca desde terapia individual hasta psicología organizacional, deportiva, forense y educativa.", queEstudias:["Psicología clínica","Psicología del desarrollo","Neuropsicología","Estadística","Psicología social"], campoLaboral:"Consultorios, hospitales, empresas, colegios, investigación, ONGs.", salario:"$35,000 - $90,000 USD/año", dato:"La demanda de psicólogos creció 25% después de la pandemia a nivel mundial.", relacionadas:["Neurociencia","Psiquiatría","Neuroeducación","Trabajo Social","Terapia Ocupacional"] },
  "Neurología": { emoji:"⚕️", color:"#DC2626", duracion:"6-7 años de medicina + 4-5 de especialización", resumen:"Rama de la medicina que diagnostica y trata enfermedades del sistema nervioso: cerebro, médula espinal, nervios y músculos. Incluye epilepsia, Alzheimer, Parkinson.", queEstudias:["Medicina general","Anatomía del sistema nervioso","Neurofisiología","Neuroimagen","Enfermedades neurodegenerativas"], campoLaboral:"Hospitales, clínicas especializadas, investigación, consulta privada.", salario:"$80,000 - $300,000 USD/año", dato:"Es una de las 5 especialidades médicas con mayor demanda no cubierta en el mundo.", relacionadas:["Neurociencia","Psiquiatría","Medicina","Bioingeniería Neural"] },
  "Psiquiatría": { emoji:"🩺", color:"#7C3AED", duracion:"6-7 años de medicina + 4 de especialización", resumen:"Especialidad médica dedicada al diagnóstico y tratamiento de trastornos mentales. A diferencia del psicólogo, puede recetar medicamentos y combinar tratamiento farmacológico con terapia.", queEstudias:["Medicina general","Psicofarmacología","Trastornos del ánimo","Psiquiatría infantil","Neurobiología"], campoLaboral:"Hospitales, clínicas de salud mental, consulta privada, investigación.", salario:"$70,000 - $250,000 USD/año", dato:"Hay un déficit global de 100,000+ psiquiatras a nivel mundial.", relacionadas:["Psicología","Neurología","Neurociencia","Medicina","Farmacología"] },
  "Neuroeducación": { emoji:"📚", color:"#7C3AED", duracion:"4-5 años + especialización", resumen:"Combina neurociencia, psicología y pedagogía para entender cómo aprende el cerebro y diseñar métodos educativos más efectivos. Una de las carreras más innovadoras del siglo XXI.", queEstudias:["Neurociencia del aprendizaje","Psicología cognitiva","Diseño instruccional","Tecnología educativa"], campoLaboral:"Colegios, universidades, ministerios, empresas EdTech, consultoría.", salario:"$35,000 - $80,000 USD/año", dato:"La industria EdTech vale $340 mil millones y busca neuroeducadores.", relacionadas:["Neurociencia","Psicología","Educación","IA Cognitiva"] },
  "IA Cognitiva": { emoji:"🤖", color:"#0891B2", duracion:"4-5 años + maestría recomendada", resumen:"Combina IA con ciencia cognitiva para crear sistemas que imitan procesos mentales humanos: aprendizaje, toma de decisiones, percepción y lenguaje. Piensa en ChatGPT y asistentes virtuales.", queEstudias:["Programación","Machine learning","Ciencia cognitiva","Procesamiento de lenguaje","Ética de la IA"], campoLaboral:"Empresas tech (Google, Meta, OpenAI), startups, investigación, healthcare tech.", salario:"$70,000 - $200,000+ USD/año", dato:"Los profesionales de IA son los mejor pagados en tecnología, con salarios creciendo 15% anual.", relacionadas:["Ingeniería de Software","Ciencia de Datos","Neurociencia","Robótica"] },
  "Bioingeniería Neural": { emoji:"⚡", color:"#7C3AED", duracion:"4-5 años + maestría", resumen:"Diseña interfaces entre el cerebro y las máquinas. Desde prótesis controladas con la mente hasta implantes que restauran la visión. La frontera entre biología e ingeniería.", queEstudias:["Bioingeniería","Neuroanatomía","Procesamiento de señales","Diseño de dispositivos médicos"], campoLaboral:"Neuralink, hospitales de investigación, dispositivos médicos, universidades.", salario:"$65,000 - $160,000 USD/año", dato:"Neuralink y otras empresas ya están probando chips cerebrales en humanos.", relacionadas:["Neurociencia","Neurología","Robótica","Biotecnología"] },
  "Terapia Ocupacional": { emoji:"🤲", color:"#DC2626", duracion:"4-5 años", resumen:"Ayuda a personas con discapacidades, lesiones o enfermedades a recuperar su independencia. Trabaja con niños, adultos mayores y personas con condiciones de salud mental.", queEstudias:["Anatomía funcional","Rehabilitación","Adaptación del entorno","Salud mental","Pediatría"], campoLaboral:"Hospitales, centros de rehabilitación, colegios, consulta privada.", salario:"$32,000 - $80,000 USD/año", dato:"Con el envejecimiento global, la demanda crece 14% anual.", relacionadas:["Fisioterapia","Psicología","Enfermería","Neurociencia"] },

  "Ingeniería de Software": { emoji:"⌨️", color:"#0891B2", duracion:"4-5 años", resumen:"Diseña, desarrolla y mantiene aplicaciones y sistemas digitales. Desde la app de tu banco hasta el algoritmo de Netflix. La profesión con mayor demanda laboral del mundo.", queEstudias:["Programación","Estructuras de datos","Bases de datos","Desarrollo web y móvil","Metodologías ágiles"], campoLaboral:"Empresas tech, bancos, startups, freelance, trabajo remoto global.", salario:"$50,000 - $180,000+ USD/año", dato:"Hay 1.4 millones de puestos de software sin cubrir solo en EE.UU.", relacionadas:["Ciencia de Datos","Ciberseguridad","IA","Diseño UX/UI","Desarrollo de Videojuegos","Cloud Computing"] },
  "Ciencia de Datos": { emoji:"📊", color:"#0891B2", duracion:"4-5 años + especialización", resumen:"Extrae conocimiento y patrones de grandes volúmenes de datos. Llamada 'la profesión más sexy del siglo XXI' por Harvard Business Review.", queEstudias:["Estadística","Python y R","Machine learning","Visualización de datos","Big data"], campoLaboral:"Finanzas, salud, marketing, gobierno, deportes, entretenimiento.", salario:"$55,000 - $160,000 USD/año", dato:"Los datos generados en el mundo se duplican cada 2 años.", relacionadas:["IA","Ingeniería de Software","Marketing Digital","Finanzas","Economía"] },
  "Ciberseguridad": { emoji:"🛡️", color:"#0891B2", duracion:"4-5 años + certificaciones", resumen:"Protege sistemas, redes y datos de ataques cibernéticos. Los guardianes del internet. Cada 39 segundos hay un ciberataque en el mundo.", queEstudias:["Redes","Criptografía","Hacking ético","Análisis forense","Gestión de riesgos"], campoLaboral:"Bancos, gobiernos, empresas tech, consultoría, freelance.", salario:"$60,000 - $170,000 USD/año", dato:"Hay 3.5 millones de puestos de ciberseguridad sin cubrir a nivel mundial.", relacionadas:["Ingeniería de Software","Ciencia de Datos","IA","Cloud Computing"] },
  "Diseño UX/UI": { emoji:"🎨", color:"#EA580C", duracion:"3-4 años o bootcamps", resumen:"Diseña cómo se ven y funcionan las apps y sitios web. UX se enfoca en que sea fácil de usar, UI en que sea bello. El puente entre tecnología y personas.", queEstudias:["Investigación de usuarios","Diseño de interfaces","Prototipado (Figma)","Psicología del usuario","Testing"], campoLaboral:"Empresas tech, agencias de diseño, bancos, freelance.", salario:"$45,000 - $130,000 USD/año", dato:"Cada $1 invertido en UX genera un retorno de $100.", relacionadas:["Diseño Gráfico","Ingeniería de Software","Psicología","Marketing Digital"] },
  "IA": { emoji:"🧠", color:"#0891B2", duracion:"4-5 años + maestría", resumen:"Crea sistemas capaces de aprender, razonar y tomar decisiones. Desde ChatGPT hasta los coches autónomos. La tecnología más disruptiva de nuestra era.", queEstudias:["Matemáticas avanzadas","Machine learning","Procesamiento de lenguaje","Visión por computadora","Ética de la IA"], campoLaboral:"Empresas tech, healthcare, automotriz, finanzas, investigación.", salario:"$75,000 - $250,000+ USD/año", dato:"La IA contribuirá $15.7 trillones a la economía global para 2030.", relacionadas:["Ciencia de Datos","Ingeniería de Software","Robótica","IA Cognitiva","Neurociencia"] },
  "Desarrollo de Videojuegos": { emoji:"🎮", color:"#0891B2", duracion:"3-4 años", resumen:"Diseña, programa y crea videojuegos — una industria que genera más que el cine y la música juntos. Desde juegos indie hasta títulos AAA, mobile y VR.", queEstudias:["Programación (Unity, Unreal)","Game design","Modelado 3D","Narrativa interactiva","Testing"], campoLaboral:"Estudios de videojuegos, empresas tech, indie, serious games, educación.", salario:"$40,000 - $130,000 USD/año", dato:"La industria de videojuegos vale $200+ mil millones anuales.", relacionadas:["Animación 3D","Ingeniería de Software","Diseño UX/UI","IA"] },
  "Robótica": { emoji:"🦾", color:"#0891B2", duracion:"4-5 años + especialización", resumen:"Diseña, construye y programa robots para cirugía, exploración espacial, manufactura, agricultura y más. Combina ingeniería mecánica, electrónica y programación.", queEstudias:["Mecánica y electrónica","Programación de robots","IA","Sensores","Control automático"], campoLaboral:"Manufactura, aeroespacial, medicina, agricultura tech, defensa.", salario:"$55,000 - $150,000 USD/año", dato:"El mercado de robótica crecerá 26% anual hasta 2030.", relacionadas:["IA","Ingeniería de Software","Bioingeniería Neural"] },
  "Cloud Computing": { emoji:"☁️", color:"#0891B2", duracion:"4 años + certificaciones", resumen:"Diseña la infraestructura invisible que hace funcionar internet: servidores, almacenamiento y servicios en la nube. Todo lo que usas online depende del cloud.", queEstudias:["Arquitectura cloud (AWS, Azure)","DevOps","Contenedores","Redes y seguridad","Automatización"], campoLaboral:"Empresas tech, bancos, startups, gobierno, trabajo remoto global.", salario:"$60,000 - $170,000 USD/año", dato:"Los certificados en AWS ganan 26% más que sus pares sin certificación.", relacionadas:["Ingeniería de Software","Ciberseguridad","Ciencia de Datos","IA"] },

  "Medicina": { emoji:"🩺", color:"#DC2626", duracion:"6-7 años + residencia", resumen:"Diagnostica, trata y previene enfermedades. Una de las profesiones más antiguas y respetadas, con decenas de especialidades — desde cirugía hasta genética.", queEstudias:["Anatomía","Bioquímica","Farmacología","Patología","Diagnóstico clínico"], campoLaboral:"Hospitales, clínicas, consulta privada, investigación, salud pública.", salario:"$50,000 - $400,000+ USD/año", dato:"La OMS estima que faltan 18 millones de profesionales de salud en el mundo.", relacionadas:["Neurología","Psiquiatría","Salud Pública","Biotecnología","Enfermería"] },
  "Enfermería": { emoji:"💉", color:"#DC2626", duracion:"4-5 años", resumen:"La columna vertebral del sistema de salud. Los enfermeros cuidan, educan y acompañan a pacientes en todas las etapas. Sin ellos, los hospitales no funcionan.", queEstudias:["Cuidado del paciente","Farmacología","Salud comunitaria","Urgencias","Salud mental"], campoLaboral:"Hospitales, clínicas, atención domiciliaria, cooperación internacional.", salario:"$35,000 - $95,000 USD/año", dato:"Es la profesión con menor tasa de desempleo en el mundo.", relacionadas:["Medicina","Salud Pública","Fisioterapia","Nutrición"] },
  "Nutrición": { emoji:"🥗", color:"#DC2626", duracion:"4-5 años", resumen:"Estudia cómo los alimentos afectan la salud. Diseña planes alimenticios, previene enfermedades crónicas. Desde hospitales hasta el deporte de alto rendimiento.", queEstudias:["Bioquímica de alimentos","Nutrición clínica","Dietética deportiva","Nutrición comunitaria"], campoLaboral:"Hospitales, consulta privada, deportes, industria alimentaria.", salario:"$30,000 - $75,000 USD/año", dato:"La nutrición personalizada basada en genética es una tendencia fuerte.", relacionadas:["Medicina","Fisioterapia","Salud Pública","Medicina Deportiva"] },
  "Fisioterapia": { emoji:"🏃", color:"#DC2626", duracion:"4-5 años", resumen:"Recupera y mejora el movimiento de las personas. Trabaja con pacientes con lesiones, cirugías, o condiciones crónicas. También en prevención y deporte.", queEstudias:["Anatomía y biomecánica","Rehabilitación","Electroterapia","Fisioterapia deportiva","Terapia manual"], campoLaboral:"Hospitales, clínicas deportivas, equipos profesionales, consulta privada.", salario:"$35,000 - $85,000 USD/año", dato:"Con el envejecimiento, la demanda crece cada año.", relacionadas:["Medicina Deportiva","Terapia Ocupacional","Nutrición","Medicina"] },
  "Salud Pública": { emoji:"🌍", color:"#DC2626", duracion:"4-5 años + maestría", resumen:"Protege la salud de poblaciones enteras. Previene epidemias, diseña políticas de salud y trabaja en las grandes crisis sanitarias del mundo.", queEstudias:["Epidemiología","Bioestadística","Políticas de salud","Salud ambiental","Gestión sanitaria"], campoLaboral:"OMS, gobiernos, ONGs, hospitales, investigación.", salario:"$40,000 - $110,000 USD/año", dato:"La pandemia demostró que son esenciales para la supervivencia global.", relacionadas:["Medicina","Enfermería","Biotecnología","Cooperación Internacional"] },
  "Biotecnología": { emoji:"🧬", color:"#DC2626", duracion:"4-5 años + maestría", resumen:"Usa organismos vivos y tecnología para crear soluciones: vacunas, terapias genéticas, alimentos mejorados y biocombustibles. La ciencia detrás de las vacunas COVID.", queEstudias:["Biología molecular","Genética","Microbiología","Bioinformática","Bioética"], campoLaboral:"Farmacéuticas, agroalimentaria, energía, cosmética, investigación.", salario:"$45,000 - $130,000 USD/año", dato:"Es una de las 3 industrias con mayor inversión de venture capital del mundo.", relacionadas:["Farmacología","Medicina","Ing. Ambiental","Genética"] },
  "Medicina Deportiva": { emoji:"⚽", color:"#DC2626", duracion:"6-7 años + especialización", resumen:"Previene y trata lesiones deportivas, optimiza el rendimiento atlético. Desde amateurs hasta atletas olímpicos y estrellas de la NBA o el fútbol.", queEstudias:["Medicina general","Traumatología deportiva","Fisiología del ejercicio","Nutrición deportiva","Biomecánica"], campoLaboral:"Equipos profesionales, centros deportivos, comités olímpicos.", salario:"$50,000 - $200,000 USD/año", dato:"Los médicos de equipos NBA o fútbol europeo son de los mejor pagados.", relacionadas:["Fisioterapia","Nutrición","Medicina"] },
  "Farmacología": { emoji:"💊", color:"#DC2626", duracion:"5 años", resumen:"Diseña, desarrolla y prueba los medicamentos que curan enfermedades. Desde investigación molecular hasta producción industrial. Ciencia que salva vidas.", queEstudias:["Química farmacéutica","Farmacología clínica","Desarrollo de medicamentos","Toxicología","Regulación"], campoLaboral:"Farmacéuticas, hospitales, laboratorios, investigación, cosmética.", salario:"$45,000 - $130,000 USD/año", dato:"Desarrollar un nuevo medicamento cuesta $2.6 mil millones y toma 12 años.", relacionadas:["Biotecnología","Medicina","Salud Pública","Neurociencia"] },

  "Diseño Gráfico": { emoji:"🖌️", color:"#EA580C", duracion:"4 años", resumen:"Comunica ideas a través de imágenes, tipografía y composición visual. Desde logos y marcas hasta interfaces digitales y contenido para redes sociales.", queEstudias:["Teoría del color","Tipografía","Identidad de marca","Diseño editorial","Adobe y Figma"], campoLaboral:"Agencias, empresas, startups, freelance, editorial, cine.", salario:"$30,000 - $85,000 USD/año", dato:"El diseño gráfico se ha reinventado con la IA — los que la usan ganan más.", relacionadas:["Diseño UX/UI","Publicidad Creativa","Animación 3D","Cine","Moda"] },
  "Cine": { emoji:"🎬", color:"#EA580C", duracion:"4-5 años", resumen:"Cuenta historias a través de la imagen en movimiento. Incluye dirección, fotografía, edición, guion, producción. Hoy el cine va más allá de Hollywood — incluye streaming y redes.", queEstudias:["Dirección","Guion","Fotografía cinematográfica","Edición","Producción"], campoLaboral:"Productoras, plataformas streaming, agencias, YouTube, publicidad.", salario:"$30,000 - $120,000+ USD/año", dato:"El streaming ha triplicado la demanda de creadores audiovisuales desde 2020.", relacionadas:["Animación 3D","Diseño Gráfico","Publicidad Creativa","Música y Producción"] },
  "Arquitectura": { emoji:"🏛️", color:"#EA580C", duracion:"5-6 años", resumen:"Diseña los espacios donde vivimos, trabajamos y nos reunimos. Combina arte, ciencia, tecnología y sostenibilidad. Desde rascacielos hasta ciudades inteligentes.", queEstudias:["Diseño arquitectónico","Estructuras y materiales","Urbanismo","Diseño sostenible","AutoCAD y Revit"], campoLaboral:"Estudios de arquitectura, constructoras, gobierno, urbanismo.", salario:"$35,000 - $110,000 USD/año", dato:"La arquitectura sostenible es una de las especializaciones más demandadas.", relacionadas:["Diseño Industrial","Diseño Gráfico"] },
  "Animación 3D": { emoji:"✨", color:"#EA580C", duracion:"3-4 años", resumen:"Crea mundos, personajes y efectos visuales usando tecnología digital. Desde películas de Pixar hasta videojuegos AAA, publicidad y realidad virtual.", queEstudias:["Modelado 3D","Animación de personajes","Efectos visuales","Texturizado","Motion capture"], campoLaboral:"Estudios de animación, videojuegos, publicidad, cine, VR.", salario:"$40,000 - $130,000 USD/año", dato:"Un animador senior en Pixar puede ganar más de $150,000 al año.", relacionadas:["Desarrollo de Videojuegos","Cine","Diseño Gráfico","Diseño UX/UI"] },
  "Diseño de Moda": { emoji:"👗", color:"#EA580C", duracion:"4 años", resumen:"Crea prendas, colecciones y tendencias que definen culturas. Va más allá de la pasarela: incluye moda sostenible, tecnología textil y fashion digital.", queEstudias:["Diseño de prendas","Textiles","Historia de la moda","Moda sostenible","Marketing de moda"], campoLaboral:"Marcas de moda, producción textil, medios, styling, cine/TV.", salario:"$30,000 - $100,000+ USD/año", dato:"La moda sostenible es el segmento que más rápido crece.", relacionadas:["Diseño Gráfico","Marketing Digital","Publicidad Creativa"] },
  "Publicidad Creativa": { emoji:"📣", color:"#EA580C", duracion:"4 años", resumen:"Crea las ideas, campañas y estrategias que mueven marcas. Desde un comercial del Super Bowl hasta una campaña viral en TikTok.", queEstudias:["Creatividad publicitaria","Copywriting","Dirección de arte","Estrategia de marca","Marketing digital"], campoLaboral:"Agencias de publicidad, departamentos de marketing, medios, freelance.", salario:"$35,000 - $110,000 USD/año", dato:"Las agencias más premiadas del mundo están en Latinoamérica.", relacionadas:["Marketing Digital","Diseño Gráfico","Cine","Periodismo"] },
  "Música y Producción": { emoji:"🎵", color:"#EA580C", duracion:"3-4 años", resumen:"Crea, produce y mezcla música. Desde composición hasta ingeniería de sonido, producción de beats y diseño sonoro para cine/videojuegos.", queEstudias:["Teoría musical","Producción (Ableton, Logic)","Mezcla y masterización","Diseño sonoro","Negocio musical"], campoLaboral:"Estudios de grabación, sellos, cine/TV, videojuegos, freelance.", salario:"$25,000 - $100,000+ USD/año", dato:"Un productor de reggaetón exitoso puede ganar millones por canción.", relacionadas:["Cine","Publicidad Creativa","Desarrollo de Videojuegos"] },
  "Diseño Industrial": { emoji:"💡", color:"#EA580C", duracion:"4-5 años", resumen:"Inventa los objetos que usamos cada día — desde un teléfono hasta muebles, vehículos y dispositivos médicos. Combina estética, funcionalidad y producción.", queEstudias:["Diseño de productos","Ergonomía","Materiales","Modelado 3D","Design thinking"], campoLaboral:"Manufactura, tech, automotriz, consultoría, emprendimiento.", salario:"$35,000 - $100,000 USD/año", dato:"Jony Ive (iPhone) fue considerado la persona más influyente del diseño.", relacionadas:["Arquitectura","Diseño UX/UI","Diseño Gráfico"] },

  "Administración": { emoji:"🏢", color:"#059669", duracion:"4-5 años", resumen:"Aprende a dirigir organizaciones: planificar, organizar, liderar equipos y tomar decisiones estratégicas. La base para emprender o liderar en cualquier industria.", queEstudias:["Gestión estratégica","Finanzas corporativas","Marketing","RRHH","Operaciones"], campoLaboral:"Corporaciones, startups, gobierno, consultoría, emprendimiento.", salario:"$35,000 - $120,000+ USD/año", dato:"El 60% de los CEOs del Fortune 500 tienen formación en administración.", relacionadas:["Marketing Digital","Finanzas","Emprendimiento","Comercio Internacional","Economía"] },
  "Marketing Digital": { emoji:"📱", color:"#059669", duracion:"4 años + certificaciones", resumen:"Conecta marcas con personas usando canales digitales: redes sociales, Google, contenido, influencers y datos. La profesión que más ha crecido en la última década.", queEstudias:["SEO y SEM","Social media","Analítica digital","Content marketing","Publicidad programática"], campoLaboral:"Agencias digitales, empresas tech, marcas, freelance.", salario:"$35,000 - $100,000 USD/año", dato:"La inversión en marketing digital superó por primera vez a la TV en 2020.", relacionadas:["Publicidad Creativa","Ciencia de Datos","Administración","Diseño UX/UI"] },
  "Finanzas": { emoji:"💰", color:"#059669", duracion:"4-5 años", resumen:"El lenguaje universal de los negocios. Gestiona dinero, inversiones, riesgos y estrategia financiera para personas, empresas o países enteros.", queEstudias:["Contabilidad","Análisis de inversiones","Mercados de capitales","Gestión de riesgos","Fintech"], campoLaboral:"Bancos, fondos de inversión, consultoría, fintech, gobierno.", salario:"$40,000 - $150,000+ USD/año", dato:"Fintech es la industria con más unicornios en Latinoamérica.", relacionadas:["Economía","Administración","Ciencia de Datos","Comercio Internacional"] },
  "Comercio Internacional": { emoji:"🌐", color:"#059669", duracion:"4-5 años", resumen:"Conecta mercados globales: importación, exportación, negociaciones internacionales, logística y regulaciones. Oportunidades en todos los continentes.", queEstudias:["Economía internacional","Logística","Negociación intercultural","Derecho comercial","Idiomas"], campoLaboral:"Multinacionales, aduanas, consultoría, organismos internacionales.", salario:"$35,000 - $100,000 USD/año", dato:"Panamá, por su canal, es un hub estratégico del comercio global.", relacionadas:["Administración","Economía","Logística","Finanzas"] },
  "Economía": { emoji:"📉", color:"#059669", duracion:"4-5 años", resumen:"Entiende cómo funcionan los mercados, gobiernos y la sociedad a través de datos y modelos. Desde política monetaria hasta desigualdad y comercio global.", queEstudias:["Microeconomía","Macroeconomía","Econometría","Política económica","Finanzas públicas"], campoLaboral:"Bancos centrales, gobierno, organismos internacionales, consultoría.", salario:"$40,000 - $120,000 USD/año", dato:"Son de los profesionales más influyentes en decisiones de un país.", relacionadas:["Finanzas","Ciencia de Datos","Administración","Comercio Internacional"] },
  "Emprendimiento": { emoji:"🚀", color:"#059669", duracion:"4 años", resumen:"Aprende a crear empresas desde cero: identificar problemas, diseñar soluciones, construir equipos y escalar. Cada vez más universidades lo ofrecen formalmente.", queEstudias:["Lean startup","Modelos de negocio","Finanzas para emprendedores","Marketing y ventas","Levantamiento de capital"], campoLaboral:"Tu propia empresa, aceleradoras, venture capital, consultoría.", salario:"Variable — desde $0 hasta millones", dato:"Latinoamérica es la región con mayor crecimiento de startups del mundo.", relacionadas:["Administración","Marketing Digital","Finanzas","Ingeniería de Software"] },
  "Recursos Humanos": { emoji:"🤝", color:"#059669", duracion:"4 años", resumen:"Atrae, desarrolla y retiene el talento dentro de las organizaciones. Desde reclutamiento hasta cultura organizacional y liderazgo de equipos.", queEstudias:["Psicología organizacional","Reclutamiento","Compensación","Desarrollo organizacional","Legislación laboral"], campoLaboral:"Empresas de cualquier industria, consultoras, startups, freelance.", salario:"$35,000 - $100,000 USD/año", dato:"El bienestar laboral es la prioridad #1 de las empresas post-pandemia.", relacionadas:["Psicología","Administración","Emprendimiento"] },
  "Logística": { emoji:"📦", color:"#059669", duracion:"4 años", resumen:"Mueve el mundo, literalmente. Gestiona cómo los productos van desde la fábrica hasta tu puerta. Incluye transporte, almacenamiento y comercio internacional.", queEstudias:["Cadena de suministro","Transporte","Comercio internacional","Logística digital","Aduanas"], campoLaboral:"Empresas de logística, puertos, aerolíneas, e-commerce, manufactura.", salario:"$35,000 - $95,000 USD/año", dato:"Panamá, con su canal, es uno de los centros logísticos más importantes del mundo.", relacionadas:["Comercio Internacional","Administración","Economía"] },

  "Ing. Ambiental": { emoji:"♻️", color:"#16A34A", duracion:"4-5 años", resumen:"Diseña soluciones técnicas para los problemas ambientales: tratamiento de agua, gestión de residuos, control de contaminación y sistemas de energía limpia. Ingeniería que salva al planeta.", queEstudias:["Química ambiental","Tratamiento de aguas","Gestión de residuos","Evaluación de impacto","Legislación ambiental"], campoLaboral:"Empresas de energía, gobierno, consultoría, ONGs, construcción sostenible.", salario:"$40,000 - $100,000 USD/año", dato:"Es una de las 10 carreras con mayor proyección de crecimiento hasta 2030.", relacionadas:["Energías Renovables","Ecología","Biotecnología","Gestión Ambiental","Agronomía"] },
  "Biología Marina": { emoji:"🐋", color:"#16A34A", duracion:"4-5 años + maestría", resumen:"Estudia los organismos marinos y sus ecosistemas. Desde ballenas hasta microorganismos del fondo del océano. Investiga, conserva y trabaja directamente con el mar.", queEstudias:["Ecología marina","Zoología","Oceanografía","Conservación marina","Buceo científico"], campoLaboral:"Centros de investigación, acuarios, ONGs, gobierno, turismo científico.", salario:"$35,000 - $80,000 USD/año", dato:"Más del 80% del océano sigue sin explorar.", relacionadas:["Ecología","Veterinaria","Ing. Ambiental","Biotecnología"] },
  "Energías Renovables": { emoji:"☀️", color:"#16A34A", duracion:"4-5 años", resumen:"Diseña, instala y optimiza sistemas de energía solar, eólica, hidroeléctrica y otras fuentes limpias. La carrera que construirá el futuro energético de la humanidad.", queEstudias:["Energía solar","Energía eólica","Almacenamiento","Redes eléctricas inteligentes","Eficiencia energética"], campoLaboral:"Empresas de energía, gobierno, consultoría, instalación, investigación.", salario:"$45,000 - $110,000 USD/año", dato:"La energía solar es ahora más barata que el carbón en la mayoría de países.", relacionadas:["Ing. Ambiental","Gestión Ambiental","Ecología"] },
  "Agronomía": { emoji:"🌾", color:"#16A34A", duracion:"4-5 años", resumen:"La ciencia de producir alimentos de forma eficiente y sostenible. Los agrónomos son esenciales para alimentar al planeta sin destruirlo.", queEstudias:["Ciencias del suelo","Producción vegetal","Riego","Agricultura de precisión","Biotecnología agrícola"], campoLaboral:"Agroindustria, investigación, gobierno, cooperación internacional.", salario:"$30,000 - $80,000 USD/año", dato:"La agricultura de precisión con drones e IA es uno de los sectores tech que más crece.", relacionadas:["Ing. Ambiental","Biotecnología","Ecología","Veterinaria"] },
  "Veterinaria": { emoji:"🐾", color:"#16A34A", duracion:"5-6 años", resumen:"Cuida la salud de los animales — desde mascotas hasta fauna silvestre y animales de producción. También clave en seguridad alimentaria.", queEstudias:["Anatomía y fisiología animal","Cirugía veterinaria","Medicina preventiva","Fauna silvestre","Salud pública veterinaria"], campoLaboral:"Clínicas, zoológicos, investigación, industria alimentaria, conservación.", salario:"$35,000 - $95,000 USD/año", dato:"Los veterinarios de fauna silvestre trabajan en los lugares más impresionantes del planeta.", relacionadas:["Biología Marina","Ecología","Biotecnología","Agronomía"] },
  "Ciencias del Clima": { emoji:"🌡️", color:"#16A34A", duracion:"4-5 años + maestría", resumen:"Estudia y predice los cambios climáticos del planeta. Los científicos del clima son esenciales para diseñar políticas que combatan el cambio climático.", queEstudias:["Meteorología","Climatología","Modelado climático","Química atmosférica","Políticas climáticas"], campoLaboral:"Organismos internacionales, gobierno, investigación, consultoría.", salario:"$45,000 - $120,000 USD/año", dato:"El cambio climático es el mayor desafío del siglo XXI.", relacionadas:["Ing. Ambiental","Ecología","Gestión Ambiental"] },
  "Gestión Ambiental": { emoji:"📋", color:"#16A34A", duracion:"4-5 años", resumen:"Diseña políticas y estrategias para proteger el medio ambiente dentro de empresas, gobiernos y organizaciones. El puente entre ciencia ambiental y decisiones.", queEstudias:["Políticas ambientales","Evaluación de impacto","Sistemas de gestión","Legislación","Desarrollo sostenible"], campoLaboral:"Gobierno, empresas (ESG), consultoría, ONGs, organismos internacionales.", salario:"$35,000 - $90,000 USD/año", dato:"Las regulaciones ESG están creando miles de puestos nuevos.", relacionadas:["Ing. Ambiental","Ecología","Energías Renovables"] },
  "Ecología": { emoji:"🦋", color:"#16A34A", duracion:"4-5 años", resumen:"Estudia las relaciones entre los seres vivos y su entorno. Desde ecosistemas tropicales hasta ciudades. La ciencia que preserva el equilibrio de la vida.", queEstudias:["Ecosistemas","Conservación","Cambio climático","Biología de poblaciones","Restauración ecológica"], campoLaboral:"Centros de investigación, gobierno, ONGs, parques nacionales.", salario:"$35,000 - $85,000 USD/año", dato:"Se estima que 1 millón de especies están en riesgo de extinción.", relacionadas:["Biología Marina","Ing. Ambiental","Veterinaria","Agronomía"] },

  "Derecho": { emoji:"⚖️", color:"#9333EA", duracion:"5-6 años", resumen:"Estudia las normas que regulan la sociedad. Desde defender derechos humanos hasta negociar fusiones empresariales. Decenas de ramas y esencial en toda sociedad.", queEstudias:["Derecho constitucional","Derecho penal","Derecho internacional","Derechos humanos","Argumentación jurídica"], campoLaboral:"Bufetes, gobierno, ONGs, organismos internacionales, empresas, diplomacia.", salario:"$35,000 - $200,000+ USD/año", dato:"Los abogados de derecho tecnológico son los más demandados actualmente.", relacionadas:["Relaciones Internacionales","Periodismo","Trabajo Social","Comercio Internacional"] },
  "Educación": { emoji:"🎓", color:"#9333EA", duracion:"4-5 años", resumen:"Forma a las nuevas generaciones. Va más allá del aula: incluye diseño curricular, tecnología educativa, educación especial y liderazgo escolar.", queEstudias:["Pedagogía y didáctica","Psicología educativa","Tecnología educativa","Educación inclusiva","Gestión escolar"], campoLaboral:"Colegios, universidades, ministerios, EdTech, ONGs.", salario:"$25,000 - $70,000 USD/año", dato:"Los profesores son los profesionales más influyentes en la formación de la sociedad.", relacionadas:["Neuroeducación","Psicología","Trabajo Social"] },
  "Trabajo Social": { emoji:"💛", color:"#9333EA", duracion:"4-5 años", resumen:"Trabaja directamente con comunidades vulnerables para transformar sus condiciones de vida. Desde niños en riesgo hasta migrantes y víctimas de violencia.", queEstudias:["Intervención social","Políticas sociales","Psicología social","Derechos humanos","Gestión de proyectos"], campoLaboral:"ONGs, gobierno, hospitales, centros comunitarios, cooperación.", salario:"$28,000 - $65,000 USD/año", dato:"Los trabajadores sociales son la primera línea en crisis humanitarias.", relacionadas:["Psicología","Educación","Sociología","Cooperación Internacional","Derecho"] },
  "Relaciones Internacionales": { emoji:"🏛️", color:"#9333EA", duracion:"4-5 años", resumen:"Analiza la política, economía y diplomacia entre países. Desde negociaciones de paz hasta tratados comerciales. Te pone en el centro de decisiones globales.", queEstudias:["Política internacional","Diplomacia","Derecho internacional","Economía global","Idiomas"], campoLaboral:"Embajadas, ONU, gobierno, ONGs, consultoría, periodismo.", salario:"$35,000 - $100,000 USD/año", dato:"Los diplomáticos panameños tienen ventaja por la posición geográfica del país.", relacionadas:["Derecho","Economía","Comercio Internacional","Periodismo","Cooperación Internacional"] },
  "Periodismo": { emoji:"📰", color:"#9333EA", duracion:"4-5 años", resumen:"Investiga, informa y narra la realidad. Desde periodismo investigativo hasta digital, podcasting, fact-checking y comunicación corporativa.", queEstudias:["Redacción periodística","Periodismo investigativo","Periodismo digital","Ética","Comunicación audiovisual"], campoLaboral:"Medios, agencias de noticias, empresas, freelance, creación de contenido.", salario:"$28,000 - $80,000 USD/año", dato:"Los periodistas de datos son una de las especialidades mejor pagadas.", relacionadas:["Relaciones Internacionales","Cine","Publicidad Creativa","Sociología"] },
  "Sociología": { emoji:"👥", color:"#9333EA", duracion:"4-5 años", resumen:"Estudia cómo funcionan las sociedades — desde desigualdad y poder hasta cultura e identidad. La ciencia que explica por qué el mundo es como es.", queEstudias:["Teoría social","Métodos de investigación","Estadística social","Sociología urbana","Movimientos sociales"], campoLaboral:"Investigación, gobierno, ONGs, empresas, academia, medios.", salario:"$30,000 - $75,000 USD/año", dato:"Los sociólogos de datos son cada vez más buscados por empresas tech.", relacionadas:["Trabajo Social","Psicología","Periodismo","Relaciones Internacionales"] },
  "Filosofía": { emoji:"🤔", color:"#9333EA", duracion:"4-5 años", resumen:"Las preguntas fundamentales: ¿Qué es real? ¿Qué es justo? Desarrolla el pensamiento crítico más profundo y es sorprendentemente valorada en Silicon Valley.", queEstudias:["Lógica","Ética","Epistemología","Filosofía política","Bioética"], campoLaboral:"Academia, consultoría ética, empresas tech (ética IA), gobierno, editorial.", salario:"$30,000 - $90,000 USD/año", dato:"Los graduados de filosofía obtienen los puntajes más altos en exámenes de posgrado.", relacionadas:["Derecho","Sociología","Educación","IA Cognitiva"] },
  "Cooperación Internacional": { emoji:"🕊️", color:"#9333EA", duracion:"4-5 años + maestría", resumen:"Diseña proyectos que mejoran la vida de comunidades en países en desarrollo. Trabaja con gobiernos, ONGs y organismos internacionales contra la pobreza.", queEstudias:["Desarrollo internacional","Gestión de proyectos","Economía del desarrollo","Ayuda humanitaria","Evaluación de impacto"], campoLaboral:"UNICEF, PNUD, ONGs internacionales, gobierno, agencias de cooperación.", salario:"$35,000 - $95,000 USD/año", dato:"Es una carrera donde puedes vivir y trabajar en más países diferentes.", relacionadas:["Relaciones Internacionales","Trabajo Social","Salud Pública","Derecho","Economía"] },

  "Piloto Comercial": { emoji:"✈️", color:"#B45309", duracion:"2-4 años en academia", resumen:"Vuela aviones comerciales transportando pasajeros y carga por todo el mundo. Una de las profesiones más admiradas, con salarios altos y la oportunidad de conocer el planeta.", queEstudias:["Aerodinámica","Meteorología","Navegación","Regulaciones aéreas","Simuladores de vuelo","Inglés aeronáutico"], campoLaboral:"Aerolíneas comerciales, aviación privada, carga, entrenamiento.", salario:"$60,000 - $250,000+ USD/año", dato:"Un capitán en una aerolínea internacional puede ganar más de $300,000 al año.", relacionadas:["Control Tráfico Aéreo","Oficial Militar"] },
  "Marina Mercante": { emoji:"🚢", color:"#B45309", duracion:"4-5 años", resumen:"Oficiales de cubierta o máquinas que navegan los buques que transportan el 90% del comercio mundial. Carrera de aventura, disciplina y salarios internacionales.", queEstudias:["Navegación","Máquinas marinas","Seguridad marítima","Derecho marítimo","Meteorología naval"], campoLaboral:"Navieras internacionales, puertos, cruceros, remolcadores, yates.", salario:"$50,000 - $180,000 USD/año", dato:"Panamá tiene el registro marítimo más grande del mundo.", relacionadas:["Guardacostas","Comercio Internacional","Logística"] },
  "Oficial Militar": { emoji:"🎖️", color:"#B45309", duracion:"4-5 años en academia militar", resumen:"Liderazgo, estrategia y defensa nacional. Los oficiales militares comandan unidades, toman decisiones críticas y sirven a su país en múltiples roles.", queEstudias:["Estrategia militar","Liderazgo","Derecho internacional","Tecnología militar","Entrenamiento físico"], campoLaboral:"Fuerzas armadas, defensa, seguridad nacional, cooperación militar.", salario:"$45,000 - $150,000+ USD/año", dato:"Muchos líderes empresariales y políticos comenzaron como oficiales militares.", relacionadas:["Policía / Investigación","Guardacostas","Piloto Comercial"] },
  "Policía / Investigación": { emoji:"🛡️", color:"#B45309", duracion:"2-4 años en academia", resumen:"Protege y sirve a la comunidad. Desde patrullaje hasta investigación criminal, ciberseguridad y fuerzas especiales. Una carrera de servicio y acción.", queEstudias:["Criminología","Investigación criminal","Derecho penal","Forensia","Entrenamiento táctico"], campoLaboral:"Policía nacional, Interpol, investigación forense, seguridad privada.", salario:"$35,000 - $100,000 USD/año", dato:"Los investigadores forenses están entre los profesionales más demandados en seguridad.", relacionadas:["Oficial Militar","Ciberseguridad"] },
  "Bombero y Rescate": { emoji:"🚒", color:"#B45309", duracion:"1-3 años en academia de bomberos", resumen:"Salva vidas en las situaciones más extremas. Combate incendios, realiza rescates y responde a emergencias. Una de las profesiones más admiradas del mundo.", queEstudias:["Combate de incendios","Rescate técnico","Primeros auxilios","Materiales peligrosos","Entrenamiento físico"], campoLaboral:"Cuerpos de bomberos, rescate de montaña, bomberos aeroportuarios.", salario:"$30,000 - $90,000 USD/año", dato:"Los bomberos son consistentemente la profesión más respetada en encuestas globales.", relacionadas:["Paramédico","Policía / Investigación"] },
  "Paramédico": { emoji:"🚑", color:"#B45309", duracion:"2-4 años", resumen:"Los primeros en llegar cuando todo cuenta. Brindan atención médica de emergencia en el lugar y transportan pacientes al hospital. Cada minuto salva vidas.", queEstudias:["Anatomía","Emergencias médicas","Soporte vital avanzado","Trauma","Farmacología básica"], campoLaboral:"Ambulancias, hospitales, eventos masivos, helicópteros de rescate.", salario:"$32,000 - $75,000 USD/año", dato:"Los paramédicos toman decisiones médicas críticas en segundos.", relacionadas:["Enfermería","Bombero y Rescate","Medicina"] },
  "Control Tráfico Aéreo": { emoji:"🗼", color:"#B45309", duracion:"2-4 años en academia especializada", resumen:"Guía cada avión que ves en el cielo. Los controladores aéreos gestionan el tráfico aéreo con precisión absoluta. Una de las profesiones mejor pagadas y más estresantes del mundo.", queEstudias:["Navegación aérea","Meteorología","Radar","Comunicaciones","Inglés aeronáutico"], campoLaboral:"Aeropuertos, centros de control, aviación militar.", salario:"$70,000 - $180,000 USD/año", dato:"Es una de las profesiones mejor pagadas que no requiere título universitario tradicional.", relacionadas:["Piloto Comercial","Oficial Militar"] },
  "Guardacostas": { emoji:"⚓", color:"#B45309", duracion:"3-4 años de formación", resumen:"Protege las costas y salva vidas en el mar. Combate el narcotráfico marítimo, rescata náufragos y protege el medio ambiente marino.", queEstudias:["Navegación","Rescate marítimo","Seguridad marítima","Derecho del mar","Operaciones tácticas"], campoLaboral:"Servicio de guardacostas, marina, protección ambiental marina.", salario:"$40,000 - $110,000 USD/año", dato:"En Panamá, los guardacostas son clave para proteger el Canal.", relacionadas:["Marina Mercante","Oficial Militar","Biología Marina"] },
};

/* ═══════════════════════════════════════════
   TEST QUESTIONS (15 - unchanged)
   ═══════════════════════════════════════════ */
const testQuestions = [
  { id:1,tipo:"visual",cat:"🌅",q:"Imagina tu lugar ideal para pasar un día entero.",ctx:"El espacio donde te sientes bien dice todo...",opts:[
    {t:"Un laboratorio futurista",em:"🔬",g:"linear-gradient(135deg,#0F172A,#1E3A5F)",d:"Pantallas, microscopios, silencio",p:["mente","salud"]},
    {t:"Un estudio creativo",em:"🎨",g:"linear-gradient(135deg,#EA580C,#FBBF24)",d:"Colores, música, ideas",p:["creativo","tech"]},
    {t:"Una oficina con vista a la ciudad",em:"🏙️",g:"linear-gradient(135deg,#059669,#0891B2)",d:"Reuniones, decisiones, acción",p:["negocios","social"]},
    {t:"Un bosque, playa o cabina de avión",em:"🌊",g:"linear-gradient(135deg,#16A34A,#B45309)",d:"Naturaleza, libertad, aventura",p:["naturaleza","accion"]},
  ]},
  { id:2,tipo:"texto",cat:"🎵",q:"Es viernes por la noche. ¿Qué playlist le das play?",ctx:"Tu música dice más de ti de lo que crees...",opts:[
    {t:"Lo-fi, ambient o Billie Eilish en modo chill",em:"🎧",p:["mente","social"]},
    {t:"Bad Bunny, Karol G o Feid — pura energía",em:"🔥",p:["negocios","creativo"]},
    {t:"Indie, Tyler the Creator o algo underground",em:"🌙",p:["creativo","naturaleza"]},
    {t:"Hans Zimmer, épico, como misión de película",em:"🎬",p:["tech","accion"]},
  ]},
  { id:3,tipo:"visual",cat:"📱",q:"Estás scrolleando y una imagen te hace parar. ¿Cuál?",ctx:"Lo que detiene tu scroll revela tu atención...",opts:[
    {t:"Un cerebro en 3D brillando",em:"🧠",g:"linear-gradient(135deg,#7C3AED,#EC4899)",d:"Ciencia que hipnotiza",p:["mente","tech"]},
    {t:"Time-lapse de alguien creando arte",em:"✨",g:"linear-gradient(135deg,#F59E0B,#EF4444)",d:"De la nada a algo increíble",p:["creativo","tech"]},
    {t:"Una foto impactante de la naturaleza",em:"🦁",g:"linear-gradient(135deg,#059669,#065F46)",d:"Planeta tierra en estado puro",p:["naturaleza","salud"]},
    {t:"Un avión despegando o barco en altamar",em:"✈️",g:"linear-gradient(135deg,#B45309,#1E3A5F)",d:"Libertad y aventura",p:["accion","negocios"]},
  ]},
  { id:4,tipo:"texto",cat:"📲",q:"Tu For You Page está lleno de...",ctx:"Tu algoritmo te conoce mejor que tú...",opts:[
    {t:"Datos random, psicología y \"cosas que no sabías\"",em:"🤯",p:["mente","tech"]},
    {t:"DIY, outfit checks, edits creativos o arte",em:"✂️",p:["creativo","salud"]},
    {t:"Side hustles, finanzas y productividad",em:"💸",p:["negocios","social"]},
    {t:"Aviones, vida militar, barcos o deportes extremos",em:"🛩️",p:["accion","naturaleza"]},
  ]},
  { id:5,tipo:"escenario",cat:"⚡",q:"Tu colegio te da una semana libre para UN proyecto. ¿Qué haces?",ctx:"Sin notas, sin presión. Solo tú y tu idea...",opts:[
    {t:"Investigo algo que me obsesiona y presento algo brutal",em:"🔍",p:["mente","salud"]},
    {t:"Creo algo visual: un corto, una app, diseño, música",em:"🎥",p:["creativo","tech"]},
    {t:"Organizo un evento o lanzo un mini emprendimiento",em:"🚀",p:["negocios","social"]},
    {t:"Hago algo físico: voluntariado, rescate, entrenamiento",em:"💪",p:["accion","naturaleza"]},
  ]},
  { id:6,tipo:"visual",cat:"🖥️",q:"¿Cuál de estos espacios sería el tuyo?",ctx:"Tu espacio refleja tu mente...",opts:[
    {t:"Minimalista con doble monitor",em:"⌨️",g:"linear-gradient(135deg,#0F172A,#334155)",d:"Código, café, silencio",p:["tech","mente"]},
    {t:"Caótico creativo lleno de colores",em:"🖌️",g:"linear-gradient(135deg,#EC4899,#F97316)",d:"Pinceles, tablet, referencias",p:["creativo","social"]},
    {t:"Organizado con agenda y post-its",em:"📌",g:"linear-gradient(135deg,#0891B2,#059669)",d:"Metas claras, todo en orden",p:["negocios","salud"]},
    {t:"Una cabina, cuartel o barco",em:"🎖️",g:"linear-gradient(135deg,#B45309,#DC2626)",d:"Acción, disciplina, misión",p:["accion","naturaleza"]},
  ]},
  { id:7,tipo:"texto",cat:"🎬",q:"¿Qué serie te atrapa al punto de ver 5 episodios seguidos?",ctx:"Las historias que te atrapan revelan lo que te mueve...",opts:[
    {t:"Thriller psicológico o sci-fi (Black Mirror, 3 Body Problem)",em:"🧪",p:["tech","mente"]},
    {t:"Drama médico (Grey's Anatomy, The Good Doctor)",em:"🏥",p:["salud","mente"]},
    {t:"Competencias o negocios (Squid Game, Shark Tank, The Bear)",em:"🦈",p:["negocios","creativo"]},
    {t:"Acción militar o policial (Top Gun, SEAL Team)",em:"🎖️",p:["accion","social"]},
  ]},
  { id:8,tipo:"escenario",cat:"🦸",q:"Superpoder real por 24 horas. ¿Cuál escoges?",ctx:"Lo que deseas poder hacer revela lo que valoras...",opts:[
    {t:"Leer la mente de cualquier persona",em:"🧠",p:["mente","social"]},
    {t:"Curar cualquier enfermedad con solo tocar",em:"✨",p:["salud","naturaleza"]},
    {t:"Crear cualquier objeto o tecnología de la nada",em:"🪄",p:["creativo","tech"]},
    {t:"Fuerza sobrehumana y reflejos perfectos",em:"⚡",p:["accion","negocios"]},
  ]},
  { id:9,tipo:"visual",cat:"✈️",q:"Te regalan un viaje. ¿A dónde vas sin pensarlo?",ctx:"Lo que te atrae dice lo que buscas...",opts:[
    {t:"Tokio, Japón",em:"🗼",g:"linear-gradient(135deg,#DC2626,#1E3A5F)",d:"Tecnología, cultura, futuro",p:["tech","creativo"]},
    {t:"Galápagos, Ecuador",em:"🐢",g:"linear-gradient(135deg,#0891B2,#16A34A)",d:"Naturaleza pura, ciencia viva",p:["naturaleza","salud"]},
    {t:"Nueva York, EE.UU.",em:"🗽",g:"linear-gradient(135deg,#1D4ED8,#7C3AED)",d:"Negocios, arte, todo posible",p:["negocios","creativo"]},
    {t:"Base militar en el Ártico",em:"🏔️",g:"linear-gradient(135deg,#B45309,#6B7280)",d:"Extremo, remoto, desafiante",p:["accion","mente"]},
  ]},
  { id:10,tipo:"texto",cat:"💬",q:"En el grupo de amigos, tú eres el/la que...",ctx:"Tu rol natural dice mucho sobre tu futuro...",opts:[
    {t:"Siempre tiene un dato curioso que nadie sabía",em:"🤓",p:["mente","salud"]},
    {t:"Organiza los planes y tiene ideas para ganar dinero",em:"👔",p:["negocios","tech"]},
    {t:"Escucha a todos y es el/la consejero/a del grupo",em:"💛",p:["social","mente"]},
    {t:"Siempre propone la aventura más loca",em:"🔥",p:["accion","creativo"]},
  ]},
  { id:11,tipo:"escenario",cat:"📰",q:"Año 2036. Un titular es sobre TI. ¿Cuál quieres?",ctx:"Tu titular soñado es tu meta inconsciente...",opts:[
    {t:"\"Investigador/a descubre tratamiento que cambia la medicina\"",em:"🔬",p:["salud","mente"]},
    {t:"\"Joven fundador/a crea empresa valorada en mil millones\"",em:"📲",p:["negocios","tech"]},
    {t:"\"Artista latinoamericano/a gana premio internacional\"",em:"🏆",p:["creativo","social"]},
    {t:"\"Piloto/oficial rescata a cientos en operación histórica\"",em:"🎖️",p:["accion","naturaleza"]},
  ]},
  { id:12,tipo:"visual",cat:"🛠️",q:"Dominar UNA herramienta al nivel experto. ¿Cuál?",ctx:"Tu herramienta muestra cómo quieres cambiar el mundo...",opts:[
    {t:"Inteligencia Artificial",em:"🤖",g:"linear-gradient(135deg,#0F172A,#7C3AED)",d:"ChatGPT, el futuro",p:["tech","mente"]},
    {t:"Una cámara profesional",em:"📸",g:"linear-gradient(135deg,#92400E,#F59E0B)",d:"Contar historias en imágenes",p:["creativo","social"]},
    {t:"Excel + datos financieros",em:"💹",g:"linear-gradient(135deg,#065F46,#059669)",d:"Los números mandan",p:["negocios","tech"]},
    {t:"Un helicóptero o simulador de vuelo",em:"🚁",g:"linear-gradient(135deg,#B45309,#DC2626)",d:"Control total en el aire",p:["accion","salud"]},
  ]},
  { id:13,tipo:"texto",cat:"🤔",q:"¿Qué problema del mundo te quita el sueño?",ctx:"Lo que te indigna revela tu propósito...",opts:[
    {t:"Que tantas enfermedades aún no tengan cura",em:"💔",p:["salud","mente"]},
    {t:"Que la tecnología se use para manipular",em:"⚠️",p:["tech","social"]},
    {t:"Que haya tanta desigualdad",em:"✊",p:["social","negocios"]},
    {t:"Que no haya suficientes dispuestos a arriesgar su vida por otros",em:"🔥",p:["accion","naturaleza"]},
  ]},
  { id:14,tipo:"escenario",cat:"🎮",q:"Domingo sin planes. ¿Qué haces realmente?",ctx:"Lo que eliges sin obligación es lo que amas...",opts:[
    {t:"Me pierdo en YouTube aprendiendo algo fascinante",em:"📚",p:["mente","tech"]},
    {t:"Creo algo: edito video, diseño, hago música",em:"🎨",p:["creativo","tech"]},
    {t:"Planeo algo: un viaje, proyecto o idea de negocio",em:"📋",p:["negocios","social"]},
    {t:"Entreno, hago deporte extremo o voy al campo de tiro",em:"🏋️",p:["accion","naturaleza"]},
  ]},
  { id:15,tipo:"visual",cat:"🔮",q:"Es 2036, un martes 10am. ¿Dónde te ves?",ctx:"La última pregunta — tu futuro soñado...",opts:[
    {t:"En un lab de investigación",em:"🧫",g:"linear-gradient(135deg,#7C3AED,#1D4ED8)",d:"Descubriendo algo que cambia todo",p:["mente","salud","tech"]},
    {t:"En un estudio creativo",em:"💡",g:"linear-gradient(135deg,#EA580C,#EC4899)",d:"Liderando un proyecto que emociona",p:["creativo","negocios"]},
    {t:"En otro país cambiando vidas",em:"🌏",g:"linear-gradient(135deg,#059669,#0891B2)",d:"Trabajando por algo que importa",p:["social","naturaleza"]},
    {t:"En una cabina de avión o puente de mando",em:"✈️",g:"linear-gradient(135deg,#B45309,#1E3A5F)",d:"Misión en curso, adrenalina pura",p:["accion","tech"]},
  ]},
];

const perfilData = {
  mente:{nombre:"Explorador/a de la Mente",emoji:"🧠",color:"#7C3AED",grad:"linear-gradient(135deg,#7C3AED,#A78BFA)",desc:"Te fascina entender por qué las personas piensan y sienten como lo hacen.",carreras:["Neurociencia","Psicología","Neurología","Psiquiatría","Neuroeducación","IA Cognitiva"]},
  tech:{nombre:"Arquitecto/a Digital",emoji:"💻",color:"#0891B2",grad:"linear-gradient(135deg,#0891B2,#22D3EE)",desc:"Ves el mundo como un sistema que se puede mejorar con tecnología.",carreras:["Ing. Software","Ciencia de Datos","Ciberseguridad","IA","Diseño UX/UI","Robótica"]},
  salud:{nombre:"Guardián/a de la Vida",emoji:"❤️‍🩹",color:"#DC2626",grad:"linear-gradient(135deg,#DC2626,#F87171)",desc:"Tu instinto natural es cuidar y proteger.",carreras:["Medicina","Enfermería","Biotecnología","Nutrición","Fisioterapia","Salud Pública"]},
  creativo:{nombre:"Creador/a sin Límites",emoji:"🎨",color:"#EA580C",grad:"linear-gradient(135deg,#EA580C,#FB923C)",desc:"Tu mente no para de imaginar. La creatividad es tu lenguaje.",carreras:["Diseño Gráfico","Cine","Arquitectura","Animación 3D","Moda","Publicidad"]},
  negocios:{nombre:"Estratega Visionario/a",emoji:"📈",color:"#059669",grad:"linear-gradient(135deg,#059669,#34D399)",desc:"Donde otros ven problemas, tú ves oportunidades.",carreras:["Administración","Marketing Digital","Finanzas","Emprendimiento","Comercio Int.","Economía"]},
  naturaleza:{nombre:"Guardián/a del Planeta",emoji:"🌿",color:"#16A34A",grad:"linear-gradient(135deg,#16A34A,#4ADE80)",desc:"Sientes conexión profunda con la naturaleza.",carreras:["Ing. Ambiental","Biología Marina","Energías Renovables","Veterinaria","Ecología","Agronomía"]},
  social:{nombre:"Agente de Cambio",emoji:"🤝",color:"#9333EA",grad:"linear-gradient(135deg,#9333EA,#C084FC)",desc:"Crees que el mundo puede ser más justo y trabajas por ello.",carreras:["Derecho","Educación","Trabajo Social","Rel. Internacionales","Periodismo","Cooperación"]},
  accion:{nombre:"Héroe/Heroína de Acción",emoji:"🛩️",color:"#B45309",grad:"linear-gradient(135deg,#B45309,#F59E0B)",desc:"Disciplina, coraje y aventura te definen.",carreras:["Piloto Comercial","Marina Mercante","Oficial Militar","Bombero/Rescate","Paramédico","Control Aéreo"]},
};

const universities = [
  {id:1,nombre:"MIT",pais:"🇺🇸 EE.UU.",region:"americas",ranking:"#1 Tecnología",mundos:["tech","mente"],costo:"$57,000",becas:2,color:"#1E3A5F",desc:"La universidad tecnológica más prestigiosa del mundo."},
  {id:2,nombre:"Universidad de los Andes",pais:"🇨🇴 Colombia",region:"americas",ranking:"#1 Colombia",mundos:["negocios","social","tech"],costo:"$8,000-12,000",becas:2,color:"#D97706",desc:"Líder en Colombia con proyección internacional."},
  {id:3,nombre:"Universidad de Panamá",pais:"🇵🇦 Panamá",region:"americas",ranking:"Principal de Panamá",mundos:["social","salud","negocios"],costo:"$500-1,500",becas:2,color:"#2563EB",desc:"La más accesible y con mayor impacto social del país."},
  {id:4,nombre:"UTP Panamá",pais:"🇵🇦 Panamá",region:"americas",ranking:"Líder en Ingeniería",mundos:["tech","naturaleza","accion"],costo:"$800-2,000",becas:2,color:"#1E3A5F",desc:"Principal universidad tecnológica de Panamá."},
  {id:5,nombre:"UNAM México",pais:"🇲🇽 México",region:"americas",ranking:"#1 México",mundos:["mente","salud","social","creativo"],costo:"$100-500",becas:2,color:"#1E3A5F",desc:"La más importante de habla hispana."},
  {id:6,nombre:"Stanford University",pais:"🇺🇸 EE.UU.",region:"americas",ranking:"Cuna de Silicon Valley",mundos:["tech","negocios","creativo"],costo:"$60,000",becas:2,color:"#8C1515",desc:"La universidad que creó Silicon Valley."},
  {id:7,nombre:"USP Brasil",pais:"🇧🇷 Brasil",region:"americas",ranking:"#1 Latinoamérica",mundos:["salud","tech","naturaleza"],costo:"Gratuita",becas:2,color:"#2563EB",desc:"La mejor universidad de Latinoamérica."},
  {id:8,nombre:"Universidad de Oxford",pais:"🇬🇧 Reino Unido",region:"europa",ranking:"#1 Mundial (THE)",mundos:["mente","social","salud"],costo:"£28,000-40,000",becas:2,color:"#1E3A5F",desc:"La universidad más antigua del mundo angloparlante."},
  {id:9,nombre:"TU Munich",pais:"🇩🇪 Alemania",region:"europa",ranking:"#1 Alemania",mundos:["tech","naturaleza","salud"],costo:"€250/semestre",becas:2,color:"#2563EB",desc:"La mejor universidad técnica de Alemania."},
  {id:10,nombre:"Politecnico di Milano",pais:"🇮🇹 Italia",region:"europa",ranking:"#1 Italia Diseño",mundos:["creativo","tech","negocios"],costo:"€900-3,900",becas:2,color:"#1E3A5F",desc:"Capital mundial del diseño y la moda."},
  {id:11,nombre:"U. de Barcelona",pais:"🇪🇸 España",region:"europa",ranking:"#1 España",mundos:["salud","creativo","social"],costo:"€1,500-3,500",becas:2,color:"#D97706",desc:"Ideal para latinoamericanos por idioma."},
  {id:12,nombre:"ETH Zürich",pais:"🇨🇭 Suiza",region:"europa",ranking:"#7 Mundial",mundos:["tech","naturaleza","mente"],costo:"CHF 1,460/año",becas:2,color:"#1E3A5F",desc:"Donde estudió Einstein."},
  {id:13,nombre:"University of Tokyo",pais:"🇯🇵 Japón",region:"asia",ranking:"#1 Japón",mundos:["tech","mente","salud"],costo:"~$3,600",becas:2,color:"#2563EB",desc:"La más prestigiosa de Japón. Beca MEXT paga TODO."},
  {id:14,nombre:"NUS Singapur",pais:"🇸🇬 Singapur",region:"asia",ranking:"#1 Asia",mundos:["negocios","tech","salud"],costo:"$8,000-15,000",becas:2,color:"#1E3A5F",desc:"La mejor de Asia, centro financiero global."},
  {id:15,nombre:"Seoul National University",pais:"🇰🇷 Corea del Sur",region:"asia",ranking:"#1 Corea",mundos:["tech","creativo","negocios"],costo:"$4,000-7,000",becas:2,color:"#1E3A5F",desc:"País líder en tecnología, K-pop y diseño."},
  {id:16,nombre:"Tsinghua University",pais:"🇨🇳 China",region:"asia",ranking:"#1 China",mundos:["tech","negocios","naturaleza"],costo:"~$5,500",becas:2,color:"#D97706",desc:"El 'MIT de Asia'. Miles de becas para latinoamericanos."},
  {id:17,nombre:"Escuela Náutica de Panamá",pais:"🇵🇦 Panamá",region:"americas",ranking:"Referente en Marina Mercante",mundos:["accion","negocios"],costo:"$1,000-3,000",becas:1,color:"#1E3A5F",desc:"Forma oficiales de marina mercante para el registro más grande del mundo."},
  {id:18,nombre:"Embry-Riddle Aeronautical",pais:"🇺🇸 EE.UU.",region:"americas",ranking:"#1 Aviación Mundial",mundos:["accion","tech"],costo:"$40,000",becas:2,color:"#1E3A5F",desc:"La universidad de aviación más prestigiosa del planeta."},
];

/* ═══════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════ */
function Nav({ page, setPage }) {
  const items = [
    { id: "inicio", label: "Inicio" },
    { id: "explorar", label: "Explorar" },
    { id: "test", label: "Test Vocacional" },
    { id: "universidades", label: "Universidades" },
  ];
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(248,250,252,0.95)", backdropFilter: "blur(20px)",
      borderBottom: "1px solid #E2E8F0",
      padding: "12px 24px",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <div onClick={() => setPage("inicio")} style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#FBBF24", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>🧭</div>
        <span style={{ fontFamily: "'Fraunces',serif", fontSize: "20px", fontWeight: 800, color: "#1E3A5F" }}>Brújula</span>
      </div>
      <div style={{ display: "flex", gap: "6px", alignItems: "center", flexWrap: "wrap" }}>
        {items.map(it => (
          <button key={it.id} onClick={() => setPage(it.id)} style={{
            padding: "7px 16px", borderRadius: "100px", border: "none",
            background: page === it.id ? "#2563EB" : "transparent",
            color: page === it.id ? "white" : "#1E3A5F",
            fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 600,
            cursor: "pointer", transition: "all 0.2s",
          }}>{it.label}</button>
        ))}
        <button onClick={() => setPage("test")} style={{
          padding: "8px 20px", borderRadius: "100px", border: "none",
          background: "#FBBF24", color: "#1E3A5F",
          fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 700,
          cursor: "pointer", marginLeft: "6px",
        }}>Comenzar gratis</button>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════
   LANDING
   ═══════════════════════════════════════════ */
function Landing({ setPage }) {
  const stats = [
    { emoji: "😰", value: "7 de 10", label: "jóvenes eligen mal su carrera" },
    { emoji: "💸", value: "42-60%", label: "deserción universitaria en LatAm" },
    { emoji: "🌍", value: "3 continentes", label: "Américas, Europa y Asia" },
  ];
  return <div>
    <section style={{ padding: "80px 28px 60px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ display: "inline-flex", gap: "8px", padding: "8px 18px", background: "#EFF6FF", borderRadius: "100px", marginBottom: "24px", fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 600, color: "#2563EB", animation: "fadeInUp 0.5s ease-out both" }}>
        🚀 Plataforma de orientación vocacional global
      </div>
      <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(34px,5vw,56px)", fontWeight: 800, color: "#1E3A5F", lineHeight: 1.15, marginBottom: "18px", animation: "fadeInUp 0.5s ease-out 0.1s both" }}>
        Tu carrera<br/><span style={{ color: "#D97706" }}>no tiene fronteras</span>
      </h1>
      <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "18px", color: "#64748B", lineHeight: 1.7, maxWidth: "580px", margin: "0 auto 32px", animation: "fadeInUp 0.5s ease-out 0.2s both" }}>
        Explora 8 mundos profesionales, descubre carreras que ni sabías que existían, haz un test que se siente como un juego y encuentra universidades con becas reales en 3 continentes.
      </p>
      <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", animation: "fadeInUp 0.5s ease-out 0.3s both" }}>
        <button onClick={() => setPage("test")} style={{ padding: "16px 36px", borderRadius: "100px", border: "none", background: "#FBBF24", color: "#1E3A5F", fontFamily: "'DM Sans',sans-serif", fontSize: "16px", fontWeight: 700, cursor: "pointer", transition: "transform 0.2s,box-shadow 0.2s" }}
          onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 12px 32px rgba(251,191,36,0.4)"; }}
          onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}>
          🎯 Hacer el test vocacional
        </button>
        <button onClick={() => setPage("explorar")} style={{ padding: "16px 36px", borderRadius: "100px", border: "2px solid #1E3A5F", background: "white", color: "#1E3A5F", fontFamily: "'DM Sans',sans-serif", fontSize: "16px", fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }}
          onMouseEnter={e => { e.target.style.background = "#1E3A5F"; e.target.style.color = "white"; }}
          onMouseLeave={e => { e.target.style.background = "white"; e.target.style.color = "#1E3A5F"; }}>
          🌍 Explorar mundos
        </button>
      </div>
    </section>

    <section style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", padding: "0 28px 60px", maxWidth: "800px", margin: "0 auto" }}>
      {stats.map((s, i) => (
        <div key={i} style={{ textAlign: "center", padding: "24px 28px", background: "white", borderRadius: "20px", border: "1px solid #E2E8F0", minWidth: "180px", animation: `fadeInUp 0.5s ease-out ${0.4 + i * 0.1}s both` }}>
          <div style={{ fontSize: "32px", marginBottom: "8px" }}>{s.emoji}</div>
          <div style={{ fontFamily: "'Fraunces',serif", fontSize: "28px", fontWeight: 800, color: "#1E3A5F" }}>{s.value}</div>
          <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "13px", color: "#94A3B8" }}>{s.label}</div>
        </div>
      ))}
    </section>

    <section style={{ padding: "0 28px 60px", maxWidth: "1000px", margin: "0 auto" }}>
      <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "28px", fontWeight: 800, color: "#1E3A5F", textAlign: "center", marginBottom: "8px" }}>8 mundos por descubrir</h2>
      <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "15px", color: "#94A3B8", textAlign: "center", marginBottom: "32px" }}>Cada mundo incluye carreras, historias reales y <strong style={{color:"#D97706"}}>visión del futuro 2036</strong></p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "14px" }}>
        {worlds.map((w, i) => (
          <div key={w.id} onClick={() => setPage("explorar")} style={{
            padding: "24px 20px", background: "white", borderRadius: "20px", border: "2px solid #E2E8F0",
            cursor: "pointer", transition: "all 0.3s ease", animation: `fadeInUp 0.4s ease-out ${i * 0.06}s both`,
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = w.color; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <div style={{ fontSize: "36px", marginBottom: "10px" }}>{w.emoji}</div>
            <h4 style={{ fontFamily: "'Fraunces',serif", fontSize: "16px", fontWeight: 700, color: "#1E3A5F", marginBottom: "4px" }}>{w.name}</h4>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "12px", color: "#94A3B8", lineHeight: 1.5 }}>{w.carreras.length} carreras</p>
          </div>
        ))}
      </div>
    </section>
  </div>;
}

/* ═══════════════════════════════════════════
   CAREER DETAIL MODAL
   ═══════════════════════════════════════════ */
function CareerDetail({ carrera, onClose, onNavigate }) {
  const c = carrerasDB[carrera];
  if (!c) return null;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(30,58,95,0.8)", backdropFilter: "blur(10px)",
      zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px",
      animation: "fadeIn 0.3s ease",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#F8FAFC", borderRadius: "28px", width: "100%", maxWidth: "680px",
        maxHeight: "90vh", overflow: "auto", animation: "slideUp 0.4s cubic-bezier(0.23,1,0.32,1)",
      }}>
        <div style={{
          background: `linear-gradient(135deg, ${c.color}, ${c.color}CC)`,
          padding: "32px 30px 24px", borderRadius: "28px 28px 0 0",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: "-20px", right: "-20px", fontSize: "110px", opacity: 0.12 }}>{c.emoji}</div>
          <button onClick={onClose} style={{
            position: "absolute", top: "14px", right: "16px", background: "rgba(255,255,255,0.2)",
            border: "none", borderRadius: "50%", width: "36px", height: "36px", color: "white",
            fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}>×</button>
          <div style={{ fontSize: "42px", marginBottom: "10px" }}>{c.emoji}</div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "26px", fontWeight: 800, color: "white", marginBottom: "6px", position: "relative" }}>{carrera}</h2>
          <span style={{
            padding: "4px 12px", background: "rgba(255,255,255,0.2)", borderRadius: "100px",
            fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: "white", fontWeight: 600,
          }}>⏱️ {c.duracion}</span>
        </div>

        <div style={{ padding: "26px 28px 32px" }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "15px", color: "#334155", lineHeight: 1.8, marginBottom: "22px" }}>{c.resumen}</p>

          <div style={{ padding: "14px 18px", background: `${c.color}08`, borderRadius: "12px", border: `1px solid ${c.color}20`, marginBottom: "22px" }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "13px", color: "#1E3A5F", lineHeight: 1.6, margin: 0 }}>
              <strong>💡 Dato clave:</strong> {c.dato}
            </p>
          </div>

          <h4 style={{ fontFamily: "'Fraunces',serif", fontSize: "16px", fontWeight: 700, color: "#1E3A5F", marginBottom: "10px" }}>📚 ¿Qué estudias?</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "22px" }}>
            {c.queEstudias.map((m, i) => (
              <span key={i} style={{
                padding: "7px 14px", background: "white", border: "1px solid #E2E8F0", borderRadius: "10px",
                fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "12px", color: "#334155",
              }}>{m}</span>
            ))}
          </div>

          <h4 style={{ fontFamily: "'Fraunces',serif", fontSize: "16px", fontWeight: 700, color: "#1E3A5F", marginBottom: "6px" }}>💼 Campo laboral</h4>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "13px", color: "#64748B", lineHeight: 1.7, marginBottom: "22px" }}>{c.campoLaboral}</p>

          <div style={{
            padding: "16px 20px", background: "linear-gradient(135deg, #1E3A5F, #2D4F7A)",
            borderRadius: "14px", marginBottom: "26px", display: "flex", alignItems: "center", gap: "14px",
          }}>
            <span style={{ fontSize: "30px" }}>💰</span>
            <div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.65)", marginBottom: "2px" }}>Rango salarial global</div>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: "18px", fontWeight: 700, color: "#FBBF24" }}>{c.salario}</div>
            </div>
          </div>

          <h4 style={{ fontFamily: "'Fraunces',serif", fontSize: "16px", fontWeight: 700, color: "#1E3A5F", marginBottom: "4px" }}>🔗 Carreras relacionadas</h4>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "12px", color: "#94A3B8", marginBottom: "12px" }}>Haz clic en cualquiera para explorarla</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {c.relacionadas.map((r, i) => {
              const exists = !!carrerasDB[r];
              return (
                <button key={i} onClick={() => exists && onNavigate(r)} style={{
                  padding: "9px 18px",
                  background: exists ? "white" : "#F1F5F9",
                  border: `2px solid ${exists ? c.color + "44" : "#E2E8F0"}`,
                  borderRadius: "100px",
                  fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 600,
                  color: exists ? c.color : "#94A3B8",
                  cursor: exists ? "pointer" : "default",
                  transition: "all 0.3s ease",
                }}
                  onMouseEnter={e => { if (exists) { e.target.style.background = c.color; e.target.style.color = "white"; e.target.style.transform = "translateY(-2px)"; } }}
                  onMouseLeave={e => { if (exists) { e.target.style.background = "white"; e.target.style.color = c.color; e.target.style.transform = "translateY(0)"; } }}
                >
                  {r} {exists ? "→" : ""}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   EXPLORE PAGE WITH VISIÓN 2036 TAB
   ═══════════════════════════════════════════ */
function ExplorePage({ setPage }) {
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState("carreras");
  const [search, setSearch] = useState("");
  const [selectedCareer, setSelectedCareer] = useState(null);
  const filtered = worlds.filter(w => {
    if (!search) return true;
    const t = search.toLowerCase();
    return w.name.toLowerCase().includes(t) || w.tagline.toLowerCase().includes(t) || w.carreras.some(c => c.toLowerCase().includes(t));
  });
  return <div>
    <section style={{ padding: "60px 28px 40px", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(30px,5vw,48px)", fontWeight: 800, color: "#1E3A5F", lineHeight: 1.2, marginBottom: "14px" }}>
        No elijas una carrera. <span style={{ color: "#D97706" }}>Descubre tu mundo.</span>
      </h1>
      <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "17px", color: "#64748B", lineHeight: 1.7, maxWidth: "550px", margin: "0 auto 28px" }}>
        Toca cualquier mundo para ver carreras, historias reales y cómo se proyecta hacia el 2036.
      </p>
      <div style={{ maxWidth: "460px", margin: "0 auto", position: "relative" }}>
        <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", fontSize: "16px" }}>🔍</span>
        <input type="text" placeholder='Escribe lo que te gusta: "cerebro", "aviones", "arte"...' value={search} onChange={e => setSearch(e.target.value)}
          style={{ width: "100%", padding: "14px 18px 14px 44px", borderRadius: "100px", border: "2px solid #E2E8F0", background: "white", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "14px", color: "#1E3A5F", outline: "none" }}
          onFocus={e => e.target.style.borderColor = "#2563EB"} onBlur={e => e.target.style.borderColor = "#E2E8F0"} />
      </div>
    </section>

    <section style={{ padding: "0 28px 40px", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "16px" }}>
        {filtered.map((w, i) => (
          <div key={w.id} onClick={() => { setSelected(w); setTab("carreras"); }} style={{
            padding: "30px 24px", background: "white", borderRadius: "22px", border: "2px solid #E2E8F0",
            cursor: "pointer", transition: "all 0.35s cubic-bezier(0.23,1,0.32,1)",
            animation: `fadeInUp 0.5s ease-out ${i * 0.06}s both`,
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = w.color; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 16px 36px ${w.color}18`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
            <div style={{ fontSize: "44px", marginBottom: "14px" }}>{w.emoji}</div>
            <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "20px", fontWeight: 700, color: "#1E3A5F", marginBottom: "6px" }}>{w.name}</h3>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "14px", color: "#64748B", lineHeight: 1.5, marginBottom: "16px" }}>{w.tagline}</p>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 600, color: w.color }}>{w.carreras.length} carreras · Visión 2036 →</span>
          </div>
        ))}
      </div>
    </section>

    {selected && <div onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, background: "rgba(30,58,95,0.75)", backdropFilter: "blur(8px)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", animation: "fadeIn 0.3s ease" }}>
      <div onClick={e => e.stopPropagation()} style={{ background: "#F8FAFC", borderRadius: "28px", width: "100%", maxWidth: "760px", maxHeight: "90vh", overflow: "auto", animation: "slideUp 0.4s cubic-bezier(0.23,1,0.32,1)" }}>
        <div style={{ background: `linear-gradient(135deg,${selected.color},${selected.color}CC)`, padding: "36px 30px 28px", borderRadius: "28px 28px 0 0", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-30px", right: "-30px", fontSize: "130px", opacity: 0.12 }}>{selected.emoji}</div>
          <button onClick={() => setSelected(null)} style={{ position: "absolute", top: "14px", right: "16px", background: "rgba(255,255,255,0.2)", border: "none", borderRadius: "50%", width: "36px", height: "36px", color: "white", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
          <div style={{ fontSize: "48px", marginBottom: "10px" }}>{selected.emoji}</div>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "28px", fontWeight: 800, color: "white", marginBottom: "6px", position: "relative" }}>{selected.name}</h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.9)", lineHeight: 1.6, maxWidth: "600px", position: "relative" }}>{selected.desc}</p>
        </div>

        {/* Tabs - now with 4 tabs including Visión 2036 */}
        <div style={{ display: "flex", gap: "6px", padding: "20px 28px 0", flexWrap: "wrap" }}>
          {[
            { id: "carreras", l: "🎯 Carreras" },
            { id: "historia", l: "💬 Historia" },
            { id: "dia", l: "☀️ Día Real" },
            { id: "vision", l: "🔮 Visión 2036" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "9px 18px", borderRadius: "100px", border: "none",
              background: tab === t.id ? selected.color : "transparent",
              color: tab === t.id ? "white" : "#64748B",
              fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 600,
              cursor: "pointer", transition: "all 0.25s",
            }}>{t.l}</button>
          ))}
        </div>

        <div style={{ padding: "20px 28px 36px" }}>
          {tab === "carreras" && <div style={{ animation: "fadeIn 0.3s ease" }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "12px", color: "#94A3B8", marginBottom: "12px" }}>Toca cualquier carrera para ver su descripción, salario y carreras relacionadas →</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "10px" }}>
              {selected.carreras.map((c, i) => {
                const data = carrerasDB[c];
                return (
                  <button key={i} onClick={() => setSelectedCareer(c)} style={{
                    padding: "16px", background: "white", borderRadius: "14px",
                    border: "1px solid #E2E8F0", cursor: "pointer", textAlign: "left",
                    transition: "all 0.3s ease",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = selected.color; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 8px 20px ${selected.color}15`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                    {data && <div style={{ fontSize: "22px", marginBottom: "6px" }}>{data.emoji}</div>}
                    <h4 style={{ fontFamily: "'Fraunces',serif", fontSize: "15px", fontWeight: 700, color: "#1E3A5F", marginBottom: "3px" }}>{c}</h4>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, color: selected.color }}>Ver detalle →</span>
                  </button>
                );
              })}
            </div>
          </div>}

          {tab === "historia" && <div style={{ background: "white", borderRadius: "18px", padding: "28px", border: "1px solid #E2E8F0", animation: "fadeIn 0.3s ease" }}>
            <h4 style={{ fontFamily: "'Fraunces',serif", fontSize: "17px", fontWeight: 700, color: "#1E3A5F", marginBottom: "4px" }}>{selected.historia.nombre}</h4>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "13px", color: "#94A3B8" }}>{selected.historia.pais}</span>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "16px", color: "#334155", lineHeight: 1.8, fontStyle: "italic", marginTop: "14px", paddingLeft: "16px", borderLeft: `3px solid ${selected.color}44` }}>"{selected.historia.texto}"</p>
          </div>}

          {tab === "dia" && <div style={{ background: "white", borderRadius: "18px", padding: "28px", border: "1px solid #E2E8F0", animation: "fadeIn 0.3s ease" }}>
            <h4 style={{ fontFamily: "'Fraunces',serif", fontSize: "17px", fontWeight: 700, color: "#1E3A5F", marginBottom: "12px" }}>☀️ Un día real en este mundo</h4>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "15px", color: "#334155", lineHeight: 1.8 }}>{selected.dia}</p>
          </div>}

          {tab === "vision" && <div style={{ animation: "fadeIn 0.3s ease" }}>
            {/* Hero de visión */}
            <div style={{
              background: `linear-gradient(135deg, ${selected.color}15, ${selected.color}05)`,
              borderRadius: "20px", padding: "28px 26px",
              border: `2px solid ${selected.color}25`,
              marginBottom: "18px",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: "-20px", right: "-20px", fontSize: "100px", opacity: 0.08 }}>🔮</div>
              <div style={{
                display: "inline-block", padding: "5px 14px",
                background: selected.color, color: "white",
                borderRadius: "100px",
                fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700,
                marginBottom: "14px", position: "relative",
              }}>🔮 PROYECCIÓN AL 2036</div>
              <h3 style={{
                fontFamily: "'Fraunces',serif", fontSize: "22px", fontWeight: 800,
                color: "#1E3A5F", lineHeight: 1.3, marginBottom: "6px", position: "relative",
              }}>{selected.vision2036.titulo}</h3>
              <p style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "13px",
                color: "#64748B", lineHeight: 1.6, position: "relative",
              }}>Así se perfila este mundo en los próximos 10 años, según tendencias globales actuales.</p>
            </div>

            {/* Tendencias */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "18px" }}>
              {selected.vision2036.tendencias.map((t, i) => (
                <div key={i} style={{
                  background: "white", borderRadius: "16px",
                  padding: "20px 22px", border: "1px solid #E2E8F0",
                  display: "flex", gap: "16px", alignItems: "flex-start",
                  animation: `fadeInUp 0.4s ease-out ${i * 0.08}s both`,
                }}>
                  <div style={{
                    width: "42px", height: "42px", borderRadius: "12px",
                    background: `${selected.color}12`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "22px", flexShrink: 0,
                  }}>{t.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontFamily: "'Fraunces',serif", fontSize: "16px", fontWeight: 700,
                      color: "#1E3A5F", marginBottom: "6px",
                    }}>{t.titulo}</h4>
                    <p style={{
                      fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "14px",
                      color: "#64748B", lineHeight: 1.6, margin: 0,
                    }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dato destacado */}
            <div style={{
              background: "linear-gradient(135deg, #1E3A5F, #2D4F7A)",
              borderRadius: "16px", padding: "22px 24px",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: "-15px", right: "-10px", fontSize: "60px", opacity: 0.15 }}>💡</div>
              <div style={{
                display: "inline-block", padding: "3px 10px",
                background: "#FBBF24", color: "#1E3A5F",
                borderRadius: "100px",
                fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700,
                marginBottom: "8px", position: "relative",
              }}>DATO CLAVE</div>
              <p style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "14px",
                color: "white", lineHeight: 1.7, margin: 0, position: "relative",
              }}>{selected.vision2036.dato}</p>
            </div>

            {/* Footer de la visión */}
            <div style={{
              marginTop: "18px", padding: "14px 18px",
              background: "#FEF9C3", borderRadius: "12px",
              border: "1px solid #FDE68A",
              display: "flex", alignItems: "center", gap: "10px",
            }}>
              <span style={{ fontSize: "18px" }}>🎓</span>
              <p style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "12px",
                color: "#92400E", lineHeight: 1.5, margin: 0,
              }}><strong>Aprendizaje permanente:</strong> En 2036, acumularás microcredenciales durante toda tu vida profesional. La universidad será solo el primer paso.</p>
            </div>
          </div>}
        </div>
      </div>
    </div>}

    {selectedCareer && <CareerDetail carrera={selectedCareer} onClose={() => setSelectedCareer(null)} onNavigate={(c) => setSelectedCareer(c)} />}
  </div>;
}

/* ═══════════════════════════════════════════
   TEST VOCACIONAL
   ═══════════════════════════════════════════ */
function TestPage({ setPage }) {
  const [stage, setStage] = useState("start");
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({ mente:0,tech:0,salud:0,creativo:0,negocios:0,naturaleza:0,social:0,accion:0 });
  const [selected, setSelected] = useState(null);
  const [exiting, setExiting] = useState(false);

  const handleAnswer = (perfiles) => {
    const ns = { ...scores };
    perfiles.forEach(p => { ns[p] = (ns[p] || 0) + 1; });
    setScores(ns);
    if (currentQ + 1 >= testQuestions.length) setTimeout(() => setStage("result"), 100);
    else setCurrentQ(currentQ + 1);
  };

  const handleSelect = (opt, idx) => {
    if (selected !== null) return;
    setSelected(idx);
    setTimeout(() => { setExiting(true); setTimeout(() => { handleAnswer(opt.p); setSelected(null); setExiting(false); }, 350); }, 650);
  };

  const restart = () => { setStage("start"); setCurrentQ(0); setSelected(null); setScores({ mente:0,tech:0,salud:0,creativo:0,negocios:0,naturaleza:0,social:0,accion:0 }); window.scrollTo(0, 0); };

  if (stage === "start") return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px", textAlign: "center" }}>
      <div style={{ fontSize: "72px", marginBottom: "20px", animation: "bounceIn 0.8s cubic-bezier(0.68,-0.55,0.265,1.55)" }}>🎯</div>
      <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(28px,5vw,44px)", fontWeight: 800, color: "#1E3A5F", lineHeight: 1.2, marginBottom: "14px" }}>
        Esto no es un test. <span style={{ color: "#D97706" }}>Es un espejo.</span>
      </h1>
      <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "17px", color: "#64748B", lineHeight: 1.7, maxWidth: "480px", marginBottom: "8px" }}>15 preguntas sobre tu vida real — tu música, tus redes, tus series, tus sueños.</p>
      <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "14px", color: "#94A3B8", marginBottom: "14px" }}>⏱️ 5 minutos · 3 tipos de preguntas · 8 mundos · 100% sobre ti</p>
      <button onClick={() => setStage("questions")} style={{ background: "#FBBF24", color: "#1E3A5F", border: "none", padding: "16px 44px", borderRadius: "100px", fontFamily: "'DM Sans',sans-serif", fontSize: "17px", fontWeight: 700, cursor: "pointer", transition: "transform 0.2s,box-shadow 0.2s" }}
        onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 12px 32px rgba(251,191,36,0.4)"; }}
        onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}>
        Descubrir quién soy →
      </button>
    </div>
  );

  if (stage === "questions") {
    const q = testQuestions[currentQ];
    const pct = Math.round(((currentQ + 1) / testQuestions.length) * 100);
    return (
      <div key={currentQ} style={{ minHeight: "80vh", display: "flex", flexDirection: "column", padding: "28px 24px", maxWidth: "660px", margin: "0 auto", animation: exiting ? "fadeOutLeft 0.35s ease-in forwards" : "fadeInRight 0.45s ease-out" }}>
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 600, color: "#94A3B8" }}>{currentQ + 1} de {testQuestions.length}</span>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: "#D97706", fontWeight: 700 }}>{pct}%</span>
          </div>
          <div style={{ height: "5px", background: "#E2E8F0", borderRadius: "100px", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg,#2563EB,#FBBF24)", borderRadius: "100px", transition: "width 0.5s ease" }} />
          </div>
        </div>
        <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "13px", color: "#D97706", fontStyle: "italic", marginBottom: "8px" }}>{q.ctx}</p>
        <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(20px,4vw,28px)", fontWeight: 800, color: "#1E3A5F", lineHeight: 1.3, marginBottom: "24px" }}>{q.q}</h2>

        {q.tipo === "visual" ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "12px" }}>
            {q.opts.map((o, i) => {
              const isSel = selected === i; const isOth = selected !== null && selected !== i;
              return <button key={i} onClick={() => handleSelect(o, i)} style={{
                position: "relative", background: o.g, borderRadius: "18px",
                border: isSel ? "3px solid #FBBF24" : "3px solid transparent",
                padding: 0, cursor: selected === null ? "pointer" : "default",
                transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
                transform: isSel ? "scale(1.05)" : isOth ? "scale(0.93)" : "scale(1)",
                opacity: isOth ? 0.35 : 1, overflow: "hidden", minHeight: "155px",
                display: "flex", flexDirection: "column", justifyContent: "flex-end",
                textAlign: "left", width: "100%",
                boxShadow: isSel ? "0 8px 28px rgba(251,191,36,0.3)" : "0 4px 14px rgba(0,0,0,0.15)",
              }}>
                <div style={{ position: "absolute", top: "8px", right: "8px", fontSize: "48px", opacity: 0.25 }}>{o.em}</div>
                {isSel && <div style={{ position: "absolute", top: "8px", left: "8px", background: "#FBBF24", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: "#1E3A5F" }}>✓</div>}
                <div style={{ padding: "18px", position: "relative", zIndex: 1 }}>
                  <div style={{ fontFamily: "'Fraunces',serif", fontSize: "15px", fontWeight: 700, color: "white", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>{o.t}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.7)" }}>{o.d}</div>
                </div>
              </button>;
            })}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
            {q.opts.map((o, i) => {
              const isSel = selected === i; const isOth = selected !== null && selected !== i;
              return <button key={i} onClick={() => handleSelect(o, i)} style={{
                display: "flex", alignItems: "center", gap: "14px", padding: "17px 20px",
                background: isSel ? (q.tipo === "escenario" ? "linear-gradient(135deg,#1E3A5F,#2D4F7A)" : "#2563EB") : "white",
                border: `2px solid ${isSel ? (q.tipo === "escenario" ? "#1E3A5F" : "#2563EB") : "#E2E8F0"}`,
                borderRadius: "18px", cursor: selected === null ? "pointer" : "default",
                transition: "all 0.35s ease",
                transform: isSel ? "scale(1.03)" : isOth ? "scale(0.97)" : "scale(1)",
                opacity: isOth ? 0.4 : 1, textAlign: "left", width: "100%",
              }}>
                <span style={{ fontSize: "24px", flexShrink: 0 }}>{o.em}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "14px", fontWeight: 500, color: isSel ? "white" : "#334155", lineHeight: 1.5 }}>{o.t}</span>
                {isSel && <span style={{ marginLeft: "auto", fontSize: "16px", color: "#FBBF24", flexShrink: 0 }}>✓</span>}
              </button>;
            })}
          </div>
        )}
      </div>
    );
  }

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const top = perfilData[sorted[0][0]];
  const second = perfilData[sorted[1][0]];
  const max = sorted[0][1];

  return (
    <div style={{ animation: "fadeIn 0.8s ease-out" }}>
      <div style={{ background: top.grad, padding: "48px 28px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-50px", right: "-50px", fontSize: "160px", opacity: 0.1 }}>{top.emoji}</div>
        <div style={{ fontSize: "64px", marginBottom: "14px" }}>{top.emoji}</div>
        <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(24px,5vw,38px)", fontWeight: 800, color: "white", marginBottom: "10px", position: "relative" }}>Eres un/a {top.nombre}</h1>
        <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto", position: "relative" }}>{top.desc}</p>
      </div>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "24px 24px 48px" }}>
        <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "19px", fontWeight: 700, color: "#1E3A5F", marginBottom: "12px", marginTop: "8px" }}>🎯 Carreras que van contigo</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
          {top.carreras.map((c, i) => <span key={i} style={{ padding: "9px 18px", background: "white", border: `2px solid ${top.color}33`, borderRadius: "100px", fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 600, color: top.color }}>{c}</span>)}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button onClick={() => setPage("universidades")} style={{ background: top.grad, color: "white", border: "none", padding: "16px 28px", borderRadius: "16px", fontFamily: "'DM Sans',sans-serif", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>🎓 Ver universidades para mi perfil</button>
          <button onClick={() => setPage("explorar")} style={{ background: "white", color: "#1E3A5F", border: "2px solid #E2E8F0", padding: "16px 28px", borderRadius: "16px", fontFamily: "'DM Sans',sans-serif", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>🧭 Explorar los 8 mundos y Visión 2036</button>
          <button onClick={restart} style={{ background: "transparent", color: "#94A3B8", border: "none", padding: "12px", fontFamily: "'DM Sans',sans-serif", fontSize: "13px", cursor: "pointer" }}>🔄 Hacer el test de nuevo</button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   UNIVERSITIES
   ═══════════════════════════════════════════ */
function UnisPage({ setPage }) {
  const [region, setRegion] = useState("all");
  const [mundo, setMundo] = useState("all");
  const [search, setSearch] = useState("");
  const allMundos = [{ id: "all", emoji: "🌟", name: "Todos", color: "#1E3A5F" }, ...worlds];
  const regs = [{ id: "all", n: "🌍 Todas" }, { id: "americas", n: "🌎 Américas" }, { id: "europa", n: "🇪🇺 Europa" }, { id: "asia", n: "🌏 Asia" }];

  const filtered = useMemo(() => {
    let r = universities;
    if (region !== "all") r = r.filter(u => u.region === region);
    if (mundo !== "all") r = r.filter(u => u.mundos.includes(mundo));
    if (search) { const t = search.toLowerCase(); r = r.filter(u => u.nombre.toLowerCase().includes(t) || u.pais.toLowerCase().includes(t)); }
    return r;
  }, [region, mundo, search]);

  return <div>
    <section style={{ padding: "52px 28px 32px", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(28px,5vw,44px)", fontWeight: 800, color: "#1E3A5F", lineHeight: 1.2, marginBottom: "12px" }}>
        Encuentra tu <span style={{ color: "#D97706" }}>universidad ideal</span>
      </h1>
      <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "16px", color: "#64748B", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto 24px" }}>
        {universities.length} universidades con becas reales en 3 continentes.
      </p>
    </section>

    <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 28px 12px" }}>
      <div style={{ marginBottom: "10px", display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
        {regs.map(r => <button key={r.id} onClick={() => setRegion(r.id)} style={{ padding: "7px 16px", borderRadius: "100px", border: region === r.id ? "2px solid #1E3A5F" : "2px solid #E2E8F0", background: region === r.id ? "#1E3A5F" : "white", color: region === r.id ? "white" : "#64748B", fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}>{r.n}</button>)}
      </div>
      <div style={{ marginBottom: "16px", display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
        {allMundos.map(m => <button key={m.id} onClick={() => setMundo(m.id)} style={{ padding: "6px 14px", borderRadius: "100px", border: mundo === m.id ? `2px solid ${m.color}` : "2px solid #E2E8F0", background: mundo === m.id ? m.color : "white", color: mundo === m.id ? "white" : "#64748B", fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, cursor: "pointer" }}>{m.emoji} {m.name}</button>)}
      </div>
    </section>

    <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 28px 40px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))", gap: "16px" }}>
        {filtered.map((u, i) => (
          <div key={u.id} style={{
            background: "white", borderRadius: "20px", border: "2px solid #E2E8F0", overflow: "hidden",
            cursor: "pointer", transition: "all 0.3s ease", animation: `fadeInUp 0.4s ease-out ${i * 0.06}s both`,
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = u.color; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <div style={{ height: "5px", background: u.color }} />
            <div style={{ padding: "20px" }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "12px", color: "#94A3B8", marginBottom: "4px" }}>{u.pais}</div>
              <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "17px", fontWeight: 700, color: "#1E3A5F", marginBottom: "8px" }}>{u.nombre}</h3>
              <div style={{ padding: "4px 12px", background: `${u.color}0A`, borderRadius: "8px", display: "inline-block", marginBottom: "10px" }}>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, color: u.color }}>⭐ {u.ranking}</span>
              </div>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "13px", color: "#64748B", lineHeight: 1.5 }}>{u.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>;
}

/* ═══════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════ */
export default function BrujulaApp() {
  const [page, setPage] = useState("inicio");
  const navigate = (p) => { setPage(p); window.scrollTo(0, 0); };
  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,700;9..144,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeInRight{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
        @keyframes fadeOutLeft{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-40px)}}
        @keyframes slideUp{from{opacity:0;transform:translateY(40px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes bounceIn{0%{opacity:0;transform:scale(0.3)}50%{transform:scale(1.08)}100%{opacity:1;transform:scale(1)}}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#CBD5E1;border-radius:10px}
      `}</style>
      <Nav page={page} setPage={navigate} />
      {page === "inicio" && <Landing setPage={navigate} />}
      {page === "explorar" && <ExplorePage setPage={navigate} />}
      {page === "test" && <TestPage setPage={navigate} />}
      {page === "universidades" && <UnisPage setPage={navigate} />}
      <footer style={{ padding: "20px 28px", textAlign: "center", borderTop: "1px solid #E2E8F0" }}>
        <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "12px", color: "#94A3B8" }}>🧭 Brújula — Tu carrera no tiene fronteras © 2026</p>
      </footer>
    </div>
  );
}

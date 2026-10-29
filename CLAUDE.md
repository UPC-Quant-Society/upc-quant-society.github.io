@AGENTS.md

# UPC Quant Society — Dirección de diseño

Somos la asociación de estudiantes de finanzas cuantitativas de la Universitat Politècnica de Catalunya, y la web tiene que dejarlo claro desde el primer vistazo: una asociación **oficial, académica y seria** de la universidad, no una startup financiera ni un fondo. Pero académica no quiere decir aburrida. El listón es el de un buen departamento de matemáticas con criterio de diseño: rigor en el contenido, contención en la forma y unos pocos detalles que hagan pensar *"esto está hecho con mucho cuidado"*.

## De dónde venimos

La versión anterior tomaba como referencia bluewalker.capital y la propia BlueWalker nos dijo que se parecía demasiado a su web. Su consejo, que adoptamos: acercarla a la UPC para que transmita oficialidad y hacerla mucho más académica. Por lo tanto, **queda descartado todo lo que recuerde a ellos o a una web de fondo/startup**:

- El hero con una sola frase centrada sobre un fondo vacío.
- La sección fija con subapartados que avanzan con el scroll.
- La trama de puntos tipo halftone, la pila de preguntas de mercado y el logo que mezcla sans y mono pixelada.
- El tono de "firma": frases de posicionamiento, misterio, exclusividad por omisión.

## El registro: académico, minimalista, con oficio

- **Académico**: la autoridad viene de los hechos, no de las frases. Nombres, fechas, escuelas, autores, referencias, resultados. Lo que se puede citar y verificar.
- **Minimalista**: cada elemento se gana su sitio. Ante la duda, se quita. El espacio en blanco forma parte del diseño.
- **Con oficio**: el factor "wow" no está en efectos de escenario, sino en el detalle: una figura matemática que se puede manipular, una tipografía de libro bien compuesta, una transición precisa. Que se note que hay alguien detrás que sabe lo que hace.

Referencias de espíritu (no de diseño a copiar): las webs de institutos y grupos de investigación serios (IAS, CRM, ETH), los artículos interactivos tipo Distill, las editoriales académicas cuidadas. Rigor de paper, acabado de editorial.

## Identidad UPC

- Nombre completo visible donde toque: "Associació d'estudiants de la Universitat Politècnica de Catalunya" / "Student association of the Universitat Politècnica de Catalunya". Sin esconderlo, sin convertirlo en un kicker.
- **Azul UPC como único color de acento** (corporativo, aprox. `#007BC0`; validar con el manual de marca). Solo en detalles con función: enlaces, estado activo, un trazo en una figura. Nunca como fondo ni relleno.
- El logo de la UPC solo con permiso y siguiendo su normativa de marca. Hasta entonces, la relación con la universidad se expresa con texto.
- Vincular con lo concreto de la UPC: escuelas de los miembros (FME, ETSETB, FIB, ETSEIB…), campus, aulas, calendario académico.

## Regla principal: que no parezca hecho por una IA

Lo peor que puede pasar es que alguien mire la web y piense "esto es Claude / una plantilla". Por defecto, **prohibido**:

- Eyebrows/kickers en mayúsculas y monoespaciada sobre cada título.
- Grids de tarjetas numeradas `01 / 02 / 03` con título + descripción.
- Tarjetas con bordes redondeados, sombras suaves, paneles con fondo ligeramente más claro.
- Gradientes decorativos, glows, glassmorphism, blobs, iconos genéricos, emojis.
- Badges en forma de píldora, "notes" destacadas, bloques de "Fase actual".
- Botones CTA genéricos ("Explora els projectes", "Learn more", "Get started").
- Secciones simétricas que alternan texto/imagen; el esquema hero → features → CTA → footer.
- El punto medio `·` como separador (en metadatos, footers, contadores, títulos). Solo existe dentro de la ela geminada catalana (`l·l`).
- Copy tipo "Un espacio para…", "Un punto de conexión entre…", listas de tres adjetivos, abuso del guion largo.
- Inter como única fuente "porque sí". La tipografía es una decisión, no un default.

Y tampoco lo contrario: la web académica genérica con menú de quince enlaces, banners, noticias en carrusel y texto justificado en bloques. Si se parece a una landing de SaaS o a un portal universitario de 2010, está mal.

## Lo que sí queremos

**Tipografía técnica e institucional.** IBM Plex Sans para todo el texto (300 en párrafos, 400 en títulos, 500 solo para énfasis puntual) e IBM Plex Mono solo para datos, fechas y código. Nada más: ni serif ni una tercera familia (se probó una serif de libro y se descartó). Compuesta con cuidado: medida de línea cómoda, interlineado generoso en texto, tracking negativo en tamaños grandes, cifras tabulares en tablas, comillas y apóstrofos correctos. Jerarquía por tamaño y peso, no por cajas ni colores.

**Paleta casi monocroma.** Tinta sobre blanco puro (sin beige ni tonos cálidos; al revés en modo oscuro), grises, y el azul UPC como único acento con función.

**Estructura de documento, no de landing.** La web se lee como una publicación bien editada: retícula clara, márgenes generosos, columna de texto y columna de notas o metadatos. Títulos de sección sobrios de una o dos palabras ("Projectes", "Equip", "Calendari") cuando ayuden a orientarse; nunca titular + subtítulo.

**Figuras como protagonistas.** Ilustraciones propias con significado matemático real (trayectorias estocásticas, superficies de volatilidad, redes de correlación, order books), presentadas como figuras de paper: numeradas, con pie de figura preciso. El toque diferencial es que responden al lector, pero para explorar, no para ajustar: pasar el cursor revela datos o vecindades; nada de deslizadores de parámetros ni paneles de control, que se ven a demo de IA. Preferir datos reales (y un script reproducible en `scripts/`) a simulaciones. Sutiles en reposo, reveladoras al interactuar. Una figura así en la portada sustituye al hero de frase.

**Proyectos con formato de publicación.** Cada proyecto es como un paper o informe técnico: título, autores, fecha, resumen, figuras, resultados, enlaces a PDF y código, y una referencia citable. El listado, como un índice de publicaciones: denso, ordenado y legible.

**Recursos como temario.** La biblioteca (tabla por temas, filtros y grafo de conocimiento) se mantiene. Lo que se añade es orden de lectura: nivel (introductorio → avanzado) y prerrequisitos, para que se pueda seguir como un itinerario. Cuando haya material propio de las sesiones (slides, notebooks, grabaciones), se publica por curso y sesión.

**Personas y hechos.** Junta y miembros con nombre, rol, escuela y titulación. Sesiones con fecha y lugar. Colaboraciones con nombres concretos. Nada de cifras infladas ni frases sobre "talento".

## Reglas de animación

- Con propósito: cada animación guía la lectura, explica una figura o da continuidad entre páginas. Nada de animar por animar ni de efectos de escena.
- Revelados discretos al entrar en pantalla, nunca texto palabra a palabra ni secciones que secuestran el scroll.
- Curvas de easing cuidadas (ease-out exponencial / cubic-bezier personalizadas), nunca `linear` ni el `ease` por defecto en movimientos visibles.
- Solo `transform` y `opacity` (y canvas/SVG/WebGL para las figuras). 60 fps en un portátil normal y aceptable en móvil.
- `requestAnimationFrame`, `IntersectionObserver`, CSS scroll-driven animations cuando sea posible. Librerías (GSAP, three.js, D3…) solo si aportan algo que no se consiga de forma razonable a mano, y justificándolo.
- Transiciones entre páginas fluidas (View Transitions de Astro o equivalente). Nada de saltos bruscos.
- Respetar siempre `prefers-reduced-motion`: el contenido y las figuras deben ser completos y legibles sin animaciones.
- Nada de bloquear contenido detrás de una animación ni de preloaders.

## Copy

- Claro, preciso, sobrio. Registro de memoria académica, no de marketing ni de manifiesto.
- Se habla de lo que hacemos (matemáticas, código, mercados) con hechos concretos.
- Catalán e inglés siempre sincronizados (contenido en `src/data/site.ts`).
- El aviso legal (no gestionamos capital, no asesoramos) se mantiene, discreto: footer, tamaño pequeño.

## Estructura

Se mantienen las páginas actuales: **Inicio, Sobre nosotros, Proyectos, Recursos (con la Biblioteca y su grafo de conocimiento) y Contacto**, en `/ca/` y `/en/`. Su organización y presentación pueden cambiar por completo; el contenido de fondo no se pierde sin consultarlo.

Navegación sencilla y siempre visible: nombre de la asociación + pocos enlaces. El selector de idioma y de tema, discretos.

## Técnica

- Astro 7 estático, desplegado en GitHub Pages (`.github/workflows/deploy.yml`). Sin backend.
- Fuente de contenido: `src/data/site.ts`. Estilos globales: `src/styles/global.css`.
- Rendimiento y accesibilidad no son negociables: buen Lighthouse, contraste suficiente, navegación por teclado, HTML semántico.
- Responsive de verdad: la experiencia en móvil se diseña, no se encoge.

## Antes de dar algo por terminado

1. ¿Alguien diría que esto lo ha hecho una IA o que es una plantilla? Si sí, rehacer.
2. ¿Se parece a la web de un fondo o de una startup? ¿Recuerda a BlueWalker? Si sí, rehacer.
3. ¿Se entiende en 3 segundos que es una asociación de la UPC, seria y académica? ¿Y aun así apetece quedarse?
4. ¿Se puede quitar algo más? Quitarlo.
5. ¿Las figuras y transiciones se sienten hechas con oficio, o solo "animadas"?
6. ¿Funciona con `prefers-reduced-motion`, en móvil y en los dos idiomas?

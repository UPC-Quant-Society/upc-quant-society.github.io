@AGENTS.md

# UPC Quant Society — Dirección de diseño

Somos una asociación de estudiantes de la UPC, pero la web no debe parecerlo. Tiene que transmitir lo que transmite un fondo cuantitativo serio: precisión, criterio y un listón alto. Quien entre debe pensar *"quiero estar ahí"* antes de leer una sola línea sobre nosotros. La web es el primer filtro de selección.

Referencia de tono: https://bluewalker.capital. **No copiamos su diseño**; igualamos su nivel de ambición y de contención. Lo que hace bien:

- Una sola frase de dos líneas, centrada, peso medio, sin nada alrededor: ni subtítulo, ni botón, ni kicker.
- Fondo blanco con una trama de puntos muy tenue (tipo halftone) y líneas de cuadrícula finísimas que se desvanecen hacia los bordes.
- Una pila de preguntas reales del mercado ("What price will Bitcoin hit in October?"), cada una con un filete de color de 2px a la izquierda, que se van iluminando y rotando. Es el único color de la página.
- Logo como texto, mezclando una sans y una mono pixelada. Header reducido al logo.

La sensación es de laboratorio, no de agencia. Ese es el registro.

Inspirarse no es calcar: la trama de puntos tipo cinta y la pila de preguntas de predicción son suyas y ya se descartaron por parecer una copia. Lo que sí adoptamos es el patrón de la sección fija con subapartados que avanzan con el scroll, con contenido e ilustraciones propias.

## Las dos palabras: minimalista y elitista

- **Minimalista**: cada elemento tiene que ganarse su sitio. Ante la duda, se quita. Una idea por pantalla. El espacio vacío es parte del diseño, no espacio por rellenar.
- **Elitista**: seguridad en lugar de explicación. No vendemos, no convencemos, no enumeramos beneficios. Afirmamos. La exclusividad se transmite con lo que *no* se dice.

## Regla principal: que no parezca hecho por una IA

Lo peor que puede pasar es que alguien mire la web y piense "esto es Claude / una plantilla". Por defecto, **prohibido**:

- Eyebrows/kickers en mayúsculas y monoespaciada sobre cada título (`ASSOCIACIÓ D'ESTUDIANTS · UPC`).
- Grids de tarjetas numeradas `01 / 02 / 03` con título + descripción.
- Tarjetas con bordes redondeados, sombras suaves, paneles con fondo ligeramente más claro.
- Gradientes decorativos, glows, glassmorphism, blobs, iconos genéricos, emojis.
- Badges en forma de píldora, "notes" destacadas, bloques de "Fase actual".
- Botones CTA genéricos ("Explora els projectes", "Learn more", "Get started").
- Secciones simétricas que alternan texto/imagen; el esquema hero → features → CTA → footer.
- Copy tipo "Un espacio para…", "Un punto de conexión entre…", listas de tres adjetivos, abuso del guion largo.
- Inter como única fuente "porque sí". La tipografía es una decisión, no un default.

Si algo se parece a lo que generaría cualquier landing de SaaS, está mal.

**Títulos de sección: por defecto, ninguno.** Nada de "Sobre nosotros", "Qué hacemos" o "Nuestros valores" encima de cada bloque. El contenido tiene que entenderse solo. Si hace falta orientar, basta con una palabra pequeña o un número discreto, nunca un titular más un subtítulo.

## Lo que sí queremos

**Tipografía como protagonista.** Pocas frases, grandes y seguras, pero sin gritar: peso medio, interlineado ajustado y tracking negativo en tamaños grandes. La elegancia viene de la contención, no del tamaño máximo. Una o dos familias como máximo, elegidas con intención (p. ej. una grotesca/neo-grotesca con carácter + una mono solo para datos). Jerarquía por tamaño y peso, no por cajas ni colores.

**Paleta casi monocroma.** Tinta sobre papel (o al revés): blanco/negro y grises. El color solo aparece en detalles mínimos con función, como los filetes de bluewalker, y nunca como fondo ni como relleno. Nada de varios azules o verdes compitiendo.

**Un fondo vivo con concepto quant.** El hero es una frase grande sobre un fondo generativo que responde al cursor/scroll: trayectorias estocásticas, un campo de precios, un order book, una superficie de volatilidad, una red de correlaciones… Debe ser propio y tener significado matemático real, no ser decoración. Sutil en reposo, sorprendente al interactuar.

**Scroll como narrativa.** Al bajar, el contenido se revela: texto que entra línea a línea o palabra a palabra, elementos que se fijan (sticky) mientras otros pasan, números que se construyen, transiciones entre secciones que se sienten como cambiar de escena. Las transiciones son el factor "wow" y merecen tiempo de diseño.

**Transiciones entre páginas.** Navegar entre páginas también debe ser fluido (View Transitions de Astro u otra solución equivalente). Nada de saltos bruscos.

## Reglas de animación

- Con propósito: cada animación guía la lectura o refuerza el concepto. Nada de animar por animar.
- Curvas de easing cuidadas (ease-out exponencial / cubic-bezier personalizadas), nunca `linear` ni el `ease` por defecto en movimientos visibles.
- Solo `transform` y `opacity` (y canvas/WebGL para el fondo). 60 fps en un portátil normal y aceptable en móvil.
- `requestAnimationFrame`, `IntersectionObserver`, CSS scroll-driven animations cuando sea posible. Librerías (GSAP, Lenis, three.js…) solo si aportan algo que no se consiga de forma razonable a mano, y justificándolo.
- Respetar siempre `prefers-reduced-motion`: el contenido debe ser completo y legible sin animaciones.
- Nada de bloquear contenido detrás de una animación ni de preloaders largos.

## Copy

- Corto, declarativo, seguro. Frases que se puedan poner a 120px.
- Se habla poco de nosotros y mucho de lo que hacemos (matemáticas, código, mercados).
- Catalán e inglés siempre sincronizados (contenido en `src/data/site.ts`).
- El aviso legal (no gestionamos capital, no asesoramos) se mantiene, pero discreto: footer, tamaño pequeño.

## Estructura

Se mantienen las páginas actuales: **Inicio, Sobre nosotros, Proyectos, Recursos (con la Biblioteca y su grafo de conocimiento) y Contacto**, en `/ca/` y `/en/`. Su organización y presentación pueden cambiar por completo; el contenido de fondo no se pierde sin consultarlo.

Navegación mínima: logo + pocos enlaces, o un menú a pantalla completa. El selector de idioma y de tema, discretos.

## Técnica

- Astro 7 estático, desplegado en GitHub Pages (`.github/workflows/deploy.yml`). Sin backend.
- Fuente de contenido: `src/data/site.ts`. Estilos globales: `src/styles/global.css`.
- Rendimiento y accesibilidad no son negociables: buen Lighthouse, contraste suficiente, navegación por teclado, HTML semántico.
- Responsive de verdad: la experiencia en móvil se diseña, no se encoge.

## Antes de dar algo por terminado

1. ¿Alguien diría que esto lo ha hecho una IA o que es una plantilla? Si sí, rehacer.
2. ¿Se puede quitar algo más? Quitarlo.
3. ¿La primera pantalla impresiona en 3 segundos?
4. ¿Las transiciones se sienten caras, o solo "animadas"?
5. ¿Funciona con `prefers-reduced-motion`, en móvil y en los dos idiomas?

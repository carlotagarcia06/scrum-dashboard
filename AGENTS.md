# Guía del proyecto

## Manual de React

Usa `Documentacion/Manual_Completo_React_Madebm3.pdf` como referencia técnica y didáctica para este proyecto. Es una guía para aprender React construyendo el ejemplo `madebm3`; sus ejercicios, nombres de dominio, estructura de archivos y comandos describen ese ejemplo, no son instrucciones para sustituir la estructura existente de `scrum-dashboard`.

Adapta las ideas al código y las dependencias reales del repositorio. El manual usa JavaScript y archivos `.jsx`; este repositorio también tiene una base TypeScript/TSX, así que conserva TypeScript en los archivos que ya lo usen. Antes de cambiar la arquitectura o añadir librerías, revisa cómo está organizado el proyecto y conserva los patrones que ya use, salvo que la tarea requiera cambiarlos.

## Criterios de implementación tomados del manual

- Divide la interfaz en componentes con responsabilidades claras; pasa datos mediante props y mantén el estado cerca de las vistas que lo comparten.
- Actualiza arrays y objetos de estado de forma inmutable. Usa identificadores únicos y estables para las listas; calcula filtros y resultados derivados desde sus fuentes en vez de duplicar estado.
- Para formularios, conecta cada campo con estado, etiqueta y validación; muestra errores comprensibles y usa controles que se puedan recorrer con teclado.
- Mantén una jerarquía semántica correcta, nombres claros para enlaces y botones, foco visible y estados vacíos, de carga y de error cuando correspondan.
- Diseña para pantallas estrechas y revisa que textos, controles y navegación sigan siendo legibles y utilizables.
- Diagnostica primero el primer error y cambia una cosa cada vez para identificar la causa.
- Trata la API local de práctica descrita en el manual como una herramienta de aprendizaje. No la consideres un backend de producción ni la uses para datos reales publicados.
- Para build y despliegue, confirma los comandos, rutas, variables y servicios que realmente use este repositorio; las referencias a Vite y `dist` solo aplican si su configuración coincide.

Las recomendaciones del manual orientan decisiones técnicas; no autorizan por sí solas cambios de alcance, instalaciones, despliegues ni la sustitución de código del proyecto.


# Ver Logs del Despliegue en Vercel

Para inspeccionar los logs de tu despliegue en Vercel utilizando la CLI, sigue estos pasos.

## Comando Básico

Para ver los logs de tu proyecto, usa el siguiente comando:

```bash
vercel logs <URL_DEL_PROYECTO>
```

Reemplaza `<URL_DEL_PROYECTO>` con la URL de tu proyecto. En este caso, sería:

```bash
vercel logs https://serverexpress-g477bsrvs-andresgarcia0313s-projects.vercel.app
```

Este comando te permitirá ver los logs del despliegue asociado con tu aplicación.

## Opciones Adicionales

1. **Logs en Tiempo Real:**

   Si deseas ver los logs desde un período específico, puedes utilizar el flag `--since`. Por ejemplo, para ver los logs de la última hora:

   ```bash
   vercel logs https://serverexpress-g477bsrvs-andresgarcia0313s-projects.vercel.app --since 1h
   ```

   Puedes ajustar el tiempo según necesites, como `1m` (un minuto), `1h` (una hora), `1d` (un día), etc.

2. **Logs Detallados:**

   Para obtener una vista más detallada de los logs, puedes agregar el flag `--all`:

   ```bash
   vercel logs https://serverexpress-g477bsrvs-andresgarcia0313s-projects.vercel.app --all
   ```

   Esto mostrará todos los registros, incluyendo los de las funciones del backend y cualquier información relacionada.

3. **Logs de Errores:**

   Si quieres ver solamente los logs de errores, puedes utilizar el flag `--filter=error`:

   ```bash
   vercel logs https://serverexpress-g477bsrvs-andresgarcia0313s-projects.vercel.app --filter=error
   ```

Con estos comandos, puedes inspeccionar rápidamente los registros y detectar cualquier posible problema en tu despliegue en Vercel.

---
**Documentación Oficial**: Para más información, puedes consultar la [documentación de Vercel CLI](https://vercel.com/docs/cli#commands/logs). 🚀


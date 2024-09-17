# Guía de Despliegue con Vercel

Esta guía explica cómo desplegar tu proyecto usando Vercel, una plataforma de despliegue para aplicaciones y sitios web. A continuación, se detallan los comandos y configuraciones necesarias para llevar a cabo el despliegue. 

## Instalación de Vercel CLI

Para comenzar a usar Vercel desde la terminal, necesitas instalar la CLI de Vercel de manera global. Ejecuta el siguiente comando:

```bash
npm install -g vercel
```

Esto instalará Vercel CLI en tu sistema, permitiéndote utilizar comandos de Vercel en cualquier proyecto.

## Autenticación en Vercel

Antes de desplegar tu proyecto, debes iniciar sesión en tu cuenta de Vercel. Usa el siguiente comando:

```bash
vercel login
```

Se te pedirá que ingreses tus credenciales de Vercel. Si ya estás registrado, simplemente sigue las instrucciones para completar el proceso de inicio de sesión.

## Desarrollo Local

Para probar tu proyecto localmente antes de desplegarlo, usa el comando:

```bash
vercel dev
```

Este comando inicia un servidor local que simula el entorno de producción de Vercel. Puedes ver cómo se comporta tu proyecto en un entorno similar al de producción.

## Despliegue en Previsualización

Para desplegar tu proyecto en un entorno de previsualización, utiliza:

```bash
vercel
```

Este comando empacará tu proyecto y lo desplegará en un entorno de previsualización. Es útil para verificar los cambios antes de enviarlos a producción.

## Despliegue en Producción

Cuando estés listo para hacer que tu proyecto esté disponible públicamente, ejecuta:

```bash
vercel --prod
```

Este comando despliega tu proyecto directamente en producción, haciéndolo accesible para todos los usuarios finales y te da en consola la ruta donde se desplego

## Configuración del Repositorio

En la plataforma de Vercel, configuré tu repositorio para que detecte automáticamente los cambios y despliegue el proyecto. Esto asegura que cada vez que hagas un *push* a tu repositorio, Vercel ejecute un nuevo despliegue.

🔗 Enlace de configuración del repositorio:  
[https://vercel.com/andresgarcia0313s-projects/serverexpress/settings](https://vercel.com/andresgarcia0313s-projects/serverexpress/settings)

## Configuración de Visibilidad del Proyecto

He configurado el proyecto para que sea accesible por cualquier persona deshabilitando la protección de despliegue. Esto significa que el proyecto estará disponible para todos los visitantes sin necesidad de autenticación adicional.

🔗 Enlace de configuración de visibilidad:  
[https://vercel.com/andresgarcia0313s-projects/serverexpress/settings/deployment-protection](https://vercel.com/andresgarcia0313s-projects/serverexpress/settings/deployment-protection)

## Consideraciones Adicionales

- **Seguridad**: Deshabilitar la protección de despliegue puede exponer tu proyecto a accesos no autorizados. Considera habilitar nuevamente la protección si es necesario para tu caso de uso.
- **Actualizaciones**: Los cambios en el repositorio se reflejarán automáticamente en el entorno de previsualización y producción, según la configuración de despliegue.


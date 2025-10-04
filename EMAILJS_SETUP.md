# 📧 Configuración de EmailJS para el Formulario de Contacto

## 🚀 Pasos para configurar EmailJS

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Regístrate con tu cuenta de Gmail
3. Verifica tu email

### 2. Configurar un servicio de email
1. En el dashboard, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona **Gmail** (o tu proveedor de email preferido)
4. Conecta tu cuenta de Gmail
5. Anota el **Service ID** (ej: `service_abc123`)

### 3. Crear una plantilla de email
1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Configura la plantilla con estas variables:
   ```
   De: {{from_name}} ({{from_email}})
   Asunto: {{subject}}
   
   Mensaje:
   {{message}}
   
   Email del destinatario: {{to_email}}
   ```
4. Anota el **Template ID** (ej: `template_xyz789`)

### 4. Obtener la Public Key
1. Ve a **Account** → **General**
2. Copia tu **Public Key** (ej: `user_abc123def456`)

### 5. Configurar variables de entorno
1. Crea un archivo `.env` en la raíz del proyecto
2. Agrega tus credenciales:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=user_abc123def456
   ```

### 6. Probar el formulario
1. Ejecuta `npm run dev`
2. Ve a la página de contacto
3. Completa y envía el formulario
4. Verifica que recibas el email

## 🔧 Configuración adicional

### Para producción (Vercel/Netlify)
Agrega las variables de entorno en tu plataforma de hosting:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables

### Límites de EmailJS
- **Plan gratuito**: 200 emails/mes
- **Plan pago**: Desde $15/mes para más emails

## ✅ Verificación
Una vez configurado, el formulario debería:
- Mostrar mensaje de éxito al enviar
- Enviar email a tu dirección configurada
- Limpiar el formulario después del envío
- Mostrar mensaje de error si algo falla

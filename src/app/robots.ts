export default function robots() {
  return {
    rules: {
      userAgent: '*', // Aplica a todos los bots
      allow: [
        'https://www.syssoftintegra.com',
      ], // Permite indexar todo el sitio
      disallow: [
        'https://syssoftintegra.com',
        'https://api.syssoftintegra.com',
      ] // Excepto estas rutas
    },
    sitemap: 'https://www.syssoftintegra.com/sitemap.xml'
  }
}
/**
 * Resolve caminhos de arquivos da pasta `public/` levando em conta
 * o BASE_URL do Vite (ex: "/AutoMan/" no GitHub Pages, "/" localmente).
 *
 * Uso: publicUrl("/images/AutoMan/logo/logo.webp")
 *   → "/AutoMan/images/AutoMan/logo/logo.webp"  (GitHub Pages)
 *   → "/images/AutoMan/logo/logo.webp"           (dev local)
 */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

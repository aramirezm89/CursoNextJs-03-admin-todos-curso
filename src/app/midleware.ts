export { auth as middleware } from "@/app/auth";

export const config = {
  // Aquí defines las rutas protegidas
  matcher: ["/dashboard", "/perfil", "/admin/:path*"],
};

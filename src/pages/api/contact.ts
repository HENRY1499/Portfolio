import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name")?.toString().trim();
  const email = data.get("email")?.toString().trim();
  const message = data.get("message")?.toString().trim();
  const whatsapp = data.get("whatsapp")?.toString().trim();
  
  if (name === "" || email === "" || message === "" || whatsapp === "") {
    return new Response("Faltan campos por completar", { status: 400 });
  }
  return new Response("Formulario recibido", { status: 200 });
};

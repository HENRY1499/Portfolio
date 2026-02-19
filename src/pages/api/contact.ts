import type { APIRoute } from "astro";
import { db } from "../../services/firebase";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();
    const whatsapp = data.get("whatsapp")?.toString().trim();

    if (name === "" || email === "" || message === "" || whatsapp === "") {
      return new Response("Faltan campos por completar", { status: 400 });
    }
    console.log("Guardado en Firebase:", { name, email, message, whatsapp });
    await db.collection("Interested").add({
      name,
      email,
      message,
      whatsapp,
      createdAt: new Date(),
    });
    return new Response("Formulario enviado correctamente", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error interno", { status: 500 });
  }
};

import { createClient } from "@supabase/supabase-js";
import type { APIRoute } from "astro";
// Probando;
export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
  console.log(supabase);

  const { error } = await supabase.from("contacts").insert([
    {
      name: formData.get("name"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      message: formData.get("message"),
    },
  ]);

  if (error) {
    return new Response("Error", { status: 500 });
  }

  return new Response("OK", { status: 200 });
};

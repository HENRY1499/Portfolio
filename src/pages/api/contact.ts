import { createClient } from "@supabase/supabase-js";
import type { APIRoute } from "astro";
// Probando;
export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const supabase = createClient(
    import.meta.env.SUPABASE_URL!,
    import.meta.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const { error } = await supabase.from("Interested").insert([
    {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    },
  ]);

  if (error) {
    return new Response("Error", { status: 500 });
  }

  return new Response("OK", { status: 200 });
};

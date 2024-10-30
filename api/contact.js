import emailjs from "@emailjs/nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("incoming request", process.env.EMAIL_PUBLIC_KEY, body);
    emailjs.init({
      publicKey: process.env.EMAIL_PUBLIC_KEY,
      limitRate: {
        id: "vercel",
        throttle: 5000,
      },
    });

    await emailjs.send("service_h6lo7jb", "template_sis6wkq", body);

    return new Response(`Hello from ${process.env.VERCEL_REGION}`);
  } catch (e) {
    console.log("error", e);
  }
}

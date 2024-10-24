import emailjs from "@emailjs/browser";

export async function POST(request) {
  emailjs.init({
    publicKey: process.env.EMAIL_PUBLIC_KEY,
    limitRate: {
      id: "vercel",
      throttle: 5000,
    },
  });

  emailjs.send("service_h6lo7jb", "template_sis6wkq", await request.json());

  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}

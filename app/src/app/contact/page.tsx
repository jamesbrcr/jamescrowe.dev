import Link from 'next/link';

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-[#095779] to-[#14003b]">
      <h1 className="text-4xl font-bold mb-8 text-white">Let's Work Together!</h1>
      <div className="flex space-x-4">
        <SocialButton href="https://www.linkedin.com/in/your-profile" label="LinkedIn" />
        <SocialButton href="https://github.com/your-username" label="GitHub" />
        <SocialButton href="https://discord.gg/your-invite" label="Discord" />
        <SocialButton href="https://www.instagram.com/your-profile" label="Instagram" />
      </div>
    </main>
  );
}

function SocialButton({ href, label }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-blue-100 transition duration-300">
        {label}
      </button>
    </Link>
  );
}

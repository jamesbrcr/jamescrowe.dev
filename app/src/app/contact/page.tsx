import Link from 'next/link';
import { FaLinkedin, FaGithub, FaDiscord, FaInstagram } from 'react-icons/fa';
import { ReactNode } from 'react';

interface SocialButtonProps {
    href: string;
    icon: ReactNode;
    color: string;
  }

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-[#191919] to-[#242365]">
      <h1 className="text-6xl font-bold mb-8 text-white">Let's Work Together!</h1>
      <div className="mb-8 text-center">
        <a
          href="mailto:crowe@cs.wisc.edu"
          className="text-2xl text-gray-300 hover:text-gray-100"
        >
          crowe@cs.wisc.edu
        </a>
      </div>
      <div className="flex space-x-6">
        {/* LinkedIn Button */}
        <SocialButton
          href="https://www.linkedin.com/in/james-crowe-44ab902b7/"
          icon={<FaLinkedin size={38} />}
          color="text-[#0A66C2]"
        />
        {/* GitHub Button */}
        <SocialButton
          href="https://github.com/jamesbrcr"
          icon={<FaGithub size={38} />}
          color="text-[#181717]"
        />
        {/* Discord Button */}
        <SocialButton
          href="https://discord.com/users/wakey0125"
          icon={<FaDiscord size={38} />}
          color="text-[#5865F2]"
        />
        {/* Instagram Button */}
        <SocialButton
          href="https://www.instagram.com/jamesbrcr/?hl=en"
          icon={<FaInstagram size={38} />}
          color="text-[#E4405F]"
        />
      </div>
    </main>
  );
}

function SocialButton({ href, icon, color }: SocialButtonProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div className="relative group">
        <button className={`bg-[rgba(128,128,128,0.2)] shadow-md p-6 rounded-full hover:bg-[#353042] transition duration-300 flex items-center justify-center ${color}`}>
          {icon}
        </button>
      </div>
    </Link>
  );
}
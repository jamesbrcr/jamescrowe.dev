import Link from 'next/link';
import Image from 'next/image';
import logo from './../images/logo-2.png'; // Replace with the path to your logo image

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-3 overflow-visible">
      <nav className="container mx-auto px-8">
        <div className="max-w-3xl mx-auto flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/">
            <div className="relative w-30 h-30 -mt-11"> {/* Adjust width and height as needed */}
              <Image
                src={logo}
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          {/* Navigation Links */}
          <div className="flex space-x-4 text-xl">
            {['Projects', 'Bookshelf', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-gray-300">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* Divider Line */}
      <div className="-mt-8"> {/* Move the line up */}
        <div className="max-w-3xl mx-auto h-0.5 bg-gray-400 opacity-20"></div>
      </div>
    </header>
  );
};

export default Header;

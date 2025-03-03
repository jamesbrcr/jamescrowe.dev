import Link from 'next/link'

const Header = () => {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-3">
        <nav className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto flex items-center justify-between py-6">
            <Link href="/" className="text-2xl font-bold">J</Link>
            <div className="flex space-x-4">
              {['Projects', 'Bookshelf', 'Contact'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-gray-300">{item}</Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="max-w-3xl mx-auto h-0.5 bg-gray-400 opacity-20"></div>
      </header>
    );
  };
  

export default Header

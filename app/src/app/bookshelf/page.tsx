import Image from 'next/image';
import pragmaticprogrammerImage from './../../images/The-Pragmatic-Programmer.jpg';

const readingList = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    type: "Book",
    image: pragmaticprogrammerImage,
    thoughts: "A classic that has stood the test of time. It's filled with practical advice from software development to work environment etiquette.",
    link: "https://www.pragmaticprogrammer.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition",
  },
//   {
//     id: 2,
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     type: "Book",
//     image: "/images/clean-code.jpg",
//     thoughts: "This book changed how I approach writing code. It's all about creating readable, maintainable software.",
//   },
//   {
//     id: 3,
//     title: "The Impact of Artificial Intelligence on Innovation",
//     type: "Research Paper",
//     image: "/images/ai-innovation.jpg",
//     thoughts: "An insightful paper that explores how AI is reshaping various industries. It opened my eyes to new possibilities in tech.",
//   },
];

export default function Reads() {
  const currentlyReading = readingList[0]; // Assuming the first book is the one currently being read
  const otherBooks = readingList.slice(1); // The rest of the books

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 pt-32 bg-gradient-to-br from-[#191919] to-[#242365]">
      
      {/* Currently Reading Section */}
      <div className="max-w-3xl w-full mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Currently Reading</h2>
        <div className="flex bg-[rgba(128,128,128,0.2)] rounded-lg shadow-md overflow-hidden">
          <div className="w-1/5 flex-shrink-0">
            <Image
              src={currentlyReading.image}
              alt={currentlyReading.title}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-4/5 p-4">
            <h2 className="text-lg font-semibold mb-1 underline">{currentlyReading.title}</h2>
            <p className="text-sm text-gray-400 mb-1 italic">{currentlyReading.type}</p>
            <p className="text-gray-400">{currentlyReading.thoughts}</p>
            <p className="text-sm text-gray-400 mt-2">
              <a href={currentlyReading.link} className="text-blue-500 hover:underline">
                Read More
              </a>
            </p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto h-0.5 bg-gray-400 opacity-20 mt-8"></div>
      </div>

      {/* Rest of the Reading List */}
      <div className="max-w-3xl w-full">
        {otherBooks.map((item) => (
          <div key={item.id} className="flex bg-[rgba(128,128,128,0.2)] rounded-lg shadow-md overflow-hidden mb-4">
            <div className="w-1/5 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-4/5 p-4">
              <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
              <p className="text-sm text-gray-200 mb-1">{item.type}</p>
              <p className="text-gray-400">{item.thoughts}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
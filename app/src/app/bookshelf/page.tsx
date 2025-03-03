import Image from 'next/image';

const readingList = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    type: "Book",
    image: "/images/pragmatic-programmer.jpg",
    thoughts: "A must-read for every developer. It's filled with practical advice that has significantly improved my coding practices.",
  },
  {
    id: 2,
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    type: "Book",
    image: "/images/clean-code.jpg",
    thoughts: "This book changed how I approach writing code. It's all about creating readable, maintainable software.",
  },
  {
    id: 3,
    title: "The Impact of Artificial Intelligence on Innovation",
    type: "Research Paper",
    image: "/images/ai-innovation.jpg",
    thoughts: "An insightful paper that explores how AI is reshaping various industries. It opened my eyes to new possibilities in tech.",
  },
  // Add more items as needed
];

export default function Reads() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 pt-32 bg-gradient-to-br from-[#095779] to-[#14003b]">
      <h1 className="text-4xl font-bold mb-8 text-white">Reading List</h1>
      <div className="max-w-3xl w-full">
        {readingList.map((item) => (
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


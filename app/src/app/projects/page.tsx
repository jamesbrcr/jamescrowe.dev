import Image from 'next/image';
import presentlyImage from './../../images/presently-pic-1.png'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Presently',
      description: 'A fine tuned (gpt-4o-mini) gift recommendation app that helps you find the perfect gift no matter the occasion utilizing Amazon\'s "most purchased" list. Built for MadData25 Hackathon!',
      image: presentlyImage,
      link: 'https://github.com/VishnuR121/presently',
    },
    // {
    //   id: 2,
    //   title: 'Hammbot',
    //   description: 'A fine-tuned gpt-4o-mini chatbot that mimics the response style of my good friend Jared Hamm. Uses a scraper to gather data from Discord messages.',
    //   image: presentlyImage,
    //   link: '/project2',
    // },
    // {
    //   id: 3,
    //   title: 'Project 3',
    //   description: 'A brief description of Project 3.',
    //   image: '/path-to-project3-image.jpg',
    //   link: '/project3',
    // },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 pt-32 bg-gradient-to-br from-[#191919] to-[#242365]">
      {/* <h1 className="text-4xl font-bold mb-8 text-white">Projects</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl">
        {projects.map((project) => (
          <div key={project.id} className="bg-[rgba(128,128,128,0.2)] rounded-lg shadow-md overflow-hidden">
            <Image 
              src={project.image} 
              alt={project.title} 
              width={200} 
              height={100} 
              className="w-full h-24 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-gray-200 font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-blue-500 hover:underline">
                Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

//import Image from 'next/image';
//import jamesCroweImage from '../images/james-crowe-1.jpg';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 pt-32 bg-gradient-to-br from-[#191919] to-[#242365]">
      <div className="flex max-w-3xl items-center space-x-8">
        <div className="flex-1">
          <h1 className="mb-4 text-4xl font-bold">About Me</h1>
          <p className="text-lg mb-6">
            Hi! I&apos;m James Crowe, a student at{' '}
            <a
              href="https://www.wisc.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300"
            >
              The University of Wisconsin-Madison
            </a>{' '}
            studying Computer Science and Data Science.
          </p>
          <p className="text-lg mb-6">
          I enjoy working with LLMs and mixed reality applications. I am eager to apply my skills in these exciting fields.
          </p>
          <div className="flex justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-[rgba(128,128,128,0.2)] shadow-md text-white rounded-lg hover:bg-[#353042] transition-colors"
            >
              View My Resume
            </a>
          </div>
        </div>
        {/* <div className="flex-shrink-0">
          <Image
            src={jamesCroweImage}
            alt="[James Crowe]"
            width={300}
            height={300}
            className="rounded"
          />
        </div> */}
      </div>
    </main>
  );
}

//[#14003b] - dark blue og
//[#191919] - dark gray
//[#095779] - light blue
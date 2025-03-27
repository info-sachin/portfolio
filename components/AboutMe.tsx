import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Column - About Me Text */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Hi, Im [Your Name], a passionate full-stack developer with expertise in modern web technologies. 
            I specialize in building responsive and user-friendly applications using React, Next.js, and other cutting-edge tools.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            With a strong foundation in both frontend and backend development, I create seamless digital experiences 
            that combine beautiful design with robust functionality.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
              Download CV
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg transition duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden">
            <Image
              src="/QFS-Team-Sachin-removebg-preview.png" // Replace with your image path
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 
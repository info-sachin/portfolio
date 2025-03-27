import React from "react";
import { Timeline } from "./ui/timeline";

export function Experience() {
  const data = [
    {
      title: "Fullstack Mobile App Developer",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I build robust and user-friendly mobile applications, handling everything from intuitive front-end interfaces to scalable back-end systems. My focus is on creating seamless experiences for both iOS and Android, leveraging modern technologies to deliver high-performance solutions.
          </p>

          <div className="grid gap-4">
            <ul className="list-disc list-inside space-y-4">
              <li className="text-base text-gray-700">Cross-platform mobile development (React Native, Flutter).</li>
              <li className="text-base text-gray-700">Scalable back-end development (Node.js, Python).</li>
              <li className="text-base text-gray-700">Database design and management (SQL, NoSQL).</li>
              <li className="text-base text-gray-700">API integration and development.</li>
              <li className="text-base text-gray-700">CI/CD pipeline implementation.</li>
              <li className="text-base text-gray-700">Strong problem-solving and debugging skills.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Sr. Mobile App Developer",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            As a Senior Mobile App Developer, I&apos;ve led the development and delivery of complex mobile applications, leveraging a diverse skillset encompassing Android (Java/Kotlin), Dart, and Flutter. I&apos;ve focused on building robust, scalable, and performant applications, while also mentoring junior developers and contributing to architectural decisions. My experience has deepened my understanding of cross-platform development, native Android intricacies, and the importance of efficient codebases for large-scale projects.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid gap-4">
            <ul className="list-disc list-inside space-y-4">
              <li className="text-base text-gray-700">Advanced Flutter/Dart proficiency for cross-platform development.</li>
              <li className="text-base text-gray-700">Deepened expertise in native Android (Java/Kotlin) development.</li>
              <li className="text-base text-gray-700">Architectural design and implementation for scalable applications.</li>
              <li className="text-base text-gray-700">Performance optimization for mobile applications.</li>
              <li className="text-base text-gray-700">Mentorship and team leadership experience.</li>
              <li className="text-base text-gray-700">Complex state management expertise.</li>
              <li className="text-base text-gray-700">Robust testing and debugging skills.</li>
              <li className="text-base text-gray-700" >CI/CD pipeline integration and optimization.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Mobile App Developer",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            As a Senior Mobile App Developer, I&apos;ve led the development and delivery of complex mobile applications, leveraging a diverse skillset encompassing Android (Java/Kotlin), Dart, and Flutter. I&apos;ve focused on building robust, scalable, and performant applications, while also mentoring junior developers and contributing to architectural decisions. My experience has deepened my understanding of cross-platform development, native Android intricacies, and the importance of efficient codebases for large-scale projects.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid gap-4">
            <ul className="list-disc list-inside space-y-4">
              <li className="text-base text-gray-700">Advanced Flutter/Dart proficiency for cross-platform development.</li>
              <li className="text-base text-gray-700">Deepened expertise in native Android (Java/Kotlin) development.</li>
              <li className="text-base text-gray-700">Architectural design and implementation for scalable applications.</li>
              <li className="text-base text-gray-700">Performance optimization for mobile applications.</li>
              <li className="text-base text-gray-700">Mentorship and team leadership experience.</li>
              <li className="text-base text-gray-700">Complex state management expertise.</li>
              <li className="text-base text-gray-700">Robust testing and debugging skills.</li>
              <li className="text-base text-gray-700" > ✅CI/CD pipeline integration and optimization.</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

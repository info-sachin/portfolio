'use client';
import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "./ui/timeline";
import { experienceData } from "./data";

export function Experience() {
  const data = experienceData.map((exp) => ({
    title: exp.title,
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          {exp.description}
        </p>
        <div className="grid gap-4">
          <ul className="list-disc list-inside space-y-4">
            {exp.points.map((point, idx) => (
              <li key={idx} className="text-base text-gray-700">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  }));

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Timeline data={data} />
    </motion.div>
  );
}

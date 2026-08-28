"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { timeline } from "@/app/data";

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
          Minha Jornada
        </h2>
        <div className="relative z-0">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full z-0"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex flex-col md:flex-row justify-center items-center w-full relative z-10 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="hidden md:block w-5/12"></div>

              <div className="z-20 flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                <h3 className="text-lg font-semibold text-white">
                  {item.year}
                </h3>
              </div>

              <Card
                className={`w-full md:w-5/12 mt-6 md:mt-0 dark:bg-gray-800 relative z-10 ${
                  index % 2 === 0 ? "mr-2" : "ml-2"
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold dark:text-white">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2 dark:text-white">
                    Principais conquistas:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <div className="md:hidden absolute inset-0 flex justify-center z-0">
            <div className="w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

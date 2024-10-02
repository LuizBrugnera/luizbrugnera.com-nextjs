"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { skills, timeline } from "./data";
import Timeline from "@/components/Timeline";
import ProjectsCarousel from "@/components/ProjectsCarousel";

export default function Portfolio() {
  const [theme, setTheme] = useState("light");
  const [typedText, setTypedText] = useState("");
  const fullText = "Desenvolvedor Full Stack";

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= fullText.length; i++) {
        setTypedText(fullText.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    };
    typeText();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${theme === "dark" ? "dark" : ""}`}
    >
      <header className="sticky top-0 z-10 bg-background border-b dark:bg-gray-800 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold dark:text-white">
            Luiz Ricardo Brugnera
          </h1>
          <nav className="hidden md:flex space-x-4">
            <a
              href="#about"
              className="hover:text-primary dark:text-gray-300 dark:hover:text-white"
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="hover:text-primary dark:text-gray-300 dark:hover:text-white"
            >
              Projetos
            </a>
            <a
              href="#skills"
              className="hover:text-primary dark:text-gray-300 dark:hover:text-white"
            >
              Habilidades
            </a>
            <a
              href="#timeline"
              className="hover:text-primary dark:text-gray-300 dark:hover:text-white"
            >
              Timeline
            </a>
            <a
              href="#contact"
              className="hover:text-primary dark:text-gray-300 dark:hover:text-white"
            >
              Contato
            </a>
          </nav>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </header>

      <main className="flex-grow dark:bg-gray-900">
        <section id="about" className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 dark:from-purple-700 dark:to-purple-900 opacity-80"></div>
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z" fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")',
                backgroundSize: "100px 100px",
              }}
            />
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.8) 10%, transparent 10%)",
                backgroundPosition: "0 0",
                backgroundSize: "30px 30px",
              }}
            />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2
              className="text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              Olá, eu sou Luiz Ricardo Brugnera
            </motion.h2>
            <motion.p
              className="text-xl mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="font-mono">{typedText}</span>
              <span className="animate-blink">|</span>
            </motion.p>
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="bg-white text-purple-600 hover:bg-purple-100">
                <GithubIcon className="mr-2 h-4 w-4" /> GitHub
              </Button>
              <Button className="bg-white text-purple-600 hover:bg-purple-100">
                <LinkedinIcon className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </motion.div>
          </div>
        </section>
        <ProjectsCarousel />

        <section id="skills" className="py-20 bg-muted dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
              Habilidades
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center p-4 dark:bg-gray-700">
                    <CardContent>
                      <span className="text-4xl mb-2">{skill.icon}</span>
                      <p className="font-semibold dark:text-white">
                        {skill.name}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Timeline />

        <section id="contact" className="py-20 bg-muted dark:bg-gray-800">
          <div className="container mx-auto px-4 max-w-md">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
              Contato
            </h2>
            <Card className="dark:bg-gray-700">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white dark:border-gray-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white dark:border-gray-500"
                  />
                  <textarea
                    placeholder="Mensagem"
                    rows={4}
                    className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white dark:border-gray-500"
                  ></textarea>
                  <Button className="w-full dark:bg-gray-900 dark:text-white">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left dark:text-white">
              &copy; 2024 Luiz Ricardo Brugnera. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon" className="dark:text-white">
                <GithubIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="dark:text-white">
                <LinkedinIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="dark:text-white">
                <MailIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

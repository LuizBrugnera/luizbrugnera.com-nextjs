"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { projects } from "@/app/data";

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerPage(3);
      } else if (window.innerWidth >= 640) {
        setSlidesPerPage(2);
      } else {
        setSlidesPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pageCount = Math.max(1, Math.ceil(projects.length / slidesPerPage));

  useEffect(() => {
    setCurrentIndex((prev) => (prev >= pageCount ? 0 : prev));
  }, [pageCount]);

  useEffect(() => {
    if (pageCount <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === pageCount - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex, pageCount]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pageCount - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pageCount - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center tracking-tight dark:text-white">
          Projetos
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-3 min-w-0"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(index, 5) * 0.08,
                  }}
                >
                  <Card className="flex h-full flex-col overflow-hidden dark:bg-gray-800">
                    <CardHeader className="flex-1 space-y-3">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-muted">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top"
                          sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                      <CardTitle className="text-xl font-bold tracking-tight dark:text-white">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="dark:text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between gap-2">
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver site
                        </a>
                      </Button>
                      {project.githubLink ? (
                        <Button asChild variant="outline" size="sm">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </a>
                        </Button>
                      ) : null}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          {pageCount > 1 ? (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-background/90"
                onClick={prevSlide}
                aria-label="Projetos anteriores"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-background/90"
                onClick={nextSlide}
                aria-label="Próximos projetos"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <div className="mt-8 flex justify-center gap-2">
                {Array.from({ length: pageCount }, (_, page) => (
                  <button
                    key={page}
                    type="button"
                    aria-label={`Página ${page + 1} de projetos`}
                    aria-current={page === currentIndex ? "true" : undefined}
                    className={`h-2.5 rounded-full transition-all ${
                      page === currentIndex
                        ? "w-6 bg-purple-600 dark:bg-purple-400"
                        : "w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600"
                    }`}
                    onClick={() => setCurrentIndex(page)}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}

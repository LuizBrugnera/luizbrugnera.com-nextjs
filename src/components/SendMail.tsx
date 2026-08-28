"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export const SendMail = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = () => {
    const emailBody =
      `Olá Luiz, Gostaria de contatar você sobre seus serviços de desenvolvimento full stack.
       Contacte pelo meu email ${email}
       atenciosamente,
       ${name}
    ` || message;

    const emailSubject = "Interesse em seus serviços";

    const emailTo = "luiz.r.brugnera@gmail.com";

    window.location.href = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;
  };
  return (
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
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white dark:border-gray-500"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <textarea
                placeholder="Mensagem"
                rows={4}
                className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white dark:border-gray-500"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
              <Button
                className="w-full dark:bg-gray-900 dark:text-white"
                onClick={() => handleSubmit()}
              >
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export const SendMail = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return;
    }

    const emailBody = [
      "Olá Luiz,",
      "",
      trimmedMessage,
      "",
      "Atenciosamente,",
      trimmedName,
      trimmedEmail,
    ].join("\n");

    const emailSubject = "Contato pelo portfólio";
    const emailTo = "luiz.r.brugnera@gmail.com";

    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <section id="contact" className="py-20 bg-muted dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center tracking-tight dark:text-white">
          Contato
        </h2>
        <Card className="dark:bg-gray-700">
          <CardContent className="p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                required
                className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white dark:border-gray-500"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white dark:border-gray-500"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <textarea
                name="message"
                placeholder="Mensagem"
                rows={4}
                required
                className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white dark:border-gray-500"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
              <Button
                type="submit"
                className="w-full dark:bg-gray-900 dark:text-white"
              >
                Enviar mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

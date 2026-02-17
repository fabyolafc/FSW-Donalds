import Link from "next/link";

import Footer from "./footer";

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-yellow-50 to-white">
      {/* CONTEÚDO CENTRAL */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center p-6">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          🍔 Projeto Self-Checkout
        </h1>

        <p className="mb-4 max-w-xl text-base text-gray-600">
          Olá! Eu sou a <span className="font-semibold">Fabyola</span>, desenvolvedora
          Front-end apaixonada por criar interfaces modernas e funcionais.
          Este projeto simula um sistema de autoatendimento para restaurantes,
          onde o cliente pode visualizar o cardápio e realizar pedidos de forma
          simples e intuitiva.
        </p>

        <p className="mb-8 max-w-xl text-gray-600">
          Esse projeto faz parte do meu portfólio profissional, onde aplico
          conceitos de React, Next.js, Prisma e integração com pagamentos.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/fsw-donalds"
            className="rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-white transition hover:bg-yellow-600"
          >
            🍟 Entrar no Restaurante
          </Link>

          <a
            href="https://fabyola.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-yellow-500 px-6 py-3 font-semibold text-yellow-600 transition hover:bg-yellow-100"
          >
            💼 Ver meu Portfólio
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default HomePage;


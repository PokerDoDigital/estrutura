import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import CountdownTimer from '../components/CountdownTimer';
import SocialLinks from '../components/SocialLinks';
import RegistrationForm from '../components/RegistrationForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Head>
        <title>Poker do Digital - São Paulo | O Maior Evento de Poker</title>
        <meta name="description" content="Participe do maior evento de poker em São Paulo. Poker do Digital - premiações exclusivas, ambiente premium e networking de alto nível." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image src="/logo.png" alt="Poker do Digital Logo" width={150} height={50} />
          <div className="hidden md:flex space-x-6">
            <a href="#sobre" className="hover:text-yellow-500 transition">Sobre</a>
            <a href="#premiacao" className="hover:text-yellow-500 transition">Premiação</a>
            <a href="#regulamento" className="hover:text-yellow-500 transition">Regulamento</a>
            <a href="#inscricao" className="hover:text-yellow-500 transition">Inscrição</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <Image 
              src="/hero-bg.jpg" 
              alt="Poker Background" 
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Poker do Digital</h1>
            <p className="text-xl md:text-2xl mb-8">O maior evento de poker em São Paulo</p>
            <CountdownTimer date="2024-03-15T19:00:00" />
            <button className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-yellow-400 transition">
              Inscreva-se Agora
            </button>
          </div>
        </section>

        {/* Sobre o Evento */}
        <section id="sobre" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Sobre o Evento</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Local e Data</h3>
                <p className="text-gray-300">
                  15 de Março de 2024, às 19h<br />
                  Hotel Premium São Paulo<br />
                  Av. Paulista, 1000 - São Paulo, SP
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Estrutura</h3>
                <p className="text-gray-300">
                  • Mesas profissionais<br />
                  • Dealers certificados<br />
                  • Ambiente climatizado<br />
                  • Buffet premium<br />
                  • Segurança reforçada
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Premiação */}
        <section id="premiacao" className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Premiação</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">1º Lugar</h3>
                <p className="text-yellow-500 text-4xl font-bold mb-4">R$ 50.000</p>
                <p className="text-gray-400">+ Troféu exclusivo</p>
              </div>
              <div className="bg-black p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">2º Lugar</h3>
                <p className="text-yellow-500 text-4xl font-bold mb-4">R$ 25.000</p>
                <p className="text-gray-400">+ Troféu exclusivo</p>
              </div>
              <div className="bg-black p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">3º Lugar</h3>
                <p className="text-yellow-500 text-4xl font-bold mb-4">R$ 10.000</p>
                <p className="text-gray-400">+ Troféu exclusivo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Patrocinadores */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Patrocinadores</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Adicione logos dos patrocinadores aqui */}
            </div>
          </div>
        </section>

        {/* Formulário de Inscrição */}
        <section id="inscricao" className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold text-center mb-12">Inscreva-se</h2>
            <RegistrationForm />
          </div>
        </section>
      </main>

      <footer className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image src="/logo.png" alt="Poker do Digital Logo" width={120} height={40} />
            </div>
            <SocialLinks />
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              © 2024 Poker do Digital. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

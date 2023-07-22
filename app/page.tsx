'use client'
import React from "react";
import Image from 'next/image'
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Feature from './components/feature.tsx';
import Foruth from './components/foruth.tsx';
import Fifth from './components/Fifth.tsx';
import Six from './components/Six.tsx';
import Team from './components/Team.tsx';
import Footer from './components/Footer.tsx';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-5">
      <Header />
      <Hero />
      <Feature />
      <Foruth />
      <Team />
      <Six />
      <Fifth />
      <Footer />
    </main>
  )
}

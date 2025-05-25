'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Code2, ShoppingCart, LayoutDashboard } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-slate-900 text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-800/80 backdrop-blur-md shadow">
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">DynamiK Web</span>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-300">Rreth Nesh</ScrollLink></li>
            <li><ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-300">Shërbime</ScrollLink></li>
            <li><ScrollLink to="portfolio" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-300">Projektet</ScrollLink></li>
            <li><ScrollLink to="testimonials" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-300">Klientët</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-300">Kontakt</ScrollLink></li>
          </ul>
        </nav>
      </header>

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 relative bg-[url('/hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="z-10 max-w-2xl">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Web që i jep jetë idesë tënde</h1>
          <p className="text-xl text-gray-200 mt-4">
            Ne ndërtojmë platforma që janë të shpejta, moderne dhe të përshtatura për çdo biznes që kërkon cilësi.
          </p>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8 bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition">
              Kontakto tani
            </motion.button>
          </ScrollLink>
        </motion.div>
      </section>

      <Element name="about" className="py-28 px-6 bg-slate-800">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">Rreth Kompanisë</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Jemi një ekip kreativ dhe i përkushtuar që zhvillon website dhe platforma për biznese moderne. Te DynamiK Web, ne besojmë se çdo ide meriton një prezencë dinjitoze online — and we make that happen.
          </p>
        </motion.div>
      </Element>

      <Element name="services" className="py-28 px-6 bg-slate-900">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">Çfarë Ofrojmë</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <motion.div whileHover={{ scale: 1.03 }} className="bg-slate-800 p-6 rounded-xl shadow-md">
              <Code2 className="h-10 w-10 mb-4 text-cyan-300" />
              <h3 className="text-xl font-semibold mb-2">Website për Biznese</h3>
              <p className="text-gray-300">Faqe të ndërtuara nga zero, të optimizuara për performancë dhe përshtatje me çdo pajisje.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="bg-slate-800 p-6 rounded-xl shadow-md">
              <ShoppingCart className="h-10 w-10 mb-4 text-cyan-300" />
              <h3 className="text-xl font-semibold mb-2">Dyqane Online</h3>
              <p className="text-gray-300">Zgjidhje të thjeshta dhe të sigurta për e-commerce me përvojë blerjeje intuitive.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="bg-slate-800 p-6 rounded-xl shadow-md">
              <LayoutDashboard className="h-10 w-10 mb-4 text-cyan-300" />
              <h3 className="text-xl font-semibold mb-2">Landing Pages</h3>
              <p className="text-gray-300">Faqe të fokusuara në një objektiv të vetëm — shitje, regjistrim ose kontakt.</p>
            </motion.div>
          </div>
        </motion.div>
      </Element>

      <Element name="portfolio" className="py-28 px-6 bg-slate-800">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">Projektet Tona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-900 rounded-lg p-4 shadow-md">
              <Image src="/project1.jpg" alt="Projekt 1" width={400} height={250} className="rounded-md object-cover" />
              <h3 className="text-xl font-semibold mt-4 text-white">Studio Arkitekture</h3>
              <p className="text-gray-400">Dizajn elegant dhe përqendrim në prezantimin vizual të projekteve.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-900 rounded-lg p-4 shadow-md">
              <Image src="/project2.jpg" alt="Projekt 2" width={400} height={250} className="rounded-md object-cover" />
              <h3 className="text-xl font-semibold mt-4 text-white">Platformë Trajnimesh</h3>
              <p className="text-gray-400">Zgjidhje funksionale për menaxhimin e kurseve, përdoruesve dhe pagesave.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-900 rounded-lg p-4 shadow-md">
              <Image src="/project3.jpg" alt="Projekt 3" width={400} height={250} className="rounded-md object-cover" />
              <h3 className="text-xl font-semibold mt-4 text-white">Portfolio Freelancer</h3>
              <p className="text-gray-400">Faqe personale për krijues që duan të shfaqin punën me klas dhe stil.</p>
            </motion.div>
          </div>
        </motion.div>
      </Element>

      <Element name="testimonials" className="py-28 px-6 bg-slate-900">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">Çfarë Thonë Klientët</h2>
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <p className="text-lg italic text-gray-300">"Faqja që na ndërtuan ishte më shumë se thjesht dizajn — ishte zgjidhje. E rekomandojmë pa hezitim!"</p>
            <p className="mt-4 font-semibold text-white">— Arlind, sipërmarrës</p>
          </div>
        </motion.div>
      </Element>

      <Element name="contact" className="py-28 px-6 bg-slate-800 text-center">
        <h2 className="text-4xl font-bold mb-4 text-cyan-400">Na Kontakto</h2>
        <p className="text-gray-300 mb-4">Gati për të nisur një projekt të ri? Ne jemi këtu për ta bërë realitetin të duket profesional.</p>
        <p className="text-lg font-medium text-white">📧 denis.koka@fshnstudent.info</p>
        <p className="text-lg font-medium text-white">📞 +355 69 454 1919</p>
      </Element>

      <footer className="py-6 text-center text-gray-400 text-sm border-t border-gray-700">
        &copy; {new Date().getFullYear()} DynamiK Web. Krijuar në Shqipëri me përkushtim dhe kreativitet.
      </footer>
    </main>
  );
}


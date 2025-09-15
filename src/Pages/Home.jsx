import React from "react";
import Navbar from "../Components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Fonctionnalité from "./Fonctionnalité";
import Aperçus from "./Aperçus";
import Temoignages from "./Temoingnages";
import Contact from "./Contact";

function Home() {
  const slides = [
    { id: 1, image: "/image1.jpg", title: "Innovation", description: "L’innovation est au cœur de notre démarche. Chez TRIOINNOV, nous concevons des solutions créatives et adaptées aux besoins de nos clients, en combinant technologie, efficacité et originalité. Notre objectif est de transformer les idées en projets concrets et performants, tout en anticipant les évolutions du marché." },
    { id: 2, image: "/image2.jpg", title: "Optimisation", description: "Nous améliorons vos processus et ressources pour maximiser l’efficacité. TRIOINNOV vous aide à atteindre vos objectifs avec des solutions intelligentes et performantes, réduisant le gaspillage et optimisant chaque étape de vos projets." },
    { id: 3, image: "/image3.jpg", title: "Productivité", description: "Atteignez vos objectifs plus rapidement et efficacement. Grâce à nos méthodes et outils innovants, TRIOINNOV vous permet de gagner du temps, d’augmenter la performance et de concentrer vos efforts là où ils comptent vraiment." },
  ];

  return (
    <>
      {/* Navbar flottante */}
      <div className="fixed top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Slider plein écran */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay texte */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40 px-4 text-center">
                <h2 className="text-4xl md:text-5xl  font-bold">{slide.title}</h2>
                <p className="mt-4 text-lg md:text-xl max-w-3xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Section fonctionnalités */}
      <div className="mt-16">
        <Fonctionnalité />
        <Aperçus />
        <Temoignages/>
        <Contact/>



      </div>
    </>
  );
}

export default Home;

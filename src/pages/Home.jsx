import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <section className="pt-24 pb-12 px-4 md:pt-32">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-indigo-500 mb-6">
                Jèko Todo
              </h1>
              <p className="text-accent text-lg mb-8 max-w-lg">
                Bienvenue dans votre application appelé "Jèko todo" qui est une application qui vous permettras de lister vos tâches, de la journée, de la semaine etc... Soyez les bienvenue et profiter au maximum de nos services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to={"/inscription"} className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-600 transition-colors duration-200 font-semibold">Inscription</Link>
                <Link to={"/connexion"} className="border border-primary text-primary px-8 py-3 rounded-md hover:bg-indigo-60010 transition-colors duration-200 font-semibold">Connexion</Link>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?format=jpg&width=1440"
                alt="Hero" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
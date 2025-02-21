import profile from "@/assets/profile.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-12 min-h-[530px]">
      <section className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
        
        <div className="bg-[#f5f5dc] rounded-3xl w-96 h-96 overflow-hidden shadow-lg">
          <Image 
            src={profile} 
            alt={"Foto Pedro"} 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-4xl font-semibold text-[#333] mb-4">Quem sou eu?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Olá, sou o Pedro Goettert, um desenvolvedor web especializado em criar experiências digitais incríveis usando Next.js, React e Tailwind CSS. Eu adoro transformar ideias em soluções digitais inovadoras e funcionais.
          </p>
          <p className="text-lg text-gray-600">
            Meu foco é criar websites rápidos, responsivos e com design limpo e moderno. Explore meu portfólio e veja como posso ajudar a transformar seu projeto!
          </p>
        </div>

      </section>
    </div>
  );
}

import profile from "@/assets/profile.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="flex justify-center gap-20 items-center mt-8">
      
          <div className="bg-[#f5f5dc] rounded-3xl w-96 h-96 overflow-hidden">
            <Image src={profile} alt={"Foto Pedro"} className="w-full h-full object-cover"/>
          </div>

          <div className="max-w-[45%] flex flex-col gap-3">
            <h2 className="text-3xl font-bold">Quem sou eu?</h2>
            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore corporis ipsum quos, temporibus voluptatum illum eius sunt, blanditiis quas, alias nostrum nemo tempora ipsa incidunt ex deleniti non maiores perspiciatis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore corporis ipsum quos.</p>
            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore corporis ipsum quos, temporibus voluptatum illum eius sunt, blanditiis quas, alias nostrum nemo tempora ipsa incidunt ex deleniti non maiores perspiciatis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore corporis ipsum quos.</p>
            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore corporis ipsum quos, temporibus voluptatum illum eius sunt, blanditiis quas, alias nostrum nemo tempora ipsa incidunt ex deleniti non maiores perspiciatis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore corporis ipsum quos.</p>
          </div>
      </section>
    </div>
  );
}





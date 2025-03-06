import Image from "next/image";
import Encabezado from "../src/components/Encabezado"; // Asegúrate de la ruta correcta
import MiComponente2 from "../src/components/prueba2"; // Asegúrate de la ruta correcta

export default function Home() {
  return (
    <div className="bg-gray-950"
      width={300}
      height={200}
      >
        
        <h1></h1>
        <Image 
          src="/logoMorf.svg" 
          alt="Descripción de la imagen" 
          width={200} 
          height={100} 
        />
              <Encabezado />

        <h1>BIENVENIDOS</h1>
        <MiComponente2 />
        <div bg-color-red-200>
          <h1>hoi</h1>
        </div>
    </div>
  )}

import Image from "next/image";
import Encabezado from "../src/components/Encabezado"; // Asegúrate de la ruta correcta
import MiComponente2 from "../src/components/prueba2"; // Asegúrate de la ruta correcta


export default function Home() {
  return (
    <div>
      <h1></h1>
      <Image 
        src="/next.svg" 
        alt="Descripción de la imagen" 
        width={600} 
        height={300} 
      />
            <Encabezado />

      <h1>Bienvenido a mi páginaaaaa</h1>
      <MiComponente2 />
      <Image  
        src="/file.svg" 
        alt="Descripción de la imagen" 
        width={300} 
        height={200} 
      />
    </div>
  )}

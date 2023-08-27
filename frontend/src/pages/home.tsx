import { MdOutlineQrCodeScanner } from "react-icons/md";
import { useState } from "react";
import LeitorCode from "../function/lercodigo/LeitorCode";

function Home() {
  const [barcodeValue, setBarcodeValue] = useState<string>("");

  const handleBarcodeScan = (value: string) => {
    setBarcodeValue(value);
  };

  return (
    <div>
      <div>
        <h1 className="flex justify-center h-[5rem] bg-red-600 text-[300%] rounded-lg">
          Alumifran Descartáveis
        </h1>
      </div>
      <div className="flex p-4 w-screen">
        <input
          className="w-full rounded-md mr-2"
          type="text"
          placeholder="Digite aqui Código de Barras"
        />
        <button
          className="flex items-center p-2 bg-green-500 rounded-md hover:bg-green-300"
          onClick={() => LeitorCode(handleBarcodeScan)}
        >
          <MdOutlineQrCodeScanner className="text-white mr-2" />
          Escanear
        </button>
      </div>
      <div>
        {/* Exibir o valor do código de barras escaneado */}
        <p>Valor do Código de Barras: {barcodeValue}</p>
      </div>
      <div className='w-screen h-screen' id="alumifrancode">

      </div>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import LeitorCode from "../function/lercodigo/LeitorCode";
import { api } from "../services/api";

interface IUapi {
  id: number;
  procod: string;
  prodes: string;
  propcv: string;
}

const Home: React.FC = () => {
  const [barcodeValue, setBarcodeValue] = useState<string>("");
  const [produto, setProduto] = useState<IUapi | null>(null);

  // useEffect para monitorar mudanças em barcodeValue
  useEffect(() => {
    // Verifica se barcodeValue não está vazio e faz a chamada à API
    if (barcodeValue) {
      async function fetchData() {
        const response = await api.post("/consultarpreco", {
          codigodebarras: barcodeValue,
        });
        setProduto(response.data);
        // Limpa o valor de barcodeValue após a chamada à API
        setBarcodeValue("");
      }

      fetchData();
    }
  }, [barcodeValue]);

  return (
    <div>
      <h1 className="flex justify-center h-[5rem] bg-red-600 text-[300%] rounded-lg">
        Alumifran
      </h1>
      <div className="flex p-4 w-screen">
        <input
          className="w-full rounded-md mr-2"
          type="text"
          placeholder="Digite aqui Código de Barras"
          value={barcodeValue}
          onChange={(e) => setBarcodeValue(e.target.value)}
        />
        <button
          className="flex items-center p-2 bg-green-500 rounded-md hover:bg-green-300"
          onClick={() => LeitorCode((scannedValue: string) => {
            // Define o valor escaneado em barcodeValue
            setBarcodeValue(scannedValue);
          })}
        >
          Escanear
        </button>
      </div>
      {produto && (
        <div className="flex flex-col">
          <h1>{produto.prodes}</h1>
          <p>{produto.propcv}</p>
        </div>
      )}
      <div className={barcodeValue ? "hidden" : ""} id="alumifrancode"></div>
    </div>
  );
};

export default Home;

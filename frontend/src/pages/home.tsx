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
  const [Open, setOpen] = useState<boolean>(false);

  function GetFunction(scannedValue: string) {
    setOpen(true);
    setBarcodeValue(scannedValue);
    setOpen(false);
  }

  useEffect(() => {
    if (barcodeValue) {
      async function fetchData() {
        const response = await api.post("/consultarpreco", {
          codigodebarras: barcodeValue,
        });
        setProduto(response.data);

        setTimeout(() => {
          setProduto(null);
          setBarcodeValue("");
        }, 5000);
      }

      fetchData();
    }
  }, [barcodeValue, setOpen, produto]);

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
          onClick={() => LeitorCode(GetFunction)}
        >
          Escanear
        </button>
      </div>
      {produto && (
        <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md shadow-md">
          <h1 className="text-xl font-semibold mb-2">{produto.prodes}</h1>
          <p className="text-green-600 font-bold">R$: {produto.propcv}</p>
        </div>
      )}
      <div>
        {Open && (
          <div>
            <h1>Lendo Codigo de barras!</h1>
          </div>
        )}
      </div>
      <div id="leitorcodigodebarras"></div>
    </div>
  );
};

export default Home;

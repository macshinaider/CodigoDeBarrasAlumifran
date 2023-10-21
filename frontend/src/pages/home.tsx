import React, { useState, useEffect } from "react";
import LeitorCode from "../function/lercodigo/LeitorCode";
import { api } from "../services/api";

interface IUapi {
  id: number;
  procod: string;
  prodes: string;
  propcv: string;
  propdv: string;
}

const Home: React.FC = () => {
  const [barcodeValue, setBarcodeValue] = useState<string>("");
  const [produto, setProduto] = useState<IUapi | null>(null);
  const [errorStatus, setErrorStatus] = useState<string>("");
  const [open, setOpen] = useState<boolean>(true);

  async function GetFunction(scannedValue: string) {
    try {
      setOpen(true);
      setBarcodeValue(scannedValue);

      const consultar = await ConsultarBack(scannedValue);
      if (consultar) {
        setProduto(consultar);
        setOpen(false);
      } else {
        setErrorStatus("Produto não encontrado.");
      }
    } catch (error) {
      setErrorStatus("Erro ao consultar o produto.");
    }
  }

  async function handleEnterKeyPress(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      GetFunction(barcodeValue);
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setProduto(null);
      setBarcodeValue("");
      setErrorStatus("");
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [produto, open]);

  async function ConsultarBack(valor: string) {
    try {
      const response = await api.post(`/consultarpreco/${valor}`);

      if (response.status === 200) {
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <div>
      <h1 className="flex justify-center h-[5rem] bg-red-600 text-[300%] rounded-lg">
        Alumifran
      </h1>
      <div className="flex p-4 w-screen gap-2">
        <input
          className="w-full rounded-md mr-2"
          type="text"
          placeholder="Digite aqui Código de Barras"
          value={barcodeValue}
          onChange={(e) => setBarcodeValue(e.target.value)}
          onKeyPress={handleEnterKeyPress}
          autoFocus
        />
        <div className="flex p-2 bg-red-500 rounded-md hover:bg-red-400 hover:text-white">
          <button onClick={() => GetFunction(barcodeValue)}>Consultar</button>
        </div>
        <button
          className="flex items-center p-2 bg-green-500 rounded-md hover:bg-green-300 hover:text-white"
          onClick={() => LeitorCode(GetFunction)}
        >
          Escanear
        </button>
      </div>
      {produto && (
        <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md shadow-md">
          <h1 className="text-xl font-semibold mb-2">{produto.prodes}</h1>
          <p className="text-green-600 font-bold text-8xl">
            R$: {produto.propdv.replace(".", ",")}
          </p>
        </div>
      )}
      {errorStatus && <div className="text-red-500">{errorStatus}</div>}
      <div className={open ? "" : "hidden"} id="leitorcodigodebarras"></div>
    </div>
  );
};

export default Home;

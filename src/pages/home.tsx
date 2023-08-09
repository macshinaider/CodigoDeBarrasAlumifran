import React, { useState, useEffect } from 'react';
import Quagga from 'quagga'; // Importe o Quagga

const ConsultaPrecosForm: React.FC = () => {
  const [codigoBarras, setCodigoBarras] = useState('');

  const handleBarcodeScan = () => {
    Quagga.start(); // Inicie a leitura do código de barras
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('URL_DO_SEU_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ codigoBarras }),
      });

      if (response.ok) {
        // Lógica para lidar com a resposta do backend
      } else {
        console.error('Erro ao enviar o código de barras para o backend');
      }
    } catch (error) {
      console.error('Erro ao conectar-se ao backend:', error);
    }
  };

  useEffect(() => {
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#scanner'),
      },
      decoder: {
        readers: ["ean_reader"],
      },
    }, (err: any) => {
      if (err) {
        console.error("Erro ao iniciar Quagga:", err);
        return;
      }
      console.log("Quagga iniciado com sucesso");
    });

    Quagga.onDetected((result: any) => {
      const code = result.codeResult.code;
      setCodigoBarras(code); // Atualize o estado com o código de barras lido
      Quagga.stop(); // Pare a leitura após encontrar um código
    });

    return () => {
      Quagga.stop();
    };
  }, []);

  return (
    <div>
      <h2>Consulta de Preços</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Código de Barras:
          <input
            type="text"
            value={codigoBarras}
            onChange={(e) => setCodigoBarras(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleBarcodeScan}>
          Ler Código de Barras
        </button>
        <button type="submit">Consultar</button>
      </form>
      <div id="scanner" style={{ width: "100%", height: "300px" }} />
    </div>
  );
};

export default ConsultaPrecosForm;

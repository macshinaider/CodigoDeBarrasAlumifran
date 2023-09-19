import Quagga from "quagga";


function LeitorCode(onScan: (value: string) => void) {  
  Quagga.init(
    {
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector("#alumifrancode"), // Ou '#yourElement' (opcional)
      },
      decoder: {
        readers: ['ean_reader', 'upc_reader'],
      },
    },
    function (err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Iniciado com sucesso!");
      Quagga.onDetected((data) => {
        if (data && data.codeResult && data.codeResult.code) {
          const scannedBarcode = data.codeResult.code;
          Quagga.stop();
          onScan(scannedBarcode);
          
        }
      });
      Quagga.start();
    }
  );
}

export default LeitorCode;

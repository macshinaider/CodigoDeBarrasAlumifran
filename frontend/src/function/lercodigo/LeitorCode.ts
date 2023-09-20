import Quagga from "quagga";

function LeitorCode(onScan: (value: string) => void) {
  Quagga.init(
    {
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector("#leitorcodigodebarras"), // Ou '#yourElement' (opcional)
      },
      decoder: {
        readers: ["ean_reader"],
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

          // Verifica se o elemento HTML existe antes de manipulá-lo
          const elementoHTML = document.querySelector("#alumifrancode");
          if (elementoHTML) {
            elementoHTML.innerHTML += `</div>`;
          }
        }
      });
      Quagga.start();
    }
  );
}

export default LeitorCode;

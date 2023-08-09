declare module "quagga" {
  const Quagga: {
    onDetected(arg0: (result: any) => void): unknown;
    init(config: any, callback: (err: any) => void): void;
    start(): void;
    stop(): void;
  };
  export = Quagga;
}

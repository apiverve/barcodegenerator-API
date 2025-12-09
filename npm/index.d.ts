declare module '@apiverve/barcodegenerator' {
  export interface barcodegeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface barcodegeneratorResponse {
    status: string;
    error: string | null;
    data: BarcodeGeneratorData;
    code?: number;
  }


  interface BarcodeGeneratorData {
      imageName:   string;
      format:      string;
      type:        string;
      expires:     number;
      downloadURL: string;
  }

  export default class barcodegeneratorWrapper {
    constructor(options: barcodegeneratorOptions);

    execute(callback: (error: any, data: barcodegeneratorResponse | null) => void): Promise<barcodegeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: barcodegeneratorResponse | null) => void): Promise<barcodegeneratorResponse>;
    execute(query?: Record<string, any>): Promise<barcodegeneratorResponse>;
  }
}

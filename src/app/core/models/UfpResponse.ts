export interface breakdown {
  ExternalInputs: number;
  ExternalOutputs: number;
  ExternalInquiries: number;
  InternalLogicalFiles: number;
  ExternalInterfaceFiles: number;
}

export interface UfpResponse {
  totalUfp: number;
  breakdown: breakdown;
}

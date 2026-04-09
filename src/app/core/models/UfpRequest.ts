export interface ExternalInput {
  simple: number;
  average: number;
  complex: number;
}

export interface ExternalOutput {
  simple: number;
  average: number;
  complex: number;
}

export interface ExternalInquiry {
  simple: number;
  average: number;
  complex: number;
}

export interface InternalLogicalFile {
  simple: number;
  average: number;
  complex: number;
}

export interface ExternalInterfaceFile {
  simple: number;
  average: number;
  complex: number;
}

export interface UfpRequest {
  externalInputs: ExternalInput;
  externalOutputs: ExternalOutput;
  externalInquiries: ExternalInquiry;
  internalLogicalFiles: InternalLogicalFile;
  externalInterfaceFiles: ExternalInterfaceFile;
}

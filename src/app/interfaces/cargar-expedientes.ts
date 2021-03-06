import { Cliente } from "../pages/models/cliente";

export interface CargarExpediente {
  total    : number;
  judgments: Expediente[];
}

export interface Expediente {

  nombreExpediente?   : string;
  numExpediente?      : string;
  cuantia?            : number;
  sintesisAsunto?     : string;
  nombreAbogado?      : string;
  nombreContraparte?  : string;
  institucionJudicial?: string;
  tipo?               : string;
  materia?            : string;
  nombreCliente?      : Cliente;
  _id?                : string;
}

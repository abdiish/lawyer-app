import { Cliente } from "./cliente";
export class Expediente {

  public nombreExpediente?   : string;
  public numExpediente?      : string;
  public cuantia?            : number;
  public sintesisAsunto?     : string;
  public nombreAbogado?      : string;
  public nombreContraparte?  : string;
  public institucionJudicial?: string;
  public tipo?               : string;
  public materia?            : string;
  public nombreCliente?      : Cliente;
  public _id?                : string;

  constructor(

    nombreExpediente?   : string,
    numExpediente?      : string,
    cuantia?            : number,
    sintesisAsunto?     : string,
    nombreAbogado?      : string,
    nombreContraparte?  : string,
    institucionJudicial?: string,
    tipo?               : string,
    materia?            : string,
    nombreCliente?      : Cliente,
    _id?                : string,

  ) {

    this.nombreExpediente    = nombreExpediente;
    this.numExpediente       = numExpediente;
    this.cuantia             = cuantia;
    this.sintesisAsunto      = sintesisAsunto;
    this.nombreAbogado       = nombreAbogado,
    this.nombreContraparte   = nombreContraparte;
    this.institucionJudicial = institucionJudicial;
    this.tipo                = tipo;
    this.materia             = materia;
    this.nombreCliente       = nombreCliente;
    this._id                 = _id;
  }

}

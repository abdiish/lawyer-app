export class Cliente {

  public nombre        : string;
  public telefono      : string;
  public movil         : string;
  public email         : string;
  public img?          : string;
  public clasificacion?: number;
  public tipo          : string;
  public _id?          : string;

  constructor(

    nombre       : string,
    telefono     : string,
    movil        : string,
    email        : string,
    img          : string,
    clasificacion: number,
    tipo         : string,
    _id          : string

  ){
    this.nombre        = nombre;
    this.telefono      = telefono;
    this.movil         = movil;
    this.email         = email;
    this.img           = img;
    this.clasificacion = clasificacion;
    this.tipo          = tipo;
    this._id           = _id;
  }
}

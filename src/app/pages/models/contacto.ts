export class Contacto {

    public nombre  : string;
    public telefono: string;
    public movil   : string;
    public email   : string;
    public img?    : string;
    public tipo?   : string;
    public _id?    : string;

    constructor(
      nombre  : string,
      telefono: string,
      movil   : string,
      email   : string,
      img     : string,
      tipo    : string,
      _id     : string,
    ){

      this.nombre   = nombre;
      this.telefono = telefono;
      this.movil    = movil;
      this.email    = email;
      this.img      = img;
      this.tipo     = tipo;
      this._id      = _id;
    }

  }

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', {static: false }) slides: IonSlides;

  dataLoginUser = {
    email: 'ing.ti.upmh@gmail.com',
    password: '12345678'
  };

  constructor(private usuarioService: UsuarioService,
              private navCtrl: NavController) { }

  ngOnInit() {
  }

  async loginUser(fLogin: NgForm) {

    const valido = await this.usuarioService.loginUser(this.dataLoginUser.email, this.dataLoginUser.password);

    if (valido) {
      this.navCtrl.navigateRoot('/home', {animated: true});
    }else {
      console.log('Ucurrio un error al autenticarse');
    }

  }

}

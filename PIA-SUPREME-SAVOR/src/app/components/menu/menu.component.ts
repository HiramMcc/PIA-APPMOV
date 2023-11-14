import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  router: any;
  irPagina: any;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  cambiarPagina(pagina: string){
    this.navCtrl.navigateForward(pagina);
  }

}

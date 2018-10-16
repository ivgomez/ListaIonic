import { AgregarPage } from './../agregar/agregar.component';
import { NavController, AlertController } from 'ionic-angular';
import { DeseosService } from './../../app/services/deseos.services';
import { Component } from "@angular/core";
import { Lista } from '../../models'

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesPage{

    constructor(
        public deseosService: DeseosService,
        private navCtrl: NavController,
        private alertCtrl: AlertController){

    }

    agregarLista(){
        //
        const alerta = this.alertCtrl.create({
            title: 'Nueva lista',
            message: 'Nombre de la nueva lista que desea',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista'
            }],
            buttons: [
                { text: 'Cancelar' },
                { text: 'Agregar',
                  handler: data => {
                      if( data.titulo.lenght === 0 ){
                        return;
                      }
                      this.navCtrl.push(AgregarPage, { 
                          titulo: data.titulo
                       });
                } 
            }]
        });

        alerta.present();
    }

}
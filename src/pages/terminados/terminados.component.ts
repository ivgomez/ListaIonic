import { DeseosService } from './../../app/services/deseos.services';
import { Component } from "@angular/core";
import { Lista } from '../../models'

@Component({
selector: 'page-terminados',
templateUrl: 'terminados.component.html'
})
export class TerminadosPage{
    

    constructor(
        public deseosService: DeseosService ){
    }

    listaSeleccionada( lista: Lista){
        console.log(lista);
    }

}
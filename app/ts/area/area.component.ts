import {Component} from 'angular2/core';
import {config} from '../config.service';

@Component({
    selector: 'board',
    templateUrl: 'app/ts/area/area.component.html',
})

export class Area {
    
    celulaArea:number  = config.AREA_CELULA;
    numLinhas:number   = config.NUM_LINHAS;
    numColunas:number  = config.NUM_COLUNAS;

    board_linhas = [];
    board_colunas = [];
   
    constructor () {  
        this.board(this.numLinhas, this.numColunas); 
    }
    
    board(numLinhas, numColunas){
       
        for (var l = 0; l < this.numLinhas; l++) {
             this.board_linhas[l] = [0];                     
        }  
        
        for (var c = 0; c < this.numColunas; c++) {
             this.board_colunas[c] = [0];                     
        }                
        //console.log(this.board_linhas);           
    }
    
}
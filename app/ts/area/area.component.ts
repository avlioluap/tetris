import {Component} from 'angular2/core';
import {config} from '../config.service';

@Component({
    selector: 'board',
    templateUrl: 'app/ts/area/area.component.html',
})

export class Area {

    numLinhas:number   = config.NUM_LINHAS;
    numColunas:number  = config.NUM_COLUNAS;
    
    grid: number[][] = this.createGrid(this.numLinhas, this.numColunas);
   
    constructor () {
        //this.createGrid(this.numLinhas, this.numColunas);
    }
    
    private createGrid(linhas:number, colunas:number): number[][] {
        let grid = [];
        for (let l = 0; l < linhas; l++) {
            grid[l] = [];
            for (let c = 0; c < colunas; c++) {
                grid[l][c] = 0;
            }
        }        
        return grid;        
    }
    
    public static paintNewPiece(idPiece):void {
        //new paintGrid();
    }
    
    private paintGrid(id) {
        this.grid[1][5] = id
    }
    
}
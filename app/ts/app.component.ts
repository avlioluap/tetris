import {Component} from 'angular2/core';
import {config} from './config.service';
import {Area} from './area/area.component';
import {Points} from './pontuacao/pontuacao.component';
import {Movimento} from './movimentos/mov.component';
import {Pecas} from './pecas/pecas.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [Area, Points]
})

export class AppComponent {
    
    status:boolean = false;
    
    constructor(){        
        //tecla selecionada
        document.addEventListener('keydown', (evt) => {
            this.teclaPressionada(evt.which);
        });       
    }
    
    private startGame() {
        let peca;
        //criar peca random ao iniciar o jogo
        peca = Pecas.addRandom(config.pecas);
        console.log("randPiece-"+peca);
        
        //pintar a peça no meio da grelha
        //Area.paintNewPiece(peca);
        console.log(new Area);
    }
    
    private teclaPressionada (tecla) {
        switch (tecla) {
            case 37: return this.left();
            case 39: return this.right();
            case 40: return this.down();
            case 65: return this.a();
            case 68: return this.d();
        }        
    }
    
    private left () {
        new Movimento('left');
        
    }
    private right () {
        new Movimento('right');
    }
    private down () {
        new Movimento('down');
    }
    private a () {
        new Movimento('a');
    }
    private d () {
        new Movimento('d');
    }    
}

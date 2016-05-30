import {Component} from 'angular2/core';
import {config} from '../config.service';

@Component({
    selector: 'points',
    templateUrl: 'app/ts/pontuacao/pontuacao.component.html',
})

export class Points {
    pontosTitulo = config.PONTUACAO_HEADING;
}
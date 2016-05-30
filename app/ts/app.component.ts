import {Component} from 'angular2/core';
import {config} from './config.service';
import {Area} from './area/area.component';
import {Points} from './pontuacao/pontuacao.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [Area, Points]
})

export class AppComponent {
    
}

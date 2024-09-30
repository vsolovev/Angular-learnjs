import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // template: '<h1>Hello</h1>',
    styleUrls: ['./app.component.css'],
    // styles: ['h1 {color: blue}'],
    interpolation: ['{{', '}}'],
    // encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
    title = 'Angular-learnjs-230924';
    window = window;
}

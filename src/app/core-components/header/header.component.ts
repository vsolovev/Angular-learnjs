import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';
// import { interval } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    // @Input('config') applicationConfig: ApplicationConfig | undefined;
    @Input() applicationConfig: ApplicationConfig | undefined;

    @Output() menuClick = new EventEmitter<void>();
    // @Output() menuClick = interval(1000);

    // title = 'Angular-learnjs-230924';
    // imgSrc = '../../../favicon.ico';

    onClick() {
        this.menuClick.emit();
        // this.menuClick.next(event);
    }
}

import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-rate',
    templateUrl: './rate.component.html',
    styleUrls: ['./rate.component.css'],
})
export class RateComponent {
    @Input() rate: any | undefined;

    rateCount() {
        const rateFloor = Math.floor(this.rate?.rate);

        return [...new Array(rateFloor).keys()];
    }

    shouldAddHalf() {
        return this.rate.rate > Math.floor(this.rate?.rate);
    }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: Product | undefined;

    @Output() addedToCart = new EventEmitter<string>();

    onAddToCartClicked() {
        /* eslint-disable no-console */
        console.log('product added to cart!');
        /* eslint-enable no-console */
        this.addedToCart.emit(this.product?._id);
    }
}

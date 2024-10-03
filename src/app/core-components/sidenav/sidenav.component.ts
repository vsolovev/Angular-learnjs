import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    // @Input() isSidenavOpened = false;

    // @Output() isSidenavOpenedChange = new EventEmitter<boolean>();

    // @ViewChild('drawer')
    @ViewChild(MatDrawer)
    private readonly drawerComponent: MatDrawer | undefined;

    @ViewChild('p')
    private readonly pElementRef: ElementRef<HTMLParagraphElement> | undefined;

    toggleSidenavOpened() {
        // MatDrawer.toggle();
        this.drawerComponent?.toggle();
        // eslint-disable-next-line no-console
        console.log(this.pElementRef?.nativeElement);

        // this.isSidenavOpenedChange.emit(!this.isSidenavOpened);
        // this.isSidenavOpened = !this.isSidenavOpened;
    }
}

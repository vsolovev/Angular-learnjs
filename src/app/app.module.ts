import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './core-components/header/header.module';

/**
 * Angular VS ES6 modules
 * declarations === const
 * export === module.export = {...}
 * imports === import {...} fromt '...';
 */

@NgModule({
    declarations: [AppComponent],
    exports: [],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HeaderModule],
    bootstrap: [AppComponent],
})
export class AppModule {}

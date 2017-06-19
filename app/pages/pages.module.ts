import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from '../app.routing';
import * as pages from "./";

let appComponentList = [
    pages.AppPage,
    pages.HomePage
];

@NgModule({
    declarations: appComponentList,
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
    ],
    exports: appComponentList,
    providers: [
    ]
})
export class PagesModule { }
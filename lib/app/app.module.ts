import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import {JsonPipe} from './_common/pipes';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import './_common/rxjs-extensions'; //load extensions

import { routing } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { RequestsComponent } from './views/requests/requests.component';
import { StatusComponent } from './views/status/status.component';
import { ConfigComponent } from './views/config/config.component';
import { DiffDialog } from './views/config/diff-dialog.component';
import { LogsComponent } from './views/logs/logs.component';
import { ConnectionComponent } from './views/connection/connection.component';
import { UrlReplaceComponent } from './views/url-replace/url-replace.component';
import { InspectorComponent } from './views/inspector/inspector.component';

import { SocketService } from './service/socket.service';
import { TrafficService } from './service/traffic.service';
import { ConfigService } from './service/config.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        // HttpModule,
        //routing,
        MaterialModule.forRoot()
        // DataTableModule
    ],
    declarations: [
        AppComponent,
        ConfigComponent,
        RequestsComponent,
        StatusComponent,
        UrlReplaceComponent,
        LogsComponent,
        ConnectionComponent,
        InspectorComponent,
        //pipes:
        JsonPipe,
        //dialogs
        DiffDialog
    ],
    entryComponents: [
        DiffDialog
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        SocketService,
        ConfigService,
        TrafficService
        // ErrorHandler
    ]
})
export class AppModule {
}

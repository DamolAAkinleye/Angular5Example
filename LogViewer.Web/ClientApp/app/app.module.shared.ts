import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CodemirrorModule } from './components/codemirror/codemirror.module';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { FrontLogComponent } from './components/logs/front/frontlog.component';
import { AparikTexumLogComponent } from './components/logs/apariktexum/apariktexum.component';
import { CustomersLogComponent } from './components/logs/customers/customers.component';
import { OrderComponent } from './components/order/order.component';
import { SqlEditorComponent } from './components/sqleditor/sqleditor.component';
import { FrontLogDetailsComponent } from './components/logs/front/frontlogdetails/frontlogdetails.component';


//import { SplitModule } from 'ng2-split'

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        FrontLogComponent,
        CustomersLogComponent,
        AparikTexumLogComponent,
        OrderComponent,
        SqlEditorComponent,
        FrontLogDetailsComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        CodemirrorModule,
        InfiniteScrollModule, 
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'frontLogs', component: FrontLogComponent },
            { path: 'customersLogs', component: CustomersLogComponent },
            { path: 'aparikTexumLogs', component: AparikTexumLogComponent },
            { path: 'orders', component: OrderComponent },
            { path: 'sqleditor', component: SqlEditorComponent },
            { path: 'frontlogdetails', component: FrontLogDetailsComponent},
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}


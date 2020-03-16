import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { CardComponent } from './card/card.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TempRefVarComponent } from './temp-ref-var/temp-ref-var.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { CompInteractionComponent } from './comp-interaction/comp-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { ParentComponent } from './parent/parent.component';
import { ServiceTabComponent } from './service-tab/service-tab.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeeService } from "./employee.service";
import { HttpClientModule } from '@angular/common/http';
import { NewDataComponent } from './new-data/new-data.component';
import { DebugTutoComponent } from './debug-tuto/debug-tuto.component';
// import { TodoComponent } from './proAngular6/todo/todo.component';
import { ProAngular6Component } from './pro-angular6/pro-angular6.component';
import { StockMarketComponent } from './pro-angular6/stock-market/stock-market.component';
import { Chapter2ExercizeComponent } from './pro-angular6/chapter2-exercize/chapter2-exercize.component';
import { Chapter3ExercizeComponent } from './pro-angular6/chapter3-exercize/chapter3-exercize.component';
import { ProductItemComponent } from './pro-angular6/chapter3-exercize/product-item/product-item.component';
import { Chapter4ExercizeComponent } from './pro-angular6/chapter4-exercize/chapter4-exercize.component';
import { StockItemComponent } from './pro-angular6/chapter4-exercize/stock-item/stock-item.component';
import { Chapter5ExercizeComponent } from './pro-angular6/chapter5-exercize/chapter5-exercize.component';
import { Chapter6ExercizeComponent } from './pro-angular6/chapter6-exercize/chapter6-exercize.component';
import { CreateStockComponent } from './pro-angular6/chapter6-exercize/create-stock/create-stock.component';
import { Chapter7ExercizeComponent } from './pro-angular6/chapter7-exercize/chapter7-exercize.component';
import { CreateStockCsv7Component } from './pro-angular6/chapter7-exercize/create-stock-csv7/create-stock-csv7.component';
import { Chapter8ExercizeComponent } from './pro-angular6/chapter8-exercize/chapter8-exercize.component';
import { CreateStockServiceComponent } from './pro-angular6/chapter8-exercize/create-stock-service/create-stock-service.component';
import { StockListComponent } from './pro-angular6/chapter8-exercize/stock-list/stock-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TempRefVarComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    CompInteractionComponent,
    PipesComponent,
    ParentComponent,
    ServiceTabComponent,
    EmpDetailComponent,
    EmpListComponent,
    NewDataComponent,
    DebugTutoComponent,
    // TodoComponent,
    ProAngular6Component,
    StockMarketComponent,
    Chapter2ExercizeComponent,
    Chapter3ExercizeComponent,
    ProductItemComponent,
    Chapter4ExercizeComponent,
    StockItemComponent,
    Chapter5ExercizeComponent,
    Chapter6ExercizeComponent,
    CreateStockComponent,
    Chapter7ExercizeComponent,
    CreateStockCsv7Component,
    Chapter8ExercizeComponent,
    CreateStockServiceComponent,
    StockListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

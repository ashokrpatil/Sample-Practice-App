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

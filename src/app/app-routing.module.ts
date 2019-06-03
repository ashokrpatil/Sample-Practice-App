import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpolationComponent } from "./interpolation/interpolation.component";
import {PropertyBindingComponent  } from "./property-binding/property-binding.component";
import {StyleBindingComponent  } from "./style-binding/style-binding.component";
import { ClassBindingComponent } from "./class-binding/class-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { TempRefVarComponent } from "./temp-ref-var/temp-ref-var.component";
import {  TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { NgIfComponent } from "./ng-if/ng-if.component";
import { NgSwitchComponent } from "./ng-switch/ng-switch.component";
import { NgForComponent } from "./ng-for/ng-for.component";
import { CompInteractionComponent } from "./comp-interaction/comp-interaction.component";
import { PipesComponent } from "./pipes/pipes.component";
import { ParentComponent } from "./parent/parent.component";
import { ServiceTabComponent } from "./service-tab/service-tab.component";
import { EmpListComponent  } from "./emp-list/emp-list.component";
import { EmpDetailComponent } from "./emp-detail/emp-detail.component";

const routes: Routes = [
  {
    path: 'interpolation',
    component: InterpolationComponent }, {
    path: 'propertyBinding',
    component: PropertyBindingComponent},{
    path: 'classBinding',
    component: ClassBindingComponent},{
    path: 'styleBinding',
    component: StyleBindingComponent},{
    path: 'eventBinding',
    component: EventBindingComponent},{
    path: 'templetRefvar',
    component: TempRefVarComponent},{
    path: 'twoWayBinding',
    component:  TwoWayBindingComponent},{
    path: 'ngIf',
    component:  NgIfComponent},{
    path: 'ngSwitch',
    component:  NgSwitchComponent},{
    path: 'ngFor',
    component:  NgForComponent},{
    path: 'compInteraction',
    component:  ParentComponent},{
    path: 'pipes',
    component:  PipesComponent}, {
    path: 'service',
    component:  ServiceTabComponent},{
    path: 'empList',
    component:  EmpListComponent },{
    path: 'empDetails',
    component:  EmpDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

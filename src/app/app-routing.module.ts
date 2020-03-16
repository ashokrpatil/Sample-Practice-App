import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpolationComponent } from "./interpolation/interpolation.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { StyleBindingComponent } from "./style-binding/style-binding.component";
import { ClassBindingComponent } from "./class-binding/class-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { TempRefVarComponent } from "./temp-ref-var/temp-ref-var.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { NgIfComponent } from "./ng-if/ng-if.component";
import { NgSwitchComponent } from "./ng-switch/ng-switch.component";
import { NgForComponent } from "./ng-for/ng-for.component";
import { CompInteractionComponent } from "./comp-interaction/comp-interaction.component";
import { PipesComponent } from "./pipes/pipes.component";
import { ParentComponent } from "./parent/parent.component";
import { ServiceTabComponent } from "./service-tab/service-tab.component";
import { EmpListComponent } from "./emp-list/emp-list.component";
import { EmpDetailComponent } from "./emp-detail/emp-detail.component";
import { NewDataComponent } from "./new-data/new-data.component"
// import { TodoComponent } from './proAngular6/todo/todo.component';
import { StockMarketComponent } from './pro-angular6/stock-market/stock-market.component';
import { Chapter2ExercizeComponent } from './pro-angular6/chapter2-exercize/chapter2-exercize.component';
import { Chapter3ExercizeComponent } from './pro-angular6/chapter3-exercize/chapter3-exercize.component';
import { Chapter4ExercizeComponent } from './pro-angular6/chapter4-exercize/chapter4-exercize.component';
import { Chapter5ExercizeComponent } from './pro-angular6/chapter5-exercize/chapter5-exercize.component';
import { Chapter6ExercizeComponent } from './pro-angular6/chapter6-exercize/chapter6-exercize.component';
import { Chapter7ExercizeComponent } from './pro-angular6/chapter7-exercize/chapter7-exercize.component';
import { Chapter8ExercizeComponent } from './pro-angular6/chapter8-exercize/chapter8-exercize.component';
const routes: Routes = [
  {
    path: 'interpolation',
    component: InterpolationComponent
  }, {
    path: 'propertyBinding',
    component: PropertyBindingComponent
  }, {
    path: 'classBinding',
    component: ClassBindingComponent
  }, {
    path: 'styleBinding',
    component: StyleBindingComponent
  }, {
    path: 'eventBinding',
    component: EventBindingComponent
  }, {
    path: 'templetRefvar',
    component: TempRefVarComponent
  }, {
    path: 'twoWayBinding',
    component: TwoWayBindingComponent
  }, {
    path: 'ngIf',
    component: NgIfComponent
  }, {
    path: 'ngSwitch',
    component: NgSwitchComponent
  }, {
    path: 'ngFor',
    component: NgForComponent
  }, {
    path: 'compInteraction',
    component: ParentComponent
  }, {
    path: 'pipes',
    component: PipesComponent
  }, {
    path: 'service',
    component: ServiceTabComponent
  }, {
    path: 'empList',
    component: EmpListComponent
  }, {
    path: 'empDetails',
    component: EmpDetailComponent
  },
  // {
  //   path: 'todo',
  //   component:  TodoComponent},
  {
    path: 'newData',
    component: NewDataComponent
  },
  {
    path: 'stock-market',
    component: StockMarketComponent
  },
  {
    path: 'chapt2-exercize',
    component: Chapter2ExercizeComponent
  },
  {
    path: 'chapt3-exercize',
    component: Chapter3ExercizeComponent
  },
  {
    path: 'chapt4-exercize',
    component: Chapter4ExercizeComponent
  },
  {
    path: 'chapt5-exercize',
    component: Chapter5ExercizeComponent
  },
  {
    path: 'chapt6-exercize',
    component: Chapter6ExercizeComponent
  },
  {
    path: 'chapt7-exercize',
    component: Chapter7ExercizeComponent
  },
  {
    path: 'chapt8-exercize',
    component: Chapter8ExercizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

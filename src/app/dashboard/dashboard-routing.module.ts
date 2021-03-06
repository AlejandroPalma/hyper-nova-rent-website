import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateCarComponent} from './create-car/create-car.component';
import {DashboardComponent} from './dashboard.component';
import {ListCarsComponent} from './list-cars/list-cars.component';
import {RentCarComponent} from './rent-car/rent-car.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'list',
        component: ListCarsComponent
      },
      {
        path: 'rent-car',
        component: RentCarComponent
      },
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'create-car',
        component: CreateCarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

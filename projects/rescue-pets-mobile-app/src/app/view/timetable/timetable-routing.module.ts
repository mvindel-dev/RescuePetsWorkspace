import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimetablePage } from './timetable.page';

const routes: Routes = [
  { path: ':name', component: TimetablePage },
  { path: '', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimetablePageRoutingModule {}

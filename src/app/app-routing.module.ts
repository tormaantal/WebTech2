import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkerFormComponent } from './worker-form/worker-form.component';
import { WorkerListComponent } from './worker-list/worker-list.component';

const routes: Routes = [
  { 
    path: '',
    component: WorkerListComponent
  },
  { 
    path: 'worker-list',
    component: WorkerListComponent
  },
  {
    path: 'worker-form',
    component: WorkerFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

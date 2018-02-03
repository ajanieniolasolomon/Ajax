import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',

   loadChildren: 'app/main/main.module#MainModule'
  
  },
  {
    path:'admin/admin',
    loadChildren:'app/admin/admin.module#AdminModule'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

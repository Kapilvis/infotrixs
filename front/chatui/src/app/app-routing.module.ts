import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalloutComponent } from './callout/callout.component';

const routes: Routes = [
  {path:"callout",component:CalloutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

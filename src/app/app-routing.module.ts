import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './Components/display/display.component';
import { Form2Component } from './Components/form2/form2.component';
import { FormsComponent } from './Components/forms/forms.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student', component: FormsComponent },
  { path: 'user', component: Form2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

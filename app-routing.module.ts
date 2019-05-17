import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RightpanelComponent } from './rightpanel/rightpanel.component';
import {Router,ActivatedRoute} from '@angular/router';
import { LeftComponent } from './left/left.component';
import {FootballComponent} from './football/football.component';
 



const routes: Routes = [
{
  path:'stars',
  component:RightpanelComponent
},
{
  path:'stars/:sport',
  component:FootballComponent
},
{
  path:'details/:id',
  component:LeftComponent
},


];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

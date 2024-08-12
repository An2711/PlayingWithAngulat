import { Routes } from '@angular/router';
import { SidePanelComponent } from './shared/components/side-panel/side-panel.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

export const routes: Routes = [
    {path: 'sidepanel', component:SidePanelComponent},
    {path: 'dashboard', component:DashboardComponent}
];

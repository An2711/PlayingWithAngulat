import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidePanelComponent } from './components/side-panel/side-panel.component';




@NgModule({
  declarations: [
    SidePanelComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    SidePanelComponent,
  ]
})
export class SharedModule { }

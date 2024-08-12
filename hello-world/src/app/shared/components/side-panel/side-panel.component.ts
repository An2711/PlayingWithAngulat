import { Component } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss'
})
export class SidePanelComponent {
  compressView: boolean = true;

  changeView() {
    if (this.compressView) {
      this.compressView = false;
    } else {
      this.compressView = true;
    }
    console.log(this.compressView);
    console.log("HERE!");
  }
}

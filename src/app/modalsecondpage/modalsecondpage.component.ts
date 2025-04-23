import { Component } from '@angular/core';
import { IonButton, IonContent, IonNav } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modalsecondpage',
  templateUrl: './modalsecondpage.component.html',
  styleUrls: ['./modalsecondpage.component.scss'],
  imports: [IonButton, IonContent],
})
export class ModalsecondpageComponent {
  constructor(private nav: IonNav) {}

  navigateBack() {
    this.nav.pop();
  }

  navigateToRoot() {
    this.nav.popToRoot();
  }
}

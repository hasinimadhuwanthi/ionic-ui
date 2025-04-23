import { Component, OnInit } from '@angular/core';
import { ModalsecondpageComponent } from '../modalsecondpage/modalsecondpage.component';
import { IonButton, IonContent, IonNav } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modalfirstpage',
  templateUrl: './modalfirstpage.component.html',
  styleUrls: ['./modalfirstpage.component.scss'],
  imports: [IonButton, IonContent],
})
export class ModalfirstpageComponent  implements OnInit {

  constructor(private nav: IonNav) {}

  navigateToPageTwo() {
    this.nav.push(ModalsecondpageComponent);
  }

  ngOnInit() {}

}

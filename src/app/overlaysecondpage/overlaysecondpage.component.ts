import { Component, OnInit } from '@angular/core';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonNavLink, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { OverlaythirdpageComponent } from '../overlaythirdpage/overlaythirdpage.component';

@Component({
  selector: 'app-overlaysecondpage',
  templateUrl: './overlaysecondpage.component.html',
  styleUrls: ['./overlaysecondpage.component.scss'],
  imports: [IonContent, IonContent, IonTitle, IonBackButton, IonButtons,
    IonButton, IonNavLink, IonToolbar, IonHeader],
})
export class OverlaysecondpageComponent  implements OnInit {
  component = OverlaythirdpageComponent;
  constructor() { }

  ngOnInit() {}

}

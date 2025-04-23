import { Component, OnInit } from '@angular/core';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-overlaysecondpage',
  templateUrl: './overlaysecondpage.component.html',
  styleUrls: ['./overlaysecondpage.component.scss'],
  imports: [IonContent, IonContent, IonTitle, IonBackButton, IonButtons, IonToolbar, IonHeader],
})
export class OverlaysecondpageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

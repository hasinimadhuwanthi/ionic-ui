import { Component, OnInit } from '@angular/core';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonNavLink, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-overlaythirdpage',
  templateUrl: './overlaythirdpage.component.html',
  styleUrls: ['./overlaythirdpage.component.scss'],
  imports: [IonContent, IonTitle, IonBackButton, IonButtons,
    IonToolbar, IonHeader
  ]
})
export class OverlaythirdpageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

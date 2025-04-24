import { Component, OnInit } from '@angular/core';
import { IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonModal, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-thirdpage',
  templateUrl: './thirdpage.component.html',
  styleUrls: ['./thirdpage.component.scss'],
  imports: [IonDatetime, IonDatetimeButton, IonModal, IonContent,
    IonTitle, IonToolbar,IonHeader
  ]
})
export class ThirdpageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

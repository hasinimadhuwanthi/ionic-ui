import { Component, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonHeader, IonNav, IonToolbar } from '@ionic/angular/standalone';
import { OverlaynextpageComponent } from '../overlaynextpage/overlaynextpage.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overlaypage',
  templateUrl: './overlaypage.component.html',
  styleUrls: ['./overlaypage.component.scss'],
  imports: [IonNav],
})
export class OverlaypageComponent  implements OnInit {
  component = OverlaynextpageComponent

  constructor() { }

  ngOnInit() {}

}

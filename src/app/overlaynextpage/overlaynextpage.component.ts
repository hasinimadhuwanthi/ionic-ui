import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonNavLink, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { OverlaysecondpageComponent } from '../overlaysecondpage/overlaysecondpage.component';

@Component({
  selector: 'app-overlaynextpage',
  templateUrl: './overlaynextpage.component.html',
  styleUrls: ['./overlaynextpage.component.scss'],
  imports: [IonHeader, IonContent, IonTitle, IonButtons,
    IonToolbar, IonButton, IonNavLink
  ],
})
export class OverlaynextpageComponent  implements OnInit {
  component = OverlaysecondpageComponent;

  constructor(private router: Router) { }

  ngOnInit() {}

  close() {
    this.router.navigate(['/firstpage']);
  }

}

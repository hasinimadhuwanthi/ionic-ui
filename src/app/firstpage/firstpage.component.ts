import { Component, OnInit, viewChild } from '@angular/core';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonFooter, IonHeader, IonIcon, IonLabel, IonModal, IonNav, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';
import { OverlaypageComponent } from '../overlaypage/overlaypage.component';
import { Router } from '@angular/router';
import { OverlaynextpageComponent } from '../overlaynextpage/overlaynextpage.component';
import { ModalfirstpageComponent } from '../modalfirstpage/modalfirstpage.component';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton, IonCardSubtitle, IonIcon, IonButtons,
    IonNav, IonModal, IonFabButton, IonFab
  ],
})
export class FirstpageComponent  implements OnInit {
  nav = viewChild(IonNav);
  modal = viewChild(IonModal);

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  openModal(){
    this.modal()?.present();
  }

  cancel() {
    this.modal()?.dismiss(null, 'cancel');
  }

  openOverlay(){
    this.router.navigate(['/overlaypage']);
  }

  onWillPresent() {
    this.nav()?.setRoot(ModalfirstpageComponent);
  }
}

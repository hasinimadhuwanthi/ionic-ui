import { Component, OnInit, viewChild } from '@angular/core';
import { IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
   IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonModal, IonNav, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ModalfirstpageComponent } from '../modalfirstpage/modalfirstpage.component';
import { addIcons } from 'ionicons';
import { notifications } from 'ionicons/icons';
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton, IonCardSubtitle, IonIcon, IonButtons,
    IonNav, IonModal, IonFabButton, IonFab, IonBadge
  ],
})
export class FirstpageComponent  implements OnInit {
  nav = viewChild(IonNav);
  modal = viewChild(IonModal);

  constructor(
    private router: Router,
  ) {
    addIcons({ notifications });
  }

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

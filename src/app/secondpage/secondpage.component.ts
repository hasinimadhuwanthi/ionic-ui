import { Component, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonListHeader, IonReorder, IonReorderGroup, IonSearchbar, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, ItemReorderEventDetail } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { call, person } from 'ionicons/icons';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.scss'],
  imports: [ IonContent, IonTabButton, IonTabBar, IonTabs,
     IonIcon, IonButton, IonButtons, IonTitle, IonToolbar, IonHeader],
})
export class SecondpageComponent  implements OnInit {

  constructor() {
        addIcons({ person, call });
   }

  ngOnInit() {}
}

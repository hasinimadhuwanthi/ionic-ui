import { Component, OnInit } from '@angular/core';
import { IonIcon, IonTab, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { add, call, library, person, playCircle, radio, search, settings } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [IonIcon, IonTabButton, IonTabBar, IonTabs],
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor() {
    addIcons({ library, playCircle, radio, search, settings, add, person, call });
  }

  ngOnInit() {}

}

import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonButton, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonListHeader, IonText, IonToast, IonToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabtwo',
  templateUrl: './tabtwo.component.html',
  styleUrls: ['./tabtwo.component.scss'],
  imports: [IonText, IonLabel, IonItem, IonList,
    IonAvatar, IonContent, IonInfiniteScroll,
    IonInfiniteScrollContent, IonItem, IonLabel],
})
export class TabtwoComponent implements OnInit {
  items: string[] = [];

  ngOnInit() {
    for (let i = 1; i < 55; i++) {
      this.items.push(`Item ${i}`);
    }
  }
}

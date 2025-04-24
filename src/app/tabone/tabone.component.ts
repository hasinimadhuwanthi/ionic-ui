import { Component, OnInit } from '@angular/core';
import { IonButton, IonContent, IonItem, IonLabel, IonList, IonListHeader, IonReorder, IonReorderGroup, IonToast, IonToggle, ItemReorderEventDetail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabone',
  templateUrl: './tabone.component.html',
  styleUrls: ['./tabone.component.scss'],
  imports: [IonReorderGroup, IonReorder, IonLabel, IonContent,
   IonToggle, IonToast, IonButton, IonItem, IonListHeader, IonList]
})
export class TaboneComponent  implements OnInit {
  public toastButtons = [
    {
      text: 'More Info',
      role: 'info',
      handler: () => {
        console.log('More Info clicked');
      },
    },
    {
      text: 'Dismiss',
      role: 'cancel',
      handler: () => {
        console.log('Dismiss clicked');
      },
    },
  ];
  constructor() { }

  ngOnInit() {}

  handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }

}

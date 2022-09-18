import { Injectable } from '@angular/core';

import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items = new Array<Item>(
    { id: 1, name: 'Ter Stegen', role: 'Goalkeeper', note: '-5' },
    { id: 3, name: 'Piqué', role: 'Defender', note: '-5' },
    { id: 4, name: 'I. Rakitic', role: 'Midfielder', note: '-5' },
    { id: 5, name: 'Sergio', role: 'Midfielder', note: '-5' },
    { id: 6, name: 'Denis Suárez', role: 'Midfielder', note: '-5' },
    { id: 7, name: 'Arda', role: 'Midfielder', note: '-5' },
    { id: 8, name: 'Messi', role: 'Midfielder', note: '10' }
  );

  getItems(): Array<Item> {
    return this.items;
  }

  getItem(id: number): Item {
    return this.items.filter((item) => item.id === id)[0];
  }
}

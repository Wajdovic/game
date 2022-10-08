import { Component, OnInit } from '@angular/core';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>;
  counter = 0;
  game = {
    name: '',
    number_of_teams: '',
    rounds: '',
  };

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  myfunc(event) {
    let intervalId = setInterval(() => {
      this.counter = this.counter + 1;
      console.log(this.counter);
      if (this.counter === 30) clearInterval(intervalId);
    }, 1000);
  }

  launchGame(event) {
    this.itemService.launchGame(this.game).subscribe((data) => {
      console.log(data);
    });
  }
}

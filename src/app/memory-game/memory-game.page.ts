import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.page.html',
  styleUrls: ['./memory-game.page.scss'],
})
export class MemoryGamePage implements OnInit {

  private cardList: Array<{ name: string, img: string, revealed: boolean }> = [];

  private numberOfDistinctCards = 6;

  private questionMarkUrl = "/assets/images/question-mark.png";

  private generateDeck() {
    for (let i = 0; i < this.numberOfDistinctCards; i++) {
      let imgUrl = "/assets/img/cards/" + i + ".png";
      this.cardList.push({ img: this.questionMarkUrl, name: imgUrl, revealed: false });
      this.cardList.push({ img: this.questionMarkUrl, name: imgUrl, revealed: false });
    }
  }
  constructor() {
    this.generateDeck();
    console.log(this.cardList);
  }

  ngOnInit() {
  }

}

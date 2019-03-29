import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.page.html',
  styleUrls: ['./memory.page.scss'],
})
export class MemoryPage implements OnInit {

  constructor() {

  }

  ngOnInit() {

    for (let i = 0; i < this.cards.length - 1; i++) {
      this.cardsHidden.push("question-mark.png");
    }

  }
  private cards: Array<string> = [
    "0.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "0.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png"
  ];
  private cardsHidden: Array<string> = [];
  private randCards: Array<string> = this.shuffle(this.cards);
  private hideCard: boolean = false;
  private hideQuestion: boolean = true;


  shuffle(cards) {
    let randCards: Array<string> = [];
    let cardsNomber: number = cards.length
    let j: string = "";
    for (let i = 0; i < cardsNomber - 1; i++) {
      let rand = Math.floor(Math.random() * (cardsNomber + 1));
      j = cards[i];
      cards[i] = cards[rand];
      cards[rand] = j;
    }
    return cards;
  }

  flip(card) {

    this.hideCard = true;
    this.hideQuestion = false;
    if (this.hideCard == true && this.hideQuestion == false) {
      setTimeout(() => {
        this.hideCard = false;
        this.hideQuestion = true;
      }, 1000);
    }







  }

}

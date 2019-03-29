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

  private hasARevealedCard: boolean = false;

  private previousCard;

  /**
   * Generation du jeux de cartes
   */
  private generateDeck() {
    for (let i = 0; i < this.numberOfDistinctCards; i++) {
      let imgUrl = "/assets/images/cards/" + i + ".png";
      this.cardList.push({ img: this.questionMarkUrl, name: imgUrl, revealed: false });
      this.cardList.push({ img: this.questionMarkUrl, name: imgUrl, revealed: false });
    }

  }
  /**
   * Mélange des cartes
   */
  private shuffleDeck() {
    //Boucle dans le tableau et melange les cartes 
    this.cardList.forEach(
      (item, index, deck) => {
        //position aléatoire dans le tableau
        let newPos = Math.floor(Math.random() * deck.length);
        //permutation
        deck[index] = deck[newPos];
        deck[newPos] = item;
      })
  }
  /**
   * Fonction de retournement de la carte
   * @param card 
   * @param index 
   */
  private flipCard(card, index) {
    //Affichage de la carte si elle n'est pas déjà révélé et si aucune autre carte n'est en cour d'affcihage
    if (!card.revealed && !this.hasARevealedCard) {

      //Affichage de la carte
      card.img = card.name;
      card.revealed = true;
      this.hasARevealedCard = true;


      if (this.previousCard && this.previousCard.name == card.name) {
        this.previousCard.img = card.name;
        this.previousCard.revealed = true;
        this.hasARevealedCard = false;
      } else {
        //Masquage de la carte au bout de 1 seconde
        setTimeout(
          () => {
            card.img = this.questionMarkUrl;
            card.revealed = false;
            this.hasARevealedCard = false;
            this.previousCard = card;
          },
          1000
        )
      }


    }

  }

  constructor() {
    this.generateDeck();
    this.shuffleDeck();

  }

  ngOnInit() {
  }

}

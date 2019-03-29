import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private firstName: string;
  private age: number;
  private buttonColor = "secondary";
  private montant: number;
  private montantYen: number;
  private displayList: boolean = true;
  private newFruit: string;

  private fruitList: Array<string> = [
    "Pommes", "Poires", "Bannanes", "Oranges"
  ];
  //Déclaration des attributs
  private personne: object
    = {
      name: "Yop",
      address: "6 rue yop",
      country: "yopland"
    };
  //methode construct
  constructor() {
    this.firstName = "Yop";
    this.age = 2;
  }
  //methode qui change la couleur du bouton en bascule via une condition ternaire
  changeName() {
    this.firstName = "Poy";
    this.buttonColor = this.buttonColor == "danger" ? "secondary" : "danger";
    this.displayList = !this.displayList;
    this.fruitList.push(this.newFruit);
    this.newFruit = "";
  }
}



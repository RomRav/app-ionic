import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {
  private animals = [
    {
      'title': 'Vache',
      'image': 'imgs/animals/cow-icon.png',
      'desc': 'Meugle',
      'file': '/sounds/cow.mp3',
      'playing': false
    },
    {
      'title': 'Dauphin',
      'image': 'imgs/animals/dolphin-icon.png',
      'desc': 'Siffle',
      'file': '/sounds/dolphin.mp3',
      'playing': false
    },
    {
      'title': 'Grenouille',
      'image': 'imgs/animals/frog-icon.png',
      'desc': 'Coasse',
      'file': '/sounds/frog.mp3',
      'playing': false
    },
    {
      'title': 'Oiseau',
      'image': 'imgs/animals/bird-icon.png',
      'desc': 'Chante',
      'file': '/sounds/bird.mp3',
      'playing': false
    },
    {
      'title': 'Cochon',
      'image': 'imgs/animals/pig-icon.png',
      'desc': 'Grogne',
      'file': '/sounds/pig.mp3',
      'playing': false
    },
    {
      'title': 'Chien',
      'image': 'imgs/animals/puppy-icon.png',
      'desc': 'Aboie',
      'file': '/sounds/dog.mp3',
      'playing': false
    },
    {
      'title': 'Chat',
      'image': 'imgs/animals/black-cat-icon.png',
      'desc': 'Miaule',
      'file': '/sounds/cat.mp3',
      'playing': false
    },
    {
      'title': 'Cheval',
      'image': 'imgs/animals/horse-icon.png',
      'desc': 'Hennit',
      'file': '/sounds/horse.wav',
      'playing': false
    },
    {
      'title': 'Ane',
      'image': 'imgs/animals/donkey-icon.png',
      'desc': 'Brait',
      'file': '/sounds/donkey.wav',
      'playing': false
    }
  ];
  private randAnimal: any;
  private audio: any;
  private buttonColor: string = "primary";
  private show: boolean = false;
  private buttonShowColore = "primary";
  constructor(private toatCtrl: ToastController) {

  }

  ngOnInit() {
  }
  //Gestion de l'activation du déplacement des items 
  moveItem() {
    if (this.show == false) {
      this.show = true;
      this.buttonShowColore = "danger";
    } else {
      this.show = false;
      this.buttonShowColore = "primary";
    }

  }

  //Gestion du déplacement des items / activé lorsque on lache l'item replacé
  onReorder(even) {
    //Récupération de l'animal à déplacer
    let animal = this.animals[even.detail.from];
    //Suppression de l'animal à son ancien emplacement
    this.animals.splice(even.detail.from, 1);
    //Ajout de l'animal a son nouvel emplacement
    this.animals.splice(even.detail.to, 0, animal);
    //valider le changement de place
    even.detail.complete();
  }

  //Compare le choix du joueur à l'animal random
  checkedChoice(animal) {
    //Changement de la couleur du bouton quand le joueur a choisit un animal
    this.buttonColor = "tertiary";
    if (animal == this.randAnimal) {
      //Création du message win en toast
      const toast = this.toatCtrl.create({
        message: "BRAVO!", duration: 2000, position: "top", cssClass: "toastWin"
      });
      //Affichage du toast
      toast.then(function (toastElement) {
        toastElement.present();
      });
      //Changement de la couleur du bouton si le joueur à gagné
      this.buttonColor = "success";
      //Réinitialiser de l'animal à deviner
      this.randAnimal = null;
    } else {
      //Changement de la couleur du bouton si le joueur à gagné
      this.buttonColor = "danger";
      //Création du message fail en toast
      const toast = this.toatCtrl.create({
        message: "NON! ESSAYE ENCORE", duration: 2000, position: "top", cssClass: "toastFail"
      });
      //Affichage du toast
      toast.then(function (toastElement) {
        toastElement.present();
      });
    }
  }
  play() {
    //Arrêt du son en cours
    if (this.audio && (this.audio.currentTime < this.audio.duration)) {
      this.audio.pause();
    }
    if (!this.randAnimal) {
      //Sélectionner au hasard un animal
      let index = Math.floor(Math.random() * this.animals.length);
      //Enregistrement de l'animal choisi
      this.randAnimal = this.animals[index];
    }

    //Lecture du son

    this.audio = new Audio();
    this.audio.src = "assets" + this.randAnimal.file;
    this.audio.load();
    this.audio.play();

  }
}

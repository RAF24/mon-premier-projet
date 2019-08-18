import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

  appareils: any[];
  appareilSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
      resolve(date);
      }, 2000);
});

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.onFetch();
    this.appareilService.emitAppareilSubject();
  }


// allumer tout
onAllumer() {
  this.appareilService.switchOnAll();
  this.appareilService.emitAppareilSubject();
}

// éteindre tout
onEteindre() {
if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
  this.appareilService.switchOffAll();
} else {
  return null;
}
this.appareilService.emitAppareilSubject();
}


// enregistrer les données dans la base
onSave() {
  this.appareilService.saveAppareilsToServer();
}


// recupérer les appareils à partir du serveur
onFetch() {
  this.appareilService.getAppareilsFromServer();
  this.appareilService.emitAppareilSubject();
}


}

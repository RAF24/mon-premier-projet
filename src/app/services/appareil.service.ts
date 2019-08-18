import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private appareils = [];

    // contructeur
    constructor(private httpClient: HttpClient) {}

    //
    emitAppareilSubject() {
      this.appareilSubject.next(this.appareils.slice());
    }

    // allumer tous les appareils en même temps
    switchOnAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'allumé';
        }
        this.emitAppareilSubject();
      }

    // allumer tous les appareils en même temps
    switchOffAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'éteint';
        }
        this.emitAppareilSubject();
    }


    // allumer un seul appareil
    switchOnOne(i: number) {
        this.appareils[i].status = 'allumé';
        this.emitAppareilSubject();
    }

    // éteindre un seul appareil
    switchOffOne(i: number) {
        this.appareils[i].status = 'éteint';
        this.emitAppareilSubject();
    }


    // recupère un appareil à travers son id
    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (s) => {
                return s.id === id;
            });
        return appareil;
    }

    // ajouter un appareil
    addAppareil(name: string, status: string) {
      const appareilObject = {
        id: 0,
        name: '',
        status: '',
      };
      appareilObject.name = name;
      appareilObject.status = status;
      appareilObject.id = this.appareils[(this.appareils.length - 1)].id  + 1;
      this.appareils.push(appareilObject);
      this.emitAppareilSubject();
    }

    // enrefgistrer les appareils dur le serveur
    saveAppareilsToServer() {
      this.httpClient.put('https://app-angular-demo-dcce3.firebaseio.com/appareils.json', this.appareils).subscribe(
        () => {
          console.log('Enregistrement terminé avec succès !');
        },
        (error) => {
          console.log('Erreur : ', error);
        });
    }

    // charger les appareils à partir de la base
    getAppareilsFromServer() {
      this.httpClient.get<any[]>('https://app-angular-demo-dcce3.firebaseio.com/appareils.json').subscribe(
        (response) => {
            this.appareils = response;
            this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur : ', error);
        },
        () => {
          console.log('Observable complète !');
        });
    }


}

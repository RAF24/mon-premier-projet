import { Subject } from 'rxjs';

export class AppareilService {

  appareilSubject = new Subject<any[]>();

    private appareils = [
        {
          id: 1,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
            id: 2,
          name: 'Télévision',
          status: 'allumé'
        },
        {
            id: 3,
          name: 'Ordinateur',
          status: 'éteint'
        }
    ];

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


}

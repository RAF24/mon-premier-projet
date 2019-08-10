export class AppareilService {

    appareils = [
        {
          name: "Machine à laver",
          status: "éteint"
        },
        {
          name: "Télévision",
          status: "allumé"
        },
        {
          name: "Ordinateur",
          status: "éteint"
        }
      ]


    // allumer tous les appareils en même temps
    switchOnAll(){
        for(let appareil of this.appareils){
            appareil.status = "allumé";
        }

      }

    // allumer tous les appareils en même temps
    switchOffAll(){
        for(let appareil of this.appareils){
            appareil.status = "éteint";
        }
    }


    // allumer un seul appareil
    switchOnOne(i:number){
        this.appareils[i].status = "allumé";
    }

    // éteindre un seul appareil
    switchOffOne(i:number){
        this.appareils[i].status = "éteint";
    }

      
    
    
}
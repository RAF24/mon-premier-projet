export class AppareilService {

    appareils = [
        {
          id:1,
          name: "Machine à laver",
          status: "éteint"
        },
        {
            id:2,
          name: "Télévision",
          status: "allumé"
        },
        {
            id:3,
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


    //recupère un appareil à travers son id
    getAppareilById(id : number){
        const appareil = this.appareils.find(
            (s) => {
                return s.id === id;
            });
        return appareil;
    }
      
    
    
}
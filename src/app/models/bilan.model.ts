import {Resultat} from './resultat.model';

export class Bilan {

  constructor(public structure: string,
              public id: string,
              public Intitule: string,
              public numeroKbis: string,
              public duree: string,
              public annee: string,
              public totalimmobilisation: string,
              public disponibilite: string,
              public totalactif : string,
              public capital : string,
              public report: string,
              public resultatexercice: string,
              public fondPropre: string,
              public fournisseur: string,
              public autresdettes : string,
              public posteclients : string,
              public totaldettes : string,
              public totalbilan : string,
              public resultat: Resultat,
              )
{}
}

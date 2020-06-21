import {Decision} from './decision.model';

export class Credit {
  constructor(
   public nature: string,
    public objet: string,
    public duree: string,
    public referenceDossier: string,
    public taux: string,
    public echeanceEmprunt: string,
    public assurance: string,
    public status: string,
    public siretClient: string,
    public montant: string,
    public coutGlobal: string,
    public decision: Decision,
    ){ }
}

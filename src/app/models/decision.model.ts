import {Edition} from './edition.model';

export class Decision {
  constructor(
    public id: string,
    public dateDecision: string,
    public commentaire: string,
    public statuts : string,
    public edition: Edition,
  ) { }
}

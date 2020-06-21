import {Ratios} from './Ratios.model';
import {Sig} from './sig.model';

export class Resultat {
constructor(
  public id: string,
  public  chiffreAffaire: string,
  public  productionVenduBien: string,
  public  productionVenduService: string,
  public  productionStockee: string,
  public  productionimmobilise: string,
  public  subventionExploitationRecu: string,
  public  autresProduits: string ,
  public  achatsMarchandises: string,
  public  variationStockMarchandise: string,
  public  achatsMatierePremiere: string,
  public  variationStockMatierePremiere: string,
  public  impotsTaxes: string,
  public  chargesSociales: string,
  public  dotationAmmortissement: string,
  public  dotationProvision: string ,
  public  chargesExternes: string,
  public  chargesExploitation: string,
  public  resultatExploitation: string ,
  public  remunerationPersonnel: string,
  public  beneficePErte: string,
  public  resultatfiscal: string,
  public sig: Sig,
  ){}
}

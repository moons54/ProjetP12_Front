export class User {

  constructor(public id: number,
              public username: string,
              public nom: string,
              public prenom: string,
              public password: string,
              public confirmedpassword: string,
              public email: string,
              public societe: string,
              public siretClient: string,
              public telephone: string,
              public adresse: string,
              public codePostal: string,
              public ville: string,
  ){}

}

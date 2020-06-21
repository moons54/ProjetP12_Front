import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditComponent } from './credit/credit.component';
import { LoginComponent } from './login/login.component';
import { CollaborateurBilanComponent } from './collaborateur-bilan/collaborateur-bilan.component';
import { BilanComponent } from './bilan/bilan.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ResultatComponent } from './resultat/resultat.component';
import { SingleResultatComponent } from './resultat/single-resultat/single-resultat.component';
import { SingleCreditComponent } from './credit/single-credit/single-credit.component';
import {ViewCreditComponent} from './credit/view-credit/view-credit.component';
import {DecisionComponent} from './decision/decision.component';
import {SingleDecisionComponent} from './decision/single-decision/single-decision.component';
import {EditionComponent} from './edition/edition.component';
import {SingleEditionComponent} from './edition/single-edition/single-edition.component';
import {FormCreditComponent} from './credit/form-credit/form-credit.component';
import {InfoDetailComponent} from './credit/form-credit/information/info-detail/info-detail.component';
import {InfoAssuranceComponent} from './credit/form-credit/information/info-assurance/info-assurance.component';
import {UpdateDecisionComponent} from './decision/update-decision/update-decision.component';
import {ViewCollaborateurComponent} from './view/view-collaborateur/view-collaborateur.component';
import {ViewEditionComponent} from './edition/view-edition/view-edition.component';
import {UpdateEditionComponent} from './edition/update-edition/update-edition.component';
import {AuthGuardsService} from './services/auth-guards.service';
import {ProfilComponent} from './profil/profil.component';
import {SigninComponent} from './signin/signin.component';
import {UserComponent} from './user/user.component';
import {SingleUserComponent} from './user/single-user/single-user.component';



const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path:'credits', canActivate: [AuthGuardsService],component: CreditComponent },
  { path: 'credits/:id', component: SingleCreditComponent },
  { path: 'credit/new', component: FormCreditComponent },
  { path: 'decisions', component: DecisionComponent },
  { path: 'decisions/:id', component: SingleDecisionComponent },
  { path: 'editions', component: EditionComponent },
  { path: 'editions/:id', component: SingleEditionComponent },
  { path:'login', component: LoginComponent },
  { path:'bilans', component: CollaborateurBilanComponent },
  { path:'bilans/:id', component: BilanComponent },
  { path: 'resultats', component: ResultatComponent },
  { path: 'resultats/:id', component: SingleResultatComponent},
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'parent',component: FormCreditComponent,
  children: [
    { path: 'detailpret',
    component: InfoDetailComponent
    },
    { path : 'detailassurance',
    component: InfoAssuranceComponent
    }
  ]},
  { path: 'decision/:id', component: UpdateDecisionComponent},
  { path: 'collaborateur/:id/:refdossier', component: ViewCollaborateurComponent},
  { path: 'edition/update/:id', component: UpdateEditionComponent},
  { path: 'edition/:id/:refedition', component: ViewEditionComponent},
  { path: 'profil', component: ProfilComponent},
  { path:'register/new', component: SigninComponent},
  { path: 'users', component: UserComponent},
  { path: 'user/:id', component: SingleUserComponent}
 // { path: '**', redirectTo: 'accueil'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditComponent } from './credit/credit.component';
import { DecisionComponent } from './decision/decision.component';
import { EditionComponent } from './edition/edition.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BilanComponent } from './bilan/bilan.component';
import { ResultatComponent } from './resultat/resultat.component';
import { AnnexeComponent } from './annexe/annexe.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollaborateurBilanComponent } from './collaborateur-bilan/collaborateur-bilan.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SingleResultatComponent } from './resultat/single-resultat/single-resultat.component';
import { SingleCreditComponent } from './credit/single-credit/single-credit.component';
import { ViewCreditComponent } from './credit/view-credit/view-credit.component';
import { AuthentificationService} from './services/authentification.service';
import { CreditService} from './services/credit.service';
import { BilanService } from './services/bilan.service';
import { ResultatService } from './services/resultat.service';
import { SingleDecisionComponent } from './decision/single-decision/single-decision.component';
import { SingleEditionComponent } from './edition/single-edition/single-edition.component';
import { MatInputModule, MatStepperModule} from '@angular/material';
import { InfoCreditComponent } from './credit/form-credit/information/info-credit/info-credit.component';
import { FormCreditComponent } from './credit/form-credit/form-credit.component';
import { StepperdetailComponent } from './credit/form-credit/stepper/stepperdetail/stepperdetail.component';
import { StepperassuranceComponent } from './credit/form-credit/stepper/stepperassurance/stepperassurance.component';
import { StepperreccapComponent } from './credit/form-credit/stepper/stepperreccap/stepperreccap.component';
import { InfoAssuranceComponent } from './credit/form-credit/information/info-assurance/info-assurance.component';
import { InfoDetailComponent } from './credit/form-credit/information/info-detail/info-detail.component';
import { UpdateDecisionComponent } from './decision/update-decision/update-decision.component';
import { ViewDecisionComponent } from './decision/view-decision/view-decision.component';
import { ViewCollaborateurComponent } from './view/view-collaborateur/view-collaborateur.component';
import { SigComponent } from './sig/sig.component';
import { RatiosComponent } from './ratios/ratios.component';
import { UpdateEditionComponent } from './edition/update-edition/update-edition.component';
import { ViewEditionComponent } from './edition/view-edition/view-edition.component';
import { AuthComponent } from './auth/auth.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthGuardsService } from './services/auth-guards.service';
import {DecisionService} from './services/decision.service';
import {EditionsService} from './services/editions.service';
import { PieCreditComponent } from './profil/pie-credit/pie-credit.component';
import { SigninComponent } from './signin/signin.component';
import { UserComponent } from './user/user.component';
import {UserService} from './services/user.service';
import { SingleUserComponent } from './user/single-user/single-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditComponent,
    DecisionComponent,
    EditionComponent,
    BilanComponent,
    ResultatComponent,
    AnnexeComponent,
    LoginComponent,
    CollaborateurBilanComponent,
    AccueilComponent,
    SingleResultatComponent,
    SingleCreditComponent,
    ViewCreditComponent,
    SingleDecisionComponent,
    SingleEditionComponent,
    InfoCreditComponent,
    FormCreditComponent,
    StepperdetailComponent,
    StepperassuranceComponent,
    StepperreccapComponent,
    InfoAssuranceComponent,
    InfoDetailComponent,
    UpdateDecisionComponent,
    ViewDecisionComponent,
    ViewCollaborateurComponent,
    SigComponent,
    RatiosComponent,
    UpdateEditionComponent,
    ViewEditionComponent,
    AuthComponent,
    ProfilComponent,
    PieCreditComponent,
    SigninComponent,
    UserComponent,
    SingleUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule,
    BrowserAnimationsModule,
    MaterialModule, ReactiveFormsModule, MatStepperModule, MatInputModule
  ],
  providers: [
    AuthentificationService,
    CreditService,
    BilanService,
    ResultatService,
    AuthGuardsService,
    DecisionService,
    EditionsService,
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

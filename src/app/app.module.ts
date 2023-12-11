import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeEmpComponent } from './Interfaces/Employe/home-emp/home-emp.component';
import { HomeRhComponent } from './Interfaces/RH/home-rh/home-rh.component';
import { PerformingEmpComponent } from './Interfaces/RH/performing-emp/performing-emp.component';
import { NavbarComponent } from './Interfaces/RH/navbar/navbar.component';
import { NavbarEmpComponent } from './Interfaces/Employe/navbar-emp/navbar-emp.component';
import { LoginComponent } from './Interfaces/Employe/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEmployeesDepComponent } from './Interfaces/RH/list-employees-dep/list-employees-dep.component';
import { LoginRhComponent } from './Interfaces/RH/login-rh/login-rh.component';
import { ListCalendrierComponent } from './Interfaces/Employe/list-calendrier/list-calendrier.component';
import { EditEmployeComponent } from './Interfaces/RH/edit-employe/edit-employe.component';
import { HomeComponent } from './Interfaces/home/home.component';
import { AjouterEmpComponent } from './Interfaces/RH/ajouter-emp/ajouter-emp.component';
import { ListCongesComponent } from './Interfaces/RH/list-conges/list-conges.component';
import { DemandeCongeComponent } from './Interfaces/Employe/demande-conge/demande-conge.component';
import { DemandeDemissionComponent } from './Interfaces/Employe/demande-demission/demande-demission.component';
import { CreerCommentComponent } from './Interfaces/RH/creer-comment/creer-comment.component';
import { ListDemissionComponent } from './Interfaces/RH/list-demission/list-demission.component';
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [
    AppComponent,
    HomeEmpComponent,
    HomeRhComponent,
    PerformingEmpComponent,
    NavbarComponent,
    NavbarEmpComponent,
    LoginComponent,
    ListEmployeesDepComponent,
    LoginRhComponent,
    ListCalendrierComponent,
    EditEmployeComponent,
    HomeComponent,
    AjouterEmpComponent,
    ListCongesComponent,
    DemandeCongeComponent,
    DemandeDemissionComponent,
    CreerCommentComponent,
    ListDemissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

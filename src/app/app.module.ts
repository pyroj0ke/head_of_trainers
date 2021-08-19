import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlanningComponent } from './planning/planning.component';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatIconModule } from "@angular/material/icon";
import { ListMenuComponent } from './list/list-menu/list-menu.component';
import { NewPlanComponent } from './new-plan/new-plan.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { NewPlanGeneralComponent } from './new-plan/new-plan-general/new-plan-general.component';
import { NewPlanMembersComponent } from './new-plan/new-plan-members/new-plan-members.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanningComponent,
    FilterComponent,
    ListComponent,
    ListMenuComponent,
    NewPlanComponent,
    NewPlanGeneralComponent,
    NewPlanMembersComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    MatMenuModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [NewPlanComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

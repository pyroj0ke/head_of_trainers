import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewPlanComponent } from '../new-plan/new-plan.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog) { }

  openNewPlan() {
    this.dialog.open(NewPlanComponent);
  }

}

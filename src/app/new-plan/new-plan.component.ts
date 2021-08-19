import { Component } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from "@angular/material/core";
import { MAT_NATIVE_DATE_FORMATS } from "@angular/material/core";

export const GRI_DATE_FORMATS: MatDateFormats = {
  ...MAT_NATIVE_DATE_FORMATS,
  display: {
    ...MAT_NATIVE_DATE_FORMATS.display,
    dateInput: {
      day: 'numeric',
      month: 'long',
    } as Intl.DateTimeFormatOptions,
  }
};

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.component.html',
  styleUrls: ['./new-plan.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: GRI_DATE_FORMATS },
  ]
})
export class NewPlanComponent {

  constructor(public dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('ru-RU');
  }

  showTab = 'general';

  idList = ['general', 'members']

  toggleClass(event: any) {
    this.idList.forEach((classEl) => {
      document.getElementById(classEl)?.classList.remove('nav__tab-active')
      document.getElementById(classEl)?.classList.add('nav__tab')
    })
    document.getElementById(event.target.id)?.classList.remove('nav__tab')
    document.getElementById(event.target.id)?.classList.add('nav__tab-active')
  }

}

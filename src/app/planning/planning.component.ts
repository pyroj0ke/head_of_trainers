import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  idList = ['group', 'solo']

  toggleClass(event: any) {
    this.idList.forEach((classEl) => {
      document.getElementById(classEl)?.classList.remove('nav__tab-active')
      document.getElementById(classEl)?.classList.add('nav__tab')
    })
    document.getElementById(event.target.id)?.classList.remove('nav__tab')
    document.getElementById(event.target.id)?.classList.add('nav__tab-active')
  }

}

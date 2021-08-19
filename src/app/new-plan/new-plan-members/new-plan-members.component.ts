import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface User {
  name: string,
}

const userList: User[] = [
  {name: 'Максим Вильниц'},
  {name: 'Ольга Крышкова'},
  {name: 'Юлия Грунина'},
  {name: 'Марат Большаков'},
  {name: 'Светлана Иванова'},
  {name: 'Данил Горбунов'},
  {name: 'Дарья Васильева'},
  {name:'Владимир Силеванов'},
]

@Component({
  selector: 'app-new-plan-members',
  templateUrl: './new-plan-members.component.html',
  styleUrls: ['./new-plan-members.component.scss']
})
export class NewPlanMembersComponent {
  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource(userList);

  constructor() { }


}

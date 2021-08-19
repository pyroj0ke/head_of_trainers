import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PlanningData {
  date: Date;
  name: string;
  members: number;
  trainer: string;
  progress: number;
}

const PLANNING_LIST: PlanningData[] = [
  {date:new Date('Dec 23, 2019 9:00'), name: 'Страхование с заботой о клиенте', members: 12, trainer: '', progress: 95},
  {date:new Date('Nov 14, 2019 9:30'), name: 'Главные правила продаж', members: 10, trainer: '', progress: 91},
  {date:new Date('Oct 19, 2019 14:30'), name: 'Первичное обучение КС', members: 8, trainer: '', progress: 86},
  {date:new Date('Oct 10, 2019 16:00'), name: 'Вторичное обучение КС', members: 18, trainer: '', progress: 82},
  {date:new Date('Oct 5, 2019 15:00'), name: 'Вклады: теория и практика', members: 6, trainer: '', progress: 79},
  {date:new Date('Sep 27, 2019 11:00'), name: 'Очное обучение менеджеров', members: 20, trainer: '', progress: 73},
]

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {
  displayedColumns: string[] = ['date', 'name', 'members', 'trainer', 'progress'];
  dataSource = new MatTableDataSource(PLANNING_LIST);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  datePattern(date: Date) {
    let monthPattern = /^.{0,3}/;
    return `${date.getDate()} 
    ${monthPattern.exec(date.toLocaleDateString('ru-RU', {month: 'short'}))}, 
    ${date.getHours()}:${this.parseMinutes(date.getMinutes())}`
  }

  parseMinutes(minutes: number) {
    let numberStr = ("0".repeat(2) + minutes).substr(-2)
    return numberStr.slice(0,2)
  }
}

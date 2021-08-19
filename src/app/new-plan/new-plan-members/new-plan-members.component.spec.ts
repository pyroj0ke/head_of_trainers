import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlanMembersComponent } from './new-plan-members.component';

describe('NewPlanMembersComponent', () => {
  let component: NewPlanMembersComponent;
  let fixture: ComponentFixture<NewPlanMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlanMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlanMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

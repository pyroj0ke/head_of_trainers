import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlanGeneralComponent } from './new-plan-general.component';

describe('NewPlanGeneralComponent', () => {
  let component: NewPlanGeneralComponent;
  let fixture: ComponentFixture<NewPlanGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlanGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlanGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeInfoComponent } from './grade-info.component';

describe('GradeInfoComponent', () => {
  let component: GradeInfoComponent;
  let fixture: ComponentFixture<GradeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

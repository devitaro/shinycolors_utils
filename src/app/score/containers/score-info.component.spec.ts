import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreInfoComponent } from './score-info.component';

describe('ScoreInfoComponent', () => {
  let component: ScoreInfoComponent;
  let fixture: ComponentFixture<ScoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RivalInfoComponent } from './rival-info.component';

describe('RivalInfoComponent', () => {
  let component: RivalInfoComponent;
  let fixture: ComponentFixture<RivalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RivalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RivalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

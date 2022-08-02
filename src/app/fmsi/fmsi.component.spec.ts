import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FmsiComponent} from './fmsi.component';

describe('FmsiComponent', () => {
  let component: FmsiComponent;
  let fixture: ComponentFixture<FmsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FmsiComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FmsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

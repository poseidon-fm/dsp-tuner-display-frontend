import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SquelchComponent} from './squelch.component';

describe('SquelchComponent', () => {
  let component: SquelchComponent;
  let fixture: ComponentFixture<SquelchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SquelchComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SquelchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

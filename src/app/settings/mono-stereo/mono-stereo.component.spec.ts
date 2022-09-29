import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MonoStereoComponent} from './mono-stereo.component';

describe('MonoStereoComponent', () => {
  let component: MonoStereoComponent;
  let fixture: ComponentFixture<MonoStereoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonoStereoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MonoStereoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

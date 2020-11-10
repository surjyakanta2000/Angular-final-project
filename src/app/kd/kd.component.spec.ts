import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdComponent } from './kd.component';

describe('KdComponent', () => {
  let component: KdComponent;
  let fixture: ComponentFixture<KdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

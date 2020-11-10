import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvappComponent } from './tvapp.component';

describe('TvappComponent', () => {
  let component: TvappComponent;
  let fixture: ComponentFixture<TvappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

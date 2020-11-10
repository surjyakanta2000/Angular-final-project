import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvappdComponent } from './tvappd.component';

describe('TvappdComponent', () => {
  let component: TvappdComponent;
  let fixture: ComponentFixture<TvappdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvappdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvappdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

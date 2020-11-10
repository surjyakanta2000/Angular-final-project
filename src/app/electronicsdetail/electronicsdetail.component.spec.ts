import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsdetailComponent } from './electronicsdetail.component';

describe('ElectronicsdetailComponent', () => {
  let component: ElectronicsdetailComponent;
  let fixture: ComponentFixture<ElectronicsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicsdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

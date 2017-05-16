import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarbindingComponent } from './starbinding.component';

describe('StarbindingComponent', () => {
  let component: StarbindingComponent;
  let fixture: ComponentFixture<StarbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

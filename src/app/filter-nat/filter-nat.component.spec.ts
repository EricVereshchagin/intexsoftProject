import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNatComponent } from './filter-nat.component';

describe('FilterNatComponent', () => {
  let component: FilterNatComponent;
  let fixture: ComponentFixture<FilterNatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterNatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterNatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

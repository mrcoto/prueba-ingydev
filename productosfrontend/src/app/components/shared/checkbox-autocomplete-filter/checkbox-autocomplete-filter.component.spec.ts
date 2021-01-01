import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxAutocompleteFilterComponent } from './checkbox-autocomplete-filter.component';

describe('CheckboxAutocompleteFilterComponent', () => {
  let component: CheckboxAutocompleteFilterComponent;
  let fixture: ComponentFixture<CheckboxAutocompleteFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxAutocompleteFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxAutocompleteFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

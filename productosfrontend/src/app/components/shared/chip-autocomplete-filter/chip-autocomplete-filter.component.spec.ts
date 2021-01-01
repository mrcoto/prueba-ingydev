import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipAutocompleteFilterComponent } from './chip-autocomplete-filter.component';

describe('ChipAutocompleteFilterComponent', () => {
  let component: ChipAutocompleteFilterComponent;
  let fixture: ComponentFixture<ChipAutocompleteFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipAutocompleteFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipAutocompleteFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

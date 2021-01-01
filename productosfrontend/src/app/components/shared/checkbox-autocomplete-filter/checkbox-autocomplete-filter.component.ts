import {ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {mapToSelected, Selected} from '../checkbox-filter/selected';

@Component({
  selector: 'app-checkbox-autocomplete-filter',
  templateUrl: './checkbox-autocomplete-filter.component.html',
  styleUrls: ['./checkbox-autocomplete-filter.component.css']
})
export class CheckboxAutocompleteFilterComponent implements OnInit, DoCheck {

  @Input() title = 'Título';
  @Input() data: Observable<any[]>;
  @Input() column;

  @Output() changedValues = new EventEmitter<Selected<any>[]>();

  oldSelected: Selected<any>[] = [];
  selected: Selected<any>[] = [];

  previousSearch = '';
  search = '';
  filteredSelected: Selected<any>[] = [];

  maxLength = 5;
  showMore = true;
  showFilteredSelected: Selected<any>[] = [];

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.data.subscribe(data => {
      this.oldSelected = mapToSelected(data);
      this.selected = mapToSelected(data);
      this.filteredSelected = mapToSelected(data);
      this.showFilteredSelected = (this.showMore ? this.filteredSelected.slice(0, this.maxLength) : this.filteredSelected);
    });
  }

  changedInput(): void {
    if (this.search !== this.previousSearch) {
      if (this.search === '') {
        this.filteredSelected = this.selected;
      } else {
        this.filteredSelected = this.selected.filter(value => value.data[this.column].toLowerCase().includes(this.search));
      }
    }
    this.previousSearch = this.search;
    this.showFilteredSelected = (this.showMore ? this.filteredSelected.slice(0, this.maxLength) : this.filteredSelected);
  }

  ngDoCheck(): void {
    if (this.hasChanges()) {
      this.updateOldSelected();
      this.cdRef.detectChanges();
      this.changedValues.emit(this.selected);
    }
  }

  private updateOldSelected(): void {
    for (let i = 0; i < this.selected.length; i++) {
      this.oldSelected[i].completed = this.selected[i].completed;
    }
  }

  private hasChanges(): boolean {
    for (let i = 0; i < this.selected.length; i++) {
      if (this.oldSelected[i].completed !== this.selected[i].completed) {
        return true;
      }
    }
    return false;
  }

  showMoreClicked(): void {
    this.showMore = false;
    this.showFilteredSelected = this.filteredSelected;
  }

  showLessClicked(): void {
    this.showMore = true;
    this.showFilteredSelected = this.filteredSelected.slice(0, this.maxLength)
  }

}


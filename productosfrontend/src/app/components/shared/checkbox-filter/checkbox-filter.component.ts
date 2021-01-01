import {Component, DoCheck, Input, Output, EventEmitter, OnInit, ChangeDetectorRef} from '@angular/core';
import {mapToSelected, Selected} from './selected';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.css']
})
export class CheckboxFilterComponent implements OnInit, DoCheck {


  @Input() title = 'Título';
  @Input() data: Observable<any[]>;
  @Input() column;

  @Output() changedValues = new EventEmitter<Selected<any>[]>();

  oldSelected: Selected<any>[] = [];
  selected: Selected<any>[] = [];

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.data.subscribe(data => {
      this.oldSelected = mapToSelected(data);
      this.selected = mapToSelected(data);
    });
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

}

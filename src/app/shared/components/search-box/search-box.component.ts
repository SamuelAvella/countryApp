import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>() 
  private debouncerSubscription?: Subscription;

  @Input()
  public placeHolder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter;
  
  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter;

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(300)
      ).subscribe(value => this.onDebounce.emit(value))
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe()
  }

  emitValue(value: string): void{
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string): void{
    this.onDebounce.emit(searchTerm)
  }
}

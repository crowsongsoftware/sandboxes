import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { incrementDecrementViewModel } from './increment-decrement.viewmodel';

@Component({
  selector: 'app-imcrement-decrement',
  templateUrl: './imcrement-decrement.component.html',
  styleUrls: ['./imcrement-decrement.component.scss']
})
export class IncrementDecrementComponent implements OnInit {
  public vm$!: Observable<incrementDecrementViewModel>;
  public incrementSubject = new Subject<number>();
  public decrementSubject = new Subject<number>();
  
  constructor() {};

  ngOnInit(): void {};
};

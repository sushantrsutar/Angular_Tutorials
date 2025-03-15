import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit,OnChanges,DoCheck {

  msg1: string = "hi parent! i am child";

  constructor() {
    console.log("constructor of child");
  }
  
  
  ngDoCheck(): void {
    console.log("ngDoCheck method invoke")
  }

  //when change happen in input then onChanges method invoked
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChange method invoke")
  }

  //for sending data child to parent component  
  @Output() childemiter: EventEmitter<string> = new EventEmitter<string>();

  //after constructor oninit() invoked
  ngOnInit(): void {
    console.log("ngOnInit in invoke");
    // throw new Error('Method not implemented.');
    this.childemiter.emit(this.msg1);
    console.log("init of child");
  }

  //for get data from parent component
  @Input() datafromParent = '';
}

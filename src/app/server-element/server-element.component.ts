import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('svrElement') element: {type: string, name: string, content: string};
@Input() name: string;
@ViewChild('heading') header: ElementRef;
@ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called:');
   }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called:');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called:');
    console.log('text content' + this.header.nativeElement.textContent);
    console.log('TExt content of paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called:');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called:');
    console.log('text content' + this.header.nativeElement.textContent);
    console.log('TExt content of paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called:');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Called:');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called:');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Called:');
  }
}

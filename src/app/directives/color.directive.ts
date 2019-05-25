import { Directive, ElementRef,
         OnInit } from '@angular/core';

@Directive({
  selector: "[appColor]"
})

export class ColorDirective implements OnInit {

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.element.nativeElement.style.color = '#1A1A1A';
    this.element.nativeElement.style.textShadow = '0 0 20px aqua';
  }
}

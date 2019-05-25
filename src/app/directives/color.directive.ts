import { Directive, ElementRef,
         OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: "[appColor]"
})

export class ColorDirective implements OnInit {

  constructor(private element: ElementRef,
              private renderer: Renderer2) {}

  ngOnInit() {
    const { nativeElement: el } = this.element;
    this.renderer.setStyle(el, 'text-shadow','0 0 20px aqua');
    this.renderer.addClass(el, 'directive-test');
    this.element.nativeElement.style.color = '#1A1A1A';
  }
}

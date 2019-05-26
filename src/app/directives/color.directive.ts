import { Directive, ElementRef, HostListener,
         OnInit, Renderer2, Input } from '@angular/core';

@Directive({ selector: "[appColor]" })

export class ColorDirective implements OnInit {

  @Input() stat    : string = 'hover';
  @Input('appColor') mainColor : string = 'aqua';

  constructor(private element: ElementRef,
              private renderer: Renderer2) {}

  ngOnInit() {
    const { nativeElement: el } = this.element;
    this.renderer.setStyle(el, 'text-shadow',`0 0 20px ${this.mainColor}`);
    this.renderer.addClass(el, 'directive-test');
    if (this.stat !== 'hover') this.renderer.addClass(el, this.stat);
    this.element.nativeElement.style.color = '#1A1A1A';
  }

  @HostListener('mouseenter', ['$event']) mouseEnter(e: Event) {
    e.target.className = `directive-test ${this.stat}`;
  }

  @HostListener('mouseleave') mouseLeave() {
    let cl = this.stat === 'hover' ? 'mouse-leave' : this.stat;
    this.element.nativeElement.className = `directive-test ${cl}`;
  }

}

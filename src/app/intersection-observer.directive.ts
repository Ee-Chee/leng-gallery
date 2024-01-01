import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[intersectionObserving]',
  standalone: true,
})
export class IntersectionObserverDirective implements OnDestroy, AfterViewInit {
  // if the child component has the same input name and type as its directive, the value will be passed into both of them
  @Input() rootMargin = '0px';
  @Input() threshold = 0;

  @Output() visible = new EventEmitter<boolean>();

  private observer: IntersectionObserver | undefined;

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
      this.observer = new IntersectionObserver( entries => {
        if ( entries[0].isIntersecting === true ) {
          console.log('in screen');
          this.visible.emit(true);
          this.observer?.disconnect();
        } else {
          console.log('off screen');
        }
      }, {
        threshold: this.threshold,
        rootMargin: this.rootMargin
      });
      // options => threshold -> default 0(body of container off screen, as soon as the container is intersected with root container(Document).
      // Max 1 => when the whole body of container is intersected with root
      // Passing array of number is possible. [0, 0.5] => when zero or 50% is intersected

      this.observer.observe(this.element.nativeElement as HTMLElement);
    
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }
}

import { Component } from '@angular/core';
import { ApiRequestService } from '../services/api-request.service';
import { IntersectionObserverDirective } from '../intersection-observer.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IntersectionObserverDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private api: ApiRequestService) {}

  track() {
    this.api.homeEndTracking();
  }
}

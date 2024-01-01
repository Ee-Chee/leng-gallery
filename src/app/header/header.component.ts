import { CommonModule } from '@angular/common';
import { APP_BOOTSTRAP_LISTENER, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IntersectionObserverDirective } from '../intersection-observer.directive';
import { HttpClient } from '@angular/common/http';
import { apiBaseUrl } from '../constants/api-urls';
import { take } from 'rxjs/operators';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IntersectionObserverDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private api: ApiRequestService) {}

  track() {
    this.api.homeStartTracking();
  }
}

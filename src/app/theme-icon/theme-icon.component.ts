import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HomeSubroutes } from '../constants/home-subroutes.enum';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { delay, take } from 'rxjs';
import { RouteMetaDto } from '../models/route-meta.dto';
import { HttpClient } from '@angular/common/http';
import { apiBaseUrl } from '../constants/api-urls';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-theme-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-icon.component.html',
  styleUrl: './theme-icon.component.scss',
  animations: [
    trigger(
      'closeStateAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ width: 0, opacity: 0 }),
            animate('0.5s ease-out', 
                    style({ width: 50, opacity: 1 }))
          ]
        ),
      ]
    ),
    trigger(
      'openStateAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ width: 0, opacity: 0 }),
            animate('0.5s ease-out', 
                    style({ width: 320, opacity: 1 }))
          ]
        ),
        // transition(
        //   ':leave', 
        //   [
        //     style({ width: 300, opacity: 1 }),
        //     animate('0.8s ease-out', 
        //             style({ width: 0, opacity: 0 }))
        //   ]
        // ),
      ]
    )
  ]
})
export class ThemeIconComponent {
  @Input() routeData!: RouteMetaDto;

  constructor(private api: ApiRequestService) {}

  isOpen = false;

  emoji = '&#128540;';

  toggle() {
    this.isOpen = !this.isOpen;

    if(this.isOpen) {
      this.api.themeIconOpenedTracking();
    }
  }
}

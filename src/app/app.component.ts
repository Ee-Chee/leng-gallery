import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeSubroutes } from './constants/home-subroutes.enum';
import { RouteMetaDto } from './models/route-meta.dto';
import { getRouteMeta } from './constants/route-meta';
import { CommonModule } from '@angular/common';
import { Subroute } from './models/subroute.dto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lenge-dauby-gallery';
  subroutes!: Subroute[];
  routeMetaData!: RouteMetaDto;

  constructor(private route: ActivatedRoute) {
      this.subroutes = Object.values(HomeSubroutes).map((param: HomeSubroutes) => ({
      themeIcon: getRouteMeta(param).themeIcon,
      routeParam: param,
    }));
  }
}

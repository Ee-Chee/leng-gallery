import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { ThemeIconComponent } from '../theme-icon/theme-icon.component';
import { HomeSubroutes } from '../constants/home-subroutes.enum';
import { getRouteMeta } from '../constants/route-meta';
import { RouteMetaDto } from '../models/route-meta.dto';
import { FooterComponent } from '../footer/footer.component';
import { GossipComponent } from '../gossip/gossip.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ThemeIconComponent, FooterComponent, GossipComponent, ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  routeMetaData!: RouteMetaDto;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.routeMetaData = getRouteMeta(params['theme']);
    });  
  }
}

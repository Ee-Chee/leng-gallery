import { Component, Input } from '@angular/core';
import { RouteMetaDto } from '../models/route-meta.dto';

@Component({
  selector: 'app-gossip',
  standalone: true,
  imports: [],
  templateUrl: './gossip.component.html',
  styleUrl: './gossip.component.scss'
})
export class GossipComponent {
  @Input() routeData!: RouteMetaDto;

  emoji1 = '&#128529;';
}

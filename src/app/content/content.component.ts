import { Component, Input } from '@angular/core';
import { RouteMetaDto } from '../models/route-meta.dto';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  @Input() routeData!: RouteMetaDto;
}

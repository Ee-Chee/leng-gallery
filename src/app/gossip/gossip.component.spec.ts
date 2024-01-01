import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GossipComponent } from './gossip.component';

describe('GossipComponent', () => {
  let component: GossipComponent;
  let fixture: ComponentFixture<GossipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GossipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GossipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

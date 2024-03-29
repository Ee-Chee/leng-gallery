import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeIconComponent } from './theme-icon.component';

describe('ThemeIconComponent', () => {
  let component: ThemeIconComponent;
  let fixture: ComponentFixture<ThemeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkysightCardComponent } from './skysight-card.component';

describe('SkysightCardComponent', () => {
  let component: SkysightCardComponent;
  let fixture: ComponentFixture<SkysightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkysightCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkysightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

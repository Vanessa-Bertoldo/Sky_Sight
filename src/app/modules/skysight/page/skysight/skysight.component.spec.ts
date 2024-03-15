import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkysightComponent } from './skysight.component';

describe('SkysightComponent', () => {
  let component: SkysightComponent;
  let fixture: ComponentFixture<SkysightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkysightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkysightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

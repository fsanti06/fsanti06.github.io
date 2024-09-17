import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmorPropioComponent } from './amor-propio.component';

describe('AmorPropioComponent', () => {
  let component: AmorPropioComponent;
  let fixture: ComponentFixture<AmorPropioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmorPropioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmorPropioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

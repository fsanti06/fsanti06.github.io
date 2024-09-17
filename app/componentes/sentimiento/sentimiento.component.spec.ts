import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimientoComponent } from './sentimiento.component';

describe('SentimientoComponent', () => {
  let component: SentimientoComponent;
  let fixture: ComponentFixture<SentimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SentimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SentimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

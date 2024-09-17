import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgobioComponent } from './agobio.component';

describe('AgobioComponent', () => {
  let component: AgobioComponent;
  let fixture: ComponentFixture<AgobioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgobioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgobioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

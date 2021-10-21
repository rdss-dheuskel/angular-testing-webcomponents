import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkomponienteComponent } from './akomponiente.component';

describe('AkomponienteComponent', () => {
  let component: AkomponienteComponent;
  let fixture: ComponentFixture<AkomponienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkomponienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkomponienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

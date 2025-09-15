import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Veicoli } from './veicoli';

describe('Veicoli', () => {
  let component: Veicoli;
  let fixture: ComponentFixture<Veicoli>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Veicoli]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Veicoli);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

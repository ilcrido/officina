import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdiniLavoro } from './ordini-lavoro';

describe('OrdiniLavoro', () => {
  let component: OrdiniLavoro;
  let fixture: ComponentFixture<OrdiniLavoro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdiniLavoro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdiniLavoro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

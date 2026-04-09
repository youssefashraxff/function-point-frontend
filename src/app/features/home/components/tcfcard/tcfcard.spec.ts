import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tcfcard } from './tcfcard';

describe('Tcfcard', () => {
  let component: Tcfcard;
  let fixture: ComponentFixture<Tcfcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tcfcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tcfcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

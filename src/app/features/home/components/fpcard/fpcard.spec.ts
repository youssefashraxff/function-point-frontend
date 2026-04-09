import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fpcard } from './fpcard';

describe('Fpcard', () => {
  let component: Fpcard;
  let fixture: ComponentFixture<Fpcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fpcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fpcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loccard } from './loccard';

describe('Loccard', () => {
  let component: Loccard;
  let fixture: ComponentFixture<Loccard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loccard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loccard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ufpcard } from './ufpcard';

describe('Ufpcard', () => {
  let component: Ufpcard;
  let fixture: ComponentFixture<Ufpcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ufpcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ufpcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

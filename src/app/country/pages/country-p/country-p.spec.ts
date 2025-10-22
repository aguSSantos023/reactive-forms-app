import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryP } from './country-p';

describe('CountryP', () => {
  let component: CountryP;
  let fixture: ComponentFixture<CountryP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

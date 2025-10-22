import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicP } from './dynamic-p';

describe('DynamicP', () => {
  let component: DynamicP;
  let fixture: ComponentFixture<DynamicP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

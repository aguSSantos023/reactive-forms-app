import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchesP } from './switches-p';

describe('SwitchesP', () => {
  let component: SwitchesP;
  let fixture: ComponentFixture<SwitchesP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchesP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchesP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

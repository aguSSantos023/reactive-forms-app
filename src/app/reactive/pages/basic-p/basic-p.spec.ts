import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicP } from './basic-p';

describe('BasicP', () => {
  let component: BasicP;
  let fixture: ComponentFixture<BasicP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

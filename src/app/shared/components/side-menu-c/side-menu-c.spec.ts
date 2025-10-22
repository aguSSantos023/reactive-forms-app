import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuC } from './side-menu-c';

describe('SideMenuC', () => {
  let component: SideMenuC;
  let fixture: ComponentFixture<SideMenuC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

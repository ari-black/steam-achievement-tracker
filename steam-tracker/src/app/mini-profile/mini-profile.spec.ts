import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProfile } from './mini-profile';

describe('MiniProfile', () => {
  let component: MiniProfile;
  let fixture: ComponentFixture<MiniProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

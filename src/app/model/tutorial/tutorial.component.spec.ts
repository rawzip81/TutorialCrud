import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial } from './tutorial';

describe('Tutorial', () => {
  let component: Tutorial;
  let fixture: ComponentFixture<Tutorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

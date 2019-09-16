import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMentorComponent } from './manage-mentor.component';

describe('ManageMentorComponent', () => {
  let component: ManageMentorComponent;
  let fixture: ComponentFixture<ManageMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

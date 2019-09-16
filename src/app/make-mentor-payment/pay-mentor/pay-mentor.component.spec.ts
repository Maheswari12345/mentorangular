import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMentorComponent } from './pay-mentor.component';

describe('PayMentorComponent', () => {
  let component: PayMentorComponent;
  let fixture: ComponentFixture<PayMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

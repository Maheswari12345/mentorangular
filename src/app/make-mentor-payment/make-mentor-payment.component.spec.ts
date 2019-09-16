import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeMentorPaymentComponent } from './make-mentor-payment.component';

describe('MakeMentorPaymentComponent', () => {
  let component: MakeMentorPaymentComponent;
  let fixture: ComponentFixture<MakeMentorPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeMentorPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeMentorPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

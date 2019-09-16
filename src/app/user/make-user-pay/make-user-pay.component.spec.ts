import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeUserPayComponent } from './make-user-pay.component';

describe('MakeUserPayComponent', () => {
  let component: MakeUserPayComponent;
  let fixture: ComponentFixture<MakeUserPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeUserPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeUserPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

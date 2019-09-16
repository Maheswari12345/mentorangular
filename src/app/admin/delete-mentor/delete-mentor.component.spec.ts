import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMentorComponent } from './delete-mentor.component';

describe('DeleteMentorComponent', () => {
  let component: DeleteMentorComponent;
  let fixture: ComponentFixture<DeleteMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

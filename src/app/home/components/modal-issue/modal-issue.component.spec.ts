import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIssueComponent } from './modal-issue.component';

describe('ModalIssueComponent', () => {
  let component: ModalIssueComponent;
  let fixture: ComponentFixture<ModalIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIssueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

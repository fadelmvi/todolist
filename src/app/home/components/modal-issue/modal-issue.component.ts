import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faXmark, faArrowsUpDownLeftRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { DatabaseService } from 'src/app/database.service';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-issue',
  templateUrl: './modal-issue.component.html',
  styleUrls: ['./modal-issue.component.css'],
  providers: [DatePipe]
})
export class ModalIssueComponent implements OnInit {
  faXmark = faXmark
  faArrowsUpDownLeftRight = faArrowsUpDownLeftRight
  faEllipsisVertical = faEllipsisVertical

  @Output() closeIssue = new EventEmitter()

  close(): void {
    this.closeIssue.emit()
  }

  constructor(
    private ds: DatabaseService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void { }

  issueAdded: Subject<boolean> = new Subject<boolean>();

  myForm: FormGroup = this.fb.group({
    'title': ['', Validators.required],
    description: ['', Validators.required],
    dueDate: ['', Validators.required],
  })

  onSubmit() {
    if (this.myForm.valid) {
      this.ds.createIssue(this.myForm.value)
        .then(() => {
          this.issueAdded.next(true);
          this.close()
        })
    }
    this.myForm.markAllAsTouched()
  }
}

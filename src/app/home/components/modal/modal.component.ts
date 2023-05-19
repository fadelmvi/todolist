import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faXmark, faArrowsUpDownLeftRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { DatabaseService } from 'src/app/database.service';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [DatePipe]
})
export class ModalComponent implements OnInit {
  faXmark = faXmark
  faArrowsUpDownLeftRight = faArrowsUpDownLeftRight
  faEllipsisVertical = faEllipsisVertical

  @Output() closeModal = new EventEmitter()

  close(): void {
    this.closeModal.emit()
  }

  constructor(
    private ds: DatabaseService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void { }

  todoAdded: Subject<boolean> = new Subject<boolean>();

  myForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    due_date: ['', Validators.required],
    completed: false,
  })

  onSubmit() {
    if (this.myForm.valid) {
      this.ds.createTodo(this.myForm.value)
        .then(() => {
          this.todoAdded.next(true);
          this.close()
        })
    }
    this.myForm.markAllAsTouched()
  }
}

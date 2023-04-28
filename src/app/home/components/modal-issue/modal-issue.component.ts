import { Component, EventEmitter, Output } from '@angular/core';
import { faXmark, faArrowsUpDownLeftRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-issue',
  templateUrl: './modal-issue.component.html',
  styleUrls: ['./modal-issue.component.css']
})
export class ModalIssueComponent {
  faXmark = faXmark
  faArrowsUpDownLeftRight = faArrowsUpDownLeftRight
  faEllipsisVertical = faEllipsisVertical

  @Output() closeIssue = new EventEmitter()

  close(): void {
    this.closeIssue.emit()
  }
}

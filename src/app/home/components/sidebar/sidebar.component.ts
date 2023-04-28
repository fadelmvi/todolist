import { Component } from '@angular/core';
import { faInbox, faCheckDouble, faSquareArrowUpRight, faFolderBlank, faUser, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  faInbox = faInbox
  faCheckDouble = faCheckDouble
  faSquareArrowUpRight = faSquareArrowUpRight
  faFolderBlank = faFolderBlank
  faPersonRifle = faUser
  faSpaghettiMonsterFlying = faGear

  modalIssueVisible = false

  openModalIssue(): void {
    this.modalIssueVisible = true
  }

  closeModalIssue(): void { 
    this.modalIssueVisible = false    
  }
}

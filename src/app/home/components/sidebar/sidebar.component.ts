import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faInbox, faCheckDouble, faSquareArrowUpRight, faFolderBlank, faUser, faGear, faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faInbox = faInbox
  faCheckDouble = faCheckDouble
  faSquareArrowUpRight = faSquareArrowUpRight
  faFolderBlank = faFolderBlank
  faPersonRifle = faUser
  faSpaghettiMonsterFlying = faGear
  faList = faList

  modalVisible = false

  openModal(): void {
    this.modalVisible = true
  }

  closeModal(): void {
    this.modalVisible = false
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {
      const currentUrl = url.join('/')
      const activeLink = document.querySelector(`.sidebar a[href='${currentUrl}']`)
      if (activeLink) {
        activeLink.classList.add('active')
      }
    })
  }

}

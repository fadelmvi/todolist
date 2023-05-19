import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { faTrash, faChevronLeft, faChevronRight, faCheck, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  faTrash = faTrash;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faCheck = faCheck
  faPen = faPen

  todos: any[] = [];

  constructor(private firebaseService: DatabaseService) { }

  ngOnInit(): void {
    this.firebaseService.getTodos().subscribe(todos => {

      // this.totalItems = issues.length;
      // this.data = issues;
      
      let keys = Object.keys(todos || {});
      this.todos = keys.map(key => {
        return { key: key, ...todos[key] }
      })
    });
  }


  currentPage = 1;
  pageSize = 5;

  get pagedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.todos.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.todos.length / this.pageSize);
  }

  get pages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
  

  deleteTodo(id: string) {
    this.firebaseService.deleteTodo(id);
  }

  updateTodo(key: string, status: boolean) {
    this.firebaseService.updateTodoStatus(key, status);
  }

}
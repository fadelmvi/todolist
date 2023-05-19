import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { onValue, ref } from 'firebase/database';
import { Observable } from 'rxjs';
import { database } from 'src/environments/firebase';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) { }

  // getIssues(): Observable<any[]> {
  //   return this.db.list('issues').valueChanges();
  // }

  getTodos(): Observable<any> {
    let issuesRef = ref(database, 'todos')
    return new Observable((observer) => {
      onValue(issuesRef, (snapshot) => {
        observer.next(snapshot.val());
      }, (error) => {
        observer.error(error);
      })
    })
  }

  createTodo(todo: Object) {
    return this.db.list('todos').push(todo);
  }

  deleteTodo(key: string) {
    return this.db.list('todos').remove(key);
  }

  updateTodoStatus(key: string, status: boolean) {
    return this.db.list('todos').update(key, { completed: status });
  }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) { }

  getIssues(): Observable<any[]> {
    return this.db.list('issues').valueChanges();
  }

  createIssue(issue: Object) {
    return this.db.list('issues').push(issue);
  }
}

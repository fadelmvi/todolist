import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) { }

  createIssue(issue: any) {
    return this.db.list('issues').push(issue)
  }

  getData() {
    return this.db.list('issues').valueChanges()
  }

}

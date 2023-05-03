import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-my-issues',
  templateUrl: './my-issues.component.html',
  styleUrls: ['./my-issues.component.css']
})
export class MyIssuesComponent implements OnInit {
  
  issues: any[] = [];
  
  constructor(private firebaseService: DatabaseService) { }

  ngOnInit(): void {
    this.firebaseService.getIssues().subscribe((data: any) => {
      this.issues = data;
    });
  }
}
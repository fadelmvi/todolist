import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/components/sidebar/sidebar.component';
import { TodosComponent } from './home/components/todos/todos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './home/components/modal/modal.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from '../environments/firebase';
import { CompletedTaskComponent } from './home/components/completed-task/completed-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    TodosComponent,
    ModalComponent,
    CompletedTaskComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      // { path: '', redirectTo: 'home/inbox', pathMatch: 'full' },
      // { path: 'home', redirectTo: 'home/inbox', pathMatch: 'full'},
      {
        path: 'home', component: HomeComponent, children: [
          // { path: 'inbox', component: InboxComponent },
          { path: 'task', component: TodosComponent },
          { path: 'completed', component: CompletedTaskComponent}
          // { path: 'issues-done', component: }
        ]
      },
      { path: 'modal', component: ModalComponent }
    ]),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

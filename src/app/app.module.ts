import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/components/sidebar/sidebar.component';
import { MyIssuesComponent } from './home/components/my-issues/my-issues.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalIssueComponent } from './home/components/modal-issue/modal-issue.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from '../environments/firebase';
import { TesComponent } from './tes/tes.component';
import { InboxComponent } from './home/components/my-issues/component/inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    MyIssuesComponent,
    ModalIssueComponent,
    TesComponent,
    InboxComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home/inbox', pathMatch: 'full' },
      { path: 'home', redirectTo: 'home/inbox', pathMatch: 'full'},
      {
        path: 'home', component: HomeComponent, children: [
          { path: 'inbox', component: InboxComponent },
          { path: 'my-issues', component: MyIssuesComponent }
        ]
      },
      { path: 'modal-issue', component: ModalIssueComponent }
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

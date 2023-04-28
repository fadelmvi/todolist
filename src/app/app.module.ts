import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/components/sidebar/sidebar.component';
import { MyIssuesComponent } from './home/components/my-issues/my-issues.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalIssueComponent } from './home/components/modal-issue/modal-issue.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    MyIssuesComponent,
    ModalIssueComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'modal-issue', component: ModalIssueComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

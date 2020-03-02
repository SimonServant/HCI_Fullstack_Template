import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ContactCreateComponent } from "./contact-create/contact-create.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BooksComponent } from "./books/books.component";
import { UserService } from "./user.service";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { QuestionsComponent } from "./questions/questions.component";
import { QuestionsService } from "./questions.service";
import { AnswersService } from "./answers.service";
import { AnswersComponent } from './answers/answers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactCreateComponent,
    ContactListComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    LoginComponent,
    SignupComponent,
    QuestionsComponent,
    AnswersComponent
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [UserService, QuestionsService, AnswersService],
  bootstrap: [AppComponent]
})
export class AppModule {}

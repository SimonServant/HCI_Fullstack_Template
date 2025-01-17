import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactCreateComponent } from "./contact-create/contact-create.component";
import { HomeComponent } from "./home/home.component";
import { BooksComponent } from "./books/books.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { QuestionsComponent } from "./questions/questions.component";
import { CreateQuestionComponent } from "./create-question/create-question.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "contact-create", component: ContactCreateComponent },
  { path: "contact-list", component: ContactListComponent },
  { path: "books", component: BooksComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "questions", component: QuestionsComponent },
  { path: "createQuestion", component: CreateQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { ControlSidebarComponent } from './components/layout/control-sidebar/control-sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ContentComponent } from './components/layout/content/content.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RegisterCourseComponent } from './components/pages/register-course/register-course.component';
import { ResultComponent } from './components/pages/result/result.component';
import { RouterModule } from '@angular/router';
import { MaterialsComponent } from './components/pages/materials/materials.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { CourseinfoComponent } from './components/pages/courseinfo/courseinfo.component';
import { ExcuseComponent } from './components/pages/excuse/excuse.component';
import { StudentstatusComponent } from './components/pages/studentstatus/studentstatus.component';
import { UploadmaterialsComponent } from './components/pages/uploadmaterials/uploadmaterials.component';
import { WritepostComponent } from './components/pages/writepost/writepost.component';
import { DoctorexcuseComponent } from './components/pages/doctorexcuse/doctorexcuse.component';
import { AddstudentComponent } from './components/pages/addstudent/addstudent.component';
import { CourseTermComponent } from './components/pages/course-term/course-term.component';
import { AddStudentManualComponent } from './components/pages/add-student-manual/add-student-manual.component';
import { AddStudentExcelComponent } from './components/pages/add-student-excel/add-student-excel.component';
import { StudentsComponent } from './components/pages/students/students.component';
import { StudentsSectionComponent } from './components/pages/students-section/students-section.component';
import { StudentsGuideComponent } from './components/pages/students-guide/students-guide.component';
import { MaterailEditComponent } from './components/pages/materail-edit/materail-edit.component';
import { DepartmentComponent } from './components/pages/department/department.component';
import { RegisteredStudentComponent } from './components/pages/registered-student/registered-student.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { InboxComponent } from './components/pages/inbox/inbox.component';
import { ChatComponent } from './components/pages/chat/chat.component';
import { AddCourseManuallyComponent } from './components/pages/add-course-manually/add-course-manually.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseFormComponent } from './components/pages/course-form/course-form.component';
import { RateComponent } from './components/pages/rate/rate.component';
import { PaymentsComponent } from './components/pages/payments/payments.component';
import { ProofComponent } from './components/pages/proof/proof.component';
import { ProofPrintComponent } from './components/pages/proof-print/proof-print.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ForgetPasswordComponent } from './components/pages/forget-password/forget-password.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { AddTermComponent } from './components/pages/add-term/add-term.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ControlSidebarComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    ProfileComponent,
    RegisterCourseComponent,
    ResultComponent,
    MaterialsComponent,
    CoursesComponent,
    CourseinfoComponent,
    ExcuseComponent,
    StudentstatusComponent,
    UploadmaterialsComponent,
    WritepostComponent,
    DoctorexcuseComponent,
    AddstudentComponent,
    CourseTermComponent,
    AddStudentManualComponent,
    AddStudentExcelComponent,
    StudentsComponent,
    StudentsSectionComponent,
    StudentsGuideComponent,
    MaterailEditComponent,
    DepartmentComponent,
    RegisteredStudentComponent,
    DashboardComponent,
    InboxComponent,
    ChatComponent,
    AddCourseManuallyComponent,
    CourseFormComponent,
    RateComponent,
    PaymentsComponent,
    ProofComponent,
    ProofPrintComponent,
    LoginComponent,
    ForgetPasswordComponent,
    TermsComponent,
    AddTermComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

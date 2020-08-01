import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/layout/content/content.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RegisterCourseComponent } from './components/pages/register-course/register-course.component';
import { ResultComponent } from './components/pages/result/result.component';
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
import { StudentsGuideComponent } from './components/pages/students-guide/students-guide.component';
import { StudentsSectionComponent } from './components/pages/students-section/students-section.component';
import { MaterailEditComponent } from './components/pages/materail-edit/materail-edit.component';
import { DepartmentComponent } from './components/pages/department/department.component';
import { RegisteredStudentComponent } from './components/pages/registered-student/registered-student.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { InboxComponent } from './components/pages/inbox/inbox.component';
import { ChatComponent } from './components/pages/chat/chat.component';
import {AddCourseManuallyComponent} from './components/pages/add-course-manually/add-course-manually.component';
import {CourseFormComponent} from './components/pages/course-form/course-form.component';
import { RateComponent } from './components/pages/rate/rate.component';
import { PaymentsComponent } from './components/pages/payments/payments.component';
import { ProofComponent } from './components/pages/proof/proof.component';
import { ProofPrintComponent } from './components/pages/proof-print/proof-print.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ForgetPasswordComponent } from './components/pages/forget-password/forget-password.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { AddTermComponent } from './components/pages/add-term/add-term.component';
import { RegisterComponent } from './components/FTF/register/register.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'profile' , component: ProfileComponent},
  {path: 'registercourse' , component: RegisterCourseComponent},
  {path: 'result/:id' , component: ResultComponent},
  {path: 'materials' , component: MaterialsComponent},
  {path: 'coursesinfo' , component: CoursesComponent},
  {path: 'courses/info' , component: CourseinfoComponent},
  {path: 'excuse' , component: ExcuseComponent},
  {path: 'doctor/studentstatus' , component: StudentstatusComponent},
  {path: 'materials/new' , component: UploadmaterialsComponent},
  {path: 'writepost' , component: WritepostComponent},
  {path: 'excuses/view' , component: DoctorexcuseComponent},
  {path: 'students/add' , component: AddstudentComponent},
  {path: 'students/add/manual' , component: AddStudentManualComponent},
  {path: 'students/add/sheet' , component: AddStudentExcelComponent},
  {path: 'course-term' , component: CourseTermComponent},
  {path: 'students' , component: StudentsComponent},
  {path: 'guides' , component: StudentsGuideComponent},
  {path: 'sections' , component: StudentsSectionComponent},
  {path: 'material/edit' , component: MaterailEditComponent},
  {path: 'department' , component: DepartmentComponent},
  {path: 'courses/registered' , component: RegisteredStudentComponent},
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'inbox' , component: InboxComponent},
  {path: 'chat' , component: ChatComponent},
  {path: 'courses' , component: AddCourseManuallyComponent},
  {path: 'courses/new', component: CourseFormComponent},
  {path: 'courses/rate', component: RateComponent},
  {path: 'payments', component: PaymentsComponent},
  {path: 'proof', component: ProofComponent},
  {path: 'proof/print', component: ProofPrintComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'terms/new', component: AddTermComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

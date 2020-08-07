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
import {AuthGuard} from "./services/security/gurad/auth.guard";
import {Error404Component} from "./components/pages/error404/error404.component";
import {Error401Component} from "./components/pages/error401/error401.component";
import {AdminGuard} from "./services/security/gurad/admin.guard";
import {StudentGuard} from "./services/security/gurad/student.guard";
import {DoctorGuard} from "./services/security/gurad/doctor.guard";


const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  // {path:'/' , redirectTo:'home', pathMatch: 'full'},
  {path:'index' , redirectTo:'home', pathMatch: 'full'},
  {path:'' , redirectTo:'home', pathMatch: 'full'},
  {path: 'profile' , component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'registercourse' , component: RegisterCourseComponent, canActivate: [AuthGuard, StudentGuard]},
  {path: 'result/:id' , component: ResultComponent, canActivate: [AuthGuard, StudentGuard]},
  {path: 'materials' , component: MaterialsComponent, canActivate: [AuthGuard, StudentGuard]},
  {path: 'coursesinfo' , component: CoursesComponent, canActivate: [AuthGuard, StudentGuard]},
  {path: 'courses/info' , component: CourseinfoComponent, canActivate: [AuthGuard, StudentGuard]},
  {path: 'excuse' , component: ExcuseComponent, canActivate: [AuthGuard, StudentGuard]},
  {path: 'doctor/studentstatus' , component: StudentstatusComponent, canActivate: [AuthGuard, DoctorGuard]},
  {path: 'materials/new' , component: UploadmaterialsComponent, canActivate: [AuthGuard, DoctorGuard]},
  {path: 'writepost' , component: WritepostComponent, canActivate: [AuthGuard, DoctorGuard]},
  {path: 'excuses/view' , component: DoctorexcuseComponent, canActivate: [AuthGuard, DoctorGuard]},
  {path: 'students/add' , component: AddstudentComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'students/add/manual' , component: AddStudentManualComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'students/add/sheet' , component: AddStudentExcelComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'course-term' , component: CourseTermComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'students' , component: StudentsComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'guides' , component: StudentsGuideComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'sections' , component: StudentsSectionComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'material/edit' , component: MaterailEditComponent, canActivate: [AuthGuard, DoctorGuard]},
  {path: 'department' , component: DepartmentComponent, canActivate: [AuthGuard, StudentGuard]},
  {path: 'courses/registered' , component: RegisteredStudentComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'dashboard' , component: DashboardComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'inbox' , component: InboxComponent, canActivate: [AuthGuard]},
  {path: 'chat' , component: ChatComponent, canActivate: [AuthGuard]},
  {path: 'courses' , component: AddCourseManuallyComponent, canActivate: [AuthGuard ,AdminGuard]},
  {path: 'courses/new', component: CourseFormComponent, canActivate: [AuthGuard, AdminGuard]},
  // TODO add nav link to rate + star
  {path: 'courses/rate', component: RateComponent, canActivate: [AuthGuard,StudentGuard]},
  // TODO add nav link
  {path: 'payments', component: PaymentsComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'proof', component: ProofComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'proof/print', component: ProofPrintComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'terms', component: TermsComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'terms/new', component: AddTermComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'error', component: Error401Component},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

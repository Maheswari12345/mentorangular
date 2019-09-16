import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { MentorRegistrationComponent } from './mentor-registration/mentor-registration.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { MentorComponent } from './mentor/mentor.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SuccessfulRegistrationComponent } from './common/successful-registration/successful-registration.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { CoursesComponent } from './courses/courses.component';
import { AdminSearchComponent } from './admin/admin-search/admin-search.component';
import { MakeMentorPaymentComponent } from './make-mentor-payment/make-mentor-payment.component';
import { PayMentorComponent } from './make-mentor-payment/pay-mentor/pay-mentor.component';
import { DeleteMentorComponent } from './admin/delete-mentor/delete-mentor.component';
import { DeleteUserComponent } from './admin/delete-user/delete-user.component';
import { ManageUserComponent } from './admin/manage/manage-user/manage-user.component';
import { ManageMentorComponent } from './admin/manage/manage-mentor/manage-mentor.component';
import { MentorProfileComponent } from './mentor/mentor-profile/mentor-profile.component';
import { SkillsListComponent } from './mentor/skills-list/skills-list.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserTrainingComponent } from './user/user-training/user-training.component';
import { UserPaymentComponent } from './user/user-payment/user-payment.component';
import { MakeUserPayComponent } from './user/make-user-pay/make-user-pay.component';
import { PaymentSuccessfulComponent } from './common/payment-successful/payment-successful.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserRegistrationComponent,
    MentorRegistrationComponent,
    AdminRegistrationComponent,
    UserComponent,
    MentorComponent,
    AdminComponent,
    AdminHomeComponent,
    SuccessfulRegistrationComponent,
    AdminProfileComponent,
    CoursesComponent,
    AdminSearchComponent,
    MakeMentorPaymentComponent,
    PayMentorComponent,
    DeleteMentorComponent,
    DeleteUserComponent,
    ManageUserComponent,
    ManageMentorComponent,
    MentorProfileComponent,
    SkillsListComponent,
    UserProfileComponent,
    UserTrainingComponent,
    UserPaymentComponent,
    MakeUserPayComponent,
    PaymentSuccessfulComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { MentorRegistrationComponent } from './mentor-registration/mentor-registration.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MentorComponent } from './mentor/mentor.component';
import { UserComponent } from './user/user.component';
import { SuccessfulRegistrationComponent } from './common/successful-registration/successful-registration.component';

import { AdminSearchComponent } from './admin/admin-search/admin-search.component';
import { MakeMentorPaymentComponent } from './make-mentor-payment/make-mentor-payment.component';
import { PayMentorComponent } from './make-mentor-payment/pay-mentor/pay-mentor.component';
import { DeleteMentorComponent } from './admin/delete-mentor/delete-mentor.component';
import { ManageMentorComponent } from './admin/manage/manage-mentor/manage-mentor.component';
import { ManageUserComponent } from './admin/manage/manage-user/manage-user.component';
import { UserTrainingComponent } from './user/user-training/user-training.component';
import { UserPaymentComponent } from './user/user-payment/user-payment.component';
import { MakeUserPayComponent } from './user/make-user-pay/make-user-pay.component';
import { PaymentSuccessfulComponent } from './common/payment-successful/payment-successful.component';



const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'UserRegistration', component: UserRegistrationComponent },
  { path: 'MentorRegistration', component: MentorRegistrationComponent },
  { path: 'AdminRegistration', component: AdminRegistrationComponent },
  { path: 'Mentor', component: MentorComponent, },

  {
    path: 'Admin', component: AdminComponent,


    children: [

      { path: '', component: AdminSearchComponent },
      { path: 'AdminSearch', component: AdminSearchComponent },
      { path: 'MakeMentorPayment', component: MakeMentorPaymentComponent },
      { path: 'mentorPay', component: PayMentorComponent },
      { path: 'DeleteMentor', component: DeleteMentorComponent },
      { path: 'ManageMentor', component: ManageMentorComponent },
      { path: 'ManageUser', component: ManageUserComponent },

    ]

  },
  {
    path: 'User', component: UserComponent,
    
    children: [

      { path: '', component: UserTrainingComponent },
      { path: 'UserPayment', component: UserPaymentComponent},
      { path: 'UserTraining', component: UserTrainingComponent },
      { path: 'UserPay', component: MakeUserPayComponent},
      { path: 'PaymentSuccesful', component: PaymentSuccessfulComponent},

    ]
  },
  { path: 'SucessFullRegistration', component: SuccessfulRegistrationComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

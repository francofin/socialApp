import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { ServiceDetailsPageComponent } from './components/pages/service-details-page/service-details-page.component';
import { TestimonialsPageComponent } from './components/pages/testimonials-page/testimonials-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { SavingGoalsPageComponent } from './components/pages/saving-goals-page/saving-goals-page.component';
import { CashBackPageComponent } from './components/pages/cash-back-page/cash-back-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { HelpPageComponent } from './components/pages/help-page/help-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { SendMoneyPageComponent } from './components/pages/send-money-page/send-money-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';

const routes: Routes = [
    // {path: '', component: HomeDemoOneComponent},
    {path: '', component: HomeDemoTwoComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'services', component: ServicesPageComponent},
    {path: 'service-details', component: ServiceDetailsPageComponent},
    {path: 'testimonials', component: TestimonialsPageComponent},
    {path: 'send-money', component: SendMoneyPageComponent},
    {path: 'team', component: TeamPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'saving-goals', component: SavingGoalsPageComponent},
    {path: 'cash-back', component: CashBackPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'help', component: HelpPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'blog', component: BlogPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'contact', component: ContactPageComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
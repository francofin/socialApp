import { NgModule } from '@angular/core';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { PartnersComponent } from './components/common/partners/partners.component';
import { MoneyCalculatorComponent } from './components/common/money-calculator/money-calculator.component';
import { QuoteComponent } from './components/common/quote/quote.component';
import { TextSliderComponent } from './components/common/text-slider/text-slider.component';
import { BusinessNeedsComponent } from './components/common/business-needs/business-needs.component';
import { SubscriptionComparisonComponent } from './components/common/subscription-comparison/subscription-comparison.component';
import { MissionComponent } from './components/common/mission/mission.component';
import { AllCountriesComponent } from './components/common/all-countries/all-countries.component';
import { ReviewsComponent } from './components/common/reviews/reviews.component';
import { TextSlider2Component } from './components/common/text-slider2/text-slider2.component';
import { CollectingPaymentsComponent } from './components/common/collecting-payments/collecting-payments.component';
import { DigitalBankingComponent } from './components/common/digital-banking/digital-banking.component';
import { HoBannerComponent } from './components/pages/home-demo-one/ho-banner/ho-banner.component';
import { HtBannerComponent } from './components/pages/home-demo-two/ht-banner/ht-banner.component';
import { PaymentsTransfersComponent } from './components/common/payments-transfers/payments-transfers.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { PaymentsEvolutionComponent } from './components/common/payments-evolution/payments-evolution.component';
import { OnlinePaymentComponent } from './components/common/online-payment/online-payment.component';
import { WhyWeBestComponent } from './components/common/why-we-best/why-we-best.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { OurCommitmentComponent } from './components/common/our-commitment/our-commitment.component';
import { TeamComponent } from './components/common/team/team.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { ServicesComponent } from './components/common/services/services.component';
import { ServiceDetailsPageComponent } from './components/pages/service-details-page/service-details-page.component';
import { TestimonialsPageComponent } from './components/pages/testimonials-page/testimonials-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { SavingGoalsPageComponent } from './components/pages/saving-goals-page/saving-goals-page.component';
import { CalculateComponent } from './components/common/calculate/calculate.component';
import { CashBackPageComponent } from './components/pages/cash-back-page/cash-back-page.component';
import { LifetimeRewardsComponent } from './components/common/lifetime-rewards/lifetime-rewards.component';
import { CashbackSavingsComponent } from './components/common/cashback-savings/cashback-savings.component';
import { RetailersComponent } from './components/common/retailers/retailers.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { PricingFeaturesComponent } from './components/common/pricing-features/pricing-features.component';
import { HelpPageComponent } from './components/pages/help-page/help-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { SendMoneyPageComponent } from './components/pages/send-money-page/send-money-page.component';
import { HowItWorksComponent } from './components/common/how-it-works/how-it-works.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';

@NgModule({
    declarations: [
        AppComponent,
        // HomeDemoOneComponent,
        HomeDemoTwoComponent,
        NavbarComponent,
        FooterComponent,
        NotFoundComponent,
        FeaturesComponent,
        PartnersComponent,
        MoneyCalculatorComponent,
        QuoteComponent,
        TextSliderComponent,
        BusinessNeedsComponent,
        SubscriptionComparisonComponent,
        MissionComponent,
        AllCountriesComponent,
        ReviewsComponent,
        TextSlider2Component,
        CollectingPaymentsComponent,
        DigitalBankingComponent,
        HoBannerComponent,
        HtBannerComponent,
        PaymentsTransfersComponent,
        FeedbackComponent,
        SubscribeComponent,
        PaymentsEvolutionComponent,
        OnlinePaymentComponent,
        WhyWeBestComponent,
        AboutPageComponent,
        OurCommitmentComponent,
        TeamComponent,
        ServicesPageComponent,
        ServicesComponent,
        ServiceDetailsPageComponent,
        TestimonialsPageComponent,
        TeamPageComponent,
        FaqPageComponent,
        ContactPageComponent,
        SavingGoalsPageComponent,
        CalculateComponent,
        CashBackPageComponent,
        LifetimeRewardsComponent,
        CashbackSavingsComponent,
        RetailersComponent,
        PricingPageComponent,
        PricingFeaturesComponent,
        HelpPageComponent,
        LoginPageComponent,
        RegisterPageComponent,
        SendMoneyPageComponent,
        HowItWorksComponent,
        PrivacyPolicyPageComponent,
        TermsConditionsPageComponent,
        BlogPageComponent,
        BlogDetailsPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        BrowserAnimationsModule,
        NgxScrollTopModule
    ],
    providers: [provideHttpClient()],
    bootstrap: [AppComponent]
})
export class AppModule { }
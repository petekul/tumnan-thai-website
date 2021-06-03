import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { BannerComponent } from './banner/banner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { ReservationsComponent } from './reservations/reservations.component';

const appRoutes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: '**', component: HomeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    BannerComponent,
    ToolbarComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    MenuSectionComponent,
    ReservationsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

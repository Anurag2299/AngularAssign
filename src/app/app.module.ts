import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ImagePageComponent } from './image-page/image-page.component';
import { InfiniteScrollingComponent } from './infinite-scrolling/infinite-scrolling.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { MatCardModule } from '@angular/material/card';
import { Countdown1Component } from './countdown1/countdown1.component';
import { Inputlimit1Component } from './inputlimit1/inputlimit1.component';
import { Timestamp1Component } from './timestamp1/timestamp1.component';
import { Count1Component } from './count1/count1.component';
import { Mainpage1Component } from './mainpage1/mainpage1.component';

import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { UsertableComponent } from './usertable/usertable.component';
import { UserService } from './user.service';
import { CounterService} from './counter.service';
import { Mainpage2Component } from './mainpage2/mainpage2.component';
import { Count2Component } from './count2/count2.component';
import { Countdown2Component } from './countdown2/countdown2.component';
import { Inputlimit2Component } from './inputlimit2/inputlimit2.component';
import { Timestamp2Component } from './timestamp2/timestamp2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImagePageComponent,
    InfiniteScrollingComponent,
    EcommerceComponent,
    Countdown1Component,
    Inputlimit1Component,
    Timestamp1Component,
    Count1Component,
    Mainpage1Component,
    UsertableComponent,
    Mainpage2Component,
    Count2Component,
    Countdown2Component,
    Inputlimit2Component,
    Timestamp2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    InfiniteScrollModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatCardModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [UserService,CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}

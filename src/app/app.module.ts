// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

// Modules
import { GoogleApiModule, NG_GAPI_CONFIG } from 'ng-gapi';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from 'src/material/material.module';
import { gapiClientConfig } from './config/google-api.config';

// Components
import { AppComponent } from './app.component';
import { MainComponent } from './features/main/container/main.component';
import { LoginComponent } from './features/login/login.component';
import { BlogOverviewComponent } from './features/header/components/blog-overview/blog-overview.component';
import { HeaderComponent } from './features/header/container/header.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { PostOverviewComponent } from './features/post-overview/container/post-overview.component';
import { SearchComponent } from './features/header/components/search/search.component';
import { PostItemComponent } from './features/post-overview/components/post-item/post-item.component';
=======
=======
>>>>>>> test 1
import { MyDialogComponent } from './features/my-dialog/my-dialog.component';

>>>>>>> test 1

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    PostOverviewComponent,
    BlogOverviewComponent,
    HeaderComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    SearchComponent,
    PostItemComponent
=======
    MyDialogComponent,
>>>>>>> test 1
=======
    MyDialogComponent,
>>>>>>> test 1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    GoogleApiModule.forRoot({
<<<<<<< HEAD
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig,
    }),
=======
      provide: NG_GAPI_CONFIG, useValue: gapiClientConfig
    }),
    FormsModule,
    MatDialogModule,
  ],
  entryComponents:[
    MyDialogComponent
<<<<<<< HEAD
>>>>>>> test 1
=======
>>>>>>> test 1
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

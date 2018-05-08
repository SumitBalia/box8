import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {SongsService} from './songs.service';
import {NgsRevealModule} from 'ng-scrollreveal';
import { ImageLoaderModule } from '@thisissoon/angular-image-loader';
import { InViewportModule, WindowRef } from '@thisissoon/angular-inviewport';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './filter.pipe';


const routes: Routes = [
  {'path':'', 'redirectTo':'/home', 'pathMatch':'full'},
  {'path':'home',
   'component':HomeComponent, 
   'data': {
      title: "Home",
      metatags: {
            description: "Page Description or some content here",
            keywords: "home"
      }
   }
 },
  {'path':'**',
   'component':HomeComponent
 }
]

// Provide window object for platform browser
// export const providers: Provider[] = [
//   { provide: WindowRef, useFactory: () => window }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgsRevealModule.forRoot(),
    InViewportModule.forRoot(),
    ImageLoaderModule
  ],
  providers: [SongsService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}

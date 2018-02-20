import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import * as firebase from 'firebase';
import { loadavg } from 'os';






// firebase.database().ref('form-value').set([{
//   name:"madhuri",
//   patner : "Aashish"
// }]);




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

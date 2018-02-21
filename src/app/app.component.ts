import { Component, trigger,state,style,animate,transition } from '@angular/core';
import * as firebase from 'firebase';

export const config = {
  apiKey: "AIzaSyCl2eukDSODz-a4aVLtg24UzZmqOZqlTVQ",
    authDomain: "assignment-20fa8.firebaseapp.com",
    databaseURL: "https://assignment-20fa8.firebaseio.com",
    projectId: "assignment-20fa8",
    storageBucket: "assignment-20fa8.appspot.com",
    messagingSenderId: "405633600522"
};

export const ACCESS_CONFIG = firebase.initializeApp(config);

const rootRef = ACCESS_CONFIG.database().ref().child("assignment-20fa8");
const database = firebase.database().ref('form-value');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations :[
    trigger('momenttext',[
      transition('void => *',[
        style({transform :'translateX(-5%)'
      }),
        animate('1000ms ease-out')
      ]
    )
    ])

  ]
})
export class AppComponent {
  title = 'app';
 data= {};
 
 formSubmit(){
   database.once('value')
   .then((snapshot)=>{
    let arr = snapshot.val();
    if(arr){
      arr.push(this.data);
    }else{
      arr = [];
    }
    database.set(arr);
   });
   console.log(this.data);
  // database.set([this.data]);
  //  
 }
}

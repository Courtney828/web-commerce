import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from  "@angular/router";
import  firebase from 'firebase';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  afAuth: any;

  user:any;
  constructor(private db :AngularFirestore) { }


  signUpUser(user){

    let message = ""
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch((error) =>{
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      message = errorMessage
      console.log(errorMessage);
    }).then( results =>{
      user = results
      if(user){
        console.log("successfully Registered");
      }else{
        console.log(message)
      }
    
      
    });
  }
signInUser(email,password){
  let user :any
  let message = ""
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    message = errorMessage
    console.log(errorMessage);
    // ...
  }).then(result =>{
    user = result


    if(user){
      message = user.user.email + " has successfully logged in"
      console.log(message);
    }else{
      
      console.log(message);
    }
    
    return user.user.email
  });
 
}
resetPassword(email: string) {
  const fbAuth = firebase.auth();

  return fbAuth.sendPasswordResetEmail(email)
    .then(() => console.log('sent Password Reset Email!'))
    .catch((error) => console.log(error))
}

 removingUser(){}

 forgotPassword(){}


 logout(){
  firebase.auth().signOut().then(()  =>{
    // Sign-out successful.
    console.log("Sign-out successful.");
    
  }).catch(function(error) {
    console.log(error);
    
  });
}
getCurrentUser(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    
      var userId = user.uid;
      console.log(userId);
      return firebase.database().ref('/users/' + userId).once('value').then((snapshot) =>{
        console.log(snapshot);
        
      });
    } else {
      // No user is signed in.
    }
  });
}

}


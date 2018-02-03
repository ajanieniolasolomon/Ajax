
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
@Injectable()
export class MainService {
  

  constructor(private afs: AngularFirestore) { }


  GetPost(){
    return this.afs.collection('post').snapshotChanges().map(action=>{
      return action.map(a=>{
        let storage=firebase.storage().ref();
          
        const data=a.payload.doc.data();
        data.id=a.payload.doc.id;
        return data;
      })
    })
  }
  GetSinglePost(id){
    return this.afs.doc('post/'+id).valueChanges();
  }

}
interface post {
  title: string;
  content: string;
  id?:any;
  path:any;
}
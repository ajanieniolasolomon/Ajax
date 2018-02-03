
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
@Injectable()
export class AdminService {
  folder:any;
 listings: AngularFirestoreCollection<post>;
  constructor(private afs: AngularFirestore) {
    this.folder='blog';
    this.listings = this.afs.collection<post>('post');
   }
   GetPost(){
    return this.afs.collection('post').snapshotChanges().map(action=>{
      return action.map(a=>{
        const data=a.payload.doc.data();
        data.id=a.payload.doc.id;
        return data;
      })
    })
  }
  GetSinglePost(id){
    return this.afs.doc('post/'+id).valueChanges();
  }
  update(post,listing) {
   return  this.afs.doc('post/'+post).update(listing);
  }
  addlisting(listing){
    let storage=firebase.storage().ref();
    for(let selecetd of [(<HTMLInputElement>document.getElementById('img')).files[0]]){
      let path=`/${this.folder}/${selecetd.name}`;
      let iRef=storage.child(path);
      iRef.put(selecetd).then((snapshot)=>{
        listing.img=selecetd.name;
       listing.path=path;
        return this.listings.add(listing);

      })
    }
  }
  


}
interface post{
  title:string;
  subtitle:string;
  content:string;
  date:any;
  img:any;
  path:any;
}

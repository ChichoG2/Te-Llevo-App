import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudFirebaseService {

  constructor(private firestore: AngularFirestore) { }

  crearItem(tabla:string, item:any){
    return this.firestore.collection(tabla).add(item)
  }

  listarItems(tabla:string):Observable<any[]>{
    return this.firestore.collection<any>(tabla).valueChanges({idField:"id"})
  }

  eliminar(tabla:string, id:any){
    return this.firestore.collection(tabla).doc(id).delete();
  }

  modificar(tabla:string, id:any, item:any){
    return this.firestore.collection(tabla).doc(id).update(item);
  }
}

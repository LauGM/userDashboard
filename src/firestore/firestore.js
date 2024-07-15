import firebaseApp from '../main';
import {
  collection,
  doc,
  getDoc, 
  getDocs, 
  getFirestore,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

const db = getFirestore(firebaseApp);

//consultas
export async function getUsers() {
  const response = await getDocs(collection(db, 'users'));
  console.log(response);
  //response es un QuerySnapShot - es iterable
  const listaUsers = [];
  response.forEach((docu) => listaUsers.push({ id: docu.id, ...docu.data() }));
  console.log(listaUsers);
  return listaUsers;
}

//obtener el rol del usuario activo
export async function getRole(uid) {
    console.log(uid)
    const docRef = doc(db, `users/${uid}`);
  
    const docSnapshot = await getDoc(docRef);
    console.log(docSnapshot.data())
    if(docSnapshot.exists()){
        console.log(docSnapshot.data().role)
        return docSnapshot.data().role;
    }
    return null;
}

//dar alta a nuevo usuario
export async function addUser(uid, email, verified) {
    console.log('id que envio:'+uid)
    // Construye la referencia al documento con el ID específico
    const docRef = doc(db, "users", uid);
    // Establece el documento con los datos del usuario
    try{
      await setDoc(docRef, {role:'user', email: email, verified: verified});
    }catch(error){
      console.log(error);
    }
}

//actualizar un usuario
export async function updateUser(id, toUpdate) {
  const userDoc = doc(db, 'users', id);
  try {
    await updateDoc(userDoc, toUpdate);
  } catch (error) {
    console.log('Error ' + error);
  }
}
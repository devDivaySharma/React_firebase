import {useEffect, useState} from 'react';
import { projectFirestore } from '../firebase/firebaseconfig';

const UseFireStore = (collection) => {
    const [docs, setDocs] = useState([]);
    
    useEffect(() => {
      const unsub =  projectFirestore.collection(collection).orderBy('createdAt','desc').onSnapshot((snap) =>{
            let docs = [];
            snap.forEach((ele) => {
                docs.push({...ele.data(),id : ele.id});
            });
            setDocs(docs);
        },(err) => {
        });
        return () => unsub();
    },[collection])
    return { docs }; 
}

export default UseFireStore;
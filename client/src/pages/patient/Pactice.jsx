import * as React from 'react';
import { useState, useEffect } from 'react';
import { db } from "../../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
// Initialize Firebase

function Card({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Practice() {
  const [data, setData] = useState([]);
  

  useEffect(() => {

    const empCollectionRef = collection(db, "patients");
    

    const unsubscribe = empCollectionRef.onSnapshot(snapshot => {
      const data = [];

      snapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setData(data);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      {data.map(item => (
        <Card key={item.id} title={item.title} description={item.description} />
      ))}
    </div>
  );
}

export default Practice;

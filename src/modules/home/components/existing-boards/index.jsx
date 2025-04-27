import { auth, db } from "@/config/firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Card from "./_Card";

export default function ExistingBoards() {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    const sessionsCol = collection(db, "sessions");

    const q = query(
      sessionsCol,
      where("ownerId", "==", auth.currentUser.uid)
      // orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      // Clear canvas before redra  wing all strokes on snapshot refresh

      snapshot.docs.forEach((doc) => {
        console.log(doc.data());

        setSessions((prevSessions) => [...prevSessions, doc.id]);
      });
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-6">
      {sessions.map((session, index) => (
        <Card session={session} />
      ))}
    </div>
  );
}

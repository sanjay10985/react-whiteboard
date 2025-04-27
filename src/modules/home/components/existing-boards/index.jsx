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
import { useBoard } from "@/contexts/board";
import Loader from "@/components/loader";

export default function ExistingBoards() {
  const { isLoading, setIsLoading } = useBoard();
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const sessionsCol = collection(db, "sessions");

    const q = query(
      sessionsCol,
      where("ownerId", "==", auth.currentUser.uid)
      // orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      // Clear canvas before redra  wing all strokes on snapshot refresh

      snapshot.docs.forEach((doc) => {
        setSessions((prevSessions) => [...prevSessions, doc.id]);
      });
    });
    setIsLoading(false);

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
      {sessions.length === 0 ? (
        <div className="col-span-full text-center py-12 text-gray-500">
          No boards created yet. Create your first board!
        </div>
      ) : (
        sessions.map((session, index) => (
          <Card key={session} session={session} />
        ))
      )}
    </div>
  );
}

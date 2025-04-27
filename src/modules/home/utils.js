import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "@/config/firebase";

export async function createSession() {
  // this writes an empty session doc and returns its ref
  const sessionRef = await addDoc(collection(db, "sessions"), {
    ownerId: auth.currentUser.uid,
    createdAt: serverTimestamp(),
  });

  // sessionRef.id is your sessionId
  return sessionRef.id;
}

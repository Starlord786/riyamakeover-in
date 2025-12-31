import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export const updateUserRole = async (user, role) => {
    if (!user) return;
    const userRef = doc(db, "users", user.uid);

    // We get the doc first to check existing timestamps
    let userSnap;
    try {
        userSnap = await getDoc(userRef);
    } catch (error) {
        console.error("Error reading user doc:", error);
        // If error (e.g. permission), we might just try to setDoc with merge
    }

    const dataToUpdate = {
        email: user.email,
        displayName: user.displayName || user.email.split('@')[0],
        photoURL: user.photoURL,
        lastLogin: serverTimestamp(),
    };

    if (role === 'makeover') {
        dataToUpdate.isMakeoverUser = true;
        // Only set joinedAt if not already set
        if (!userSnap || !userSnap.exists() || !userSnap.data()?.makeoverJoinedAt) {
            dataToUpdate.makeoverJoinedAt = serverTimestamp();
        }
    } else if (role === 'tattoo') {
        dataToUpdate.isTattooUser = true;
        if (!userSnap || !userSnap.exists() || !userSnap.data()?.tattooJoinedAt) {
            dataToUpdate.tattooJoinedAt = serverTimestamp();
        }
    }

    try {
        await setDoc(userRef, dataToUpdate, { merge: true });
    } catch (err) {
        console.error("Error updating user role:", err);
        throw err;
    }
};

export const checkUserRole = async (uid, role) => {
    if (!uid) return false;
    try {
        const userRef = doc(db, "users", uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            const data = userSnap.data();
            if (role === 'makeover') return !!data.isMakeoverUser;
            if (role === 'tattoo') return !!data.isTattooUser;
        }
    } catch (error) {
        console.error("Error checking role:", error);
    }
    return false;
};

// src/utils/getLikedProducts.js
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebaseConfig';

export const getLikedProducts = async (email) => {
  try {
    const userRef = doc(db, 'likes', email);
    const snapshot = await getDoc(userRef);

    if (snapshot.exists()) {
      return snapshot.data(); // { productId1: true, productId2: true }
    } else {
      return {};
    }
  } catch (error) {
    console.error('Xatolik:', error);
    return {};
  }
};

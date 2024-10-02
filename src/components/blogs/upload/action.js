"use server";

import { db, storage } from "@/app/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import toast from "react-hot-toast";

export const upload_image = async (previousState, formData) => {
  try {
    

    const title = formData.get("title");
    const content = formData.get("content");
    const category = formData.get("category");
    const author_name = formData.get("author_name");
    const date = new Date().toISOString();
    const image = formData.get("image");

    const storageRef = ref(
      storage,
      `uploads/${Date.now() + "-" + image.name.split(".")[0]}`
    );

    const metaData = {
      contentType: image.type,
    };
    const snapshot = await uploadBytesResumable(storageRef, image, metaData);

    // console.log("test", snapshot);
    const downloadURL = await getDownloadURL(snapshot.ref);

    console.log("consoleCheck", downloadURL);

    const docRef = await addDoc(collection(db, "blogs"), {
      title,
      content,
      category,
      author_name,
      date,
      image: downloadURL,
    });

    return {
      data: docRef.id,
    };
  } catch (error) {
    console.log("error: ", error);
  }
};

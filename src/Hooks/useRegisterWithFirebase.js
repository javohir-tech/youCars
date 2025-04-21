//FireBase imports
import { auth } from "@/Firebase/firebaseConfig"
import { message } from "ant-design-vue";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//pinia
import { useUserStore } from "@/Stores/useUserStore";

// const userStore = useUserStore()
export const useRegisterWithFirebase = () => {
    const provider = new GoogleAuthProvider()
    const registerWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                message.success("welcome")
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
                message.error(errorMessage)
            });
    }

    return { registerWithGoogle }
}
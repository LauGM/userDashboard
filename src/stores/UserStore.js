import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { useTitle } from '@vueuse/core';

export const useUserStore = defineStore('user', () => {
    const auth = ref(null);
    const activeUser = ref(null);
    const title = useTitle();

    const getAuthState = () => {
        auth.value = getAuth();
        onAuthStateChanged(auth.value, (user) => {
            user && addActiveUser(user);
        })
    };

    const addActiveUser = (user) => {
        activeUser.value = {
            name: user.displayName,
            email: user.email,
            registerDate: user.metadata.creationTime,
            lastLogin: user.metadata.lastSignInTime,
            verified: user.emailVerified,
            avatar: user.photoURL,
        }
        if(activeUser.value.name){
            title.value=activeUser.value.name + '`s dashboard';
        }
    }

    const removeActiveUser = () => {
        activeUser.value = null;
    }

    const logOut = () => {
        signOut(auth.value).then(() => {
            removeActiveUser();
            title.value='Dashboard usuarios';
        })
    }

    const postNewName = async (newName) => {
        activeUser.value.name = newName;
        // Actualiza el nombre del usuario en Firebase Authentication
        try {
            await updateProfile(auth.value.currentUser, { displayName: newName });
            console.log('Nombre del usuario actualizado en Firebase Auth');
        } catch (error) {
            console.log('No se pudo actualizar');
        }
    }

    const postNewAvatar = async (newAvatar) => {
        console.log(newAvatar);
        activeUser.value.avatar = newAvatar;
        // Actualiza el nombre del usuario en Firebase Authentication
        try {
            await updateProfile(auth.value.currentUser, { photoURL: newAvatar });
            console.log('Avatar actualizado en Firebase Auth');
        } catch (error) {
            console.log('No se pudo actualizar');
        }
    }

    return { auth, activeUser, getAuthState, logOut, postNewName, postNewAvatar }
})
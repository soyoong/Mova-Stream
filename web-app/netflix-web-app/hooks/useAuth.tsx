import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth } from "../config/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";

interface IAuth {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<IAuth>({
  user: null,
  signUp: async () => {},
  signIn: async () => {},
  logout: async () => {},
  loading: false,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const router = useRouter();

  // Persisting the user
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Logged in...
          setUser(user);
          setLoading(false);
        } else {
          // Not logged in...
          setUser(null);
          setLoading(false);
          router.push("/login");
        }
        setInitialLoading(false);
      }),
    [auth]
  );

  const signUp = async (email: string, password: string) => {
    setLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        let user = userCredential.user;

        sendEmailVerification(user).then(() => {
          let msg = "An email verification link has been sent to " + user.email;
          toast.success(msg);
        });

        setUser(user);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.code);
      })
      .finally(() => setLoading(false));
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        let user = userCredential.user;

        if (user.emailVerified) {
          toast.success("User login successful 🎉");
          setUser(user);
          router.push("/");
        } else {
          toast.error("Please verify the email address in your mailbox");
        }
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.code);
      })
      .finally(() => setLoading(false));
  };

  const logout = async () => {
    setLoading(true);

    signOut(auth)
      .then(() => {
        setUser(null);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.code);
        setLoading(false);
      });
  };

  const memoedValue = useMemo(
    () => ({
      user,
      signUp,
      signIn,
      logout,
      loading,
    }),
    [user, signUp, signIn, logout, loading]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      <Toaster position="top-center" reverseOrder={false} />
      {!initialLoading && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}

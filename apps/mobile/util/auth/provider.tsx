import { useRouter, useSegments } from "expo-router";
import React from "react";

interface IUser {
  name: string;
}
interface IAuthContext {
  user: IUser | null;
  handler(data: IUser | null): void;
}
interface IAuthProvider {
  children: React.ReactNode;
}

const AuthContext = React.createContext<IAuthContext | null>(null);

// This hook can be used to access the user info.
export function useAuthSession() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user: IUser | null) {
  const segments = useSegments();
  const router = useRouter();
  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    if (
      //? If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      //? Redirect to the sign-in page.
      router.replace("/signin");
    } else if (user && inAuthGroup) {
      //? Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, segments]);
}

export function AuthProvider(props: IAuthProvider) {
  const [user, setAuth] = React.useState<IUser | null>(null);
  useProtectedRoute(user);
  const authHandler = React.useCallback(setAuth, [user]);
  return (
    <AuthContext.Provider
      value={{
        user,
        handler: authHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export function useSignIn() {
  const { user, handler: setAuth } = useAuthSession();
  const singInHandler = React.useCallback(() => {
    console.log("SignIn");
    setAuth({ name: "Abhi" });
  }, [user]);
  return { user, signIn: singInHandler };
}

export function useSignOut() {
  const { user, handler: setAuth } = useAuthSession();
  const singOutHandler = React.useCallback(() => {
    console.log("SignOut");
    setAuth(null);
  }, [user]);
  return { user, signOut: singOutHandler };
}

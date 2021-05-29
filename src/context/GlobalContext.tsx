import { useState, useEffect, createContext, FC, MouseEvent, Fragment } from "react";
// import Auth from "@aws-amplify/auth";
// import Amplify from "@aws-amplify/core";
// import { handleSignUp } from "../hooks/AWS";

// Amplify.configure({
//   Auth: {
//     manditorySignId: true,
//     region: "us-east-1", //config.cognito.REGION,
//     userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USERPOOLID,
//     userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_CLIENTID,
//   },
// });
interface GlobalContextProps {
  // Auth: typeof Auth;
  currentUser: ICurrentUser | null;
  handleSignIn: (e: MouseEvent) => Promise<void>;
  handleLogOut: (e: MouseEvent) => Promise<void>;
  // handleSignUp: typeof handleSignUp;
  handleSignUp: (e: MouseEvent) => Promise<void>;
}

interface ICurrentUser {
  name: string;
  email: string;
  sub: string;
}

export const GlobalContext = createContext<Partial<GlobalContextProps>>({});

export const GlobalProvider: FC = ({ children }) => {
  /**
   * TODO: This will be used for updating the current location of the user
   * Instead of useing only a string an object instead may be better so that
   * additional info can be passed as well.
   */
  // const [currPageLocation, setCurrPageLocation] = useState("");

  // const [errors, setErrors] = useState({
  //   cognito: null,
  //   blankfield: false,
  //   passwordmatch: false,
  //   terms: false,
  // });

  const [currentUser, setCurrentUser] = useState<ICurrentUser | null>(null);
  const [isModalOpen, setModalState] = useState(false);

  useEffect(() => {
    // (async () => {
    //   if (!currentUser) {
    //     await checkAuthSession();
    //   }
    // })();
  }, [currentUser]);
  //Auth, currentUser, handleLogOut, handleSignIn, handleSignUp
  return <GlobalContext.Provider value={{ currentUser, handleLogOut, handleSignIn, handleSignUp }}>{children}</GlobalContext.Provider>;

  // function toggleModal() {
  //   setModalState(!isModalOpen);
  // }
  // async function handleSignIn() {
  //   setModalState(true);
  // }
  async function handleLogOut(e: MouseEvent) {
    e.preventDefault();
    // try {
    //   // await Auth.signOut();
    //   setCurrentUser(null);
    // } catch (err) {
    //   console.log(err.message);
    // }
  }

  async function handleSignIn(e: MouseEvent) {
    e.preventDefault();
    // try {
    //   const session = await Auth.signIn({
    //     //TODO: Remove the folloing values. They are for testing only.
    //     username: process.env.NEXT_PUBLIC_TEST_USERNAME!,
    //     password: process.env.NEXT_PUBLIC_TEST_PASSWORD!,
    //   });
    //   setCurrentUser(session.attributes);
    // } catch (err) {
    //   console.log(err.message);
    // }
  }

  async function handleSignUp(e: any) {
    e.preventDefault();
  }
  // async function checkAuthSession() {
  //   try {
  //     const session = await Auth.currentAuthenticatedUser();
  //     if (session) {
  //       setCurrentUser(session.attributes);
  //     }
  //     return;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
};

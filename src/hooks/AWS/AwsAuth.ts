export {};
// import Auth from "@aws-amplify/auth"; //TODO: Import Auth from Context
// import { ISignUpResult } from "amazon-cognito-identity-js";

// interface Traveler {
//   id: string;
//   email: string;
//   name?: string;
// }

// export async function handleSignUp(name: string, email: string, password: string): Promise<ISignUpResult> {
//   //TODO: Add paramater validation before calling the API.
//   try {
//     const cognitoSignUpResponse = await Auth?.signUp({
//       username: email, //`${d.getTime()}@ilanlyfe.com`, //Testing: userflow (original=> password: email,)
//       password: password,
//       attributes: {
//         email,
//         name,
//       },
//     });
//     const traveler = {
//       id: cognitoSignUpResponse.userSub,
//       email,
//       name,
//     };
//     //TODO: Change from localStorage to sessionStorage.
//     // sessionStorage.setItem("traveler", JSON.stringify(traveler));
//     localStorage.setItem("traveler", JSON.stringify(traveler));
//     return cognitoSignUpResponse;
//   } catch (error) {
//     console.log(error);
//     return error;
//     // let err = null;
//     // !error.message ? (err = { message: error }) : (err = error);
//     // alert(!error.message ? error : error.message);
//   }
// }

// export async function resetPassword() {}

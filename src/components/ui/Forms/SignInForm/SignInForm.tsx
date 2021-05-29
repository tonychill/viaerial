import { FC, useContext } from "react";
import { GlobalContext } from "../../../../context";

interface ISignInFormProps {
  toggleSignInModalState: () => void;
}

const SignInForm: FC<ISignInFormProps> = ({ toggleSignInModalState }) => {
  const { handleSignIn } = useContext(GlobalContext);
  return (
    <div>
      <div>SignInForm</div>
      <button onClick={(e) => handleSignInProcess(e)}>Sign In</button>
    </div>
  );
  async function handleSignInProcess(e: any) {
    try {
      if (handleSignIn !== undefined) {
        await handleSignIn(e);
        toggleSignInModalState();
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export default SignInForm;

/*** Notes ***
 * Notes go here.
 */

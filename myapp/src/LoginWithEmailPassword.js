import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseUtils";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  width: 100%; // fill entire width of parent container
  height: 100%; // fill entire height of parent container
  color: white; // button text colour
`;

const SignInButton = ({ email, password, callback }) => {
  const signInUser = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      const user = res.user;
      let idToken = await user.getIdToken(true);
      callback(idToken);
      // Verify and register user with backend
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${idToken}`,
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (e) {
      window.alert(e.code);
    }
  };
  return <Button onClick={signInUser}>Login</Button>;
};

export default SignInButton;

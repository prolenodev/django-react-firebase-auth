import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseUtils";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  width: 100%; // fill entire width of parent container
  height: 100%; // fill entire height of parent container
  margin-top: 40px;
  &:hover {
    color: #5b5b5b;
  }
  &:active {
    color: #edf2f7;
  }
`;

const SignUp = ({ email, password, callback }) => {
  const registerNewUser = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      console.log(res.user);
      let idToken = await user.getIdToken(true); //true is for refreshing token
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
  return (
    <Button onClick={registerNewUser}>Don't have an account? Sign Up</Button>
  );
};

export default SignUp;

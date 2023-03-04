import { useState } from "react";
import { auth } from "./FirebaseUtils";
import SignInButton from "./LoginWithEmailPassword";
import GoogleButton from "./SignInWithGoogle";
import SignUp from "./SignupWithEmailPassword";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px; // restrict width of form
  margin: 0 auto; // center form horizontally
  max-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  font-weight: medium;
  margin-bottom: 10px;
  border-radius: 12px;
  background-color: #2768a5;
  color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  padding: 8px;
  &:hover {
    background-color: #5b5b5b;
  }
  &:active {
    background-color: #edf2f7;
  }
`;

const StyledSignInButton = styled(Button)``;

const SeparatorWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;

const SeparatorLine = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: #ccc;
`;

const SeparatorText = styled.div`
  margin: 0 10px;
  color: #ccc;
  font-weight: bold;
`;

const AuthorizationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const callPrivateApi = async () => {
    const response = await fetch("http://localhost:8000/api/verified", {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    window.alert(`message: ${data.message} user: ${data.user}`);
  };
  const refreshToken = async () => {
    const user = await auth.currentUser;
    if (user) {
      let idToken = await user.getIdToken(true);
      setToken(idToken);
    }
  };
  return (
    <Wrapper>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <StyledSignInButton>
        <SignInButton email={email} password={password} callback={setToken} />
      </StyledSignInButton>

      <SeparatorWrapper>
        <SeparatorLine />
        <SeparatorText>or</SeparatorText>
        <SeparatorLine />
      </SeparatorWrapper>

      <GoogleButton>Sign in with Google</GoogleButton>

      <SignUp email={email} password={password} callback={setToken} />

      <SeparatorWrapper>
        <SeparatorLine />
        <SeparatorText>Developer Tools:</SeparatorText>
        <SeparatorLine />
      </SeparatorWrapper>

      <Button onClick={callPrivateApi}>Call Private endpoint</Button>
      <Button onClick={refreshToken}>Refresh Token</Button>
      <div>Token: {token}</div>
    </Wrapper>
  );
};

export default AuthorizationForm;

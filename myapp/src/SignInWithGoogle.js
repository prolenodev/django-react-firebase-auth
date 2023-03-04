import styled from "styled-components";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./FirebaseUtils";

const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  font-weight: medium;
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

const GoogleButton = ({ callback }) => {
  const onClick = async () => {
    const res = await signInWithPopup(auth, new GoogleAuthProvider());
    const user = res.user;
    console.log(user);
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
  };

  function GoogleSignInButton() {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="18px"
        height="18px"
      >
        {/* <rect x="0" y="0" width="48" height="48" fill="white" /> */}
        <g>
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
          ></path>
          <path
            fill="#4285F4"
            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
          ></path>
          <path
            fill="#FBBC05"
            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
          ></path>
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
          ></path>
          <path fill="none" d="M0 0h48v48H0z"></path>
        </g>
      </svg>
    );
  }

  return (
    <StyledButton onClick={onClick}>
      <div
        style={{
          backgroundColor: "white",
          width: "30px",
          height: "30px",
          borderRadius: "4px",
          marginRight: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2px",
        }}
      >
        <GoogleSignInButton />
      </div>
      <span>Sign in with Google</span>
    </StyledButton>
  );
};

export default GoogleButton;

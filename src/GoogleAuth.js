import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";

import { Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// import { useGoogleLogin } from "react-google-login";
// import { useGoogleLogout } from "react-google-login";

// const { signIn, loaded } = useGoogleLogin({
//   onSuccess,
//   onAutoLoadFinished,
//   clientId,
//   cookiePolicy,
//   loginHint,
//   hostedDomain,
//   autoLoad,
//   isSignedIn,
//   fetchBasicProfile,
//   redirectUri,
//   discoveryDocs,
//   onFailure,
//   uxMode,
//   scope,
//   accessType,
//   responseType,
//   jsSrc,
//   onRequest,
//   prompt,
// });

// const { signOut, loaded } = useGoogleLogout({
//   jsSrc,
//   onFailure,
//   clientId,
//   cookiePolicy,
//   loginHint,
//   hostedDomain,
//   fetchBasicProfile,
//   discoveryDocs,
//   uxMode,
//   redirectUri,
//   scope,
//   accessType,
//   onLogoutSuccess,
// });

const responseGoogle = (response) => {
  console.log(response);
};

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <React.Fragment>
      {isSignedIn ? (
        <GoogleLogout
          clientId="1078565876117-44185hr9den3akash7u8pcp1dq678p4p.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={() => setIsSignedIn(false)}
          //   onLogoutSuccess={responseGoogle}
          onFailure={responseGoogle}
          render={(renderProps) => (
            <Button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              color="inherit"
            >
              <AccountCircleIcon
                fontSize="large"
                style={{ margin: "0.5rem" }}
              />
              Logout
            </Button>
          )}
        />
      ) : (
        <GoogleLogin
          clientId="1078565876117-44185hr9den3akash7u8pcp1dq678p4p.apps.googleusercontent.com"
          buttonText="Login"
          //   onSuccess={responseGoogle}
          onSuccess={() => setIsSignedIn(true)}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            <Button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              color="inherit"
            >
              <AccountCircleIcon
                fontSize="large"
                style={{ margin: "0.5rem" }}
              />
              Login with Google
            </Button>
          )}
        />
      )}
    </React.Fragment>
  );
};

export default GoogleAuth;

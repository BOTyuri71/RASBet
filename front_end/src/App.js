import React, { useEffect } from "react";
import AuthContext from "../src/context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import { Routes } from "react-router-dom";

const App = () => {

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.userToken,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.userToken,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isSignout: false,
      userToken: null,
    }
  );



  const authContext = React.useMemo(
    () => ({
      signIn: async (email, password) => {
        console.log("http://127.0.0.1:9000/user/login")
        await fetch("http://127.0.0.1:9000/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(response => {
            sessionStorage.setItem('userToken', response.data);
            dispatch({ type: 'SIGN_IN', userToken: response.data});
        })
        .catch(error => {
            console.log(error);
            alert("De momento não é possível processar a autenticação!");
        });
      },
      signOut: () => {
        sessionStorage.removeItem("userToken");
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {
        const id =  await fetch("http://127.0.0.1:9000/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            if(response.data) {
            return response.data
            }else{
            alert(response.status);
            }
        })
        .catch(error => {
            console.log(error);
            alert("Erro ao registar!");
        });
        return id
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      {state.userToken == null ? <AuthRoutes /> : <AppRoutes />}
    </AuthContext.Provider>
  );
};

export default App;
import React, { useEffect } from "react";
import axios from "axios";
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
        await axios
        .post("http://127.0.0.1:9000/user/login", {
            email: email,
            password: password,
        })
        .then((response) => {
            localStorage.setItem('userToken', response.data);
            dispatch({ type: 'SIGN_IN', userToken: response.data});
        })
        .catch((error) => {
            console.log(error);
            alert("De momento não é possível processar a autenticação!");
        });
      },
      signOut: () => {
        localStorage.removeItem("userToken");
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {
        const id =  await axios
        .post("http://127.0.0.1:9000/user/register", data)
        .then((response) => {
            if(response.data) {
            return response.data
            }else{
            alert(response.status);
            }
        })
        .catch((error) => {
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

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

  
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const getToken = async () => {
      try {
        const jsonValue = await localStorage.getItem("userToken");
        if (jsonValue != null) {
          dispatch({ type: "RESTORE_TOKEN", userToken: JSON.parse(jsonValue) });
        }
      } catch (e) {
        console.log(e);
      }
    };
    getToken();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (email, password) => {
        console.log("http://localhost:9000/users/login")
        await axios
        .post("http://localhost:9000/users/login", {
            username: email,
            password: password,
        })
        .then((response) => {
            if(response.data) {
            localStorage.setItem('userToken', JSON.stringify(response.data));
            dispatch({ type: 'SIGN_IN', userToken: JSON.stringify(response.data) });

            }else{
            alert(response.status);
            }
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
        .post("http://localhost:9000/user/register", data)
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
        return  id
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

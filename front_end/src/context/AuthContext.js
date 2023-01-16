 import * as React from "react";
 import {
   getItem as getToken,
   setItem as setToken,
   removeItem as removeToken,
 } from "../config/session-storage";
 import axios from "axios";
 
 const AuthContext = React.createContext();
 
 export default AuthContext;
 
 export const useAuthorization = () => {
   const context = React.useContext(AuthContext);
   if (!context) {
     throw new Error("Error");
   }
   return context;
 };
 
 export const AuthProvider = (props) => {

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
 
   React.useEffect(() => {
     const initState = async () => {
       try {
         const authToken = await getToken();
         if (authToken !== null) {
           dispatch({ type: "RESTORE_TOKEN", userToken: authToken });
         }
       } catch (e) {
         console.log(e);
       }
     };
     initState();
   });
 
   const actions = React.useMemo(
     () => ({
       signIn: async (email, password) => {
         console.log("http://127.0.0.1:9000/user/login");
         await axios
           .post("http://127.0.0.1:9000/user/login", {
             email: email,
             password: password,
           })
           .then((response) => {
               let token = response.data;
               setToken(token);
               dispatch({ type: "SIGN_IN", userToken: JSON.stringify(token) });
           })
           .catch((error) => {
             console.log(error);
             alert("De momento não é possível processar a autenticação!");
           });
       },
       signOut: async () => {
         dispatch({ type: "SIGN_OUT" });
         await removeToken();
       },
       signUp: async (data) => {
        const id =  await axios
        .post("http://127.0.0.1:9000/user/register", data)
        .then((response) => {
            if(response.data) {
              return response.data
            }
            else{
            alert(response.status);
            }
        })
        .catch((error) => {
            console.log(error);
            alert("Erro ao registar!");
        });
        return id;
      },
     }),
     [state, dispatch]
   );
 
   return (
     <AuthContext.Provider value={{ ...state, ...actions }}>
       {props.children}
     </AuthContext.Provider>
   );
 };
 
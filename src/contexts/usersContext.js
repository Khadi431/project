import axios from "axios";
import { createContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";
import RegisterUserScreen from "../screens/RegisterUserScreen";

const initialState = {
  ispending: true,
  user: {},
  error: null,
};

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  //Login a user
  async function LoginUser() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://trainees-api.herokuapp.com/api/v1/users/login"
    );

    dispatch({
      type: "LOGIN_USER",
      payload: data,
    });
    localStorage.setItem("userInfo", data);

    console.log(data);
    async function RegisterUserScreen(newuser) {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = await axios.post(
          "https://trainees-api.herokuapp.com/api/user/register",
          newuser,
          config
        );

        dispatch({
          type: "REGISTER_USER",
          payload: data,
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  }
  return (
    <UserContext.Provider
      value={{
        LoginUser,
        user: state.user,
        ispending: state.ispending,
        RegisterUserScreen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

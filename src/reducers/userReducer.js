const userReducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN":
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      return {
        ...state,
        userInfo: JSON.parse(localStorage.getItem("userInfo")),
      };
    case "SIGNUP":
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
      
    default:
      return state;
  }
};

export default userReducer;

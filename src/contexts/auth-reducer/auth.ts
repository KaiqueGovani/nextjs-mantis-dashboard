// initial state
export const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

// ==============================|| AUTH REDUCER ||============================== //

export enum AuthActionTypes {
  REGISTER = '@auth/REGISTER',
  LOGIN = '@auth/LOGIN',
  LOGOUT = '@auth/LOGOUT'
}

type AuthAction = {
  type: AuthActionTypes;
  payload: any;
};

const auth = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.REGISTER: {
      const { user } = action.payload;
      return {
        ...state,
        user
      };
    }
    case AuthActionTypes.LOGIN: {
      const { user } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        isInitialized: true,
        user
      };
    }
    case AuthActionTypes.LOGOUT: {
      return {
        ...state,
        isInitialized: true,
        isLoggedIn: false,
        user: null
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default auth;

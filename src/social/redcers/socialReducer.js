import { socialType } from "../types/socialTypes";
export const socialReducer = (state = {}, action) => {
  switch (action.type) {
    case socialType.loadTwitts:
      return {
        ...state,
        twitts: [...action.payload],
      };
    case socialType.saveTwit:
      return {
        ...state,
        twitts: state.twitts.push(action.payload),
      };
    case socialType.updateTwit:
      return {
        ...state,
        twitts: state.twitts.map((twitts) => {
          if (twitts.id === action.payload.id) {
            return { ...action.payload };
          }
          return twitts;
        }),
      };
    case socialType.errorTwit:
      return {
        ...state,
        errorMessage: action.payload?.errorMessage,
      };
    case socialType.loadUsers:
      console.log("Usuarios cargados:", action.payload); // Verifica aquí los usuarios
      return {
        ...state,
        users: [...action.payload],
      }; // Guarda los usuarios en el estado

    default:
      return state;
  }
};

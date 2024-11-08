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
      return {
        ...state,
        users: [...action.payload],
      }; // Guarda los usuarios en el estado
    case socialType.followUser:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case socialType.unfollowUser:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case socialType.updateFollowStatus:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.userId
            ? { ...user, followed: action.payload.isFollowing }
            : user
        ),
      };
    case socialType.loadUserTweetsByName:
      return {
        ...state,
        twitts: [...action.payload], // Actualiza los tweets con el nombre del usuario
      };
    default:
      return state;
  }
};

import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initailState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initailState);

  // // get search results
  // const searchUsers = async (text) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     q: text,
  //   });

  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const { items } = await response.json();
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: items,
  //   });
  // };

  // // get single user
  // const getUser = async (login) => {
  //   setLoading();

  //   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   console.log(response);

  //   const data = await response.json();
  //   console.log(data);
  //   dispatch({
  //     type: "GET_USER",
  //     payload: data,
  //   });
  // };

  // // get user repos
  // const getUserRepos = async (login) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     sort: "created",
  //     per_page: 10,
  //   });

  //   const response = await fetch(
  //     `${GITHUB_URL}/users/${login}/repos?${params}`,
  //     {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   dispatch({
  //     type: "GET_REPOS",
  //     payload: data,
  //   });
  // };

  // // clear users from state
  // const clearUsers = () => {
  //   dispatch({ type: "CLEAR_USERS" });
  // };

  // // set loading func
  // const setLoading = () => {
  //   dispatch({ type: "SET_LOADING" });
  // };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

import { useEffect, useReducer } from "react";

interface IAction {
  type: "loading" | "fetched" | "error";
  payload?: any;
}

interface IState {
  data: any;
  error: string | undefined;
}

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
      };
    case "fetched":
      return {
        ...state,
        data: action.payload,
      };
    case "error":
      return {
        ...state,
        error: action.payload,
      };
  }
}

export default function useFetch(
  url: string,
  initialState: IState,
  options?: RequestInit | undefined
) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onFetch = () => {
    return fetch(url, options);
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: "loading",
      });
      try {
        const response = await onFetch();
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch({
          type: "fetched",
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: "error",
          payload: JSON.stringify(error),
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
}

import { createContext, useContext, useReducer, ReactNode } from "react";

type State = { user: string | null };
type Action = { type: "SET_USER"; payload: string } | { type: "LOGOUT" };

const AppContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

const reducer = (state: State, action: Action): State => {
  if (action.type === "SET_USER") return { user: action.payload };
  if (action.type === "LOGOUT") return { user: null };
  return state;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { user: null });
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>);
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

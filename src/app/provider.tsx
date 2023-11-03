import { store } from "../redux/store";
import { Provider } from "react-redux";

type ReduxProviderProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

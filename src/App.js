import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import GamePage from "./Pages/GamePage/GamePage";
import { store } from "./redux/rootReducer";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/games_lib" element={<GamePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;

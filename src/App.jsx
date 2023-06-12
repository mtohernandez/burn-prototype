import { useEffect, useState, createContext } from "react";
import "./App.css";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import supabase from "./supabase";

const AuthContext = createContext();

function App() {
  const [isLogged, setIsLogged] = useState(false);

  async function getUser() {
    const data = (await supabase.auth.getSession()).data.session;

    if (data) {
      setIsLogged(true);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={isLogged}>
      {isLogged ? <Home /> : <LogIn />}
    </AuthContext.Provider>
  );
}

export default App;

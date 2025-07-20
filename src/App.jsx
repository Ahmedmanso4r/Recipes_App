import { BrowserRouter,} from "react-router";
import RouterList from "./Routes/RouterList.jsx";
import UserAuthenticatedContext from "./context/UserAuthenticated.js";
import { useState } from "react";
function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  return (
    <UserAuthenticatedContext.Provider value={{isUserAuthenticated , setIsUserAuthenticated}}>
    <BrowserRouter>
    <RouterList />
    </BrowserRouter>
    </UserAuthenticatedContext.Provider>
  );
}

export default App;

import React from "react";

const AppContext = React.createContext({
  authUser: null,
  currentUser: null
});

export default AppContext;

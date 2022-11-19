// import Slice from "./Redux-files/Slice";
// import { store } from "@reduxjs/toolkit";
import Home from "./Redux-files/Home";
// import { store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { store } from "./Redux-files/Store";




function App() {


  return (
    <div>


      <div>
        <Provider store={store}>
          <Home/>
        </Provider>
      </div>
{/* 
      <Provider store={store}>
        <Home/>
      </Provider> */}
   
    
    
    </div>
  );
}

export default App;

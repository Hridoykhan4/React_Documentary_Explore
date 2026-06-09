import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
import BookMarkProvider from "./provider/BookMarkProvider";
import UserProvider from "./provider/UserProvider";

class Hi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(this.props.local)
    }
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.setState({date: new Date().toLocaleTimeString(this.props.local)}), 1000)
  }
  componentWillUnmount() {
    console.log('will unmount');
  }
  render ()  {
    return (
      <div className="p-10">
        <h2>{new Date().toLocaleTimeString(this.props.local)}</h2>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(<Hi local="bn-BD"></Hi>)

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BookMarkProvider>
//       <UserProvider>
//         <RouterProvider router={router}></RouterProvider>
//       </UserProvider>
//     </BookMarkProvider>
//   </StrictMode>
// );

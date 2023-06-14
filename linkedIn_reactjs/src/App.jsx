// import Header from "./header"
// import Sidebar from "./sidebar.jsx"
// import "./app.css"
// import Feed from "./feed"
// import { useDispatch, useSelector } from 'react-redux'
// import { auth } from './firebase'

import Loginpage from "./loginpage"
import Signup from "./signup"
// import { useEffect } from "react"
// import { login } from "./redux/linkedinSlice"
// import { logout } from "./redux/linkedinSlice"
// import Widgets from "./widgets"


import Mainheader from "./page/mainheader"
import Mainsection from "./page/mainsection"
import { createBrowserRouter ,  RouterProvider } from "react-router-dom"



// function App() {

//   const myUser = useSelector(state => state.linreducer.user)
 

  

//   return (
//     <div className="app">
//     <Header/>
//     { !myUser ?( <Loginpage/> 
//     ):(
//       <div className="app_body">
//       <Sidebar/>
//       <Feed/>
//       <Widgets/>

//     </div>


//     )}
    
    
//     </div>
//   )
// }

// export default 


const router = createBrowserRouter([
  {
    path:"/" ,
    element: <Mainheader/> ,


    children :[{
      path: "/" ,
      element: <Loginpage/> ,




    } ,{
      path : "/mainsection" ,
      element: <Mainsection/>
    } ,
    {
      path : "/signup" ,
      element : <Signup/>
    }
  ]
  }
])

export default function App() {

  return <RouterProvider router ={router} >
  

  </RouterProvider>

}

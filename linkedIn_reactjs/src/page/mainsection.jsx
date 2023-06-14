// import React from 'react'

// function Mainsection() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Mainsection



// import Header from "./header"
import Sidebar from "../sidebar"
import "../App.css"
import Feed from "../feed"




import Widgets from "../widgets"

function Mainsection() {

//   const myUser = useSelector(state => state.linreducer.user)
  // const dispatch = useDispatch()

  // useEffect(() =>{
  //   auth.onAuthStateChanged((userAuth) =>{
  //     if(userAuth){
  //       dispatch(login({
  //         email:userAuth.email ,
  //         name : userAuth.displayName ,
  //         uid : userAuth.uid , 
  //         photoUrl : userAuth.photoURL , 


  //       }))
  //     }else{
  //       dispatch(logout())
  //     }
  //   })
  // } , [])

  

  return (
    <div className="app_body">
      <Sidebar/>
      <Feed/>
      <Widgets/>

    </div>
  )
}

export default Mainsection

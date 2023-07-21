

import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import { useEffect, useState } from "react";





const Home =()=>{
  const [tutorials,setTutorials] = useState([])
const BASE_URL = " https://tutorial-api.fullstack.clarusway.com/tutorials/"

const getTutorials=async () => {
const data = await axios(BASE_URL)
setTutorials(data.data);
}
console.log(tutorials);
// getTutorials()

useEffect(() => {
  getTutorials();
}, []);

  return(

<>

<AddTutorial/>
<TutorialList/>

</>

  )
}

export default Home;

























// import { useEffect, useState } from "react"
// import AddTutorial from "../components/AddTutorial"
// import TutorialList from "../components/TutorialList"
// import axios from "axios"

// const Home = () => {
//   const [tutorials, setTutorials] = useState([])

//   const getTutorials = async () => {
//     const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"
//     try {
//       // const res = await axios(BASE_URL)
//       // setTutorials(res.data)
//       const { data } = await axios(BASE_URL)
//       setTutorials(data)
//     } catch (error) {
//       console.log(error)
//     }
//   }

  

//   console.log(tutorials)

//   //? Mount asamasinda api'ye istek atiyoruz
//   useEffect(() => {
//     getTutorials()
//   }, [])

//   return (
//     <>
//       <AddTutorial getTutorials={getTutorials} />
//       <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
//     </>
//   )
// }

// export default Home

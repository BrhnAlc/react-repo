//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.





//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react
 
import { useState } from "react";


const UseStateCounter=()=>{

const [count,setCount]=useState(1)
  const handleInc=(e)=>{
    
    setCount(count + 1)
  }
  const handleClr=()=>{
    setCount(count - 1)
  }
  const handleDec=()=>{
setCount(0)
  }
  return(

    <div>
      <h2>USE STATE HOOK</h2>
      <h1>count:{count}</h1>

<button onClick={handleInc}>INC</button>
<button onClick={handleClr}>CLR</button>
<button onClick={handleDec}>DEC</button>
    </div>
  )
}


export default UseStateCounter;






















// import { useState } from 'react';
// import { useState } from 'react';
// import { useState } from "react"
// import { useState } from 'react';
// import UseStateCounter from './useStateCounter';
// import Counter from './../2-classComponent/Counter';
// import UseStateCounter from './useStateCounter';
// import Form from './../../../rc06-forms/1-forms/Form';
// import UseStateCounter from './UseStateCounter';

// const UseStateCounter = () => {
//   //   let count = 0

//   //? count adinda bir state tanimlamis olduk ve baslangic degerine 0 atadik.
//   const [count, setCount] = useState(0)

//   const handleInc = () => {
//     // count = count + 1
//     setCount(count + 1)
//     console.log(count)
//   }

//   return (
//     <div>
//       <h2>USE STATE HOOK</h2>
//       <h1>Count:{count}</h1>
//       <button onClick={handleInc}>INC</button>
//       <button>CLR</button>
//       <button>DEC</button>
//     </div>
//   )
// }

// export default UseStateCounter

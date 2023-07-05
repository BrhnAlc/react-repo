

import Card from "./components/card/Card"
import data from "./data"

const App = () => {
  console.log(data);
  return (
    <div>
      <h1>LANGUAGE</h1>
      {data.map(({id,img,btnName,language})=>(
        <Card key={id} img={img} btn={btnName} lang={language}/>
      ))}

    </div>
  )
}

export default App
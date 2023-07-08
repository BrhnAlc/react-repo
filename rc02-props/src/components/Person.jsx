import Name from "./Name"


const Person = ({name,img,color}) => {
    // console.log(props);
  return (
    <div>
      <h1>Person </h1>

      <p>merhaba {name}</p>

      <Name/>
        <img src={img} alt="" />
        <p>Color:{color}</p>
        <p>merhaba {name}</p>

      <Name/>
        <img src={img} alt="" />
        <p>Color:{color}</p>
        <p>merhaba {name}</p>

      <Name/>
        <img src={img} alt="" />
        <p>Color:{color}</p>
    </div>
  )
}

export default Person
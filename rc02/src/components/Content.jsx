
//* JSX'de stillendirme farkli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Module CSS, Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.


// ? Dahili bir resim eklemek icin import yapmak gereklidir.
// ? ancak public klasöründeki resimler importsuz bir şekilde
//? erisilebilir.

import "./Content.css"



const Content = () => {
    return (
      <div>
          <h2 style={{color:"red",backgroundColor:"blue"}}>can paramparça</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis qui, vitae facere repellendus non, nostrum voluptas repudiandae quas earum tenetur totam quos tempora unde a ab veniam quam similique hic?</p>
          <img src="https://cdn.pixabay.com/photo/2023/07/01/11/40/old-tree-8100015_640.jpg" alt="bird" />

          <img src="./img/" alt="" />
      </div>
    )
  }
  
  export default Content;
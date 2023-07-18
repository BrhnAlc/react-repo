
import { useState } from 'react';



const KeyboardClipboard = () => {
  const [ content, setContent] = useState("")
  const [alaca,setAlaca]=useState("")
  const [ burhan, setBurhan] = useState("")
  const [seni,setSeni]=useState("")
  return (
    <div className="container">
      <h2 className="text-center text-danger mt-5">Keyboard-Clipboard</h2>

<input type="text" className="form-control bg-dark-subtle" onChange={(e)=>setContent(e.target.value)}/>

<input type="text" className='form-control mt-5 text-bg-danger' onChange={(e)=>setAlaca(e.target.value)}/>

   <input type="text" className='form-control mt-4 text-bg-success' onChange={(e)=>setBurhan(e.target.value)}/>

   <input type="text" className='form-control mt-4 text-bg-danger' onChange={(e)=>setSeni(e.target.value)}/>
   
   <div className="mt-4 text-center text-success">
    <h3>Copied Content</h3>
    <p className='border border-4'>{content}</p>

    <p className='border border-4 mt-5'>{alaca}</p>

    <p className='border border-4 mt-5g'>{burhan}</p>

    <p className='border border-3 mt-4sad p-4'>{seni}</p>
   </div>

    </div>
  )
}

export default KeyboardClipboard;
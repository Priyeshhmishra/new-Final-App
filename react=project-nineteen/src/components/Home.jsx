// import React, { useState } from 'react'
// import { useSearchParams } from 'react-router-dom'

// const Home = () => {
//   const [title, setTitle] = useState('')
//   const [value, setValue] = useState('')
//   const [searchParams] = useSearchParams("")
//   const pasteId = searchParams.get("pasteId")

//   return (
//     <div>
//       <div className='flex flex-row gap-8'>
//         <input
//           className='p-2 rounded-2xl mt-8 border-2 border-gray-300'
//           type='text'
//           placeholder='enter title here'
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <button className='p-2 rounded-2xl mt-8 border-2 border-gray-300'>
//           {pasteId ? "update Paste" : "Create My Paste"}
//         </button>
//       </div>
//       <div>
//         <textarea
//           value={value}
//           placeholder='enter your paste here'
//           onChange={(e) => setValue(e.target.value)}
//           rows={20}
//           className='w-full p-2 rounded-2xl mt-8 border-2 border-gray-300'
//           cols={50}
//         />
//       </div>
//     </div>
//   )
// }

// export default Home
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './Home.css'
import { useDispatch } from 'react-redux'
 
import { updateToPastes, addToPastes } from '../redux/PasteSlice'

const Home = () => {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [searchParams,setSearchParams] = useSearchParams("")
  const pasteId = searchParams.get("pasteId")
  const dispatch=useDispatch();
function createPaste(){
  const paste ={
     title:title ,
     content:value ,
     _id:pasteId ||
     Date.now().toString(36),
     createdAt:new Date().toISOString
     (),

  }
  if(pasteId){
dispatch( updateToPastes(paste));
  }else{
dispatch( addToPastes(paste));
  }
  setTitle('');
  setValue('');
  setSearchParams({});
  
}
  return (
    <div>
      <div className="home-row">
        <input
          className="input-custom"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={createPaste}
          className="button-custom">
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button>
      </div>
      <div>
        <textarea
          className="textarea-custom"
          value={value}
          placeholder="Enter your paste here"
          onChange={(e) => setValue(e.target.value)}
          rows={8}
        />
      </div>
    </div>
  )
}

export default Home
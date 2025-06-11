// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// const Paste = () => {
//   const pastes = useSelector((state) => state.Paste.pastes);
//   const [searchTerm, setSearchTerm] = useState('');
//   const dispatch = useDispatch();
//   const filteredData = pastes.filter((paste) => paste.title.toLowercase().includes
//     (searchTerm.toLowercase())
//   )
//   return (
//     <div>
//       <input
//         type='search'
//         placeholder='search here'
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)
//         }
//       />
//       <div className='flex flex-col gap-5'>
//         {
//           filteredData.length > 0 &&
//           filteredData.map(
//             (paste) => {
//               return (
//                 <div>
//                   {paste.title}
//                 </div>
//               )
//             }

//           )
//         }

//       </div>
//     </div>
//   )
// }

// export default Paste
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Paste.css'; // <-- Import your CSS file
import { removeFromPastes } from "../redux/PasteSlice";
import { toast } from 'react-hot-toast';
  import EditPaste from "./EditPaste";

 
const Paste = () => {
  const pastes = useSelector((state) => state.Paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  return (
    <div className="paste-container">
      <input
        className="search-input"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="paste-list">
        {filteredData.length > 0 &&
          filteredData.map((paste) => (
            <div className="paste-item" key={paste.id || paste.title}>
              <div>
                {paste.title}
              </div>
              <div>
                {paste.content}
              </div  >
              <div className='button-group'>
                 <button>
  <a href={`/pastes/edit/${paste._id}`}>
    edit
  </a>
</button>
                <button>
  <a href={`/pastes/${paste._id}`}>
    view
  </a>
</button>
                <button onClick={() => handleDelete(paste._id)}>
                  delete
                </button>
                <button onClick={() => {
                  navigator.clipboard.writeText(paste.content)
                  toast.success("copied to clipboard")
                }
                }>
                  copy
                </button>
                <button
  onClick={() => {
    if (navigator.share) {
      navigator.share({
        title: paste.title,
        text: paste.content,
        // url: window.location.href, // agar aap link bhi dena chahte hain
      });
    }  
  }}
>
  share
</button>
                <div>
                  {paste.createdAt}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Paste;

// import React from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

// const EditPaste = () => {
//   const { id } = useParams();
//   const pastes = useSelector((state) => state.Paste.pastes);
//   const paste = pastes.find((p) => p._id === id);

//   if (!paste) return <div>Paste not found</div>;

//   return (
//     <form>
//       <input defaultValue={paste.title} />
//       <textarea defaultValue={paste.content} />
//       <button type="submit">Update my paste</button>
//     </form>
//   );
// };

// export default EditPaste;
 import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateToPastes } from "../redux/PasteSlice"; // <-- import this

const EditPaste = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.Paste.pastes);
  const paste = pastes.find((p) => p._id === id);
  const [title, setTitle] = useState(paste ? paste.title : "");
  const [content, setContent] = useState(paste ? paste.content : "");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!paste) return <div>Paste not found</div>;

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateToPastes({ _id: id, title, content }));
    navigate("/Pastes");
  };

  return (
    <form onSubmit={handleUpdate} style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2>Edit Paste</h2>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        style={{ width: "100%", marginBottom: 10 }}
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
        rows={6}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <button type="submit">Update my paste</button>
    </form>
  );
};

export default EditPaste;
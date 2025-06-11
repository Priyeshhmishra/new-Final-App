//  import React from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Viewpaste = () => {
//   const { id } = useParams();
//   const pastes = useSelector((state) => state.Paste.pastes);
//   const paste = pastes.find((p) => p._id === id);

//   if (!paste) return <div>Paste not found</div>;

//   return (
//     <div style={{ maxWidth: 600, margin: "40px auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
//       <h2>{paste.title}</h2>
//       <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{paste.content}</pre>
//       <div style={{ marginTop: 10, color: "#888" }}>{paste.createdAt}</div>
//     </div>
//   );
// };

// export default Viewpaste;
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Viewpaste = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.Paste.pastes);
  const paste = pastes.find((p) => p._id === id);

  if (!paste) return <div>Paste not found</div>;

  // Format date
  let formattedDate = "";
  if (paste.createdAt) {
    const dateObj = new Date(paste.createdAt);
    formattedDate = dateObj.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>{paste.title}</h2>
      <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{paste.content}</pre>
      <div style={{ marginTop: 10, color: "#888" }}>{formattedDate}</div>
    </div>
  );
};

export default Viewpaste;
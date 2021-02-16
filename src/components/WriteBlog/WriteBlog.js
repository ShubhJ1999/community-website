import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import HTMLParser from "react-html-parser";

const WriteBlog = () => {
  const [data, setData] = useState("");

  const handleChange = (e, editor) => {
    const input = editor.getData();
    setData(input);
  };

  return (
    <div style={{ height: "620px" }}>
      <CKEditor editor={ClassicEditor} onChange={handleChange} />
      <p>{HTMLParser(data)}</p>
    </div>
  );
};

export default WriteBlog;

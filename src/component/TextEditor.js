import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import draftjsToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function TextEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const rawContentState = convertToRaw(editorState.getCurrentContent());
  const html = draftjsToHtml(rawContentState);
  console.log(html);

  return (
    <div className="text-editor">
      <div className="editor">
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          toolbar={{}}
        />
      </div>
      <div className="text">Drafts to HTML</div>
      <textarea className="text-area" disabled value={html}></textarea>
      <div className="html-output" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default TextEditor;

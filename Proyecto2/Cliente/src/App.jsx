import React from "react";
import "./index.css";
import Editor from "@monaco-editor/react";
import { useRef } from "react";

export default function App() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  //Open file in editor
  function openFile() {
    editorRef.current.getModel().setValue("Hello World");
    
  }

  function showValue() {
    alert(editorRef.current.getValue());
    const result = document.getElementById("result");
    
    

    
    var data = JSON.stringify({"texto": editorRef.current.getValue()});
    alert(data);

    fetch("http://localhost:3003/enviar", {
      headers: {'content-type': 'application/json'},
      method: "POST",
      body: data,
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        result.innerHTML = data.msg;
      });
      
      
  }

  return (
    <>
      <h1 class="titulo">Introduzca el código</h1>
      <br />
      <br />
      <center>
      <div>
      <button onClick={openFile} class="button-4">
          Abrir Archivo
        </button>
      </div>
        <div class="editor">
          <Editor
            height="50vh"
            theme="vs-dark"
            width="120vh"
            defaultLanguage="javascript"
            defaultValue="// some comment"
            onMount={handleEditorDidMount}
          />
        </div>

        <textarea name="result" id="result" cols="50" rows="10"></textarea>
        <br></br>
        <button onClick={showValue} class="button-3">
          Ejecutar
        </button>
      </center>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

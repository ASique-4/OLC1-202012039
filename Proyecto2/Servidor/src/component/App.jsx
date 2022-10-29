import React from "react";
import "./index.css";
import Editor from "@monaco-editor/react";
import { useRef } from "react";

export default function App() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
    const result = document.getElementById("result");
    result.innerHTML = editorRef.current.getValue();
    

    var payload = {
      texto: result.innerHTML,
    };
    alert(payload.texto)
    var data = new FormData();
    data.append("json", JSON.stringify(payload));

    fetch("http://localhost:8080/enviar", {
      method: "POST",
      body: data,
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        alert(JSON.stringify(data));
      });
  }

  return (
    <>
      <h1 class="titulo">Introduzca el código</h1>
      <br />
      <br />
      <center>
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

        <textarea name="result" id="result" cols="30" rows="10"></textarea>
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

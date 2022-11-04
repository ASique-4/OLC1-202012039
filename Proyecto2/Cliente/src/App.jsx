import React from "react";
import "./index.css";
import Editor from "@monaco-editor/react";
import { useRef } from "react";

export default function App() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  //Clean the editor
  function handleClean() {
    editorRef.current.setValue("");
  }


  //Save the content of the editor in a file
  function saveFile() {
    const content = editorRef.current.getValue();
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "file.olc");
  }

  function saveAs(blob, fileName) {
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  }


  //Open txt file in editor
  function openFile() {
    const file = document.getElementById("file").files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      editorRef.current.setValue(e.target.result);
    };
    reader.readAsText(file);
  }

  function showValue() {
    alert(editorRef.current.getValue());
    
    

    
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
        console.log(data);
        });

      
      
  }

  return (
    <>
      <h1 class="titulo">Introduzca el código</h1>
      <br />
      <br />
      <center>
      <div class="botones-div">
      <label class="custom-file-upload">
          <input id="file" type="file" />
          <i class="fa fa-cloud-upload"></i> Cargar Archivo
      </label>
      <button  class="Abrir" onClick={openFile}>Abrir Archivo Cargado</button>
      <button  class="Agregar" onClick={handleClean}>Nuevo archivo</button>
      <button  class="Guardar" onClick={saveFile}>Guardar</button>
      </div>
      <br />
        <div class="editor">
          <Editor
            height="50vh"
            theme="vs-dark"
            width="120vh"
            defaultLanguage="javascript"
            defaultValue="// some comment"
            onMount={handleEditorDidMount}
            /* Tabs */


          />
        </div>

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

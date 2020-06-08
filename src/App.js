/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import {interpreter}from './interpreter.jsx';

const testCSS = css`
  color: white;
  font-color: black;
`;

function App() {
  let outputText = '';
  let parsedJSON;

  return (
    <div className="App">
      <div className="App-header">
        base64 decoding test web
      </div>
      <div className="App-body">
        <textarea id='textinput' name='textinput'></textarea>
        <div>
          <button 
            className='btn-default'
            onClick={() => {
              const inputText = document.getElementById('textinput').value;
              outputText = interpreter(inputText)
              parsedJSON = JSON.parse(outputText)
              // document.getElementById('textoutput').innerText = parsedJSON
              dataParser(parsedJSON);
            }
          }>Submit
          </button>
          <button
            className='btn-default'
            onClick={() => {
              document.getElementsByTagName('textarea').innerHTML = '';
            }}
          >
              Clear
          </button>
        </div>
        <div className='result-area'>
          <div>
            Editor Area <br></br>
            <textarea className='output-result' id='editor-output' name='editor-output'></textarea>
          </div>
          <div>
            Comments Area <br></br>
            <textarea className='output-result' id='comment-output' name='comment-output'></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

const dataParser = (data) => {
  let editor = data.editor;
  let comments = data.comment;
  
  document.getElementById('editor-output').innerText = editor
  document.getElementById('comment-output').innerText = comments
}
export default App;

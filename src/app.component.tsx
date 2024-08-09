import { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./app.module.css";
import Button from "react-bootstrap/Button";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { NavBar } from "./components/NavBar";

const App = () => {
  const {
    unityProvider,
    isLoaded,
    loadingProgression,
    addEventListener,
    removeEventListener,
    requestFullscreen,
  } = useUnityContext({
    loaderUrl: "/unitybuild/CasinoBuild.loader.js",
    dataUrl: "/unitybuild/CasinoBuild.data",
    frameworkUrl: "/unitybuild/CasinoBuild.framework.js",
    codeUrl: "/unitybuild/CasinoBuild.wasm",
    webglContextAttributes: {
      preserveDrawingBuffer: true,
    },
  });


  const handleClickFullscreen = () => {
    if (isLoaded === false) {
      return;
    }
    requestFullscreen(true);
  };

  return (
    <div >
      <NavBar></NavBar>
    
    </div>
  );
};

export { App };

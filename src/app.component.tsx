import { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./app.module.css";
import Button from "react-bootstrap/Button";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

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

  const [isPlaying, setIsPlaying] = useState(false);
  const [scores, setScores] = useState<[number, number][]>([]);



  const handleClickFullscreen = () => {
    if (isLoaded === false) {
      return;
    }
    requestFullscreen(true);
  };


  const handleGameOver = useCallback(
    (time: number, score: number) => {
      time = Math.round(time);
      setIsPlaying(false);
      setScores([[time, score], ...scores]);
    },
    [scores]
  );

  useEffect(() => {
    addEventListener("GameOver", handleGameOver);
    return () => {
      removeEventListener("GameOver", handleGameOver);
    };
  }, [handleGameOver, addEventListener, removeEventListener]);

  return (
    <div className={styles.container}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1 style={{font: "kanit"}}>Casino Demo</h1>
      <div className="buttons" >
        <Button href="#" 
          onClick={handleClickFullscreen}
          variant="primary"
          style={{ marginLeft: "450%"
          }}
        >Fullscreen</Button>
      </div>
      <div className={styles.unityWrapper}>
        {isLoaded === false && (
          <div className={styles.loadingBar}>
            <div
              className={styles.loadingBarFill}
              style={{ width: loadingProgression * 100 }}
            />
          </div>
        )}
        <Unity
          unityProvider={unityProvider}
          style={{ display: isLoaded ? "block" : "none", 
          }}
        />
      </div>
    </div>
  );
};

export { App };

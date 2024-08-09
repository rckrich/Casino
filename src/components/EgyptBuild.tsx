import { Unity, useUnityContext } from "react-unity-webgl";
import Button from "react-bootstrap/Button";

export const EgyptBuild = () => {

    const {
    unityProvider,
    isLoaded,
    loadingProgression,
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



    return(
        <div className={"containerU"}>
      <div className="buttons" style={{ paddingTop: "20px", paddingBottom: "20px"}} >
        <Button href="#"
          onClick={handleClickFullscreen}
          variant="secondary"
          style={{ left: "100%", 
          }}
        >Fullscreen</Button>
      </div>
      <div className={"unityWrapper"}>
        {isLoaded === false && (
          <div className={"loadingBar"}>
            <div
              className={"loadingBarFill"}
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
    )
}
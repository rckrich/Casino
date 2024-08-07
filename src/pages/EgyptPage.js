
import { Unity, useUnityContext } from "react-unity-webgl";


export const EgyptPage = () => {

    const { unityProvider } = useUnityContext({
    loaderUrl: "Egypt/build/myunityapp.loader.js",
    dataUrl: "Egypt/build/myunityapp.data",
    frameworkUrl: "Egypt/build/myunityapp.framework.js",
    codeUrl: "Egypt/build/myunityapp.wasm",
  });

    return (
      
    <div>
      
      <Unity unityProvider={unityProvider} />
    </div>
  );
}

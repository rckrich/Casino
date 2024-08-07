
import { Unity, useUnityContext } from "react-unity-webgl";


export const EgyptPage = () => {
  console.log("egypt");
    const { unityProvider } = useUnityContext({
    loaderUrl: "../UnityProjects/Egypt/build/myunityapp.loader.js",
    dataUrl: "../UnityProjects/Egypt/build/myunityapp.data",
    frameworkUrl: "../UnityProjects/Egypt/build/myunityapp.framework.js",
    codeUrl: "../UnityProjects/Egypt/build/myunityapp.wasm",
  });

    return <Unity unityProvider={unityProvider} />
  
}

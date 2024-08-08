
import { Unity, useUnityContext } from "react-unity-webgl";


export const EgyptPage = () => {

    const { unityProvider } = useUnityContext({
    loaderUrl: "Casino/egypt/build/myunityapp.loader.js",
    dataUrl: "Casino/egypt/build/myunityapp.data",
    frameworkUrl: "Casino/egypt/build/myunityapp.framework.js",
    codeUrl: "Casino/egypt/build/myunityapp.wasm",
  });

    return (
      
    <div>
      
      <Unity unityProvider={unityProvider} />
    </div>
  );
}

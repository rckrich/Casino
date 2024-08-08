import { Unity, useUnityContext } from "react-unity-webgl";

export const EgyptB = () => {


    const { unityProvider } = useUnityContext({
        loaderUrl: "/build/Egypt.loader.js",
        dataUrl: "/build/Egypt.data",
        frameworkUrl: "/build/Egypt.framework.js",
        codeUrl: "/build/Egypt.wasm"
        });
    

    return  <Unity unityProvider={unityProvider} />;
   
}

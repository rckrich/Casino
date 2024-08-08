import { Unity, useUnityContext } from "react-unity-webgl";

export const DragonB = () => {


    const { unityProvider } = useUnityContext({
        loaderUrl: "/build/Imágenes.loader.js",
        dataUrl: "/build/Imágenes.data",
        frameworkUrl: "/build/Imágenes.framework.js",
        codeUrl: "/build/Imágenes.wasm"
        });
    

    return  <Unity unityProvider={unityProvider} />;
   
}

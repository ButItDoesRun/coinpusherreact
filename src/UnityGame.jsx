import React from "react";


import {Unity, useUnityContext} from "react-unity-webgl";



function UnityGame(){

    const unityProvider = new useUnityContext({
        codeUrl: `/build/WebGL.wasm`,
        dataUrl: `/build/WebGL.data`,
        frameworkUrl: `/build/WebGL.framework.js`,
        loaderUrl: `/build/WebGL.loader.js`,
    });
    

    

    return(
         
         
        <>
        

    
        <Unity
            unityProvider={unityProvider}
            style={{
            border: "1px solid red",
             height: 400,
             width: 600,
            }}
    
        />

        </>
  
    )
};



export default UnityGame;





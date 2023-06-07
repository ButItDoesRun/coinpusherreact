import React, { Fragment } from "react";
import {Unity, useUnityContext} from "react-unity-webgl";



const UnityGame = ({player}) => {

    const { unityContext, sendMessage } = new useUnityContext({
        loaderUrl: `/unity-build/CoinPusher/WebGL.loader.js`,
        dataUrl: `/unity-build/CoinPusher/WebGL.data`,
        frameworkUrl: `/unity-build/CoinPusher/WebGL.framework.js`,
        codeUrl: `/unity-build/CoinPusher/WebGL.wasm`,
        streamingAssetsUrl: "StreamingAssets",
        companyName: "Simone",
        productName: "CoinPusher",
        productVersion: "0.1",
    });

    function startgame() {
        sendMessage("GameController", "getPlayer", player);
        sendMessage("PlayerBalanceScript_API", "getPlayer", player);
      }

    return(
         
        <>
            <Fragment>
                <Unity 
                    unityContext={unityContext} 
                    style={{ 
                        width: '100%', 
                        height: '100%' 
                    }} 
                />  

                <button onClick={startgame}>Start Game!</button>
            </Fragment>       

        </>
  
    )
};



export default UnityGame;





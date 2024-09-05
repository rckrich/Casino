import React, { useRef, useEffect } from 'react';
import { EgyptBuild } from "./EgyptBuild";
import { DragonBuild } from "./DragonBuild";
import { IrelandBuild } from "./IrelandBuild";

interface ContentProps {
  identifier: number;
}

export const UnityHandler: React.FC<ContentProps> = ({ identifier }) => {
  const egyptBuildRef = useRef<{ unloadBuild: () => Promise<void> }>(null);
  const dragonBuildRef = useRef<{ unloadBuild: () => Promise<void> }>(null);
  const irelandBuildRef = useRef<{ unloadBuild: () => Promise<void> }>(null);
  const myDataRef = useRef<number | null>(null);
  const firstTimeRef = useRef<Boolean | null>(false);


    if (myDataRef.current !== null && firstTimeRef.current) {
        if (egyptBuildRef.current) {
            if(myDataRef.current === 1){

                egyptBuildRef.current.unloadBuild();
            }

        }
        if (dragonBuildRef.current && firstTimeRef.current) {
            if (dragonBuildRef.current) {
                if(myDataRef.current === 2){
                    dragonBuildRef.current.unloadBuild();
                }
            }
        }
        if (irelandBuildRef.current && firstTimeRef.current) {
          if (irelandBuildRef.current) {
              if(myDataRef.current === 3){
                irelandBuildRef.current.unloadBuild();
              }
          }
      }
    }


  if (identifier === 1) {
    myDataRef.current = identifier;
    firstTimeRef.current = true;
    return <EgyptBuild ref={egyptBuildRef} />;
  }

  if (identifier === 2) {
    myDataRef.current = identifier;
    firstTimeRef.current = true;
    return <DragonBuild ref={dragonBuildRef} />;
  }

  if (identifier === 3) {
    myDataRef.current = identifier;
    firstTimeRef.current = true;
    return <IrelandBuild ref={irelandBuildRef} />;
  }

  return <div></div>;
};

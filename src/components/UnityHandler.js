
import { DragonB } from "./DragonB";
import { EgyptB } from "./EgyptB";

export const UnityHandler = ({identifier}) => {

    if(identifier === 0){
        return null
    }else{

        if(identifier === 1){
            return  <EgyptB></EgyptB>
        }

        if(identifier === 2){
            return  <DragonB></DragonB>
        }
        
    }
   
}

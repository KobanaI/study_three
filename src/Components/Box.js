import { createContext,useRef, useContext} from "react";
import { TextureLoader } from 'three';
import {useFrame,useLoader} from "@react-three/fiber";


function Box({ speed = 0.01, ...props }){
  const ref = useRef();
  const texture = useLoader(TextureLoader, "/27710242_s.jpg"); // テクスチャをロード

  
  useFrame(()=>{
    ref.current.rotation.x += speed
    ref.current.rotation.z += speed
    ref.current.rotation.y += speed
  });


  return(
    <>
    
    <mesh
     {...props}
      ref={ref}
      >
      <boxGeometry args={[0.5,0.5,0.5]} />
       <meshStandardMaterial map={texture}/> 
    </mesh>
    
    </>
  )
}

export default Box


//ホバーしたとき、isPointerOverをtrueにして、その真偽値を別のファイル(App.js)で使いたい
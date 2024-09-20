import {Canvas} from "@react-three/fiber";
import React, { useContext,useEffect,useState } from 'react';
import { OrbitControls } from '@react-three/drei';

import Box from './Components/Box';
import Camera from './Components/Camera';
import {Particles,CreateTorus,CreateTorus2} from './Components/Particle'
import './App.css';

function App() {

  const [autoCam,setOutCam] = useState(true);
  const [isHover,setHover] = useState(false);
  const speed = isHover?0.1:0.05;


  // const autoCamSet=()=>{
  //   setOutCam(prev=>!prev);
  // }


  useEffect(()=>{
    console.log(isHover);
  },[isHover])

  

    return (
      
      <div id="canvas-container" >
        <h1>I wasted a week making this</h1>
        {/* <button onClick={f}>ose</button>
        <button onClick={autoCamSet}>{autoCam?"sd":"fsa"}</button> */}



        <Canvas>
        {/* {!autoCam?
        <OrbitControls  maxDistance={5} minDistance={1} enablePan={false} />
        :<Camera />} */}
        
        <CreateTorus rotation={[Math.PI / 3, Math.PI / 6, 0]} position={[1.5, 1.5, 0]} color={"lightgreen"} 
        speed={speed}/>
        <CreateTorus rotation={[2 * Math.PI / 3, Math.PI / 6, 0]} position={[0, 2, 0]} color={"hotpink"}
        speed={speed} />
        <CreateTorus rotation={[4 * Math.PI / 3, Math.PI / 6, 0]} position={[-2, 0, 0]} color={"orange"}
         speed={speed} />
        <CreateTorus rotation={[5 * Math.PI / 3, Math.PI / 6, 0]} position={[-1.5, -1.5, 0]} color={"yellow"} 
         speed={speed} />

        <CreateTorus2 speed={isHover? 0.2 : 0.01}/>
        <Particles speed={isHover? 0.03 : 0.005}/>

        <Box rotation={[45,45,0]}
             speed={speed} 
             onPointerOver={()=>setHover(true)}
             onPointerOut={()=>setHover(false)}/>

        </Canvas>
        
      </div>
    );
 
}
// data.js

export default App;


//かのの好きな色は黄色
//slackの黄色いリズムに乗っている生物を回転させまくる







import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { TextureLoader } from 'three'; // TextureLoaderをthreeからインポート
import {useFrame,} from "@react-three/fiber";
import React, { useEffect, useRef } from 'react';
import { BufferGeometry } from 'three';
import { PointMaterial } from '@react-three/drei';

const star = "/star.fbx"



function Candy(props){
  const ref = useRef();
  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(star, (fbx) => {
      ref.current.add(fbx);
      fbx.position.set(-2, 0, 0); // 必要に応じて位置を調整
      fbx.scale.set(0.01, 0.01, 0.01); // 必要に応じてスケールを調整
    });
    console.log("作成しました")
  }, []);

  useFrame(()=>{
    ref.current.rotation.y +=0.01
  })

  return(
  <>
  <meshStandardMaterial color={"yellow"}/>
  <mesh ref={ref} {...props}/>
  </>
  

)
}


function Star(){
  let vertices = [];
  for(let i=0;i<500;i++){
    const x = 3000 * (Math.random()-0.5);
    const y = 3000 * (Math.random()-0.5);
    const z = 3000 * (Math.random()-0.5);
    vertices.push(x,y,z);
  }

  

  const geometryRef = useRef();

  return(
    <points>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={vertices.length / 3}
          array={new Float32Array(vertices)} // Float32Arrayでラップ
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={5} color={"#ffffff"} /> {/* PointMaterialを修正 */}
    </points>
  )
  
}
export {Candy, Star}
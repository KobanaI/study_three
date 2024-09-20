import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({speed=0.0}) {
  const particlesRef = useRef();

  useEffect(() => {
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 1000;
    const positionArray = new Float32Array(count * 3);
    const colorArray = new Float32Array(count *3);
    for (let i = 0; i < count * 3; i++) {
      positionArray[i] = (Math.random() - 0.5) * 10; // パーティクルを中央付近に配置
      colorArray[i] = Math.random();
    }
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positionArray, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colorArray,3)
    )
      particlesRef.current.geometry = particlesGeometry;
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += speed;
      //particlesRef.current.rotation.y -= 0.02;
    }
  });

  return (
    <>
    <points ref={particlesRef}>
      <pointsMaterial size={0.03} vertexColors={true}/>
    </points>
    <ambientLight intensity={0.5} />
    </>
  );
}




function CreateTorus(
  {
     rotation = [0, 0, 0],
     color = "yellow",
     Axis = "",
     size = 0.5,
     speed=0.005
  }
)
{
  const particlesRef = useRef();

  useEffect(() => {
    const toursParticle = new THREE.TorusGeometry(size,1,1,100);
    particlesRef.current.geometry = toursParticle;
    particlesRef.current.rotation.set(rotation[0], rotation[1], rotation[2]);
  }, [rotation]);

  useFrame(() => {
    if (particlesRef.current) {
    
      
      particlesRef.current.rotation.z += speed;
      
    }
  });

  return(
    <>
    <points ref={particlesRef}>
      <pointsMaterial size={0.03} color={color}/>
    </points>
    <ambientLight intensity={5} />
    </>
  )
}



function CreateTorus2({speed = 0.001}){
const particlesRef = useRef();



useEffect(() => {
  const geometry = new THREE.SphereGeometry(1, 40, 40);

  // ポイントのカラーデータを生成
  const count = geometry.attributes.position.count;
  const colorArray = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    colorArray[i] = Math.random();
  }

  geometry.setAttribute(
    'color',
    new THREE.BufferAttribute(colorArray, 3)
  );

  if (particlesRef.current) {
    particlesRef.current.geometry = geometry;
  }
}, []); // 空の依存配列でマウント時のみ実行

useFrame(() => {
  if (particlesRef.current) {
      particlesRef.current.rotation.z += speed; // 回転アニメーション
      particlesRef.current.rotation.x += speed; // 回転アニメーション


    
  }
});

return(
 <>
 <points ref={particlesRef}>
   <pointsMaterial size={0.02} color={"lightgreen"}/>
 </points>
 <ambientLight intensity={10} />
 </>
)
}



export{Particles,CreateTorus,CreateTorus2}
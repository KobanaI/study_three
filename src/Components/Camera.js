import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"; // dreiは便利なカメラやコントロールを提供


function MovingCamera(props) {
  const cameraRef = useRef();
  
  useFrame(({ clock }) => {
    // カメラを毎フレームごとに動かす
    //cameraRef.current.position.x = Math.sin(t) * 5;
   // cameraRef.current.position.z = Math.cos(t) * 5;
    cameraRef.current.position.set(0, 5, 0); // Y軸に10上げて真上に配置
    cameraRef.current.lookAt(0, 0, 0); // 中心を見続ける
  });

  return <PerspectiveCamera {...props} ref={cameraRef} makeDefault position={[0, 5, 0]} fov={75} />;
}

export default MovingCamera;

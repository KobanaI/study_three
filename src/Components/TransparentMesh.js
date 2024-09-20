import React from 'react';

export const Mesh = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" transparent={true} opacity={0} />
    </mesh>
  );
};

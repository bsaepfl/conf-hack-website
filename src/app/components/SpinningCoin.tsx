'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

const Coin = () => {
    const groupRef = useRef<THREE.Group>(null);

    // Load the texture
    const texture = useLoader(TextureLoader, '/images/bsa-silver-coin.png');

    // Clone texture for the back face and properly orient it
    const backTexture = React.useMemo(() => {
        const t = texture.clone();
        t.center.set(0.5, 0.5);
        t.rotation = Math.PI;
        return t;
    }, [texture]);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Spin the group around the global Y axis
            groupRef.current.rotation.y += delta * 1.0;
        }
    });

    return (
        <group ref={groupRef}>
            <mesh rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                {/* CylinderGeometry args: [radiusTop, radiusBottom, height, radialSegments] */}
                <cylinderGeometry args={[2.5, 2.5, 0.2, 64]} />
                <meshStandardMaterial attach="material-0" color="#e5e5e5" metalness={0.8} roughness={0.2} />
                <meshStandardMaterial attach="material-1" map={texture} metalness={0.8} roughness={0.2} color="#ffffff" />
                <meshStandardMaterial attach="material-2" map={backTexture} metalness={0.8} roughness={0.2} color="#ffffff" />
            </mesh>
        </group>
    );
};

const SpinningCoin = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <ambientLight intensity={3} />
                <pointLight position={[10, 10, 10]} intensity={4} />
                <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={4} />
                <Coin />
                <Environment preset="studio" />
            </Canvas>
        </div>
    );
};

export default SpinningCoin;

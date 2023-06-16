import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'

import state from '../store'

const Car = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/redbull.glb')

    const fullTexture = useTexture(snap.fullDecal);
    
    // Smooth color transition
    useFrame((state, delta) => easing.dampC(materials.Govde.color, snap.color, 0.25, delta));

    // Tracking state changes and render model again
    const stateString = JSON.stringify(snap);
    
    return (
        <group key={stateString}>
            <mesh castShadow geometry={nodes.Govde_Govde_0.geometry} rotation={(snap.intro) ? [70, 0, 0] : [19.75, 40, 75]} material={materials.Govde} material-roughness={1} dispose={null}>
                {snap.isFullTexture && (
                    <Decal position={[0,0,0]} rotation={[0,0,0]} scale={(1 * (snap.scale))} map={fullTexture} />
                )}
            </mesh>
        </group>
    )
}

export default Car
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'

import state from '../store'

const CameraRig = ({ children }) => {
    const group = useRef();
    const snap = useSnapshot(state);

    const [dampEMoveY, setMoveY] = useState(0);
    const [dampEMoveX, setMoveX] = useState(0);
    const [dampERotation, setRotation] = useState(0);
    const [dampESmooth, setSmooth] = useState(0);

    useFrame((state, delta) => {
        const isBreakpoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 600;

        // Setting initial position of the model (main page)
        let targetPosition = [-0.4, 0, 2];
        if(snap.intro) {
            if(isBreakpoint) targetPosition = [0, 0, 2];
            if(isMobile) targetPosition = [0, 0.2, 2.5];
        } else {
            if(isMobile) targetPosition = [0, 0, 2.5];
            else targetPosition = [0, 0, 2];
        }

        // Add rotation to group when snap.intro is true (main page)
        const { current: groupRef } = group;
        if (snap.intro && delta) {
            // Static model rotation
            setMoveY(0);
            setMoveX(0);

            // Rotate the group on the Y-axis
            groupRef.rotation.y += 0.004;
            setRotation(groupRef.rotation.y);
            setSmooth(50);
        } else {
            // Dynamic model rotation
            setMoveY(state.pointer.y / 8);
            setMoveX(-state.pointer.x / 4);

            setRotation(0);
            setSmooth(0.25);
        }

        // Setting model camera position
        easing.damp3(state.camera.position, targetPosition, 0.25, delta)

        // Setting model rotation
        easing.dampE(group.current.rotation, [dampEMoveY, dampEMoveX, dampERotation], dampESmooth, delta)
    })

    return <group ref={group}>{ children }</group>
}

export default CameraRig
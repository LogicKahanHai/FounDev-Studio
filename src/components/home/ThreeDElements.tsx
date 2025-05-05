
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, RoundedBox, Sphere, Torus, Text, Float, Stars } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { MeshStandardMaterial, BufferGeometry, Mesh, Vector3 } from "three";

// Define the proper types for the AnimatedObject component
interface AnimatedObjectProps {
  position: [number, number, number];
  color: string;
  shape: React.ElementType;
  args: any[];
  rotation: [number, number, number];
  speed?: number;
  floatIntensity?: number;
}

// Animated 3D object component with enhanced animations
const AnimatedObject = ({ 
  position, 
  color, 
  shape: Shape, 
  args, 
  rotation, 
  speed = 1,
  floatIntensity = 1 
}: AnimatedObjectProps) => {
  const meshRef = useRef<Mesh<BufferGeometry, MeshStandardMaterial>>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Enhanced floating animation
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.1 * floatIntensity;
    
    // Improved rotation animation with unique patterns
    meshRef.current.rotation.y += 0.004 * speed;
    meshRef.current.rotation.x += 0.002 * speed;
    meshRef.current.rotation.z += 0.001 * speed;
  });
  
  return (
    <Float 
      speed={2} 
      rotationIntensity={0.5} 
      floatIntensity={0.5}
    >
      <Shape
        ref={meshRef}
        position={position}
        args={args}
        rotation={rotation}
      >
        <meshStandardMaterial 
          color={color} 
          roughness={0.2} 
          metalness={0.8} 
          emissive={color} 
          emissiveIntensity={0.3}
        />
      </Shape>
    </Float>
  );
};

// Camera controller with enhanced movements
const CameraController = () => {
  const { camera, mouse } = useThree();
  const initialCameraPosition = useRef<[number, number, number]>([0, 0, 5]);
  
  useFrame(() => {
    // More responsive camera movement based on mouse position
    camera.position.x = initialCameraPosition.current[0] + (mouse.x * 0.5);
    camera.position.y = initialCameraPosition.current[1] + (mouse.y * 0.5);
    
    // Subtle rotation towards mouse position
    camera.lookAt(new Vector3(mouse.x * 0.5, mouse.y * 0.5, 0));
  });
  
  return null;
};

// Logo text component
const LogoText = () => {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      position={[0, 1.5, 0]}
    >
      <Text
        fontSize={0.8}
        color="#ffffff"
        font="/fonts/Inter-Bold.woff"
        position={[0, 0, 0]}
        maxWidth={2}
        textAlign="center"
      >
        LOGIC
      </Text>
    </Float>
  );
};

// Main 3D scene component with error boundary
const Scene = () => {
  return (
    <>
      <CameraController />
      <Stars radius={100} depth={50} count={1000} factor={4} fade speed={1} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={1.5} color="#4da8ff" />
      <pointLight position={[5, 5, -5]} intensity={1} color="#8b5cf6" />
      
      {/* Logic logo cube */}
      <AnimatedObject 
        position={[-2, 0, 0]} 
        color="#4da8ff" 
        shape={RoundedBox} 
        args={[1, 1, 1, 10, 0.1]} 
        rotation={[0.5, 0.5, 0]}
        speed={1.2}
        floatIntensity={1.2}
      />
      
      {/* Sphere */}
      <AnimatedObject 
        position={[2, 0, -2]} 
        color="#8b5cf6" 
        shape={Sphere} 
        args={[0.7, 32, 32]} 
        rotation={[0, 0, 0]}
        speed={0.8}
        floatIntensity={1.5}
      />
      
      {/* Torus */}
      <AnimatedObject 
        position={[2, -1, 0]} 
        color="#10b981" 
        shape={Torus} 
        args={[0.6, 0.2, 16, 32]} 
        rotation={[Math.PI / 2, 0, 0]}
        speed={1}
        floatIntensity={0.7}
      />
      
      {/* Logo text */}
      <LogoText />
      
      {/* Disable orbit controls for smoother experience */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={false}
      />
    </>
  );
};

// Main 3D scene component with lazy loading and error handling
const ThreeDElements = () => {
  const [canvasError, setCanvasError] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Ensure component only renders on client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render anything if there's an error or if we're not on the client
  if (canvasError || !isClient) {
    return null;
  }

  return (
    <div className="absolute inset-0 -z-10 opacity-80">
      <ErrorBoundary onError={() => setCanvasError(true)}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          dpr={[1, 2]}
          gl={{ alpha: true, antialias: true }}
          onError={() => setCanvasError(true)}
        >
          <Scene />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

// Simple error boundary component
class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
  onError: () => void;
}> {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error: any) {
    console.error("3D render error:", error);
    this.props.onError();
  }
  
  render() {
    if (this.state.hasError) {
      return null;
    }
    
    return this.props.children;
  }
}

export default ThreeDElements;


import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, RoundedBox, Sphere, Torus } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { MeshStandardMaterial, BufferGeometry, Mesh } from "three";
import { useState, useEffect } from "react";

// Define the proper types for the AnimatedObject component
interface AnimatedObjectProps {
  position: [number, number, number];
  color: string;
  shape: React.ElementType;
  args: any[];
  rotation: [number, number, number];
}

// Animated 3D object component
const AnimatedObject = ({ position, color, shape: Shape, args, rotation }: AnimatedObjectProps) => {
  const meshRef = useRef<Mesh<BufferGeometry, MeshStandardMaterial>>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Gentle floating animation
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    
    // Slow rotation animation
    meshRef.current.rotation.y += 0.004;
    meshRef.current.rotation.x += 0.002;
  });
  
  return (
    <Shape
      ref={meshRef}
      position={position}
      args={args}
      rotation={rotation}
    >
      <meshStandardMaterial 
        color={color} 
        roughness={0.3} 
        metalness={0.7} 
        emissive={color} 
        emissiveIntensity={0.2} 
      />
    </Shape>
  );
};

// Camera controller that listens to mouse movement
const CameraController = () => {
  const { camera, mouse } = useThree();
  const initialCameraPosition = useRef<[number, number, number]>([0, 0, 5]);
  
  useFrame(() => {
    // Subtle camera movement based on mouse position
    camera.position.x = initialCameraPosition.current[0] + (mouse.x * 0.3);
    camera.position.y = initialCameraPosition.current[1] + (mouse.y * 0.3);
  });
  
  return null;
};

// Main 3D scene component with error boundary
const Scene = () => {
  return (
    <>
      <CameraController />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={1} color="#4da8ff" />
      
      {/* Logic logo cube */}
      <AnimatedObject 
        position={[-2, 0, 0]} 
        color="#4da8ff" 
        shape={RoundedBox} 
        args={[1, 1, 1, 10, 0.1]} 
        rotation={[0.5, 0.5, 0]}
      />
      
      {/* Sphere */}
      <AnimatedObject 
        position={[2, 0, -2]} 
        color="#8b5cf6" 
        shape={Sphere} 
        args={[0.7, 32, 32]} 
        rotation={[0, 0, 0]}
      />
      
      {/* Torus */}
      <AnimatedObject 
        position={[2, -1, 0]} 
        color="#10b981" 
        shape={Torus} 
        args={[0.6, 0.2, 16, 32]} 
        rotation={[Math.PI / 2, 0, 0]}
      />
      
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
    <div className="absolute inset-0 -z-10 opacity-70">
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

import { useRef } from "react";
function App() {
  const ref = useRef<HTMLCanvasElement>(null);
  return (
  <div style={{height: '5000px'}}>
  <canvas ref={ref}></canvas>;
  </div>
  );
  
}

export default App;

import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`body { cursor: none; }`}</style>

      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: '40px',
          height: '40px',
          marginLeft: '-20px',
          marginTop: '-20px',
          border: '2px solid #00f',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* Horizontal Line */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '60%',
              height: '2px',
              backgroundColor: '#00f',
              transform: 'translate(-50%, -50%)',
            }}
          />
          {/* Vertical Line */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '2px',
              height: '60%',
              backgroundColor: '#00f',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CustomCursor;

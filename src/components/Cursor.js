import React, { useEffect, useRef } from 'react';
import './Cursor.css';

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ cx: 0, cy: 0, rx: 0, ry: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current.cx = e.clientX;
      pos.current.cy = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top  = e.clientY + 'px';
      }
    };

    const animRing = () => {
      pos.current.rx += (pos.current.cx - pos.current.rx) * 0.12;
      pos.current.ry += (pos.current.cy - pos.current.ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx + 'px';
        ringRef.current.style.top  = pos.current.ry + 'px';
      }
      rafRef.current = requestAnimationFrame(animRing);
    };

    const onEnter = () => {
      if (dotRef.current)  dotRef.current.style.width  = dotRef.current.style.height  = '18px';
      if (ringRef.current) ringRef.current.style.width = ringRef.current.style.height = '54px';
    };
    const onLeave = () => {
      if (dotRef.current)  dotRef.current.style.width  = dotRef.current.style.height  = '10px';
      if (ringRef.current) ringRef.current.style.width = ringRef.current.style.height = '36px';
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    rafRef.current = requestAnimationFrame(animRing);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"  ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

export default Cursor;

import React, { useEffect, useRef } from 'react';
import { Hands } from '@mediapipe/hands';

const GestureRecognition = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const hands = new Hands({ locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}` });
    hands.setOptions({
      maxNumHands: 1,
      minDetectionConfidence: 0.8,
      minTrackingConfidence: 0.5,
    });
    hands.onResults(handleHandResults);

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        })
        .catch((error) => {
          console.error('Error accessing webcam:', error);
        });
    }

    function handleHandResults(results) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      context.clearRect(0, 0, canvas.width, canvas.height);

      if (results.multiHandLandmarks) {
        for (const landmarks of results.multiHandLandmarks) {
          for (const point of landmarks) {
            const x = point.x * canvas.width;
            const y = point.y * canvas.height;
            context.beginPath();
            context.arc(x, y, 5, 0, 2 * Math.PI);
            context.fillStyle = 'red';
            context.fill();
          }
        }
      }
    }

    return () => {
      hands.close();
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} width={640} height={480} />
      <canvas ref={canvasRef} width={640} height={480} style={{ position: 'absolute' }} />
    </div>
  );
};

export default GestureRecognition;

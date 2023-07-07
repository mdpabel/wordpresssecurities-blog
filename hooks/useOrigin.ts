'use client';
import React, { useEffect, useState } from 'react';

export const useOrigin = () => {
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return origin;
};

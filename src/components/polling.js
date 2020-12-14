/*
    This is a custom hook written by Dan Abramow, that solves the problem of polling with React hooks (as setInterval only works with classes).
    The article can be found here: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
*/

import React, { useState, useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval
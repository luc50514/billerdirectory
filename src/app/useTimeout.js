import { useEffect, useState, useCallback, useRef } from 'react';

const defaultOptions = {
  cancelOnUnmount: true,
};

/**
 * An async-utility hook that accepts a callback function and a delay time (in milliseconds), then delays the
 * execution of the given function by the defined time.
 */
const useTimeout = (fn, milliseconds, options = defaultOptions) => {
  const [isCleared, setIsCleared] = useState(false);
  const opts = { ...defaultOptions, ...(options || {}) };
  const callback = useRef(fn);
  const timeout = useRef();

  const clear = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      setIsCleared(true);
    }
  }, []);

  // if the provided function changes, change its reference
  useEffect(() => {
    if (typeof fn === 'function') {
      callback.current = fn;
    }
  }, [fn]);

  // when the milliseconds change, reset the timeout
  useEffect(() => {
    if (typeof milliseconds === 'number') {
      timeout.current = setTimeout(callback.current, milliseconds);
    }

    return clear;
  }, [clear, milliseconds]);

  // when component unmounts clear the timeout
  useEffect(
    () => () => {
      if (opts.cancelOnUnmount) {
        clear();
      }
    },
    [clear, opts.cancelOnUnmount]
  );

  return [isCleared, clear];
};

export default useTimeout;

import { useEffect, useRef } from "react";

/**
 * useInterval - takes the hard work out of using setInterval/clearInterval in React
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval}
 *
 * @param {function} [callback=()=>{}] - A function to be executed every delay milliseconds.
 * @param {number} [delay = 0] - The time, in milliseconds that the timer should wait before the specified function or code is executed.
 * @param args - Additional arguments which are passed through to the function specified by func once the timer expires.
 */
const useInterval = (callback = () => {}, delay = 0, args = undefined) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null || typeof delay !== "number") {
      return () => {};
    }

    const tick = () => {
      savedCallback.current();
    };
    const id = setInterval(tick, delay, args);

    return () => {
      clearInterval(id);
    };
  }, [args, delay]);
};

export default useInterval;

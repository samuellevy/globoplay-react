import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useKeyboardContext, updateKey } from '../../contexts/KeyboardContext';

// Usage
export default function KeyboardHandle(){
  const [key, setKey] = useState("");
  const { dispatch }: any = useKeyboardContext();

  const handler = useCallback(
    ({key}) => {
      setKey(key);
    },
    [key]
  );

  const drop = useCallback(
    ({key}) => {
      setKey("");
    },
    [key]
  );
  // Add event listener using our hook
  useEventListener('keydown', handler);
  useEventListener('keyup', drop);

  useEffect(()=>{
    dispatch(updateKey(key));
  },[key]);

  return (
    <></>
  );
}

// Hook
function useEventListener(eventName: any, handler: any, element = window){
  // Create a ref that stores handler
  const savedHandler: any = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener: any = (event: any) => savedHandler.current(event);

      // Add event listener
      element.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
};

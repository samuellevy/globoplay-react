import React, { useState, useRef, useEffect, useCallback } from "react";
import { useKeyboardContext, updateKey } from "../../contexts/KeyboardContext";

export default function KeyboardHandle() {
  const [key, setKey] = useState("");
  const { dispatch }: any = useKeyboardContext();

  const handler = useCallback(({ key }) => {
    setKey(key);
  }, []);

  const drop = useCallback(() => {
    setKey("");
  }, []);

  useEventListener("keydown", handler);
  useEventListener("keyup", drop);

  useEffect(() => {
    dispatch(updateKey(key));
  }, [key, dispatch]);

  return <></>;
}

function useEventListener(eventName: any, handler: any, element = window) {
  const savedHandler: any = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener: any = (event: any) => savedHandler.current(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

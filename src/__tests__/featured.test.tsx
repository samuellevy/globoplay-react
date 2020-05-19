import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import { KeyboardProvider } from "../contexts/KeyboardContext";
import Featured from "../components/Featured";
import { ProgramsProvider } from "../contexts/ProgramsContext";

describe("<Featured />", () => {
  const component = renderer.create(
    <KeyboardProvider>
      <ProgramsProvider>
        <Featured />
      </ProgramsProvider>
    </KeyboardProvider>,
  );
  const jsonComponent: ReactTestRendererJSON | any = component.toJSON();
  test("should return a unique <div> element", () => {
    expect(jsonComponent.type).toEqual("div");
  });
  test("should return only one child element", () => {
    expect(jsonComponent.children).toHaveLength(1);
  });
  test("should return only one <div> child element", () => {
    expect(jsonComponent.children[0].type).toEqual("div");
  });
});

export {};

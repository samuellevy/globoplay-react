import React from "react";
import Program from "../components/Program";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import { KeyboardProvider } from "../contexts/KeyboardContext";

describe("<Programs />", () => {
  const component = renderer.create(
    <KeyboardProvider>
      <Program />
    </KeyboardProvider>,
  );
  const jsonComponent: ReactTestRendererJSON | any = component.toJSON();
  test("should return a title and description with h1 and p tags", () => {
    expect(jsonComponent[0].children[0].type).toEqual("h1");
    expect(jsonComponent[0].children[1].type).toEqual("p");
  });
  test("should display two buttons with button tags", () => {
    expect(jsonComponent[1].children[0].type).toEqual("button");
    expect(jsonComponent[1].children[1].type).toEqual("button");
  });
  test("should display with no-one highlighted", () => {
    expect(jsonComponent[1].children[0].props.selected).toEqual(false);
  });
});

export {};

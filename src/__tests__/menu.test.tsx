import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import { KeyboardProvider } from "../contexts/KeyboardContext";
import Menu from "../components/Menu";

describe("<Menu />", () => {
  const component = renderer.create(
    <KeyboardProvider>
      <Menu />
    </KeyboardProvider>,
  );
  const jsonComponent: ReactTestRendererJSON | any = component.toJSON();
  test("should be a <nav> element", () => {
    expect(jsonComponent.type).toEqual("nav");
  });
  test("should have only <li> type children", () => {
    const childrenNotLikely = jsonComponent.children.filter(
      (child: any) => child.type != "li",
    );
    expect(childrenNotLikely).toEqual([]);
  });
});

export {};

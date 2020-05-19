import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import { KeyboardProvider } from "../contexts/KeyboardContext";
import { ThumbItem } from "../components/Featured";
import { ProgramsProvider } from "../contexts/ProgramsContext";

describe("<ThumbItem />", () => {
  const component = renderer.create(
    <KeyboardProvider>
      <ProgramsProvider>
        <ThumbItem />
      </ProgramsProvider>
    </KeyboardProvider>,
  );
  const jsonComponent: ReactTestRendererJSON | any = component.toJSON();
  test("should be an <article> element", () => {
    expect(jsonComponent.type).toEqual("article");
  });
  test("should have two children ", () => {
    expect(jsonComponent.type).toEqual("article");
  });
  test("should have the first child as <figure> ", () => {
    expect(jsonComponent.children[0].type).toEqual("figure");
  });
  test("should have the second child as <div> ", () => {
    expect(jsonComponent.children[1].type).toEqual("div");
  });
});

export {};

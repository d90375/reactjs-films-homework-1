import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Signature from "../../Signature";

test("Signature renders correctly", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Signature />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

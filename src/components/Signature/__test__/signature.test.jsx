import React from "react";
import Signature from "../../Signature";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Signature />).toJSON();
  expect(tree).toMatchSnapshot();
});

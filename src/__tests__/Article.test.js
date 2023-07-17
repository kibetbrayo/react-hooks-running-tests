import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
const Article = () => {
  return <div>please pass this test</div>;
};
export default Article;


import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
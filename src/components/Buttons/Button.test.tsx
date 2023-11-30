// src/components/Button/Button.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("renders button with label", () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick} label="Click me" />);
  const button = getByText("Click me");

  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});

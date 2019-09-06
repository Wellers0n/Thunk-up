import React from "react";
import { render, waitForElement, fireEvent } from "@testing-library/react";
import Title from "../Title";

describe("App tests", () => {
  it("should render Title with name Wellerson", async () => {
    const { getByTestId, getByText } = render(<Title nome="Wellerson" />);
    const nome = await waitForElement(() => getByTestId("nome"));
    expect(nome.textContent).toBe("Wellerson's Challenge");
  });

  it("should render Title with name DK", async () => {
    const { getByTestId, getByText } = render(<Title nome="DK" />);

    const nome = await waitForElement(() => getByTestId("nome"));
    expect(nome.textContent).toBe("DK's Challenge");
  });

  it("snapshot of Title", () => {
    const { container } = render(<Title nome="nice" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render Title without name === Define name", async () => {
    const { getByTestId, getByText } = render(<Title />);

    const nome = await waitForElement(() => getByTestId("nome"));
    expect(nome.textContent).toBe("Define name's Challenge");
  });
});
import React from "react";
import { render, waitForElement, fireEvent } from "@testing-library/react";
import Header from "../Header";

describe("App tests Header", () => {
    it("should render header with name 'search list' ", async () => {
        const {getByTestId, getByText} = render(<Header/>)

        const button = await waitForElement(() => getByTestId("button-search"))
        expect(button.textContent).toBe("Search list")
    })

    it("should render header with name 'Home' ", async () => {
        const {getByTestId, getByText} = render(<Header/>)

        const button = await waitForElement(() => getByTestId("title-header"))
        expect(button.textContent).toBe("Home")
    })

    it("should render a snapshot header ", async () => {
        const {container} = render(<Header/>)

        expect(container.firstChild).toMatchSnapshot();
    })
})


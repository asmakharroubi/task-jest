// import React from "react";
// const React = require("react");
// import { render, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import "@testing-library/jest-dom";

// import AddMovie from "../Components/AddMovie";
// import { configureStore } from "../Redux/Store/store";
// import { Provider } from "react-redux";
// import { configureStore } from '@reduxjs/toolkit';


const React = require("react");
const { render, fireEvent } = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");

const AddMovie = require("../Components/AddMovie/AddMovie");
const { configureStore } = require("../Redux/Store/store");
const { Provider } = require("react-redux")

const mockStore = configureStore([]);

describe("AddMovie Component", () => {
  test("renders the component properly", () => {
    const { getByText, getByLabelText } = render(
      <Provider store={mockStore}>
        <AddMovie />
       </Provider>
    );
    expect(getByText("Add Movie")).toBeInTheDocument();
    expect(getByLabelText("Movie Cover URL")).toBeInTheDocument();
    expect(getByLabelText("Movie Name")).toBeInTheDocument();
  });

  test("handles input change properly", () => {
    const { getByLabelText } = render(
      <Provider store={mockStore}>
        <AddMovie />
      </Provider>
    );
    const urlInput = getByLabelText("Movie Cover URL");
    const nameInput = getByLabelText("Movie Name");

    fireEvent.change(urlInput, { target: { value: "example.com/image.jpg" } });
    fireEvent.change(nameInput, { target: { value: "Test Movie" } });

    expect(urlInput).toHaveValue("example.com/image.jpg");
    expect(nameInput).toHaveValue("Test Movie");
  });
});
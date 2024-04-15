import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; 
import { useDispatch } from "react-redux";

import Movie from "../Components/Movie/Movie";


jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

 

describe("Movie Component", () => {
  let dispatchMock;
  const movie = {
    id: "1",
    img: "example.com/image.jpg",
    title: "Test Movie",
    isDone: false,
  };

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  it("renders the component properly", () => {
    const { getByText, getByAltText } = render(<Movie movie={movie} />);
    expect(getByText("Test Movie")).toBeInTheDocument();
    expect(getByAltText("Test Movie")).toBeInTheDocument();
  });





});


// import React from 'react';
// import { render , screen} from '@testing-library/react';
// import Movie from '../Components/movie';

// describe('Movie Component', () => {
//   const movie = {
//     img: 'movie-image-url',
//     title: 'Movie Title',
//     // Add any other properties of the movie object here
//   };

//   test('renders movie component with correct props', () => {
//     const { getByAltText, getByText } = render(<Movie movie={movie} />);
    
//     // Check if the movie image and title are rendered with correct values
//     const movieImage = getByAltText(movie.title);
//     const movieTitle = getByText(movie.title);

//     expect(movieImage).toBeInTheDocument();
//     expect(movieTitle).toBeInTheDocument();
//   });

//   // Add more test cases as needed
// });


// describe('Movie Component', () => {
//       const movie = {
//         img: 'movie-image-url',
//         title: 'Movie Title',
//         // Add any other properties of the movie object here
//       };
    
    //   test('renders movie component with correct props', () => {
    //     render(<Movie movie={movie}/>)
        
        
    //     // Check if the movie image and title are rendered with correct values
    //     const movieImage = screen.getByAltText(movie.title);
    //     const movieTitle = screen.getByText(movie.title);
    
    //     expect(movieImage).toBeInTheDocument();
    //     expect(movieTitle).toBeInTheDocument();
    //   });
    
      
    // });
    
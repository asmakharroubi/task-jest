// "use client";
// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
//  import { Movie } from "../Components/movie";
// // import "./MovieList.css";
// import { RootState} from "../Redux/Store/store";
// import { changeDone } from "../Redux/Actions/Action";
// import { useDispatch } from 'react-redux';
// // import { useClient } from 'next/data-client';


// const MovieList: React.FC = () => {

//     const [isClient, setIsClient] = useState(false);

//     // useEffect(() => {
//     //   setIsClient(true);
//     // }, []);
//   const movies = useSelector((state: RootState) => state.MovieReducer.movieList);
//   const dispatch = useDispatch();
//   const [list, setList] = useState(movies);
  
//   return (
//     <div className="movieslist">
//       <div className="movies">
//       {/* {isClient && (
//         <React.Suspense fallback={<div>Loading...</div>}>
//           {import("./MovieList").then((module) => (
//             <module.default />
//           ))}
//         </React.Suspense>
//       )} */}
//         {movies.map((movie) => (
//           <Movie key={movie.id} movie={movie} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieList;

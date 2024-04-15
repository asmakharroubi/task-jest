"use client";
import React,{ useState } from "react";
import { Provider, useSelector } from "react-redux";
 import { Movie } from "./Components/movie";
// import "./MovieList.css";
import { RootState} from "./Redux/Store/store";
import { changeDone } from "./Redux/Actions/Action";
import { useDispatch } from 'react-redux';
import store from "./Redux/Store/store"
// import ReactReduxProvider from "@providers/ReactReduxProvider";


// import { useClient } from 'next/data-client';
// import useSWR from 'swr'

const Home: React.FC = () => {
  // useClient;
  // const{ data, error } = useSWR('https://jsonplaceholder.typicode.com/todos/')
  //   if (error) {
  //       return <p>Failed to load Data</p>
  //   }
  //   if (!data) {
  //       return <p>Loading....</p>
  //   }

  
  const movies = useSelector((state: RootState) => state.MovieReducer.movieList);
  const dispatch = useDispatch();
  const [list, setList] = useState(movies);
  
  return (
    <Provider store={store}>
    <div className="movieslist">
      <div className="movies">
      
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
        
      </div>
    </div>
    </Provider>
  );
};

export default Home;

// "useClient";
//  import Image from "next/image";
//  import MovieList from "./Components/MovieList";
// import { Provider } from "react-redux";
// import store from "./Redux/Store/store"
// // import dynamic from 'next/dynamic';

// export default function Home() {
//   // const DynamicComponent = dynamic(() => import('./useClient'), { ssr: false });
//   return (
   
//     <Provider store={store}>
    
//     <MovieList/>
//     {/* <DynamicComponent /> */}
//     </Provider>
   
//   );
// }

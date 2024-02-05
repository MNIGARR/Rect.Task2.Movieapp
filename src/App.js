import './App.css';
import NavBar from './NavBar';
import Main from './Main';
import Feedback from './FB';

const movies =[{
  name: "Coco",
  imageUrl:  "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
  genre: "Animation, Adventure, Drama",
  director: "Adrian Molina, Lee Unkrich",
  description: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
  imdb: "8.4"
  
  },
  {
  name: "Forrest Gump",
  imageUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_v13_aa.jpg",
  genre: "Drama, Romance",
  director: "Robert Zemeckis",
  description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
  imdb: "8.8"
  }
];

const feedbacks=[{
user: "Antonio",
comment:"It was great movie!!!"
},
{
  user: "Enjolras",
  comment: "Woww"
}];
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Main movies={movies} ></Main>
      <Feedback feedbacks={feedbacks}></Feedback>
    </div>
  );
}

export default App;

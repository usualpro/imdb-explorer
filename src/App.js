import { MediasList } from './components/MediasList';


const App = () => <div className="container d-grid gap-3 mt-3">
  <MediasList
    title="Top 250 des films"
    list={"Top250Movies"}
  />

  <MediasList
    title="Top 250 des séries"
    list={"Top250TVs"}
  />
</div>;

export default App;

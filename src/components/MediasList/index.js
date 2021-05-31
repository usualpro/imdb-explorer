import { observer } from 'mobx-react-lite';

import MovieStore from '../../stores/Movies';
import { MediaListItem } from './MediaListItem';

export const MediasList = observer((props) => {
    const moviesList = (typeof MovieStore[props.list].items !== "undefined")
        ? MovieStore[props.list].items
        : [];

    return <div>
        <h1>{props.title}</h1>
        <div className='row'>
            {
                moviesList.map((movie, index) => <MediaListItem key={index} {...movie} />)
            }
        </div>
    </div>
});
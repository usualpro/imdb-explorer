import { observer } from 'mobx-react-lite';

import MovieStore from '../../stores/Movies';
import { MediaListItem } from './MediaListItem';

export const MediasList = observer((props) => {

    return <div>
        <h1>{props.title}</h1>
        <div className='row'>
            {
                MovieStore[props.list].items.map((movie, index) => <MediaListItem key={index} {...movie} />)
            }
        </div>
    </div>
});
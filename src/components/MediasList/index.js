import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import SwiperCore, { Navigation, Scrollbar, Lazy, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import MovieStore from '../../stores/Movies';
import { MediaListItem } from './MediaListItem';

SwiperCore.use([Navigation, Scrollbar, Lazy, Autoplay]);

export const MediasList = observer((props) => {
    useEffect(() => {
        setTimeout(
            () => {
                window.dispatchEvent(new Event('resize'))
            }, 500
        )
    }, []);
    return <>
        <h1>{props.title}</h1>
        <Swiper
            className='w-100 h-18rem'
            preloadImages={false}
            navigation
            lazy
            autoplay
            scrollbar={{ draggable: true }}
            spaceBetween={50}
            slidesPerView={4}
        >
            {
                MovieStore[props.list].items.map(
                    (movie, index) => <SwiperSlide key={index}>
                        <MediaListItem  {...movie} />
                    </SwiperSlide>
                )
            }
        </Swiper>
    </>
});
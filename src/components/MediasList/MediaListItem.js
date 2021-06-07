
export const MediaListItem = (props) => <div className='w-100'>
    <img
        alt={props.title}
        className="img-fluid swiper-lazy"
        src={props.image}
        data-src={props.image} />
    <div className="swiper-lazy-preloader"></div>
</div>;
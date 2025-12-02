import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import styles from './Carousel.module.css';

export default function Carousel({ children })  {
    const [emblaRef] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    );

    return (
        <div className={styles.carousel} ref={emblaRef}>
            <div className={styles.container}>
                {React.Children.map(children, (child, index) => (
                    <div className={styles.slide} key={index}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}
'use client';

import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import styles from './embla.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import Show from './podcastShows';
import { ShowItem } from '@/types/showItem';

type PropType = {
  slides: any
  options?: EmblaOptionsType
}

const PodcastCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((show: ShowItem, index: number) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__number}>
                <Show title={show.title} host={show.host} href={'https://dailyillini.com'} key={index}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default PodcastCarousel

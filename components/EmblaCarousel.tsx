'use client';

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './embla.module.css'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import { Ad, Story } from '@/sanity.types';

type PropType = {
  slides: Story[] | Ad[]
  options?: EmblaOptionsType
  ad?: boolean
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, ad} = props
  const [emblaRef, emblaApi] = !ad ? useEmblaCarousel(options) : useEmblaCarousel(options, [Autoplay({jump: true, playOnInit: true})])

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
          {slides.map((image: any, index: number) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__number}>
                {ad && 
                  <a href={image.href}>
                    <Image 
                      src={image.imgUrl}
                      alt="ad"
                      height={250}
                      width={300}
                      className={styles.ad_container}
                    />
                  </a>
                }
                {!ad && 
                  <div className={styles.embla__slide__number}>
                    <Image 
                      src={image.url}
                      alt="pic"
                      height={500}
                      width={600}
                      className={styles.image_container}
                    />
                    <div className={styles.caption}>{image.caption}</div>
                  </div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        {!ad &&
          <div className={styles.embla__buttons}>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        }
      </div>
    </section>
  )
}

export default EmblaCarousel
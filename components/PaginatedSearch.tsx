'use client'

import StoryScroll from "./storyScroll";
import fetchHelper from "@/app/helpers/fetchStories";
import adHelper from "@/app/helpers/fetchAds";
import styles from "./PaginatedSearch.module.css"
import shuffle from "@/app/helpers/randomize";
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import storyType from '@/sanity/schemaTypes/storyType';
import { Ad, Story } from "@/sanity.types";

interface PaginatedProps {
    stories: Story[]
    search: string | string[] | undefined
    ads: Ad[]
    lastDate: any
}

export default function PaginatedSearch({stories, search, ads, lastDate}: PaginatedProps) {
    const [story, setStory] = useState<Story[]>(stories)
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(lastDate);
    const [more, setMore] = useState(true);
    const [ref, inView] = useInView();
    const [mRef, mInView] = useInView();

    const HandleLoad = async () => {
        setLoading(true);
        const data = await fetchHelper.getSearchNext(search, date); 
        setDate(data[1]);

        if (data[1] != null)
            setStory([...story, ...data[0]])
        else
            setMore(false);

        setLoading(false);
    }

    useEffect(() => {
        if (inView) {
            HandleLoad();
        }
    }, [inView])

    useEffect(() => {
        if (mInView) {
            HandleLoad();
        }
    }, [mInView])

    const rows = story.reduce(function (rows: any, key: Story, index: number) { 
        return ((index % 6 == 0) ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);

    // console.log('rows', rows);

    return(
        <>
        <div className={styles.pc}> 
            <StoryScroll stories={story} ads={ads} sticky={true}/>
            {loading == false && more && 
                <div ref={ref}>
                    ...Loading
                </div>
            }
        </div>
        <div className={styles.mobile}>
            {rows && 
                rows.map((row: Story[], index: number) => {
                    return <StoryScroll key={index} stories={row} ads={[ads[index % ads.length]]} adslides={false}/>
            })}
            {loading == false && more && 
                <div ref={mRef}>
                    ...Loading
                </div>
            }
        </div>
        </>
    )
}
'use client'

import StoryScroll from "./storyScroll";
import fetchHelper from "@/app/helpers/fetchStories";
import adHelper from "@/app/helpers/fetchAds";
import styles from "./PaginatedScroll.module.css"
import shuffle from "@/app/helpers/randomize";
import { useState } from 'react';
import storyType from '@/sanity/schemaTypes/storyType'

interface PaginatedProps {
    stories: any
    filter: string
    ads: any
    lastDate: any
}

export default function PaginatedScroll({stories, filter, ads, lastDate}: PaginatedProps) {
    const [story, setStory] = useState<typeof storyType[]>(stories)
    const [click, setClicked] = useState(false);
    let date = lastDate;
    const HandleLoad = async () => {
        setClicked(!click);
        const data = await fetchHelper.getNextPage(date, filter);
        date = data[1];
        if (date != null)
            setStory([...story, ...data[0]])

        return(console.log('lastId', date))
    }
    console.log(story)
 
    return(
        <div className={styles.pc}> 
            <StoryScroll stories={story} ads={ads}/>
            <button onClick={() => HandleLoad()}>
                {click && 'true'}
                {!click && 'false'}
            </button>    
        </div>
    )
}
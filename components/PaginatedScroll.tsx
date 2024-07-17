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
    const [story, setStory] = useState<any>(stories)
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(lastDate);
    const [more, setMore] = useState(true);
    console.log(date);

    const HandleLoad = async () => {
        setLoading(true);
        const data = await fetchHelper.getNextPage(date, filter); 
        setDate(data[1]);

        if (data[1] != null)
            setStory([...story, ...data[0]])
        else
            setMore(false);

        setLoading(false);
    }

    const rows = story.reduce(function (rows: any, key: any, index: any) { 
        return ((index % 4 == 0) ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);

    console.log('rows', rows);

    return(
        <>
        <div className={styles.pc}> 
            <StoryScroll stories={story} ads={ads}/>
            {loading == false && more &&
                <> 
                    <button onClick={HandleLoad}>
                        Load More
                    </button>
                </>    
            }
            {/* <StoryScroll stories={story} ads={ads}/> */}
        </div>
        <div className={styles.mobile}>
            {rows && 
                rows.map((row: any, index: number) => {
                    return <StoryScroll stories={row} ads={[ads[index % ads.length]]} adslides={false}/>
            })}
            {loading == false && more &&
                <> 
                    <button onClick={HandleLoad}>
                        Load More
                    </button>
                </>    
            }
        </div>
        </>
    )
}
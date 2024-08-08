'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './searchBar.module.css';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IconContext } from 'react-icons/lib';

export default function SearchBar() {
    const router = useRouter();
    const [search, setSearch] = useState<string>();
    const [bar, setBar] = useState(false);
    const ref = useRef<any>(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const handleOutSideClick = (event: any) => {
          if (!ref.current?.contains(event.target)) {
            setBar(false);
          }
        };
    
        window.addEventListener("mousedown", handleOutSideClick);
    
        return () => {
          window.removeEventListener("mousedown", handleOutSideClick);
        };
      }, [ref]);

    const HandleSubmit = (e: any) => {
        e.preventDefault();
        router.push('/search?search=' + search);
        window.location.reload();
    }

    return (
        <div ref={ref}>
        <form onSubmit={HandleSubmit} className={styles.submit}>
            <IconContext.Provider value={{className: styles.icon}}>
                <FaMagnifyingGlass size={19} onClick={() => setBar(!bar)}/>
            </IconContext.Provider>
            {(bar) &&
                <input autoFocus type="search" required placeholder="Search" onChange={(e) => {setSearch(e.target.value)}} className={styles.animation} ref={btnRef}/>
            }
        </form>
        </div>
    )
}
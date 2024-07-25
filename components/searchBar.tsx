'use client';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from './searchBar.module.css';

export default function SearchBar() {
    const router = useRouter();
    const [search, setSearch] = useState<string>();

    const HandleSubmit = (e: any) => {
        e.preventDefault();
        router.push('/search?search=' + search);
        window.location.reload();
    }

    return (
        <form onSubmit={HandleSubmit} className={styles.submit}>
            <input type="search" required placeholder="Search" onChange={(e) => {setSearch(e.target.value)}} className={styles.search}/>
        </form>
    )
}
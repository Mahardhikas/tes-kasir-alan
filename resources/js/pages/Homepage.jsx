import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Card from './Card';
import Dashboard1 from './Dashboard-1';
import Navbar from '@/components/Navbar';


export default function Homepage(props) {

    return (
        <div className=''>
            <Head title={props.title}/>
            <Navbar />
            <Dashboard1 />
        </div>
    )
}
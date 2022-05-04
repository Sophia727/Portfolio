import React from 'react';
import Navbar from '../Component/Header/Navbar/Navbar';

import "../Pages/errorNotFound.css";

import {AiFillBug} from "react-icons/ai";
import {MdOutlineWavingHand} from "react-icons/md";


const ErrorNotFound = () => {
    return (
        <>
            <div className="notFound">
                <Navbar/>
                <h2>   Hi There! <MdOutlineWavingHand className='waving-hand'/></h2> <br/>
                <span/>
                <h3><AiFillBug className='bug'/> This page doesn't exist! <AiFillBug className='bug'/></h3>
                

            </div>
        </>
    );
};

export default ErrorNotFound;
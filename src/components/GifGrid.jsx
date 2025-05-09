import React, { useState, useEffect} from "react";
import { getGifs } from '../helpers/getGifs'
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    
    const { images, isLoading} = useFetchGifs( category )

    return (
        <>
            <h3>{ category }</h3>
            {/* <LoadingMessage isLoading={ isLoading }/> */}
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {/* images.map */}
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    )) 
                }
            </div>
        </>
    )
}
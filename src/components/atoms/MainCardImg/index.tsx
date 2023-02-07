import React from 'react'

export default function MainCardImg({ src, alt }: { src: string, alt: string }) {
    return (
        <img src={src} alt={alt} />
    )
}

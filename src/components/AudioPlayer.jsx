import React, { useRef, useState } from 'react'
import '../styles/AudioPlayer.css'
import oldsongfile from '../assets/oldsongfile.png'

export function AudioPlayer({audioSrc}){
    //variaveis
    const [isPlaying, setIsPlaying]=useState(false)
    const [currentTime, setCurrentTime]=useState(0)
    const [duration, setDuration]=useState(0)
    const audioRef=useRef(null)

    const handleSeek=(e)=>{
    const newTime = Number(e.target.value)

    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
    }

    const handleTimeUpdate=()=>{
        setCurrentTime(audioRef.current.currentTime)
    }
    const handlePlay=()=>{
        audioRef.current.play()
        setIsPlaying(true)
    }

    const handlePause=()=>{
        audioRef.current.pause()
        setIsPlaying(false)
    }
    const handlePlayPause=()=>{
        if (isPlaying){
            handlePause()
        } else {
            handlePlay()
        }}
    function formatDuration(durationSeeconds){
        const minutes=Math.floor(durationSeeconds/60)
        const seconds=Math.floor(durationSeeconds%60)
        const formattedSeconds=seconds.toString().padStart(2, "0")
        return `${minutes}:${formattedSeconds}`
    }
    const handleLoadedMetadata=()=>{
        setDuration(audioRef.current.duration)
    }
    return (
    <div className='player-card'>
        <input
        type='range'
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        />
        <audio ref={audioRef} src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}/>

        <div className='track-duration'>
            <p>{formatDuration(currentTime)}</p>
            <p>{formatDuration(duration)}</p>
        </div>
        <div className='oldsongfile'>
            <img src={oldsongfile} alt="oldsongfile" height="100px"/>
        </div>

        <button onClick={handlePlayPause}>
            <span className='material-symbols-rounded'>
                {isPlaying ? "pause":"play_arrow"}
            </span>
        </button>
    </div>
    )
}
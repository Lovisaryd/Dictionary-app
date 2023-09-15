import { useState } from "react";
import audioicon from '../audio-spectrum-16.png'

const Audio = ({aud, index}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const toggleAudio = () => {
      setIsPlaying(!isPlaying);
    }
    
    return(
      <div>
         <img alt='icon' src={audioicon} onClick={toggleAudio} data-testid={`audioic${index}`} className="audio-icon"/>
            <span className="phonetic">{aud.text}</span>
                {isPlaying && <audio
                  key={aud}
                  autoPlay
                  onEnded={() => setIsPlaying(false)}
                  data-testid={`audio-element-${index}`}
                >
                  <source data-testid={`audio-source${index}`} src={aud.audio} type="audio/mpeg" />
                </audio>}
            </div>
    )
  }

  export default Audio
//import sound from '../assets/songs/teste.mp3'
//import sound2 from '../assets/songs/teste2.mp3'
import sound from '../assets/songs/fruity candy games guia@yuziyy.wav'
import sound2 from '../assets/songs/katana on ur neck boombap beat guia @yuziyy.wav'
import { Buttonpay } from '../components/Buttonpay'
import { AudioPlayer } from '../components/AudioPlayer'
export function Beats(){
    return (
        <>
        <div className="container">
            <p3>Solicitar beats</p3><br></br>
            <p1>@yuziyy_prod nas redes sociais</p1>
            <ul>
                <p3>pack Trap</p3>
                <AudioPlayer audioSrc={sound}></AudioPlayer>
            </ul>
            <ul>
                <p3>pack Boombap</p3>
                <AudioPlayer audioSrc={sound2}>teste2</AudioPlayer>
                
            </ul>
            <ul>

                <Buttonpay/>
            </ul>
        </div>
        </>
    )
}
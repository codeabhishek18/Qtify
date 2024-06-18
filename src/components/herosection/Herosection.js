import herosection from './Herosection.module.css'
import heroimage from '../../assets/heroimage.png'

const Herosection = () =>
{

    return(
        <div className={herosection.container}>
            <div className={herosection.content}>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <img src={heroimage} alt="heroimage"/>
        </div>
    )
}

export default Herosection
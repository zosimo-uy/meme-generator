import { useState, useEffect } from "react"
export default function Meme(){
    const [meme, setMeme] = useState({
        topText: "Top text",
        bottomText: "Bottom Text",
        randomMemeImg: "https://i.imgflip.com/39t1o.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(()=>{
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes)
        }
        getMemes()
    },[])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomNumber].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            randomMemeImg: newMemeUrl,
            topText: "",
            bottomText: ""
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main className="p-5 d-flex flex-column
        align-items-center justify-content-center">
            <div className="form row g-3">
                <div className="col">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-control"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                </div>
                <div className="col">
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-control"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                </div>
                <button
                    onClick={getMemeImage}
                    className="btn form--button text-white
                    fw-semibold"
                    >
                Generate new meme image 👹
                </button>
            </div>
            <div className="position-relative">
                <img 
                src={meme.randomMemeImg} 
                className="img-fluid rounded-2 w-100"
                alt="Your meme">
                </img>
                <h2 style={{letterSpacing: '1px'}}
                className="meme--text position-absolute text-center 
                start-50 translate-middle-x 
                mt-3 mb-3 px-2 top-0
                text-uppercase text-white
                fs-2"
                >
                {meme.topText}
                </h2>
                <h2 style={{letterSpacing: '1px'}}
                className="meme--text position-absolute text-center 
                start-50 translate-middle-x 
                mt-3 mb-3 px-2 bottom-0 
                text-uppercase text-white
                fs-2"
                 >
                {meme.bottomText}
                </h2>
            </div>
        </main>
    )
}
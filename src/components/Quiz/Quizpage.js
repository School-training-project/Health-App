import React from 'react';
import './quiz.css';
import { useState } from 'react';

const Q = () =>{
function quizEnd(){
    setDc("Complete!")
    setDisp("none")
    dx=250
    setX(dx.toString()+"px");
    dy= Math.sqrt(Math.abs(1600 * (1-(( dx -250 )/250)**2)))-11.2
    setY(dy.toString()+"px");
    //dot final animation to box
    setDotw("100px")
    setDotr("50px")
    setDotbr("10px")
    setDotfs("15px")
    setDottt("6px")
    //answer box animations
    setTLB("0px")
    setTLR("0px")
    setTRB("0px")
    setTRL("0px")
    setBLR("0px")
    setBLT("0px")
    setBRL("0px")
    setBRT("0px")
    setTlbr("40px 0px 0px 0px")
    setTrbr("0px 40px 0px 0px")
    setBlbr("0px 0px 0px 40px")
    setBrbr("0px 0px 40px 0px")
    setBbw("transparent")
    setDres("1")
    setAnsbox("800px")
    //Shazam!!
    setShazam("40px")
    setShazamtr("transform 0.5s ease-in-out 0.9s")
    setShazam("400px")
    setSlide("-560px")
}
const click = () => {
        setStep(step+1);
        x= (step * 100 ) / numbSteps ;
        setPerc(x.toString()+"%");
        dx=(500 * (step)  / numbSteps)
        setX(dx.toString()+"px");
        dy= Math.sqrt(Math.abs(1600 * (1-(( dx -250 )/250)**2)))-11.2
        setY(dy.toString()+"px");
        setDc(Math.round((((step) * 100 ) / numbSteps)).toString()+"%")
        //console.log(dy)
        if(step>=numbSteps){
            quizEnd()
        }
    
    }
    let x,dx,dy;
    const [disp,setDisp] = useState("block")
    const [dotx,setX] = useState("0px")
    const [doty,setY] = useState("-15px")
    const [perc,setPerc] = useState("0%")
    const [step,setStep] = useState(1)
    //dot properties
    const [dotw,setDotw] = useState("30px")
    const [dotr,setDotr] = useState("15px")
    const [dotbr,setDotbr] = useState("50%")
    const [dotfs,setDotfs] = useState("10px")
    const [dottt,setDottt] =useState("8px")
    //box margins
    const [TLR,setTLR] =useState("10px")
    const [TLB,setTLB] =useState("10px")
    const [TRL,setTRL] =useState("10px")
    const [TRB,setTRB] =useState("10px")
    const [BLR,setBLR] =useState("10px")
    const [BLT,setBLT] =useState("10px")
    const [BRT,setBRT] =useState("10px")
    const [BRL,setBRL] =useState("10px")
    //border radii
    const [tlbr,setTlbr] =useState("40px 20px 20px 20px")
    const [trbr,setTrbr] =useState("20px 40px 20px 20px")
    const [blbr,setBlbr] =useState("20px 20px 20px 40px")
    const [brbr,setBrbr] =useState("20px 20px 40px 20px")

    const [bbw,setBbw] =useState("#183AA8")
    const [dres,setDres] =useState("0")
    const [ansbox,setAnsbox] =useState("250px")
    const [shazam,setShazam] =useState("0px")
    const [shazamtr,setShazamtr] =useState("transform 0.1s ease-out 0.8s")
    const [slide,setSlide] =useState("0px")

    let numbSteps=35; 
    const [dotContent,setDc] = useState(perc)
    return(
        <div class="Q">
            <div className="prog" style={{transform:`translateY(${shazam})`,transition:`${shazamtr}`}}>
                <div className="bar" style={{background:`linear-gradient(90deg,#fe7172 0%,#4f4cc5  ${perc}, #bed5ff ${perc}`}}>
                <div className="fond">
                    <div className="topmask">
                        <div id="righter"></div>
                        <div id="lefter"></div>
                    </div>
                </div>
                <img src={require("./mra.png")} className="image"></img>
                <div className="dot" 
                style={{transform:`translate(${dotx},${doty}`,
                transition:"width .15s ease-in-out,right .15s ease-in-out ,border-radius .15s ease-in-out",
                width:`${dotw}`,
                right:`${dotr}`,
                borderRadius:`${dotbr}`,

                }}>
                    <h5 className='dot-Text'
                    style={{
                    fontSize:`${dotfs}`,
                    top:`${dottt}` 
                    }}
                    >{dotContent}</h5>
                </div>
                <div className="mask"></div>
                </div>
            </div>
        <div className='Questions' style={{display:`${disp}`}}>Question {step} goes here</div>
        <div className="Answer-Box" style={{height:`${ansbox}`,transition:"height 0.5s ease-in-out 0.8s"}}>
            <div className="Box" id="TL"
            style={{
            marginTop:"20px",
            marginBottom:`${TLB}`,
            marginLeft:"10px",
            marginRight:`${TLR}`,
            borderRadius:`${tlbr}`,
            transition:"border-radius 0.5s ease-in,border-color 0.5s ease-in,margin 0.5s ease-in",
            borderColor:`${bbw}`
            }}
            >
            <button type="submit" className="Btn" onClick={click} style={{display:`${disp}`}}>ChoixA {step} </button>
            </div>
            <div className="Box" id="TR"
            style={{
                marginTop:"20px",
                marginBottom:`${TRB}`,
                marginLeft:`${TRL}`,
                marginRight:"10px",
                borderRadius:`${trbr}`,
                transition:"border-radius 0.5s ease-in,border-color 0.5s ease-in,margin 0.5s ease-in",
                borderColor:`${bbw}`
                }}
            >
            <button type="submit" className="Btn" onClick={click} style={{display:`${disp}`}}>ChoixB {step}</button>
            </div>
            <div className="Box" id="BL"
            style={{
                marginTop:`${BLT}`,
                marginBottom:"20px",
                marginLeft:"10px",
                marginRight:`${BLR}`,
                borderRadius:`${blbr}`,
                transition:"border-radius 0.5s ease-in,border-color 0.5s ease-in,margin 0.5s ease-in",
                borderColor:`${bbw}`
                }}
            >
            <button type="submit" className="Btn" onClick={click} style={{display:`${disp}`}}>ChoixC {step}</button>
            </div>
            <div className="Box" id="BR"
            style={{
                marginTop:`${BRT}`,
                marginBottom:"20px",
                marginLeft:`${BRL}`,
                marginRight:"10px",
                borderRadius:`${brbr}`,
                transition:"border-radius 0.5s ease-in,border-color 0.5s ease-in,margin 0.5s ease-in",
                borderColor:`${bbw}`
                }}
            >
            <button type="submit" className="Btn" onClick={click} style={{display:`${disp}`}}>ChoixD {step}</button>
            </div>
        </div>
        <div className='Results' style={{opacity:`${dres}`,transition:"opacity 0.3s ease-in 1.5s"}}>
            Ceux ci sont les resultats du quizzz!!
        </div>
        <div className='imgcontainer'
        style={{opacity:`${dres}`,transform:` translateX(${slide})`,transition:"opacity 0.3s ease-in 1.5s,transform 1.3s ease-out 1.5s"}}
        ><img src={require("./mramettakya.png")} className="image"></img></div>
        </div>
    )
};
export default Q;


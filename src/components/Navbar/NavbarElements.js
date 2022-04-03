import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #6bcbb8ea;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    `;
let gradDir="left"
let origin="0%"
let dest="-100%"
/**const [gradDir,setDir] = useState("right")
const [origin,setOrigin] = useState("-100%")
const [dest,setDest] = useState("0%")

function flip(){
//console.log("flipping")
let g= gradDir==="right" ? "left":"right"
let o= origin==="0%" ? "-100%":"0%"
let d= dest==="0%" ? "-100%":"0%"
setDir(g);setOrigin(o);setDest(d);
}

let cvelocity="right"
let Tab= new Array()

function addtab(e){
    Tab.unshift(e.clientX);
    if (Tab.length>2){Tab.pop()}
}
onmousemove = function(e){
    let nvelocity="right"
    addtab(e)
    //console.log(Tab[1]-Tab[0])
    nvelocity= Tab[0]>=Tab[1] ? "right":"left"
    //console.log(nvelocity+'  '+cvelocity)
    if(!(nvelocity===cvelocity)){flip();cvelocity=nvelocity;}
}
 */  
    export const NavLogo = styled(Link)`
    cursor: pointer;
    background-image: linear-gradient(
        to ${gradDir},
        #F037A5,
        #1E3163 50%,
        white 50%
    );
    background-size: 200% 100%;
    background-position: ${origin};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &:before{
        content: '';
        background: #54b3d6;
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
    }
    &:hover {

        background-position: ${dest};
        }
    &:hover::before {
            width: 100%;
        }
    transition: all 0.25s ease-in-out;

    font-size: 1.8rem;
    padding-left:5px;
    text-decoration: none;
    `;

export const NavLink = styled(Link)`
    background-image: linear-gradient(
        to ${gradDir},
        #F037A5,
        #1E3163 50%,
        white 50%
    );
    background-size: 200% 100%;
    background-position: ${origin};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &:before{
        content: '';
        background: #54b3d6;
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
    }
    &:hover {
        background-position: ${dest};
        }
    &:hover::before {
            width: 100%;
        }
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:hover {
        color: black;
    }
    `;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
    `;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
    `;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
    
    `;

export const NavBtnLink = styled(Link)`
    border-radius: 8px;
    background: transparent;
    padding: 10px 22px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    background-image: linear-gradient(
        to ${gradDir},
        #F037A5,
        #1E3163 50%,
        white 50%
    );
    background-size: 200% 100%;
    background-position: ${origin};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &:before{
        content: '';
        background: #54b3d6;
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
    }
    &:hover {
        background-position: ${dest};
        }
    &:hover::before {
            width: 100%;
        }
    transition: all 0.3s ease-in-out;
    `;

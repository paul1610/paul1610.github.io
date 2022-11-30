import React, { useEffect } from 'react';
import '../style/style.css';

export default function Text() {
    const difStr: string[] = ["{ Coder }", "< Student />", "[ 'D', 'e', 'v' ]", "SELECT * FROM SKILLS;", "`${ Programmer }`", "Paul:\\>cd /skills", "// Developer", "# Programmer"];   

    let running: boolean = false;
    let random: string = difStr[Math.floor(Math.random() * difStr.length)];

    useEffect(() => {
        setInterval(async () => {
            let txt = document.getElementById("txt");

            if(!running && txt !== null) {
                running = true;
                txt.innerHTML = "";
                for(let i = 0; i < random.length; i++) {
                    txt.innerHTML += random.charAt(i) + '|'; // _
                    await new Promise(r => setTimeout(r, Math.random() * 900));
                    txt.innerHTML = txt.innerHTML.substring(0, txt.innerHTML.length - 1);
                }
                await new Promise(r => setTimeout(r, 1000));

                for(let i = 0; i < txt.innerHTML.length; i++) {
                    await new Promise(r => setTimeout(r, Math.random() * 400));
                    txt.innerHTML = txt.innerHTML.slice(0, txt.innerHTML.length - 2);
                    if(i !== txt.innerHTML.length) {
                        txt.innerHTML += '|';
                    }
                }

                running = false;
                random = difStr[Math.floor(Math.random() * difStr.length)];
            }
        });
    });

    return (<>
        <h1>Nell Paul</h1>
        <h2 id="txt"></h2>
    </>);
}
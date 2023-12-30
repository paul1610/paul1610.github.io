'use client';
import {useEffect} from "react";
import {redirect} from "next/navigation";

export default function Home() {
    function changeLangLocation() {
        redirect(navigator.language == 'de' ? '/de' : '/en');
    }

    useEffect(() => {
        changeLangLocation();
    }, []);

    return (<></>);
}

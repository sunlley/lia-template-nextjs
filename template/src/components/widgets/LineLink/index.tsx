"use client"
import {useEffect} from "react";
import styles from './index.module.scss';
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from 'next/navigation'


type LineLinkProps={
    label:string,
    active?:boolean,
    url?:string,
    className?:string,
    style?:any
}
const LineLink=(props:LineLinkProps)=>{
    const router = useRouter()
    useEffect(() => {
    }, []);

    return(

        <span className={clsx(styles.link,styles.animated_underline,props.className?props.className:"")}
              style={props.style??{}}
              data-active={props.active} >
            {props.url?<Link href={props.url}>{props.label}</Link>:<a>{props.label}</a>}
            {/*<Link href="/dashboard">Dashboard</Link>*/}
            {/*{props.label}*/}
        </span>
    )
}
export default LineLink;
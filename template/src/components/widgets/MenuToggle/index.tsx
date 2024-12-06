'use client'
import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Path = (props:any) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);
const ToggleButton=styled.div`
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MenuToggle = ({ toggle }:any) => (
    <ToggleButton onClick={(event)=>{
        event.stopPropagation();
        if (toggle){
            toggle(event)
        }
    }} >
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    open: { d: "M 2 2.5 L 20 2.5" },
                    closed: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    open: { opacity: 1 },
                    closed: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    open: { d: "M 2 16.346 L 20 16.346" },
                    closed: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </ToggleButton>
);

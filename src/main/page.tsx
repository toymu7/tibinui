"use client"
import Image from "next/image";
import localbodyImg from "@/body/basebody.png";
import localhairImg from "@/hair/hair.png";
import localeyebrowImg from "@/eyebrow/eyebrow01.png";
import localeyeImg from "@/eyes/eyes01.png";
import localmouthImg from "@/mouth/mouth01.png";
import ImageWithBorder from "../components/card/card";
import styles  from "./main.module.css";

import React from "react";
import {ScrollMenu} from 'react-horizontal-scrolling-menu'




const menuItems = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
    { name: 'Item 8' },
    { name: 'Item 9' },
    { name: 'Item 10' },
];
  
const MenuItem = ({ text }:{text:string}) => <div className={styles.menuitem}>{text}</div>;



export default function Home() {
    
    const menu = menuItems.map((el, index) => {
        const { name } = el;
        return <MenuItem text={name} key={index} />;
      });

    return (
        <div className={styles.body}>
            <div className={styles.reactHorizontalScrollingMenuscrollContainer}>
                <h1>Horizontal Scroll Menu</h1>
                <ScrollMenu>{menu}</ScrollMenu>
            </div>


            <div className= {styles.container}>
                <div>
                    <Image src={localbodyImg} alt="素体" width={200}height={350}></Image>
                </div>
                <div className={styles.partsname}>
                    <ul className={styles.ul}>
                        <li>かみのけ</li>
                        <li>まゆげ</li>
                        <li>め</li>
                        <li>くち</li>
                    </ul>
                </div>
                <div>
                    <Image src={localhairImg} alt="髪" className={styles.img}></Image>
                </div>
            {/* <ImageWithBorder imageUrl="#/hair/hair.png" /> */}
            {/* <Image src={localeyebrowImg} alt="まゆげ" width={150}height={15}></Image>
            <Image src={localeyeImg} alt="目" width={100}height={30}></Image>
            <Image src={localmouthImg} alt="口" width={40}height={20}></Image> */}
            </div>
        </div>



        
        
    )
  }

  
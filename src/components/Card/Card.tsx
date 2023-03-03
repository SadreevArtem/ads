import axios from 'axios';
import { FC, useEffect, useState } from 'react'
import { el } from '../../models/elModel';
// import { Loader } from '../Loader/Loader';
import { RiTruckFill } from "react-icons/ri";
import { MdLocalPolice } from "react-icons/md";
import { BsBarChart, BsHeart } from "react-icons/bs";
import styles from './styles.module.scss'


export const Card: FC<el> = ({ id, oldPrice, price, title, seen, locality, date }) => {

  const getDate = new Date(date).toString().slice(15, 24)
  
  return (
    <div className={seen ? styles.yellow : styles.container}>
      <img className={styles.img} src={`https://picsum.photos/200/300?random=${id}`} alt='picrure'/>
      <div className={styles.descriptionWr}>
        <div className={styles.price}>
          <div className={styles.price_wr}>
            <span className={styles.oldPrice}>{Math.floor(oldPrice)} ₽</span>
            <span className={styles.amount}>{Math.floor(price)} ₽</span>
          </div>
          <div>
            <RiTruckFill className={styles.truck} />
            <MdLocalPolice className={styles.police} />
          </div>
        </div>
        <div className={styles.name}>{title}</div>
        <div className={styles.description}>
          <span className={styles.city}>{locality.slice(0, 15)}</span>
          <span className={styles.date}>{getDate}</span>
        </div>
      </div>
      <BsBarChart className={styles.chart}/>
      <BsHeart className={styles.heart} />
      <div className={seen ? styles.isVisible : 'hidden'}>Просмотрено</div>
    </div>
  )
}
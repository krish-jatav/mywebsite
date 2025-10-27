"use client";

import styles from './style.module.scss';

export default function index() {
  return (

   <div>
    <h1 className='text-2xl lg:text-3xl border-b-2 py-3 border-[#7c7c7b] text-neutral-600'>
      Email
      <a href="">{" "}: krishjatav246@gmail.com</a>
    </h1>
     <div className={styles.footer}>
        <a href=''>Github</a>
        <a href=''>LinkedIn</a>
        <a href=''>Instagram</a>
      </div>
   </div>

  )
}

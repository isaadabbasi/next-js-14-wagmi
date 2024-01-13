"use client";
import styles from './page.module.css'

import { Config } from 'wagmi'

import ConnectionBtn from '@/../components/ConnectBtn'
import { ConnectData } from 'wagmi/query'

export default function Home() {

  const onConnect = (data: ConnectData<Config>) => {
    console.log('connected: ', data)
  }

  return (
    <main className={styles.main}>
      <ConnectionBtn onConnect={onConnect}/>
    </main>
  )
}

"use client";

import { useRouter } from 'next/navigation'
import './ConnectBtn.css'

import { useEffect } from 'react'
import { Config, useConnect,  } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { ConnectData } from 'wagmi/query'

interface IProps {
  onConnect: (config: ConnectData<Config>) => void
}

export default function ConnectionBtn(props: IProps) {
  const { connect, data } = useConnect()
  const router = useRouter()


  useEffect(() => {
    if (!data) return

    props.onConnect(data)
    router.push('/courses')
  }, [data])

  const connectWallet = () => {
    connect({ connector: injected() })
  }

  return (
    <button className="btn btn-lg btn-primary" onClick={connectWallet}>
      Connect with Ethereum 🚀
    </button>
  )
}
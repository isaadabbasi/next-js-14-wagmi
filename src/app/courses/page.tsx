"use client";
import { useConnect } from 'wagmi'
import { injected } from 'wagmi/connectors'

export default function Courses() {
  const { connect } = useConnect()

  return (
    <div>
      <h1>Courses</h1>
    </div>
  )
}
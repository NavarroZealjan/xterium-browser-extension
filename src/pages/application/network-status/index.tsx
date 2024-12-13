import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { XodeService } from "@/services/xode.service"
import { Blocks, HandCoins, Hourglass, Wallet } from "lucide-react"
import React, { useEffect, useState } from "react"

const IndexNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState({
    totalBlocks: 0,
    totalAddresses: 0,
    avgBlockInterval: "0",
    lastGasFee: 0
  })

  const xodeService = new XodeService()

  const formatNumber = (num: number) => {
    if (num >= 1_000_000_000_000) {
      return `${(num / 1_000_000_000_000).toFixed(1)}T`
    }
    if (num >= 1_000_000_000) {
      return `${(num / 1_000_000_000).toFixed(1)}B`
    }
    if (num >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(1)}M`
    } else {
      return num.toLocaleString()
    }
  }

  const getNetworkStatus = () => {
    xodeService.getTotalBlocks().then((totalBlocks) => {
      xodeService.getTotalAddresses().then((totalAddresses) => {
        setNetworkStatus((prevStatus) => ({
          prevStatus,
          totalBlocks,
          totalAddresses,
          avgBlockInterval: "12 secs",
          lastGasFee: 0.002
        }))
      })
    })
  }

  useEffect(() => {
    getNetworkStatus()
  }, [])

  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex items-center justify-center h-full w-1/2 p-2">
          <div className="text-center py-10 w-full relative border-2 border-border bg-muted/50 rounded-lg h-full">
            <Blocks className="absolute top-0 left-0 ml-6 mt-6 opacity-50" size="30" />
            <p className="text-2xl font-extrabold mt-6">
              {formatNumber(networkStatus.totalBlocks)}
            </p>
            <Label className="text-sm opacity-50">Total Blocks</Label>
          </div>
        </div>
        <div className="flex items-center justify-center h-full w-1/2 p-2">
          <div className="text-center py-10 w-full relative border-2 border-border bg-muted/50 rounded-lg h-full">
            <Wallet className="absolute top-0 left-0 ml-6 mt-6 opacity-50" size="30" />
            <p className="text-2xl font-extrabold mt-6">
              {formatNumber(networkStatus.totalAddresses)}
            </p>
            <Label className="text-sm opacity-50">Total Addresses</Label>
          </div>
        </div>
        <div className="flex items-center justify-center h-full w-1/2 p-2">
          <div className="text-center py-10 w-full relative border-2 border-border bg-muted/50 rounded-lg h-full">
            <Hourglass className="absolute top-0 left-0 ml-6 mt-6 opacity-50" size="30" />
            <p className="text-2xl font-extrabold mt-6">
              {networkStatus.avgBlockInterval}
            </p>
            <Label className="text-sm opacity-50">AVG Block Intervals</Label>
          </div>
        </div>
        <div className="flex items-center justify-center h-full w-1/2 p-2">
          <div className="text-center py-10 w-full relative border-2 border-border bg-muted/50 rounded-lg h-full">
            <HandCoins className="absolute top-0 left-0 ml-6 mt-6 opacity-50" size="30" />
            <p className="text-2xl font-extrabold mt-6">{networkStatus.lastGasFee}</p>
            <Label className="text-sm opacity-50">Last Gas Fee</Label>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexNetworkStatus

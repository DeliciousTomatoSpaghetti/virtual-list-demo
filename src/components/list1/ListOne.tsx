import { useState, useEffect } from "react"

import VirtualListOne from "./VirtualListOne"

export default function ListOne() {
  const [listData, setListData] = useState<number[]>([])
  const listSize = 500
  useEffect(() => {
    const tempArr = []
    for (let i = 0; i < 100000; i++) {
      tempArr.push(i)
    }
    setListData(tempArr)
  }, [])
  return (
    <div style={{
      height: `${listSize}px`,
      // backgroundColor: "pink"
    }}>
      <VirtualListOne listData={listData} itemSize={100} listSize={listSize} />
    </div>
  )
}
import { useState, useEffect, useMemo, useRef } from "react"

interface Props {
  listData: number[]
  itemSize: number
  listSize: number
}
export default function VirtualListOne({ listData, itemSize, listSize }: Props) {
  // 显示的列表数目
  const visibleCountRef = useRef(Math.ceil(listSize / itemSize))
  const listRef = useRef<HTMLDivElement | null>(null)
  // 起始索引
  const [start, setStart] = useState(0)
  // 结束索引
  const [end, setEnd] = useState(visibleCountRef.current)
  // 可视区域list容器偏移
  const [startOffset, setStartOffset] = useState(0)
  const visibleData = useMemo(() => {
    return listData.slice(start, Math.min(end, listData.length) + 1)
  }, [start, end, listData])

  function handleScroll() {
    const scrollTop = listRef.current?.scrollTop
    if (scrollTop === undefined) return;
    const newStart = Math.floor(scrollTop / itemSize)
    const newEnd = newStart + visibleCountRef.current
    setStart(newStart)
    setEnd(newEnd)
    setStartOffset(scrollTop - (scrollTop % itemSize))
  }
  return (

    <div
      ref={listRef}
      onScroll={handleScroll}
      style={{
        height: "100%",
        overflow: "auto", // 如果不设置，会导致滚动条消失
        position: "relative",
      }}>
      {/* 用于撑开整个列表组件的空盒子 */}
      <div style={{
        height: `${listData.length * itemSize}px`,
        backgroundColor: "pink",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        zIndex: -1
      }} />
      {/* list容器 */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          transform: `translate3d(0,${startOffset}px,0)`
        }}
      >
        {
          visibleData.map(item =>
            <div
              style={{
                boxSizing: "border-box",
                height: `${itemSize}px`,
                width: "100%",
                borderBottom: '1px solid black',
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap"
              }}
              key={item}
            >
              {item}
            </div>
          )
        }
      </div>
    </div>
  )
}
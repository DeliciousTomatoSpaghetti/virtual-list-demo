import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
export default function Root() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('virtual-list-1')
  }, [])
  return (
    <div>
      <div style={{
        height: '80px',
        backgroundColor: '#DEE1E6',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{
          width:"200px",
          display:"flex",
          justifyContent:"space-between"
        }}>
          <button onClick={() => { navigate('virtual-list-1') }}>固定高度</button>
          <button onClick={() => { navigate('virtual-list-2') }}>动态高度</button>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
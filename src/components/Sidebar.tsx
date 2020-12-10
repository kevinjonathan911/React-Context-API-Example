import React from 'react'

interface SidebarProps {
    visible:Boolean
}

function Sidebar({visible}:SidebarProps) {
    return (

        <div style={{zIndex:'-1'}} className='fixed vh100 vw100 flexDirRow'>
            <div className='flex4'></div>
            <div className='blue flex1 flexCenterCenter' style={{transition:'0.5s',marginRight:visible?0:'-50%'}}>
                <h2 className='colorWhite'>Hello There</h2>
            </div>
        </div>
    )
}

export default Sidebar

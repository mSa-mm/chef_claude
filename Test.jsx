import React from 'react'

export default function Test() {
    const[yes, func] = React.useState("Yes")



    return (
        <main>
            <button>{yes}</button>
        </main>
    )
}

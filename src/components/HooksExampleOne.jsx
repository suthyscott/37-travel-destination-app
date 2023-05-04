import { useState, useEffect, useRef } from "react"

const HooksExampleOne = () => {
    const [name, setName] = useState("")
    const prevName = useRef(null)
    const renderCount = useRef(0)
    const inputRef = useRef(null)
    // {current: 0}

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    const handleClick = () => {
        inputRef.current.focus()
    }

    console.log(inputRef.current)
    return (
        <div>
            Hooks Example: useRef
            <input
                ref={inputRef}
                value={name}
                onChange={e => {
                    prevName.current = name
                    setName(e.target.value)
                }}
            />
            <p>Name:{name}</p>
            <p>previous name:{prevName.current}</p>
            <p>RenderCount:{renderCount.current}</p>

            <button onClick={handleClick}>Focus</button>
        </div>
    )
}

export default HooksExampleOne

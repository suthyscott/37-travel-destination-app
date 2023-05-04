import {useState, useEffect, useRef} from 'react'

const HooksExampleOne = () => {
    const [name, setName] = useState('')
    const renderCount = useRef(0)
    // {current: 0}

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    console.log(renderCount.current)
    return (
        <div>
            Hooks Example: useRef
            <input value={name} onChange={e => setName(e.target.value)}/>
            <p>Name:{name}</p>
            <p>RenderCount:{renderCount.current}</p>
        </div>
    )
}

export default HooksExampleOne
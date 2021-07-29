import { useRouter } from 'next/router'
import {
    useCallback,
    useState,
} from 'react'

import {
    Logo,
    InputRoom,
} from '@components/page-index';

export default function Home() {
    const router = useRouter()
    
    const [ roomName, setRoomName ] = useState('')
    
    const handleClick = useCallback(() => {
        router.push({
            pathname: '/room',
            query: {
                name: roomName,
            }
        })
    }, [roomName])

    return (
        <>
            <InputRoom
                value={roomName}
                placeholder="Input the room name"
                onChange={(e) => setRoomName(e.target.value)}
                buttonText="Enter"
                onClick={handleClick}
            />
            <Logo position="bottom-left"/>
        </>
    )
}
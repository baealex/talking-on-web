import styles from './RoomInfo.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import Link from 'next/link';
import { useState } from 'react';

import { Card } from '@components/atoms';

import { Profile }  from '@modules/socket';

export interface RoomInfoProps {
    users: Profile[];
}

export function RoomInfo(props: RoomInfoProps) {
    const [ isOpen, setIsOpen ] = useState(false);
    
    return (
        <>
            <div className={cn('box')}>
                <div className="container">
                    <div className={cn('nav')}>
                        <div>
                            <a onClick={() => setIsOpen((prevState) => !prevState)}>
                                {props.users.length}/12
                            </a>
                        </div>
                        <Link href="/">
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="Door"><path d="M5 2h11a3 3 0 0 1 3 3v14a1 1 0 0 1-1 1h-3"/><path d="M5 2l7.588 1.518A3 3 0 0 1 15 6.459V20.78a1 1 0 0 1-1.196.98l-7.196-1.438A2 2 0 0 1 5 18.36V2z"/><path d="M12 12v2"/></svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cn('side', { isOpen })}>
                {props.users.map((user, idx) => (
                    <Card key={idx} isRounded className="p-3 mt-3">
                        <>
                            {user.name}
                        </>
                    </Card>
                ))}
            </div>
        </>
    )
}
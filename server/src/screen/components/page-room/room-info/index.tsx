import styles from './RoomInfo.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import Link from 'next/link';

export interface RoomInfoProps {
    users: number;
}

export function RoomInfo(props: RoomInfoProps) {
    return (
        <div className={cn('box')}>
            <div className="container">
                <div className={cn('nav')}>
                    <Link href="/">
                        <a>&lt;</a>
                    </Link>
                    <div>{props.users}/12</div>
                </div>
            </div>
        </div>
    )
}
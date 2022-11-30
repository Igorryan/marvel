import * as S from './styles'
import DividerIcon from '../../../assets/divider.svg'
import { useState } from 'react';

const navItems = [
    'New!',
    'Comics',
    'Characters',
    'Clothes',
    'Acessories',
    'Toys',
    'Home Décor',
    'Entertainment',
    'Collectibles',
    'Sales'
]

export function Navbar() {
    const [itemSelected, setItemSelected] = useState<number>(-1)

    return (
        <S.Container>
            <S.NavList>
                <S.Item>
                    <h4>SHOP</h4>
                </S.Item>
                <img src={DividerIcon} alt="Divider Icon"></img>
                {navItems.map((item, i) => (
                    <S.Item active={itemSelected === i} onClick={() => setItemSelected(i)} key={i}>{item}</S.Item>
                ))}
            </S.NavList>
        </S.Container>
    );
}

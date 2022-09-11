import React, { useEffect } from 'react';
import useNavigation, { types } from 'nodes-navigation-focus'
import { menu } from '../../../../fake-data/data';
import {MenuWrapper, MenuItem, RelativeContainer } from '../../../../App.styled';

const Item = ({ text, position, parent }) => {
    const [menuItem, { focused }] = useNavigation({
        parent,
        focusKey: `menu-${position}`,
        position,
        extraProps: {
            title: text
        },
        onEnterPressedNode: (config) => {
            console.log(config)
        },
        onArrowPress:(key, config) => {
            console.log('onArrowPress:', key, config)
        }})

    return (
        <RelativeContainer width={'80%'}>
            <MenuItem ref={menuItem} focused={focused}/>
        </RelativeContainer>
    );
};

const Menu = () => {
    const [menuRef, { focusSelf, setFocus, focused, hasFocusedChild }] = useNavigation({
        type: types.LINE,
        flow: 'vertical',
        focusKey: 'menu',
        rememberLastFocused: true,
        extraProps: {
            title: 'Menu',
        },
        onOut: {
            right: (parentConfig, nodeConfig) => {
                setFocus('slider')
                console.log(parentConfig, nodeConfig)
            }
        }
    })

    useEffect(() => {
        focusSelf();
    }, [])

    return (
        <MenuWrapper ref={menuRef} focused={focused} hasFocusedChild={hasFocusedChild}>
            {menu.map(item => <Item {...item} parent={menuRef} />)}
        </MenuWrapper>
    );
};

export default Menu;
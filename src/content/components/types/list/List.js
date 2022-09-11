import React from 'react';
import scrollIntoView from 'scroll-into-view-if-needed'
import useNavigation, { types } from 'nodes-navigation-focus';
import { Item as ItemContainer, Wrapper, RelativeContainer, Row, Title } from '../../../../App.styled';
import { list } from '../../../../fake-data/data';

const Item = ({ row, position, parent }) => {
    const [itemRef, { focused }] = useNavigation({
        parent,
        focusKey: `item-${row}-${position}`,
        row,
        position,
        onFocusedNode: (configuration) => {
            console.log(configuration)
            scrollIntoView(itemRef.current, { block: 'center', inline: 'center', behavior: 'smooth' })
        },
        extraProps: {
            row,
            position
    }})

    return (
        <RelativeContainer>
            <ItemContainer ref={itemRef} focused={focused} />
        </RelativeContainer>
    );
};

const List = () => {
    const [listRef, { focused, setFocus, hasFocusedChild }] = useNavigation({
        type: types.LIST,
        focusKey: 'content',
        preferredChildFocusKey: 'item-1-1',
        startPosition: 1,
        rememberLastFocused: true,
        rememberLastRowPosition: true,
        onFocusedChildNodeChanges: (config) => {
            console.log(config)
        },
        onOut: {
            top: () => {
                setFocus('slider')
            },
            left: () => {
                setFocus('menu')
            },
        }
    })

    return (
        <Wrapper ref={listRef} focused={focused} hasFocusedChild={hasFocusedChild}>
            {list.map(row => (
                <>
                    <Title>{row.title}</Title>
                    <Row>
                        {row.list.map(item => <Item {...item} parent={listRef} />)}
                    </Row>
                </>
            ))}
        </Wrapper>
    );
};

export default List;
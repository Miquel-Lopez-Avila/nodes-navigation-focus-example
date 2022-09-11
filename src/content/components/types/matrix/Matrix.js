import React from 'react';
import scrollIntoView from 'scroll-into-view-if-needed'
import useNavigation, { types } from 'nodes-navigation-focus';
import {
    MatrixItem,
    RelativeContainer,
    MatrixWrapper,
    MatrixRow, Title,
} from '../../../../App.styled';
import { matrix } from '../../../../fake-data/data';

const Item = ({ row, column, parent }) => {
    const [itemRef, { focused }] = useNavigation({
        parent,
        focusKey: `item-${row}-${column}`,
        row,
        column,
        onFocusedNode: (configuration) => {
            console.log(configuration)
            scrollIntoView(itemRef.current, { block: 'center', inline: 'center', behavior: 'smooth' })
        },
        extraProps: {
            row,
            column
        }})

    return (
        <RelativeContainer width={'33%'}>
            <MatrixItem ref={itemRef} focused={focused} />
        </RelativeContainer>
    );
};

const Matrix = () => {
    const [matrixRef, { focused, setFocus, hasFocusedChild }] = useNavigation({
        type: types.MATRIX,
        focusKey: 'matrix',
        preferredChildFocusKey: 'item-1-1',
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
        <MatrixWrapper ref={matrixRef} focused={focused} hasFocusedChild={hasFocusedChild}>
            <Title>My list</Title>
            {matrix.map(rowData => (
                <MatrixRow>
                    {rowData.map(item => <Item {...item} parent={matrixRef} />)}
                </MatrixRow>
            ))}
        </MatrixWrapper>
    );
};

export default Matrix;
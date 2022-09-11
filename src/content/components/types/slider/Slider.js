import React, { useEffect } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed'
import useNavigation, { types } from 'nodes-navigation-focus'
import { PanelStyle, RelativeContainer, SliderItem } from '../../../../App.styled';
import { arrayHorizontal } from '../../../../fake-data/data';

const Item = ({ text, position, parent }) => {
    const [sliderItem, { focused }] = useNavigation({
        parent,
        focusKey: `slider-${position}`,
        position,
        extraProps: {
            title: text
        },
        onFocusedNode: (configuration) => {
            console.log(configuration)
            scrollIntoView(sliderItem.current, { block: 'center', inline: 'center', behavior: 'smooth' })
        },
        onEnterPressedNode: (config) => {
            console.log(config)
        },
        onArrowPress:(key, config) => {
            console.log('onArrowPress:', key, config)
        }})

    useEffect(() => {
        if (position === 4) scrollIntoView(sliderItem.current, { block: 'center', inline: 'center', behavior: 'auto' })
    }, [])

    return (
        <RelativeContainer>
            <SliderItem ref={sliderItem} focused={focused} />
        </RelativeContainer>
    );
};

const Slider = () => {
    const [slider, { setFocus, focused }] = useNavigation({
        type: types.LINE,
        flow: 'horizontal',
        focusKey: 'slider',
        rememberLastFocused: true,
        preferredChildFocusKey: 'slider-4',
        onOut: {
            down: () => {
                setFocus('item-1-1')
            }
        }
    })

    return (
        <PanelStyle ref={slider} focused={focused}>
            {arrayHorizontal.map(item => <Item {...item} parent={slider} />)}
        </PanelStyle>
    );
};

export default Slider;
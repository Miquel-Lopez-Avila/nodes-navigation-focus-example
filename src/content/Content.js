import React from 'react';
import HeaderContent from './components/header-content/HeaderContent';
import List from './components/types/list/List';
/* import Matrix from './components/types/matrix/Matrix'; */
import Slider from './components/types/slider/Slider';
import { Container, ContentWrapper, WrapperPanel } from '../App.styled';

const Content = () => {
    return (
        <ContentWrapper>
          <HeaderContent />
            <Container>
                <WrapperPanel>
                    <Slider />
                </WrapperPanel>
                <List />
            </Container>
        </ContentWrapper>
    );
};

export default Content;
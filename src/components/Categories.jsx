import React from 'react';
import styled from 'styled-components';
import { categories } from '../mock/data';
import { CategoryItem } from './CategoryItem';

const Container = styled.div`

`;


export const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem key={item.id} item ={item} />
            ))}
        </Container>
    )
}

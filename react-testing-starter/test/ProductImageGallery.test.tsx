import React from 'react'
import {it, describe, expect} from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest' 
import ProductImageGallery from '../src/components/ProductImageGallery'

describe('ProductImageGallery', () => {
    
    it('images urls should not render if array is emptey', () => {
        render(<ProductImageGallery  imageUrls={[]} />);
        const imageList = screen.queryByRole('img')
        console.log(imageList)
        expect(imageList).not.toBeInTheDocument()
    });

    it('images urls should render if array is given', () => {
        const ImageList = [
            'https://via.placeholder.com/150',
            'https://dummyimage.com/300' ,
            'https://placekitten.com/200/300' ,
            'https://placebear.com/250/250' ,
            'https://www.placecage.com/300/200',
            ] 
        render(<ProductImageGallery  imageUrls={ImageList} />);
        const images = screen.getAllByRole('img')
        console.log(images)
        expect(images).toHaveLength(5)
        ImageList.forEach((url, index) => {
            expect(images[index]).toHaveAttribute('src', url)
        });
    })

})
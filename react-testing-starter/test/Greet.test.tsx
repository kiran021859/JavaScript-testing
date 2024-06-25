import React from 'react'
//import {it, describe, expect} from 'vitest'
import { render, screen } from '@testing-library/react' // short cut itr
import Greet from '../src/components/Greet'
//import '@testing-library/jest-dom/vitest'


describe('Greet', () => {
    it('should render hello with name when it is provided', ()=> {
        render(<Greet name="Mosh" />)

        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument
        expect(heading).toHaveTextContent(/mosh/i)
    })

    it('should render login button if name is not provided', ()=> {
        render(<Greet/>)

        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument
        expect(button).toHaveTextContent(/login/i)
    })
})
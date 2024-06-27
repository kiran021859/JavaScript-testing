import React from 'react'
import {it, describe, expect} from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest' 
import userEvent from '@testing-library/user-event'
import TermsAndConditions from '../src/components/TermsAndConditions'


describe('', () => {
    it('should render with correct text and initial state', () => {
        render(<TermsAndConditions/>)

        const testAndConditions = screen.getByRole('heading')
        expect(testAndConditions).toBeInTheDocument()
        expect(testAndConditions).toHaveTextContent('Terms & Conditions')

        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toBeInTheDocument()
        expect(checkbox).not.toBeChecked()

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument()
        expect(button).toBeDisabled()

    });

    it('should enable the button when checkbox is checked', async () => {
        //Arrange
        render(<TermsAndConditions/>);
        //Act
        const checkbox = screen.getByRole('checkbox');
        const user = userEvent.setup();
        await user.click(checkbox);
        //Assert
        expect(screen.getByRole('button')).toBeEnabled();

    })
})
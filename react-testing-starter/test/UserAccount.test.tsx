import React from "react";
import { render, screen } from '@testing-library/react'
import UserAccounts from '../src/components/UserAccount'
import { User } from "../src/entities";



describe('UserAccount', () => {
    it('user name should render', () => {
        const inputData1: User = {
            id: 11111,
            name: "kiran",
            isAdmin: true
        };
        render(<UserAccounts user={inputData1} />);
        const name = screen.getByText(/Kiran/i);
        expect(name).toBeInTheDocument;
        expect(name).toHaveTextContent("kiran");

    });

    it('edit button shuold render, user is admin', () => {
        const inputData2: User = {
            id: 11111,
            name: "kiran",
            isAdmin: true
        };
        render(<UserAccounts user={inputData2} />);
        const button = screen.getByRole('button')
        console.log(button)
        expect(button).toBeInTheDocument()

    });

    it('edit button should not render, user is not admin', () => {
        const inputData3: User = {
            id: 11111,
            name: "kiran",
            isAdmin: false
        };
        render(<UserAccounts user={inputData3} />);
        const button = screen.queryByRole('button')
        console.log(button)
        expect(button).not.toBeInTheDocument()

    });
})
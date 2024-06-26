import React from 'react'
import {it, describe, expect} from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest' 
import UserList from '../src/components/UserList'
import { User } from "../src/entities";

describe('UserList', () => {

    it('should render no users when the users array is empty', () => {
        render(<UserList users={[]} />);
        const paragraph = screen.getByText(/no users/i)
        expect(paragraph).toBeInTheDocument()
    })

    it('should render a list of users', () => {
        const usersList: User[] = [
            {
                id: 1,
                name: "kiran",
                isAdmin: false
            },
            {
                id: 2,
                name: "bubbles",
                isAdmin: false
            }
        ]
        render(<UserList users={usersList} />);
        usersList.forEach(user => {
            const link = screen.getByRole('link', {name: user.name})
            expect(link).toBeInTheDocument()
            expect(link).toHaveAttribute('href', `/users/${user.id}`)
        });
    })
})

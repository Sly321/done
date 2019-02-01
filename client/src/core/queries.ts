import gql from 'graphql-tag'

export const getOpenTasks = gql`
    {
        tasks(where: { completed: false }) {
            id
            subject
            important
            createdAt
        }
    }
`

export const getCompletedTasks = gql`
    {
        tasks(where: { completed: true }) {
            id
            subject
            important
            createdAt
        }
    }
`

export const getUserById = gql`
    query User($id: ID!) {
        user(where: { id: $id }) {
            id
        }
    }
`

export const createTask = gql`
    mutation CreateTask($subject: String!, $ownerId: ID!) {
        createTask(data: { subject: $subject, owner: { connect: { id: $ownerId } } }) {
            id
        }
    }
`

export const updateTask = gql`
    mutation UpdateTask($id: ID!) {
        updateTask(data: { completed: true }, where: { id: $id }) {
            id
        }
    }
`

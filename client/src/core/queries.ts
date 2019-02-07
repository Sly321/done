import gql from 'graphql-tag'
import { formatDateToGql, getTomorrow } from './DateUtils'

export const getOpenTasks = gql`
    query GetOpenTasks($id: ID!) {
        tasks(where: { owner: { id: $id }, completed: false }) {
            id
            subject
            completed
            createdAt
            updatedAt
            important
            owner {
                id
            }
        }
    }
`

export const getTasksDoneToday = gql`
    query GetTasksDoneToday($id: ID!) {
        tasks(
            where: {
                updatedAt_gt: "${formatDateToGql(new Date())}"
                updatedAt_lt: "${formatDateToGql(getTomorrow())}"
                owner: { id: $id }
                completed: true
            }
        ) {
            id
            subject
            completed
            createdAt
            updatedAt
            important
            owner {
                id
            }
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
    mutation CreateTask($subject: String!, $ownerId: ID!, $important: Boolean) {
        createTask(data: { subject: $subject, owner: { connect: { id: $ownerId } }, important: $important }) {
            id
        }
    }
`

export const updateTask = gql`
    mutation UpdateTask($id: ID!, $completed: Boolean!) {
        updateTask(data: { completed: $completed }, where: { id: $id }) {
            id
        }
    }
`

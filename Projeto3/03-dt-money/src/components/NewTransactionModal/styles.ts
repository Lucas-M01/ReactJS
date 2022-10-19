import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: #00000075;
`;

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${({theme}) => theme.colors['base-gray-800']};

    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input { 
            border-radius: 6px;
            border: 0;
            background: ${({theme}) => theme.colors['base-gray-900']};
            color: ${({theme}) => theme.colors['base-gray-300']};
            padding: 1rem;

            &::placeholder {
                color: ${({theme}) => theme.colors['base-gray-500']};  
            }
        }

        button[type="submit"] {
            height: 58px;
            border:0;
            background: ${({theme}) => theme.colors['produto-green-500']};
            color: ${({theme}) => theme.colors.white};
            font-weight: bold;
            padding: 0 1.25rem;
            margin-top: 1.5rem;
            cursor: pointer;
            border-radius: 4px;

            &:hover {
                background: ${({theme}) => theme.colors["produto-green-700"]};
                transition: background-color 0.2s;
            }
        }
    }
`

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${({theme})=> theme.colors['base-gray-300']}
`;

export const TransactionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 1rem;
    margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
    variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
    background: ${({theme}) => theme.colors['base-gray-700']};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    border: 0;
    color: ${({theme}) => theme.colors['base-gray-300']};

    svg {
        color: ${props => props.variant === "income" ? props.theme.colors['produto-green-300'] : props.theme.colors['produto-red-300']};
    }
`
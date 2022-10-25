import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme.colors['base-gray-900']};
    color: ${({ theme }) => theme.colors['base-gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors['produto-green-300']};
    color: ${({ theme }) => theme.colors['produto-green-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors['produto-green-500']};
      border-color: ${({ theme }) => theme.colors['produto-green-500']};
      color: ${({ theme }) => theme.colors.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`

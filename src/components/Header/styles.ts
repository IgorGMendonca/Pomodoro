import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .changeTheme {
    margin-left: 2rem;
    cursor: pointer;

    width: 1.5rem;
    height: 3rem;

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }

  .changeTheme:hover {
    border-bottom: 3px solid ${(props) => props.theme['green-500']};
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`

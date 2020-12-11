import styled from 'styled-components'

const MovieStyles = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  width: 16.5rem;
  height: 25.3rem;
  border: 1px solid rgb(239, 239, 239);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-right: 15px;
  margin-bottom: 15px;

  &:hover {
    cursor: pointer;
  }

  button {
    position: absolute;
    right: 1rem;
    top: 1rem;
    background: transparent;
    border: none;

    svg {
      height: 1.8rem;
      width: 1.8rem;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: width 0.2s ease 0s, height 0.2s;

    &:hover {
      width: 110%;
      height: 110%;
    }
  }
`

export default MovieStyles
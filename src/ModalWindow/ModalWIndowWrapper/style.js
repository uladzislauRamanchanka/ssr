import styled, { css } from 'styled-components'
//import closeButton from '../../images/closeButton.svg'

export const ModalOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    margin: 0;
    padding: 0;
    overflow-y: auto;
`

export const ModalWindow = styled.div`
    display: flex; 
    justify-content: space-evenly;
    flex-direction: column; 
    width: 800px;
    min-height:auto;
    position: relative;
    margin: 10% auto;
    border-radius: 10px;
    background: #232323;
`

export const ModalHeader = styled.div`
    align-self: flex-end;
`

export const Cross = styled.img.attrs({
    src: '/closeButton.svg'
})`
    height: 45px;
    padding: 10px; 
    cursor: pointer;
`

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
`

export const ModalFooter = styled.div`
    align-self: flex-end;
    padding: 20px;
    display: flex;
    margin: 10px;
`

export const FooterButton = styled.div`
    background-color: #F65261;
    border-radius: 2px;
    padding: 10px 55px;
    margin-right: 10px;
    cursor: pointer;
`
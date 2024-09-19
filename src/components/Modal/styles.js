import styled from "styled-components";

// Overlay is a styled component that creates a full-screen overlay for the modal.
// It is positioned fixed to cover the entire viewport and ensures that the modal is centered.
// The background is semi-transparent with a blur effect, and it has a high z-index to appear above other content.

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    background-color: rgba(78, 89, 131, 0.5);
    backdrop-filter: blur(5px);

    z-index: 999;
`;

// Dialog is the styled component for the modal window itself.
// It is a centered, fixed-size box with padding, a shadow, and a white background.
// It has rounded corners and is designed to fit neatly within the overlay.

export const Dialog = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: calc(100% - 144px);
    width: 500px;
    padding: 24px;
    background-color: #ffffff;
    box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2);
    border-radius: 8px;
`;


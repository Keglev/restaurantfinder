import ReactDOM from 'react-dom'; // Import ReactDOM to use the createPortal method for rendering outside the root DOM.

const PortalModal = ({ children }) => {
    // Find the DOM node with the ID 'modal-root' to place the modal content.
    const portal = document.getElementById('modal-root');
    
    // Use ReactDOM.createPortal to render 'children' inside the 'modal-root'.
    return ReactDOM.createPortal(children, portal);
};

// Export the PortalModal component for use in other parts of the app.
export default PortalModal;

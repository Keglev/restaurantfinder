import React, { useEffect } from "react";
import Portal from "./Portal";

import { Overlay, Dialog } from "./styles"; // Import styled components for the modal's overlay and dialog box.

// Modal component that controls the opening and closing of the modal window.
const Modal = ({ children, open, onClose }) => {
    
    // useEffect hook to handle keydown event when the modal is open.
    useEffect(() => {
        // Function that closes the modal when the 'Esc' key is pressed (key code 27).
        function onEsc(e) {
            if(e.keyCode === 27) onClose(); // Close the modal when 'Esc' is pressed.
        }
        
        // Add an event listener to capture keydown events.
        window.addEventListener('keydown', onEsc);

        // Cleanup function to remove the event listener when the component unmounts or when dependencies change.
        return () => {
            window.removeEventListener('keydown', onEsc);
        }
    }, [onClose]); // Run this effect whenever onClose changes.

    // If the modal is not open, return null to render nothing.
    if (!open) return null;

    // Handle clicks on the modal's overlay (outside the modal content) to close the modal.
    function onOverlayClick() {
        onClose(); // Close the modal when clicking the overlay background.
    }

    // Prevent clicks inside the dialog box from propagating to the overlay.
    function onDialogClick(e) {
        e.stopPropagation(); // Stop the click event from reaching the overlay.
    }

    // Render the modal with an overlay and a dialog box, using a Portal to inject it into the DOM.
    return (
        <Portal> {/* Use Portal to render the modal outside the main DOM tree */}
            <Overlay onClick={onOverlayClick}> {/* Overlay that listens for clicks to close the modal */}
                <Dialog onClick={onDialogClick}> {/* Dialog box containing the modal's content */}
                    {children}
                </Dialog>
            </Overlay>
        </Portal>
    );
 };

// Export the Modal component for use elsewhere in the app.
export default Modal;
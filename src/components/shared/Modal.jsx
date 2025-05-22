import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from './small/Button';

const Modal = memo(({ title, children, onClose, onSave, isLoading = false }) => {
  const handleBackdropClick = useCallback(
    e => {
      // Only close if clicking the backdrop itself, not its children
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={handleBackdropClick}>
      <div className="w-[90%] max-w-md rounded-md bg-white p-6 shadow-lg">
        <h3 className="mb-4 text-lg font-semibold text-[#323332]">{title}</h3>
        <div>{children}</div>
        <div className="mt-4 flex justify-end gap-2">
          <Button
            label="Cancel"
            className="!border-gray-500 !bg-gray-500 hover:!border-gray-400 hover:!bg-gray-400"
            onClick={onClose}
            disabled={isLoading}
          />
          <Button label={isLoading ? 'Saving...' : 'Save'} onClick={onSave} disabled={isLoading} />
        </div>
      </div>
    </div>
  );
});

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

Modal.displayName = 'Modal';

export default Modal;

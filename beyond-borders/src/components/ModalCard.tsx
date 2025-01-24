import React from "react";

interface ModalCardProps {
  title: string;
  content: string;
  imgStar: string;
  modalCustomClass?: string;
  imgCustomClass?: string;
  onClose: () => void; // Callback for closing the modal
}

export default function ModalCard({
  title,
  content,
  imgStar,
  modalCustomClass,
  imgCustomClass,
  onClose,
}: ModalCardProps) {
  const handleContainerClick = (e: React.MouseEvent) => {
    // Prevent closing when clicking on the modal card itself
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-container" onClick={handleContainerClick}>
      <div className={`modal-card ${modalCustomClass}`}>
        <h2>{title}</h2>
        <p>{content}</p>
        <img
          src={imgStar}
          alt="star-image"
          className={`modal-image ${imgCustomClass}`}
        />
      </div>
    </div>
  );
}

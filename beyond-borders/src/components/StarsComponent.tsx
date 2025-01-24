import { useState } from "react";
import ModalCard from "./ModalCard";

export default function StarsComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    content: "",
    imgStar: "",
  });

  const stars = [
    {
      title: "Healing",
      content: "This is about healing and finding inner peace.",
      imgStar: "/stars&names/Heaaling.png",
    },
    {
      title: "Growing",
      content: "Personal growth leads to new opportunities.",
      imgStar: "/stars&names/Growing.png",
    },
    {
      title: "Accepting",
      content: "Acceptance is the key to understanding yourself.",
      imgStar: "/stars&names/Accepting.png",
    },
    {
      title: "Learning",
      content: "Continuous learning helps you evolve.",
      imgStar: "/stars&names/Learning.png",
    },
    {
      title: "Evolving",
      content: "Evolving is a natural process of self-improvement.",
      imgStar: "/stars&names/Evolving.png",
    },
  ];

  const handleStarClick = (star: { title: string; content: string }) => {
    // Dynamically generate the path for the modal image
    const modalImgPath = `/stars2/${star.title[0].toUpperCase()}.png`;

    setModalData({
      ...star,
      imgStar: modalImgPath, // Use the dynamically generated path
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="star-container d-flex align-items-center m-auto justify-content-center mb-4">
        {stars.map((star, index) => (
          <div
            key={index}
            className="star-item"
            onClick={() => handleStarClick(star)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={star.imgStar} // Use the original `imgStar` path here
              alt={star.title[0]}
              className="star-image"
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing modal
          >
            <ModalCard
              title={modalData.title}
              content={modalData.content}
              imgStar={modalData.imgStar} // Pass the dynamically generated path
              onClose={closeModal} // Pass the close function
            />
          </div>
        </div>
      )}
    </>
  );
}

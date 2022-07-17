import React, { useState } from "react";
import { Modal } from "@mantine/core";

const Image = ({ src }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpened(true)}>
        <img src={src} alt="" className="w-full rounded-3xl" />
      </button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        classNames={{
          modal: "w-full",
        }}
      >
        <img src={src} alt="" className="aspect-video h-full" />
      </Modal>
    </>
  );
};

export default Image;

import React from "react";

const PhotosItem = ({ photosItem, values, arrayHelpers }) => {
  return (
    <label className="photo__cbx items">
      {photosItem.name}
      <input
        name="photosItems"
        type="checkbox"
        value={photosItem.id}
        checked={
          values.list?.findIndex((pItem) => pItem.id === photosItem.id) !== -1
        }
        onChange={(e) => {
          if (e.target.checked) arrayHelpers.push(photosItem);
          else {
            const idx = values.list.findIndex(
              (pItem) => pItem.id === photosItem.id
            );
            arrayHelpers.remove(idx);
          }
        }}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default PhotosItem;

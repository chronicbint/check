import { FieldArray } from "formik";
import React from "react";
import PhotosItem from "./PhotosItem";

const PhotosRow = ({ photosRow, arrFilter, values, arrayHelpers }) => {
  return (
    <div className="photos__row">
      <label className="photo__cbx">
        {photosRow?.date}
        <input
          name={photosRow?.id}
          type="checkbox"
          checked={arrFilter.length === photosRow.arr?.length}
          onChange={(e) => {
            if (e.target.checked) {
              for (const key in photosRow.arr) {
                if (photosRow.arr.hasOwnProperty(key)) {
                  const element = photosRow.arr[key];
                  const idx = values.list.findIndex(
                    (photo) => photo.id === element.id
                  );
                  idx === -1 && arrayHelpers.push(element);
                }
              }
            } else {
              for (const key in photosRow.arr) {
                if (photosRow.arr.hasOwnProperty(key)) {
                  const element = photosRow.arr[key];
                  const idx = values.list.findIndex(
                    (photo) => photo.date === element.date
                  );
                  arrayHelpers.remove(idx);
                }
              }
            }
          }}
        />
        <span className="checkmark"></span>
      </label>

      <FieldArray name="list">
        {(arrayHelpers) => {
          return (
            <div className="item__list">
              {photosRow.arr?.map((photosItem) => {
                return (
                  <PhotosItem
                    key={photosItem.id}
                    values={values}
                    photosItem={photosItem}
                    arrayHelpers={arrayHelpers}
                  />
                );
              })}
            </div>
          );
        }}
      </FieldArray>
    </div>
  );
};

export default PhotosRow;

import { FieldArray, Formik, useFormikContext } from "formik";
import React, { useEffect } from "react";
import PhotosRow from "./PhotosRow";

const AutoSubmit = () => {
  const { values, submitForm } = useFormikContext();
  useEffect(() => {
    if (values) {
      submitForm();
    }

    return submitForm();
  }, [values, submitForm]);

  return null;
};

const Photos = ({ photos }) => {
  const fnSubmit = (values) => console.log(values);

  return (
    <Formik initialValues={{ list: [] }} onSubmit={fnSubmit}>
      {({ values }) => {
        return (
          <div className="wrapper__list">
            <FieldArray name="list">
              {(arrayHelpers) => {
                return (
                  <div className="photos">
                    {photos.map((photosRow, index) => {
                      const arrFilter = values.list.filter(
                        (p) => p.date === photosRow.date
                      );
                      return (
                        <PhotosRow
                          key={index}
                          values={values}
                          arrFilter={arrFilter}
                          photosRow={photosRow}
                          arrayHelpers={arrayHelpers}
                        />
                      );
                    })}
                    <AutoSubmit />
                  </div>
                );
              }}
            </FieldArray>
          </div>
        );
      }}
    </Formik>
  );
};

export default Photos;

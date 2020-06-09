import React from "react";
import ImageUploading from "react-images-uploading";
import styled from "styled-components";
import Icon from "components/Icon";

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  justify-content: flex-start;
`;

const Image = styled.img`
  height: 144px;
  width: 132px;
  border: solid 1px ${props => props.theme.color.creme};
  border-radius: 5px;
`;

const AddAPhoto = styled.button`
  cursor: poiner;
  height: 144px;
  width: 132px;
  border: solid 1px ${props => props.theme.color.creme};
  border-radius: 5px;
  background-color: ${props => props.theme.color.background};
  outline: none;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: ${props => props.theme.color.creme};
  }
`;

const StyledLabel = styled.label`
  font-size: 10px;
  color: ${props => props.theme.color.black1};
`;

export default function ({ maxNumber = 8, ...props }) {
  return (
    <ImageUploading
      multiple
      onChange={props.input.onChange}
      maxNumber={maxNumber + 1}
    >
      {({ imageList, onImageUpload, onImageRemoveAll }) => (
        <div>
          <ImageGrid>
            {imageList.map(image => (
              <Image
                onClick={image.onUpdate}
                src={image.dataURL}
                alt=""
                width="100%"
                style={{ object_fit: "contain" }}
              />
            ))}
            {imageList.length < maxNumber && (
              <AddAPhoto
                onClick={e => {
                  onImageUpload();
                  e.preventDefault();
                }}
              >
                <Icon icon="camera" color="black" size={32} />
                <StyledLabel style={{ marginTop: 8 }}>Add a photo</StyledLabel>
              </AddAPhoto>
            )}
          </ImageGrid>
        </div>
      )}
    </ImageUploading>
  );
}

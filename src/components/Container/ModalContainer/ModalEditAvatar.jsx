import React from 'react';
import { useDispatch } from 'react-redux';

import ImgCrop from 'antd-img-crop';
import { PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

import { uploadAvatarAction } from '../../../redux/slice/authenticationSlice';

const ModalEditAvatar = ({ handleOk }) => {
  const dispatch = useDispatch();

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }

    return isJpgOrPng && isLt2M;
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const handleSubmitAvatar = (values) => {
    console.log(values);
    dispatch(
      uploadAvatarAction({
        fileImage: values,
      })
    );
    handleOk();
  };
  return (
    <ImgCrop zoomSlider showReset cropShape="round">
      <Upload
        action={handleSubmitAvatar}
        listType="picture-circle"
        beforeUpload={beforeUpload}
        onPreview={onPreview}
        maxCount={1}
      >
        <PlusOutlined /> Upload
      </Upload>
    </ImgCrop>
  );
};

export default ModalEditAvatar;

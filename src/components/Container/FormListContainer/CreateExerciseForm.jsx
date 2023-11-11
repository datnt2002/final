import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Form, Input, Select } from 'antd';

import { CREATE_LESSON_FORM_FIELDS, VALIDATE_MESSAGE } from '../../../constants/formfield';
import { createNewLessonAction } from '../../../redux/slice/courseSlice';

const CreateExerciseForm = () => {
  const listSections = useSelector((state) => state.course.listSections);
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitQuiz = (values) => {
    console.log(values);
    dispatch(
      createNewLessonAction({
        sectionId: values.sectionId,
        lessonName: values.lessonName,
        lessonDescription: values.lessonDescription,

        navigate,
      })
    );

    form.resetFields();
  };

  const formLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  return (
    <Form form={form} name="create-quiz" onFinish={handleSubmitQuiz} labelWrap {...formLayout}>
      <Form.Item
        label={CREATE_LESSON_FORM_FIELDS.SECTION_LABEL}
        name={CREATE_LESSON_FORM_FIELDS.SECTION_ID}
        rules={[{ required: true, message: VALIDATE_MESSAGE.SECTION_REQUIRED }]}
      >
        <Select className="border rounded-md">
          {listSections.map((section) => {
            return (
              <Select.Option key={section.sectionId} value={section.sectionId}>
                {section.sectionName}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        name={CREATE_LESSON_FORM_FIELDS.QUIZ_TITLE_NAME}
        label={CREATE_LESSON_FORM_FIELDS.QUIZ_TITLE_LABEL}
        rules={[{ required: true, message: VALIDATE_MESSAGE.REQUIRED }]}
      >
        <Input className="border rounded-md" />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button type="primary" htmlType="submit" className="bg-black w-full">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateExerciseForm;
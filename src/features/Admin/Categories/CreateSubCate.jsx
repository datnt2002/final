import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Layout, Select } from 'antd';
import { Content } from 'antd/es/layout/layout';

import BreadCrumbCustom from '../../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import { PAGINATION, SUB_CATEGORY_FORM_FIELDS, VALIDATE_MESSAGE } from '../../../constants';
import { createSubCategoriesAction, getListCategoryAction } from '../../../redux/slice/courseSlice';
import Loading from '../../../components/Common/Loading';
import repeatBg from '../../../assets/imgs/repeatbg.jpg';

const CreateSubCate = () => {
  const listCategories = useSelector((state) => state.course.listCategory);
  const loading = useSelector((state) => state.course.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getListCategoryAction({
        pageSize: PAGINATION.PAGE_SIZE,
      })
    );
  }, []);

  const handleCreateSubCategory = (values) => {
    dispatch(
      createSubCategoriesAction({
        cateId: values.cateId,
        subCateName: values.subCateName,
        navigate,
      })
    );
  };

  const formLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  return (
    <Layout style={{ backgroundImage: `url(${repeatBg})`, backgroundSize: '100% auto', padding: '0 24px 24px' }}>
      {loading && <Loading />}
      <div className="my-5 ml-6">
        <BreadCrumbCustom />
      </div>
      <Content
        className="h-screen"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <div className="bg-white/80 rounded-2xl p-6 border border-black">
          <h1 className="font-semibold text-2xl ml-5">Create New Sub Category</h1>
          <Form layout="horizontal" onFinish={handleCreateSubCategory} {...formLayout}>
            <div className="flex">
              <div className="flex flex-col flex-1 p-5">
                <Form.Item
                  label={SUB_CATEGORY_FORM_FIELDS.CATEGORY_NAME_LABEL}
                  name={SUB_CATEGORY_FORM_FIELDS.CATEGORY_ID}
                  rules={[
                    {
                      required: true,
                      message: VALIDATE_MESSAGE.CATEGORY_REQUIRED,
                    },
                  ]}
                >
                  <Select placeholder={SUB_CATEGORY_FORM_FIELDS.SELECT_CATE_PLACEHOLDER} allowClear>
                    {listCategories.map((cate) => {
                      return (
                        <Select.Option key={cate.cateId} value={cate.cateId}>
                          {cate.cateName}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item
                  label={SUB_CATEGORY_FORM_FIELDS.SUB_CATEGORY_NAME_LABEL}
                  name={SUB_CATEGORY_FORM_FIELDS.NEW_SUB_CATEGORY_NAME}
                  rules={[
                    {
                      required: true,
                      message: VALIDATE_MESSAGE.SUB_CATEGORY_REQUIRED,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 20, offset: 4 }}>
                  <Button type="primary" htmlType="submit" className="bg-black w-full">
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default CreateSubCate;

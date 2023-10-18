import axiosClient from './api.service';

export const getListCourses = (data) => {
  console.log(data);
  return axiosClient
    .get('courses', { params: { pageIndex: data.pageIndex, pageSize: data.pageSize } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteCourseFromAdmin = (data) => {
  return axiosClient
    .delete(`courses/${data.courseId}`, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getListPendingCourse = (data) => {
  console.log(data);
  return axiosClient
    .get('courses/pending', {
      params: { pageIndex: data.pageIndex, pageSize: data.pageSize },
      headers: { Authorization: `Bearer ${data.accessToken}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const approvedCourse = (data) => {
  console.log(data);
  return axiosClient
    .patch(`courses/approve/${data.courseId}`, {}, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getListDeleteCourse = (data) => {
  return axiosClient
    .get('courses/deleted', {
      params: { pageIndex: data.pageIndex, pageSize: data.pageSize },
      headers: { Authorization: `Bearer ${data.accessToken}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const restoreDeleteCourse = (data) => {
  return axiosClient
    .patch(
      `courses/restore/${data.courseId}`,
      {},
      {
        headers: { Authorization: `Bearer ${data.accessToken}` },
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getDetailCourse = (data) => {
  return axiosClient
    .get(`courses/${data.courseId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getDetailPendingCourse = (data) => {
  return axiosClient
    .get(`courses/pending/${data.courseId}`, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const createNewCourse = (data) => {
  const formData = new FormData();
  formData.append('courseName', data.courseName);
  formData.append('subCateId', data.subCateId);
  formData.append('price', data.price);
  formData.append('isFree', data.isFree);
  formData.append('description', data.description);
  formData.append('file', data.file);

  return axiosClient
    .post('courses', formData, {
      headers: {
        Authorization: `Bearer ${data.accessToken}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const createNewSection = (data) => {
  return axiosClient
    .post(
      'sections',
      {
        sectionName: data.sectionName,
        courseId: data.courseId,
      },
      { headers: { Authorization: `Bearer ${data.accessToken}` } }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const createNewLesson = (data) => {
  const formData = new FormData();
  formData.append('lessonName', data.lessonName);
  formData.append('sectionId', data.sectionId);
  formData.append('file', data.file);
  console.log(data);
  return axiosClient
    .post('lessons', formData, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getLessonDetail = (data) => {
  console.log(data);
  return axiosClient
    .get(`lessons/${data.lessonId}`, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getListCategory = (data) => {
  console.log(data);
  return axiosClient
    .get('categories', {
      params: { pageIndex: data.pageIndex, pageSize: data.pageSize },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const createNewCategory = (data) => {
  console.log(data);
  return axiosClient
    .post('categories', { cateName: data.cateName }, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const EditCategory = (data) => {
  console.log(data);
  return axiosClient
    .put(
      `categories/${data.cateId}`,
      { cateName: data.cateName },
      { headers: { Authorization: `Bearer ${data.accessToken}` } }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getSubCategories = (data) => {
  return axiosClient
    .get(`sub-categories/by-category/${data.cateId}`, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const createSubCate = (data) => {
  console.log(data);
  return axiosClient
    .post(
      'sub-categories',
      { cateId: data.cateId, subCateName: data.subCateName },
      { headers: { Authorization: `Bearer ${data.accessToken}` } }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteSubCate = (data) => {
  return axiosClient
    .delete(`sub-categories/${data.subCateId}`, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const createPayment = (data) => {
  console.log(data);
  return axiosClient
    .post(
      'createPayment',
      { language: 'vn', bankCode: data.bankCode, amount: data.amount },
      { headers: { Authorization: `Bearer ${data.accessToken}` } }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

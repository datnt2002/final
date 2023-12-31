import axiosClient from './api.service';

//approved course
export const getListCourses = (data) => {
  return axiosClient
    .get('courses', { params: { pageIndex: data.pageIndex, pageSize: data.pageSize } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
export const getDetailCourse = (data) => {
  console.log(data);
  return axiosClient
    .get(`courses/${data.courseId}`, { headers: { Authorization: `Bearer ${data.accessToken}` } })
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
//not done
export const getListFeaturesCourses = (data) => {
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
export const getQuizDetail = (data) => {
  console.log(data);
  return axiosClient
    .get(`quizzes/${data.quizId}`, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

//pending course
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
//deleted course
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
export const getDetailDeletedCourse = (data) => {
  return axiosClient
    .get(`courses/deleted/${data.courseId}`, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

//draft course
export const getListDraftCourse = (data) => {
  return axiosClient
    .get('courses/draft', {
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
export const getDraftCourseDetail = (data) => {
  return axiosClient
    .get(`courses/draft/${data.courseId}`, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
export const publishDraftCourse = (data) => {
  console.log(data);
  return axiosClient
    .patch(`courses/draft/${data.courseId}`, {}, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const DeleteLesson = (data) => {
  return axiosClient
    .delete(`lessons/${data.lessonId}`, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
export const deleteQuiz = (data) => {
  return axiosClient
    .delete(`quizzes/${data.quizId}`, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
// course create
export const createNewCourse = (data) => {
  const formData = new FormData();
  formData.append('courseName', data.courseName);
  formData.append('subCateId', data.subCateId);
  formData.append('price', data.price);
  formData.append('isFree', data.isFree);
  formData.append('description', data.description);
  formData.append('file', data.file);
  formData.append('brief', data.brief);
  formData.append('knowledge', data.knowledgeString);
  formData.append('requirement', data.requirementString);

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
  const body = data.sections;
  return axiosClient
    .post(`sections/${data.courseId}`, body, { headers: { Authorization: `Bearer ${data.accessToken}` } })
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

export const createNewQuiz = (data) => {
  const body = { title: data.title, sectionId: data.sectionId };
  console.log(body);
  return axiosClient
    .post('quizzes', body, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const createNewQuestionInQuiz = (data) => {
  const body = data.question;
  console.log(body);
  return axiosClient
    .post('questions', body, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
export const editDraftCourse = (data) => {
  const formData = new FormData();
  formData.append('courseName', data.courseName);
  formData.append('subCateId', data.subCateId);
  formData.append('price', data.price);
  formData.append('isFree', data.isFree);
  formData.append('description', data.description);
  formData.append('brief', data.brief);
  formData.append('knowledge', data.knowledgeString);
  formData.append('requirement', data.requirementString);

  return axiosClient
    .patch(`courses/${data.courseId}`, formData, {
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

export const editCourseImage = (data) => {
  const formData = new FormData();
  formData.append('file', data.file);

  return axiosClient
    .patch(`courses/update-img/${data.courseId}`, formData, {
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

export const editSection = (data) => {
  return axiosClient
    .put(
      `sections/${data.sectionId}`,
      { courseId: data.courseId, sectionName: data.sectionName },
      { headers: { Authorization: `Bearer ${data.accessToken}` } }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
export const editQuiz = (data) => {
  return axiosClient
    .put(
      `quizzes/${data.quizId}`,
      { sectionId: data.sectionId, title: data.title },
      { headers: { Authorization: `Bearer ${data.accessToken}` } }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const editLesson = (data) => {
  const formData = new FormData();
  formData.append('lessonName', data.lessonName);
  formData.append('sectionId', data.sectionId);
  formData.append('file', data.file);
  console.log(data);
  return axiosClient
    .put(`lessons/${data?.lessonId}`, formData, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

//category
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
//subcategory
export const getAllSubCategories = () => {
  return axiosClient
    .get('sub-categories')
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getSubCategoriesByCategory = (data) => {
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

export const editSubCate = (data) => {
  return axiosClient
    .put(
      `sub-categories/${data.subCateId}`,
      { subCateName: data.subCateName, cateId: data.cateId },
      { headers: { Authorization: `Bearer ${data.accessToken}` } }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

//payment
export const createPayment = (data) => {
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

export const buyCourseByECoin = (data) => {
  const body = data?.courseIdArray;
  return axiosClient
    .post('buy-courses', body, { headers: { Authorization: `Bearer ${data.accessToken}` } })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

// get course in homepage
export const getMyBoughtCourse = (data) => {
  return axiosClient
    .get('courses/bought', {
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

export const getListCourseFilterByCate = (data) => {
  return axiosClient
    .get(`courses/approved/category/${data.cateId}`, {
      params: { pageIndex: data.pageIndex, pageSize: data.pageSize },
      // headers: { Authorization: `Bearer ${data.accessToken}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getListCourseFilterBySubCate = (data) => {
  return axiosClient
    .get(`courses/approved/subcate/${data.subCateId}`, {
      params: { pageIndex: data.pageIndex, pageSize: data.pageSize },
      // headers: { Authorization: `Bearer ${data.accessToken}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getListSearchCourse = (data) => {
  return axiosClient
    .get(`courses/search/${data.keyword}`, {
      // params: { pageIndex: data.pageIndex, pageSize: data.pageSize },
      // headers: { Authorization: `Bearer ${data.accessToken}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

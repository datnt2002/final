import { createSlice } from '@reduxjs/toolkit';
import { STORAGE } from '../../constants';

const initialState = {
  loading: false,
  listCourse: [],
  listSections: [],
  listQuestions: [],
  listMyBoughtCourse: [],
  pagination: {},
  currentCourse: {},
  currentSection: {},
  currentLesson: {},
  currentQuiz: {},
  isCreateLessonSuccess: false,
  isCreateQuizSuccess: false,
  listCategory: [],
  listSubcategories: [],
  filterCourse: [],
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    //reset store action
    resetCourseSliceAction: () => {
      return initialState;
    },
    getListFeatureCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListFeatureCourseSuccess: (state, action) => {
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        listCourse: data,
        pagination: { pageIndex, pageSize, totalCount, totalPages },
      };
    },
    getListFeatureCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    //list approved course slice
    getListCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListCourseSuccess: (state, action) => {
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        listCourse: data,
        pagination: { pageIndex, pageSize, totalCount, totalPages },
      };
    },
    getListCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    getDetailCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getDetailCourseSuccess: (state, action) => {
      const { Sections } = action.payload?.course;
      return {
        ...state,
        loading: false,
        currentCourse: action.payload,
        listSections: Sections,
      };
    },
    getDetailCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    deleteCourseFromAdminAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    deleteCourseFromAdminSuccess: (state) => {
      const courseId = sessionStorage.getItem(STORAGE.COURSE_ID);
      return {
        ...state,
        loading: false,
        listCourse: state.listCourse.filter((course) => {
          return course.courseId !== courseId;
        }),
      };
    },
    deleteCourseFromAdminFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    //list pending course slice
    getListCoursePendingAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListCoursePendingSuccess: (state, action) => {
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        listCourse: data,
        pagination: { pageIndex, pageSize, totalCount, totalPages },
      };
    },
    getListCoursePendingFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    approvedCoursePendingAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    approvedCoursePendingSuccess: (state, action) => {
      const courseId = sessionStorage.getItem(STORAGE.COURSE_ID);
      return {
        ...state,
        loading: false,
        listCourse: state.listCourse.filter((course) => {
          return course.courseId !== courseId;
        }),
      };
    },
    approvedCoursePendingFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    getDetailPendingCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    //list deleted course slice
    getListDeletedCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListDeletedCourseSuccess: (state, action) => {
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        listCourse: data,
        pagination: { pageIndex, pageSize, totalCount, totalPages },
      };
    },
    getListDeletedCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    restoreDeletedCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    restoreDeletedCourseSuccess: (state, action) => {
      const courseId = sessionStorage.getItem(STORAGE.COURSE_ID);
      return {
        ...state,
        loading: false,
        currentCourse: action.payload,
        listCourse: state.listCourse.filter((course) => {
          return course.courseId !== courseId;
        }),
      };
    },
    restoreDeletedCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    getDetailDeletedCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },

    //list draft course slice
    getListDraftCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListDraftCourseSuccess: (state, action) => {
      console.log(action.payload);
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        listCourse: data,
        pagination: { pageIndex, pageSize, totalCount, totalPages },
      };
    },
    getListDraftCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    getDetailDraftCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getDetailDraftCourseSuccess: (state, action) => {
      const { Sections } = action.payload?.course;
      return {
        ...state,
        loading: false,
        currentCourse: action.payload,
        listSections: Sections,
      };
    },
    getDetailDraftCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    publishDraftCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    publishDraftCourseSuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    publishDraftCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    //create course
    createNewCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    createNewCourseSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        currentCourse: action.payload,
      };
    },
    createNewCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    //edit draft course
    editDraftCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    editDraftCourseSuccess: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
      };
    },
    editDraftCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    editDraftSectionAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    editDraftSectionSuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    editDraftSectionFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    editDraftQuizAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    editDraftQuizSuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    editDraftQuizFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    editCourseImageAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    editCourseImageSuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    editCourseImageFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    //create section
    createNewSectionAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    createNewSectionSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        currentSection: action.payload,
      };
    },
    createNewSectionFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    //create lesson
    createNewLessonAction: (state) => {
      return {
        ...state,
        loading: true,
        isCreateLessonSuccess: false,
      };
    },
    createNewLessonSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        isCreateLessonSuccess: true,
        currentLesson: action.payload,
      };
    },
    createNewLessonFail: (state) => {
      return {
        ...state,
        loading: false,
        isCreateLessonSuccess: false,
      };
    },
    getDetailLessonAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getDetailLessonSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        currentLesson: action.payload,
      };
    },
    getDetailLessonFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    createNewQuizAction: (state) => {
      return {
        ...state,
        loading: true,
        isCreateQuizSuccess: false,
      };
    },
    createNewQuizSuccess: (state, action) => {
      console.log(action.payload);
      sessionStorage.setItem(STORAGE.QUIZ_ID, action.payload?.quizId);
      return {
        ...state,
        loading: false,
        isCreateQuizSuccess: true,
      };
    },
    createNewQuizFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },

    createNewQuestionInQuizAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    createNewQuestionInQuizSuccess: (state) => {
      return {
        ...state,
        loading: false,
        isCreateQuizSuccess: false,
      };
    },
    createNewQuestionInQuizFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    getDetailQuizAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getDetailQuizSuccess: (state, action) => {
      console.log(action.payload);
      const { Questions } = action.payload;
      return {
        ...state,
        loading: false,
        currentQuiz: action.payload,
        listQuestions: Questions,
      };
    },
    getDetailQuizFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },

    //delete lesson
    deleteLessonAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    deleteLessonSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
      };
    },
    deleteLessonFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    deleteQuizAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    //category
    getListCategoryAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListCategorySuccess: (state, action) => {
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        listCategory: data,
        pagination: { pageIndex, pageSize, totalCount, totalPages },
      };
    },
    getListCategoryFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    createCategoryAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    createCategorySuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    createCategoryFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    editCategoryAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    editCategorySuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        listCategory: state.listCategory.map((category) => {
          if (category.cateId === action.payload.cateId) {
            return action.payload;
          } else {
            return category;
          }
        }),
      };
    },
    editCategoryFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    //subcategory
    getSubCategoriesAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getSubCategoriesSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        listSubcategories: action.payload,
      };
    },
    getSubCategoriesFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    getSubCategoriesByCategoryAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getSubCategoriesByCategorySuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        listSubcategories: action.payload,
      };
    },
    getSubCategoriesByCategoryFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    createSubCategoriesAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    createSubCategoriesSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        listSubcategories: [...state.listSubcategories, action.payload],
      };
    },
    createSubCategoriesFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    editSubCategoriesAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    editSubCategoriesSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
      };
    },
    editSubCategoriesFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    //payment
    createPaymentAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    createPaymentSuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    createPaymentFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    buyCourseByECoinAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    buyCourseByECoinSuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    buyCourseByECoinFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },

    // user course
    getListMyBoughtCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListMyBoughtCourseSuccess: (state, action) => {
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        listMyBoughtCourse: data,
        pagination: { pageIndex, pageSize, totalCount, totalPages },
      };
    },
    getListMyBoughtCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },

    //filter course
    getListCourseFilterByCateAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListCourseFilterByCateSuccess: (state, action) => {
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        filterCourse: data,
        pagination: { pageIndex, pageSize, totalCount, totalPages },
      };
    },
    getListCourseFilterBySubCateAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListCourseFilterBySubCateSuccess: (state, action) => {
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        filterCourse: data,
        pagination: { pageIndex, pageSize, totalCount, totalPages },
      };
    },
    getListSearchCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListSearchCourseSuccess: (state, action) => {
      // const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        filterCourse: action.payload,
        // pagination: { pageIndex, pageSize, totalCount, totalPages },
      };
    },
    getListCourseFilterFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
  },
});

export const {
  resetCourseSliceAction,
  //approved course
  getListFeatureCourseAction,
  getListFeatureCourseSuccess,
  getListFeatureCourseFail,
  getListCourseAction,
  getListCourseSuccess,
  getListCourseFail,
  deleteCourseFromAdminAction,
  deleteCourseFromAdminSuccess,
  deleteCourseFromAdminFail,
  getDetailCourseAction,
  getDetailCourseSuccess,
  getDetailCourseFail,
  getDetailLessonAction,
  getDetailLessonSuccess,
  getDetailLessonFail,
  //pending course
  getListCoursePendingAction,
  getListCoursePendingSuccess,
  getListCoursePendingFail,
  approvedCoursePendingAction,
  approvedCoursePendingSuccess,
  approvedCoursePendingFail,
  getDetailPendingCourseAction,
  //deleted course
  getListDeletedCourseAction,
  getListDeletedCourseSuccess,
  getListDeletedCourseFail,
  restoreDeletedCourseAction,
  restoreDeletedCourseSuccess,
  restoreDeletedCourseFail,
  getDetailDeletedCourseAction,
  //draft course
  getListDraftCourseAction,
  getListDraftCourseSuccess,
  getListDraftCourseFail,
  getDetailDraftCourseAction,
  getDetailDraftCourseSuccess,
  getDetailDraftCourseFail,
  publishDraftCourseAction,
  publishDraftCourseSuccess,
  publishDraftCourseFail,
  editDraftCourseAction,
  editDraftCourseSuccess,
  editDraftCourseFail,
  editDraftSectionAction,
  editDraftSectionSuccess,
  editDraftSectionFail,
  getDetailQuizAction,
  getDetailQuizSuccess,
  getDetailQuizFail,
  editDraftQuizAction,
  editDraftQuizSuccess,
  editDraftQuizFail,
  editCourseImageAction,
  editCourseImageSuccess,
  editCourseImageFail,
  //create course
  createNewCourseAction,
  createNewCourseSuccess,
  createNewCourseFail,
  createNewSectionAction,
  createNewSectionSuccess,
  createNewSectionFail,
  createNewLessonAction,
  createNewLessonSuccess,
  createNewLessonFail,
  createNewQuizAction,
  createNewQuizSuccess,
  createNewQuizFail,
  createNewQuestionInQuizAction,
  createNewQuestionInQuizSuccess,
  createNewQuestionInQuizFail,
  // delete lesson
  deleteLessonAction,
  deleteLessonSuccess,
  deleteLessonFail,
  deleteQuizAction,
  //category
  getListCategoryAction,
  getListCategorySuccess,
  getListCategoryFail,
  createCategoryAction,
  createCategorySuccess,
  createCategoryFail,
  editCategoryAction,
  editCategorySuccess,
  editCategoryFail,
  //subcategory
  getSubCategoriesAction,
  getSubCategoriesSuccess,
  getSubCategoriesFail,
  getSubCategoriesByCategoryAction,
  getSubCategoriesByCategorySuccess,
  getSubCategoriesByCategoryFail,
  createSubCategoriesAction,
  createSubCategoriesSuccess,
  createSubCategoriesFail,
  editSubCategoriesAction,
  editSubCategoriesSuccess,
  editSubCategoriesFail,
  //payment
  createPaymentAction,
  createPaymentSuccess,
  createPaymentFail,
  buyCourseByECoinAction,
  buyCourseByECoinSuccess,
  buyCourseByECoinFail,
  // user course
  getListMyBoughtCourseAction,
  getListMyBoughtCourseSuccess,
  getListMyBoughtCourseFail,
  //filter
  getListCourseFilterByCateAction,
  getListCourseFilterByCateSuccess,
  getListCourseFilterBySubCateAction,
  getListCourseFilterBySubCateSuccess,
  getListCourseFilterFail,
  getListSearchCourseAction,
  getListSearchCourseSuccess,
} = courseSlice.actions;

export default courseSlice.reducer;

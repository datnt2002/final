import React from 'react';
import { Empty, Table } from 'antd';

import flattenObj from '../../../utils/flattenObj';
import dayjs from 'dayjs';
import { DAY_FORMAT, TABLE_COLUMN } from '../../../constants';
import formatTitleTable from '../../../utils/formatTitleTable';

const TableAdmin = ({ dataSource, actions, pagination, setPageIndex }) => {
  if (dataSource.length > 0) {
    //solve nested object because of join database
    const flattenData = dataSource.map((data, index) => {
      //add a pair key and value to avoid warning unique table data
      const clone = { ...data };
      Object.assign(clone, { key: index });
      const result = flattenObj(clone);
      return result;
    });

    // Filter the listCourse array to include only rows with status 'approved' or 'pending'
    const approvedAndPendingCourses = flattenData.filter((course) => {
      if (course?.isDeleted) {
        return course.status !== TABLE_COLUMN.STATUS_DRAFT;
      }
      return course;
    });

    //get title of table by get key of obj
    const titleColumnList = Object.keys(flattenData[0]);
    const columns = titleColumnList.map((column, index) => {
      let data;
      if (column === TABLE_COLUMN.CREATED_AT || column === TABLE_COLUMN.UPDATED_AT) {
        data = {
          key: column,
          title: formatTitleTable(column),
          dataIndex: column,
          sorter: (a, b) => {
            if (a[column] > b[column]) {
              return 1;
            } else if (a[column] < b[column]) {
              return -1;
            } else {
              return 0;
            }
          },

          fixed: index < 2,
          width: 120,
          render: (text) => {
            return <span>{dayjs(text).format(DAY_FORMAT.D_M_Y)}</span>;
          },
        };
        return data;
      } else {
        data = {
          key: column,
          title: formatTitleTable(column),
          dataIndex: column,
          sorter: (a, b) => {
            if (a[column] > b[column]) {
              return 1;
            } else if (a[column] < b[column]) {
              return -1;
            } else {
              return 0;
            }
          },

          fixed: index < 2,
          width: 120,
        };
        return data;
      }
    });
    columns.push({
      title: 'Actions',
      fixed: 'right',
      width: 140,
      align: 'center',
      render: (record) => {
        return actions(record);
      },
    });

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, sorter);
    };

    const totalColumnsWidth = columns.reduce((acc, column) => acc + column.width, 0);
    return (
      <Table
        size="small"
        columns={columns}
        dataSource={approvedAndPendingCourses}
        onChange={onChange}
        className="max-w-full rounded-xl"
        scroll={{ x: totalColumnsWidth }}
        pagination={{
          pageSize: pagination.pageSize,
          total: pagination.totalCount,
          onChange: (page) => {
            setPageIndex(page);
          },
        }}
      />
    );
  } else {
    return <Empty />;
  }
};

export default TableAdmin;

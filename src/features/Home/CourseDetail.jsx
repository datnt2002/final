import React from 'react';
import { Breadcrumb, Button, Rate } from 'antd';
import {
  ClockCircleOutlined,
  CheckCircleOutlined,
  GlobalOutlined,
  CheckOutlined,
  CaretRightOutlined,
} from '@ant-design/icons';
import BreadcrumbCustom from '../../components/Container/BreadCrumbContainer/BreadCrumbCustom';
import CourseDetailFloatingPanel from '../../components/Container/CourseContainer/CourseDetailFloatingPanel';

const CourseDetail = () => {
  return (
    <div className="">
      {/* brief course */}
      <div className="bg-amber-400 rounded-b-3xl shadow-lg text-white py-14">
        <div className="mx-auto max-w-7xl">
          <div className="ml-16">
            <BreadcrumbCustom />
          </div>

          <div className="ml-16 max-w-2xl">
            <h1 className="text-3xl">The Ultimate React Course 2023: React, Redux & More</h1>
            <h2 className="text-xl">
              Master modern React from beginner to advanced! Context API, React Query, Redux Toolkit, Tailwind, advanced
              patterns
            </h2>
            <div className="flex">
              <p className="bg-yellow-300 text-sm text-black py-1 px-2">Best seller</p>
              <p>4.5</p>
              <Rate disabled allowHalf defaultValue={4.5} />
              <p>224 Rating</p>
              <p>448 Subscribes</p>
            </div>
            <p>Created by Author Name</p>
            <div className="flex">
              <ClockCircleOutlined />
              <h3>Last update at 05/2023</h3>
              <GlobalOutlined />
              <h3>Vietnamese</h3>
            </div>
          </div>
        </div>
      </div>

      <CourseDetailFloatingPanel />

      {/* What you learn */}
      <div className="mx-auto max-w-7xl pt-11">
        <div className="ml-16 max-w-2xl">
          {/* what you learn */}
          <div className="border-2 border-yellow-300">
            <h2 className="text-xl mx-6 mb-4"> What you learn in this course</h2>
            <ul className="flex flex-wrap justify-between mx-6">
              <li className="max-w-[18rem]">
                <CheckOutlined /> HỌC đi đôi với "THỰC HÀNH", xây dựng ĐAM MÊ về lập trình với REACT
              </li>
              <li className="max-w-[18rem]">
                <CheckOutlined /> HỌC đi đôi với "THỰC HÀNH", xây dựng ĐAM MÊ về lập trình với REACT
              </li>
              <li className="max-w-[18rem]">
                <CheckOutlined /> HỌC đi đôi với "THỰC HÀNH", xây dựng ĐAM MÊ về lập trình với REACT
              </li>
              <li className="max-w-[18rem]">
                <CheckOutlined /> HỌC đi đôi với "THỰC HÀNH", xây dựng ĐAM MÊ về lập trình với REACT
              </li>
            </ul>
          </div>

          {/* course content */}
          <div>
            <h2 className="text-xl mb-4">Course Content</h2>
            <div className="flex justify-between">
              <div className="flex">
                <p>31 sections</p>
                <CaretRightOutlined />
                <p>411 lectures</p>
                <CaretRightOutlined />
                <p>67h 10m total length</p>
              </div>
              <button>Expand All Lessons</button>
            </div>
            <div>List course dropdown</div>
          </div>

          {/* requirement */}
          <div>
            <h2 className="text-xl mb-4">Requirements</h2>
            <ul>
              <li>
                <CheckCircleOutlined />
                Có tư duy lập trình
              </li>
              <li>
                <CheckCircleOutlined />
                Có tư duy lập trình
              </li>
              <li>
                <CheckCircleOutlined />
                Có tư duy lập trình
              </li>
            </ul>
          </div>

          {/* description */}
          <div>
            <h2 className="text-xl mb-4">Description</h2>
            <p>
              React.JS là một thư viện, framework giúp xây dựng một website hiện đại, có tính mở rộng và hiệu năng cực
              lớn. Các sản phẩm tiêu biểu sử dụng React có thể kể đến như Facebook và Instagram. Được Facebook chống
              lưng, cũng như đầu tư mạnh mẽ, cộng với một cộng đồng đông đảo sử dụng, React chính là thư viện Frontend
              phổ biến nhất hiện nay, bỏ xa Vue và Angular. Với tên gọi React ULTIMATE - mục tiêu đề ra của khóa học,
              đấy chính là nó là phiên bản cuối cùng, là thứ DUY NHẤT các bạn cần, cũng như cập nhật MỚI NHẤT & ĐẦY ĐỦ
              NHẤT cho người mới bắt đầu, muốn có một góc nhìn "thực sự chính xác" về React.JS. Ngoài ra, khi kết thúc
              khóa học, các bạn mới bắt đầu sẽ có đủ tự tin để làm chủ React, cũng như hiểu được, nắm vững được những
              kiến thức cốt lõi nhất để có thể xây dựng, phát triển một website thực tế với React.JS Khóa học sẽ thực sự
              bổ ích cũng như mang lại rất nhiều kiến thức cho các bạn mới bắt đầu. Với phương châm, học đi đôi với thực
              hành, chúng ta chỉ học "vừa đủ", chỉ học những kiến thức code lỗi nhất, hi vọng các bạn sẽ học hỏi được
              nhiều kiến thức, cũng như tự tin sử dụng React cho công việc của mình.
            </p>
          </div>

          <div>
            <h2 className="text-xl mb-4">Subcribes</h2>

            <ul>
              <li>
                <CheckCircleOutlined />
                Tất cả những bạn mới bắt đầu, những bạn muốn học lập trình với React, đang muốn học và làm chủ React thì
                đây chính là khóa học các bạn tìm. React Ultimate, chỉ một là đủ.
              </li>
            </ul>
          </div>

          {/* Best seller */}
          <div>
            <h2 className="text-xl mb-4">Best seller</h2>
          </div>

          {/* recommend combo bought */}
          <div>
            <h2 className="text-xl mb-4">recommend combo bought</h2>
          </div>

          {/* author */}
          <div>
            <h2 className="text-xl mb-4">Author</h2>
          </div>

          {/* cmt and rating */}
          <div>
            <h2 className="text-xl mb-4">Rating And Comments</h2>
            <hr />
            <div>dfaerwfasfew</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

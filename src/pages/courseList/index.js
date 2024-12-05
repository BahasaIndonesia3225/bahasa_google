import React from 'react'
import { useNavigate, useLocation, connect } from 'umi';
import { CapsuleTabs, List } from 'antd-mobile'
import courseData from "@/utils/videoSource.json"
import "./index.less"

export default () => {
  const navigate = useNavigate();
  const dumpDetail = (item) => {
    const { title, url } = item;
    navigate("/videoPlay", {
      replace: false,
      state: { title, url }
    })
  }

  return (
    <div className="courseList">
      <CapsuleTabs defaultActiveKey='0'>
        {
          courseData.map((item, index) => (
            <CapsuleTabs.Tab title={item.title} key={index}>
              <div className="chapterContain">
                <List header={`共${item.list.length}节课程`}>
                  {
                    item.list.map((item, index) => (
                      <List.Item
                        key={index}
                        onClick={() => dumpDetail(item)}>
                        <div className="courseItem">
                          <span>{index + 1}</span>
                          <span>{item.title}</span>
                        </div>
                      </List.Item>
                    ))
                  }
                </List>
              </div>
            </CapsuleTabs.Tab>
          ))
        }
      </CapsuleTabs>
    </div>
  )
}

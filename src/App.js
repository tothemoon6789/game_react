/**
 * VIẾT GAME TRẢ LỜI CÂU HỎI: Có 1 câu hỏi, người chơi trả lời bằng cách nhập vào ô trống.
 * .SAU ĐÓ BẤM NÚT NEXT ĐỂ TRẢ LỜI CÂU HỎI TIẾP THEO. 
 * MỖI LẦN TRẢ LỜI CHO THỂ LÀ TOÀN BỘ DATABASE HOẶC CHỈ 10 HOẶC 20 CÂU TRONG DATABASE.
 * Có sự hiển thị để check kiến thức ví dụ dàn trải ,hoặc show ra dâtbaase
 * Giao diện:
 *  I. Phần 1 (Phần hiện ra khi load.)
 *      1/ 1 câu hỏi,
 *          1.1 Chỉ hiện ra x câu hỏi. xử lý trong file MYDATA
 *      2/ 1 ô nhập liệu
 *          2.1 . Có progress time out cho bài tập.
 *      3/ 1 nút bấm
 *      4/ 1 thông báo lâu lâu hiện ra. đó là 
 *              ---Tưởng tượng, tưởng tượng và tưởng tượng ! ---
 *  II. Phần 2: (Phần ẩn đi)
 *      1. 1 câu hỏi.
 *      2. 1 ô trả lời chuẩ.
 *      3. 1 ô trả lời của thí sinh.
 * Yêu cầu giao diện:
 * 
 * Yêu cầu trải nghiệm:
 * 
 * 
 * 
 */
// ------------------input-----------------------
import React, { useState, useRef, useEffect } from 'react';
import './style.scss' // style for the app
import Answer from './component/answer/answer'; //answer is a component.
import MYDATA from './data/_useState';//MYDATA is an object of useState's lesson in react.
// ------------------end input-----------------------

const App = () => {

  // -----------------input-----------------------
  const [blank, setBlank] = useState({
    count: 0,
    key: Object.keys(MYDATA)[0],
    inputValue: "",
    ARRAY_LENGTH: Object.keys(MYDATA).length, // lay tong chieu dai array
    total_item: 0

  })

  const ref = useRef(null); //set focus input
  const updateCount = () => {
    setBlank((previouState) => {
      return { ...previouState, count: blank.count + 1 }
    })
  }
  const updateKey = () => {
    setBlank((previouState) => {
      return { ...previouState, key: Object.keys(MYDATA)[blank.count] }
    })
  }
  const updateInputValue = () => {
    setBlank((previouState) => {
      return { ...previouState, inputValue: "" }
    })
  }
  const updateInputValueOnchange = (value) => {
    setBlank((previouState) => {
      return { ...previouState, inputValue: value }
    })
  }
  const updateTotalItem = () => {
    setBlank((previouState) => {
      return { ...previouState, total_item: blank.total_item + 1 }
    })
  }
  // ------------------end input------------------
  // ------------------handel---------------------
  const setAnswer = () => {
    MYDATA[blank.key].result = blank.inputValue; // res is a props in MYDATA Object
    
    MYDATA[blank.key]["count"] = blank.count;
    updateCount();
    //updateKey();
    //blank.key = Object.keys(MYDATA)[blank.count];
    updateInputValue();
    updateTotalItem();

  }
  useEffect(() => setBlank({
    ...blank,
    key:Object.keys(MYDATA)[blank.count]
  }),[blank.count])
  console.log("===============================");
  console.log("blank.count : " + blank.count);
  console.log("blank.key : " + Object.keys(MYDATA)[blank.count]);
  console.log("blank.total_item : " + blank.total_item);
  console.log(MYDATA);
  console.log("===============================");
  // ------------------end handel----------------
  // ------------------output--------------------
  return (

    <div className='ask'>
      <div
        className='top'
        style={blank.count === blank.ARRAY_LENGTH ? { "display": "none" } : { "display": "flex" }}>
        <h3>{MYDATA[blank.key].ask}</h3>
        <textarea
          cols={80}
          rows={15}
          value={blank.inputValue}
          ref={ref} //set focus input
          onChange={(e) => {
            updateInputValueOnchange(e.target.value);
          }}
        ></textarea>
        <button
          onClick={() => {
            
            setAnswer();
            ref.current.focus(); //set focus input
          }}>
          Next
        </button>
      </div>
      <Answer DATA_OBJ={MYDATA} />
    </div>
  );
};
// -----------------end output-------------------

export default App;
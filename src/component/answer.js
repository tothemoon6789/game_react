/**
 * VIẾT GAME TRẢ LỜI CÂU HỎI: Có 1 câu hỏi, người chơi trả lời bằng cách nhập vào ô trống.
 * .SAU ĐÓ BẤM NÚT NEXT ĐỂ TRẢ LỜI CÂU HỎI TIẾP THEO. 
 * MỖI LẦN TRẢ LỜI CÓ THỂ LÀ TOÀN BỘ DATABASE HOẶC CHỈ 10 HOẶC 20 CÂU TRONG DATABASE.
 * Có sự hiển thị để check kiến thức ví dụ dàn trải ,hoặc show ra dâtbaase
 * Giao diện:
 *  I. Phần 1 (Phần hiện ra khi load.)
 *      1/ 1 câu hỏi,
 *          1.1 Chỉ hiện ra x câu hỏi. xử lý trong file javascript
 *      2/ 1 ô nhập liệu
 *          2.1 . Có progress time out cho bài tập.
 *      3/ 1 nút bấm
 *      4/ 1 thông báo lâu lâu hiện ra. đó là 
 *              ---Tưởng tượng, tưởng tượng và tưởng tượng ! ---
 *      5. Tao 1 naveleft dung de the hien bai hoc.
 *  II. Phần 2: (Phần ẩn đi)
 *      1. 1 câu hỏi.
 *      2. 1 ô trả lời chuẩ.
 *      3. 1 ô trả lời của thí sinh.
 *  III. Phần 3: Dàn trải database để review tổng quát.
 * Yêu cầu giao diện:
 * 
 * Yêu cầu trải nghiệm:
 * 
 * 
 * 
 */
 import React, { useState, useRef, useEffect } from 'react';
//  import './style.scss' // style for the app
 import Answer from '../component/answer/answer'; //answer is a component.
 import javascript from '../data/javascript';//javascript is an object of useState's lesson in react.
 import Lesson from '../component/lesson/lesson';
 
 const Answers = () => {
  
   const [action, setAction] = useState({
     count: 0,
     key: Object.keys(javascript)[0],
     inputValue: "",
     arrayLength: Object.keys(javascript).length,
 
   })
   const myFunction = {
     updateInputValueOnchange: (value) => {
       setAction((previouState) => {
         return { ...previouState, inputValue: value }
       })
     },
     updateCount : () => {
       setAction((previouState) => {
         return { ...previouState, count: action.count + 1 }
       })
     },
     ref : useRef(null)
   }
   useEffect(() => {
     javascript[action.key]["count"] = action.count + 1;
   }, [])
   useEffect(() => {
     setAction({
       ...action,
       key: Object.keys(javascript)[action.count],
       inputValue: ""
     })
     javascript[action.key]["count"] = action.count;
     javascript[action.key].result = action.inputValue; // res is a props in javascript Object
   }, [action.count])
   return (
     <>
       <div className='ask'>
         <Lesson myFunction = {myFunction} action={action} javascript={javascript}/>
         <Answer DATA_OBJ={javascript} />
       </div>
 
     </>
   );
 };
 
 
 export default Answers;
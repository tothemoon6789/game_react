
const _useState = {
    1: {
        ask: "Javascript là gì?",
        ans: "Javascript là một ngôn ngữ lập trình kịch bản dựa vào đối tượng phát triển có sẵn hoặc tự định nghĩa ra, javascript được sử dụng rộng rãi trong các ứng dụng Website. Nó là một ngôn ngữ thông dịch",
        result: "",
        belong: ""

    },
    2: {
        ask: "Các kiểu dữ liệu trong Javascript?",
        ans: "Có 7 kiểu đó là string, number, boolean, null, undefined, symbol, bigint",
        result: "",
        belong: ""
    },
    3: {
        ask: "Hàm delete có chức năng gì?",
        ans: "Hàm delete loại bỏ một thuộc tính khỏi object; nếu không tồn tại tham chiếu tới thuộc tính, nó sẽ tự động giải phóng.",
        result: "",
        belong: ""
    },
    4: {
        ask: "Phân biệt var, let và const?",
        ans: "const dùng để khai báo một hằng số – là một giá trị không thay đổi được trong suốt quá trình chạy, let tạo ra một biến chỉ có thể truy cập được trong block bao quanh nó ,var – tạo ra một biến có phạm vi truy cập xuyên suốt function chứa nó.",
        result: "",
        belong: ""
    },
    5: {
        ask: "Strict mode trong javascript là gì?",
        ans: "Strict theo nghĩa tiếng Việt là “nghiêm khắc”. Strict Mode là một quy mẫu nghiêm khắc trong Javascript. Nếu như việc viết code bình thường là Normal mode, thì Strict Mode sẽ có thêm các quy định khác so với Normal mode.",
        result: "",
        belong: ""
    },
    6: {
        ask: "this trong javascript là gì?",
        ans: "Từ khóa this dùng để chỉ đối tượng từ nơi nó được gọi.",
        result: "",
        belong: ""
    },
    7: {
        ask: "Khác nhau giữa undefined và null trong javascript?",
        ans: "Trả lời: Khi tạo ra một biến mà không gán giá trị thì nó sẽ là undefined. Còn null là một object",
        result: "",
        belong: ""
    },
    8: {
        ask: "== và === khác nhau như thế nào?",
        ans: "Toán tử == kiểm tra tính bằng nhau, còn === kiểm tra cả tính bằng nhau và cả kiểu dữ liệu",
        result: "",
        belong: ""
    },
    9: {
        ask: "Thay đổi style/class của element?",
        ans: "Sử dụng thuộc tính document trong javascript. Có thể sử dụng với id, class hay bất cứ element nào.",
        result: "",
        belong: ""
    },
    10: {
        ask: "Tại sao Math.max() nhỏ hơn Math.min()?",
        ans: "Khi chạy code Math.max() > Math.min(), giá trị trả về là False, nghe có vẻ không hợp lý. Tuy nhiên, nếu không có tham số nào được truyền vào, Math.min() trả về Infinity và Math.max() trả về -Infinity. Vậy nên Math.max() < Math.min().",
        result: "",
        belong: ""
    },
    11: {
        ask: " Closure trong javascript là gì?",
        ans: "Closure là một hàm bên trong, truy cập đến các giá trị bên ngoài phạm vi của nó. Closure có thể truy cập vào các biến trong phạm vi của riêng nó (Variables in their own scope), trong hàm (Variables in the function’s scope), và biến toàn cục (Global variables).",
        result: "",
        belong: ""
    },
    12: {
        ask: "Hosting trong javascript là gì?",
        ans: "Hoisting là hành động mặc định của Javascript, nó sẽ chuyển phần khai báo lên phía trên top Trong Javascript, một biến (variable) có thể được khai báo sau khi được sử dụng.",
        result: "",
        belong: ""
    },
    13: {
        ask: "Phân biệt giữa Function Declaration và Function Expresultsion ?",
        ans: "Function declaration sẽ sử dụng từ khóa function rồi đến tên hàm. Còn Function expresultsion sẽ được bắt đầu với từ khóa var, const, hoặc let.",
        result: "",
        belong: ""
    },
    14: {
        ask: "Hàm Array.splice() và hàm Array.slice() khác nhau như thế nào ?",
        ans: "Hàm Array.splice() sẽ thay thế một hoặc một số phần tử của mảng bằng một hoặc một số phần tử khác. Trong khi hàm Array.slice() sẽ trích xuất một số phần tử của mảng, vị trí bắt đầu và kết thúc việc trích xuất sẽ được xác định bởi tham số truyền vào hàm. Lưu ý hàm sẽ trích xuất không bao gồm phần tử end truyền vào.",
        result: "",
        belong: ""
    },
    15: {
        ask: "Spread Operator trong javascript ?",
        ans: "Spread operator là một biểu thức mở rộng giúp gộp các phần tử vào trong một cách viết ngắn gọn hơn. Cách viết này được thể hiện bằng dấu ...",
        result: "",
        belong: ""
    },
    16: {
        ask: "Anonymous function là gì ?",
        ans: "Là một hàm ẩn danh, không có tên gọi, thường được sử dụng khi xử lý các công việc có quy mô nhỏ, vì thế không cần thiết phải khởi tạo tên định danh cho hàm này. Giúp nó có tốc độ xử lý nhanh hơn hàm truyền thống phải có tên định danh.",
        result: "",
        belong: ""
    },
    17: {
        ask: "Tại sao 0.1 + 0.2 không bằng 0.3 ?",
        ans: "Vấn đề này liên quan đến việc Javascript lưu trữ dữ liệu float ở dạng nhị phân chính xác tới từng con số sau dấu phẩy. Hơn nữa máy tính không thể biểu diễn chính xác số thập phân, nên gây ra sai số kiểu này. Giải pháp ở đây có thể sử dụng hàm toFixed() để đạt được kết quả đúng.",
        result: "",
        belong: ""
    },
    18: {
        ask: "Sự khác nhau giữa window.onload và onDocumentReady ?",
        ans: "Sự kiện window.onload có ý nghĩa rằng khi trình duyệt đã load xong mọi thứ (image, js, css) thì những đoạn code nằm bên trong đó mới được chạy. Với onDocumentReady, mọi thứ bên trong hàm này sẽ được load ngay khi DOM được load và trước khi toàn bộ nội dung bên ngoài được load.",
        result: "",
        belong: ""
    },
    19: {
        ask: "Kết quả của 1 + 2 + ‘3’ ?",
        ans: "1 và 2 là kiểu integer, khi cộng lại sẽ được 3, sau đó sẽ nối với string ‘3’ để được kết quả là 33.",
        result: "",
        belong: ""
    },
    20: {
        ask: "Promise trong javascript là gì ?",
        ans: "Promise là một cơ chế trong JavaScript giúp bạn thực thi các tác vụ bất đồng bộ mà không rơi vào callback hell hay pyramid of doom, là tình trạng các hàm callback lồng vào nhau ở quá nhiều tầng. Có 3 trạng thái: pending, fulfilled, reject.",
        result: "",
        belong: ""
    },
    21: {
        ask: "Hàm setTimeout() dùng để làm gì ?",
        ans: "Hàm setTimeout() chỉ định một function đợi 1 quãng thời gian rồi thực thi code, code chỉ thực thi 1 lần",
        result: "",
        belong: ""
    },
    22: {
        ask: "Hàm setInterval() dùng để làm gì ?",
        ans: "Hàm setInterval() chỉ định một function thực thi lặp lại sau 1 quãng thời gian",
        result: "",
        belong: ""
    },
    23: {
        ask: "Giá trị nguyên thủy (primitive value) là gì ?",
        ans: "Giá trị nguyên thủy là giá trị mà không có thuộc tính hoặc phương thức.",
        result: "",
        belong: ""
    },
    24: {
        ask: "Nói ngắn gọn về break?",
        ans: "Có 3 yếu tố, 1. là dừng vòng lặp ngay lập tức và chuyển đến dòng lệnh tiếp theo, 2. trong vòng lặp lồng, break chỉ thoát vòng lặp bên trong, 3. trong switch, break dùng để kết thúc 1 case.",
        result: "",
        belong: "loop"
    },
    25: {
        ask: "Câu lệnh continue; dùng để làm gì?",
        ans: "continue sẽ bỏ qua toàn bộ đoạn mã phía dưới để nhảy đến lần lặp tiếp theo.",
        result: "",
        belong: "loop"
    },
    26: {
        ask: "Javascript object la gi ?",
        ans: "A JavaScript object là một tập hợp các cặp named:value",
        result: "",
        belong: "object"
    },
    27: {
        ask: "Trong JS Object, Property la gi?",
        ans: "La cac cap key:value.",
        result: "",
        belong: "object"
    },
    28: {
        ask: "Câu lệnh return dùng để làm gì ?",
        ans: " kết thúc hàm hoặc trả lại giá trị kết quả sau quá trình xử lý hàm",
        result: "",
        belong: "function"
    },
    29: {
        ask: "Method(phương thức) là cái gì trong javascript ? Cho ví dụ ?",
        ans: "Method(phương thức) là những hành động mà chúng ta có thể thực hiện. ví dụ: abc.toUpperCase()  ---> Chuyển chuỗi giá trị abc thành in hoa.",
        result: "",
        belong: ""

    }

}
const getRndInteger = (min, max) => { //function trả về giá trị random
    return Math.floor(Math.random() * (max - min)) + min;
}

// -------------------------input---------------------------
const pickRandom = { //tạo một array mang toàn bộ thông tin input
    MIN: 0, // tạo số nhỏ nhất
    MAX: Object.keys(_useState).length,
    TOTAL_RANDOM: 10, // tổng có x giá trị random // tạo số lớn nhất trong Object _useState.
    ARRAY: [], // khởi tạo array 
    ARRAY_DATA: Object.keys(_useState), // bóc tách keys ra khỏi Obj
    CHECK_VALUE_IN_ARRAY: true
}
const MYDATA = {// tạo 1 objec mới hứng giá trị
};
// -----------------------end input---------------------------
// -----------------------handel------------------------------






for (let i = 0; i < pickRandom.TOTAL_RANDOM; i++) {//tạo vòng lặp chạy từ 0 đến bé hơn 10

    /**
* Tạo vòng lặp từ 0 đến 10. 
tạo một giá trị random
* tại giá trị i, tạo vòng lặp từ 1 đến i để kiểm tra
* nếu như trong mảng giá trị có chứa giá trị so sánh thì 
* lấy lại một randomkey khác.
*/
    // kiem tra du lieu da co trong array chua. kiem tra bang vong lap
    do {
        var random = getRndInteger(pickRandom.MIN, pickRandom.MAX); // tạo giá trị random để bóc tách ARRAY_DATA.
        var randomKey = pickRandom.ARRAY_DATA[random];
    } while (pickRandom.ARRAY.includes(randomKey));
    pickRandom.ARRAY.push(randomKey);// đẩy dữ liệu vào ARRAY.


}


for (let i = 0; i < pickRandom.ARRAY.length; i++) {// đẩy dữ liệu vào obj
    const element = pickRandom.ARRAY[i];
    MYDATA[element] = {
        ask: _useState[element]["ask"],
        ans: _useState[element]["ans"],
        result: _useState[element]["result"],
        belong: _useState[element]["belong"]
    };
}


// -----------------------end handel-----------------------------
// ----------------------------output----------------------------

export default MYDATA;
// --------------------------end output--------------------------
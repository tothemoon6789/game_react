
const _useState = {
    1: {
        ask: "Javascript là gì?",
        ans: "Javascript là một ngôn ngữ lập trình kịch bản dựa vào đối tượng phát triển có sẵn hoặc tự định nghĩa ra, javascript được sử dụng rộng rãi trong các ứng dụng Website. Nó là một ngôn ngữ thông dịch",
        result: "",
        belong: "javascript"

    },
    2: {
        ask: "Các kiểu dữ liệu trong Javascript?",
        ans: "Có 7 kiểu đó là string, number, boolean, null, undefined, symbol, bigint",
        result: "",
        belong: "javascript"
    },
    3: {
        ask: "Hàm delete có chức năng gì?",
        ans: "Hàm delete loại bỏ một thuộc tính khỏi object; nếu không tồn tại tham chiếu tới thuộc tính, nó sẽ tự động giải phóng.",
        result: "",
        belong: "javascript"
    },
    4: {
        ask: "Phân biệt var, let và const?",
        ans: "const dùng để khai báo một hằng số – là một giá trị không thay đổi được trong suốt quá trình chạy, let tạo ra một biến chỉ có thể truy cập được trong block bao quanh nó ,var – tạo ra một biến có phạm vi truy cập xuyên suốt function chứa nó.",
        result: "",
        belong: "javascript"
    },
    5: {
        ask: "Strict mode trong javascript là gì?",
        ans: "Strict theo nghĩa tiếng Việt là “nghiêm khắc”. Strict Mode là một quy mẫu nghiêm khắc trong Javascript. Nếu như việc viết code bình thường là Normal mode, thì Strict Mode sẽ có thêm các quy định khác so với Normal mode.",
        result: "",
        belong: "javascript"
    },
    6: {
        ask: "this trong javascript là gì?",
        ans: "Từ khóa this dùng để chỉ đối tượng từ nơi nó được gọi.",
        result: "",
        belong: "javascript"
    },
    7: {
        ask: "Khác nhau giữa undefined và null trong javascript?",
        ans: "Trả lời: Khi tạo ra một biến mà không gán giá trị thì nó sẽ là undefined. Còn null là một object",
        result: "",
        belong: "javascript"
    },
    8: {
        ask: "== và === khác nhau như thế nào?",
        ans: "Toán tử == kiểm tra tính bằng nhau, còn === kiểm tra cả tính bằng nhau và cả kiểu dữ liệu",
        result: "",
        belong: "operator"
    },
    9: {
        ask: "Thay đổi style/class của element?",
        ans: "Sử dụng thuộc tính document trong javascript. Có thể sử dụng với id, class hay bất cứ element nào.",
        result: "",
        belong: "dom"
    },
    10: {
        ask: "Tại sao Math.max() nhỏ hơn Math.min()?",
        ans: "Khi chạy code Math.max() > Math.min(), giá trị trả về là False, nghe có vẻ không hợp lý. Tuy nhiên, nếu không có tham số nào được truyền vào, Math.min() trả về Infinity và Math.max() trả về -Infinity. Vậy nên Math.max() < Math.min().",
        result: "",
        belong: "javascript"
    },
    11: {
        ask: " Closure trong javascript là gì?",
        ans: "Closure là một hàm bên trong, truy cập đến các giá trị bên ngoài phạm vi của nó. Closure có thể truy cập vào các biến trong phạm vi của riêng nó (Variables in their own scope), trong hàm (Variables in the function’s scope), và biến toàn cục (Global variables).",
        result: "",
        belong: "javascript"
    },
    12: {
        ask: "Hosting trong javascript là gì?",
        ans: "Hoisting là hành động mặc định của Javascript, nó sẽ chuyển phần khai báo lên phía trên top Trong Javascript, một biến (variable) có thể được khai báo sau khi được sử dụng.",
        result: "",
        belong: "javascript"
    },
    13: {
        ask: "Phân biệt giữa Function Declaration và Function Expresultsion ?",
        ans: "Function declaration sẽ sử dụng từ khóa function rồi đến tên hàm. Còn Function expresultsion sẽ được bắt đầu với từ khóa var, const, hoặc let.",
        result: "",
        belong: "javascript"
    },
    14: {
        ask: "Hàm Array.splice() và hàm Array.slice() khác nhau như thế nào ?",
        ans: "Hàm Array.splice() sẽ thay thế một hoặc một số phần tử của mảng bằng một hoặc một số phần tử khác. Trong khi hàm Array.slice() sẽ trích xuất một số phần tử của mảng, vị trí bắt đầu và kết thúc việc trích xuất sẽ được xác định bởi tham số truyền vào hàm. Lưu ý hàm sẽ trích xuất không bao gồm phần tử end truyền vào.",
        result: "",
        belong: "array"
    },
    15: {
        ask: "Spread Operator trong javascript ?",
        ans: "Spread operator là một biểu thức mở rộng giúp gộp các phần tử vào trong một cách viết ngắn gọn hơn. Cách viết này được thể hiện bằng dấu ...",
        result: "",
        belong: "spread"
    },
    16: {
        ask: "Anonymous function là gì ?",
        ans: "Là một hàm ẩn danh, không có tên gọi, thường được sử dụng khi xử lý các công việc có quy mô nhỏ, vì thế không cần thiết phải khởi tạo tên định danh cho hàm này. Giúp nó có tốc độ xử lý nhanh hơn hàm truyền thống phải có tên định danh.",
        result: "",
        belong: "function"
    },
    17: {
        ask: "Tại sao 0.1 + 0.2 không bằng 0.3 ?",
        ans: "Vấn đề này liên quan đến việc Javascript lưu trữ dữ liệu float ở dạng nhị phân chính xác tới từng con số sau dấu phẩy. Hơn nữa máy tính không thể biểu diễn chính xác số thập phân, nên gây ra sai số kiểu này. Giải pháp ở đây có thể sử dụng hàm toFixed() để đạt được kết quả đúng.",
        result: "",
        belong: "javascript"
    },
    18: {
        ask: "Sự khác nhau giữa window.onload và onDocumentReady ?",
        ans: "Sự kiện window.onload có ý nghĩa rằng khi trình duyệt đã load xong mọi thứ (image, js, css) thì những đoạn code nằm bên trong đó mới được chạy. Với onDocumentReady, mọi thứ bên trong hàm này sẽ được load ngay khi DOM được load và trước khi toàn bộ nội dung bên ngoài được load.",
        result: "",
        belong: "bom"
    },
    19: {
        ask: "Kết quả của 1 + 2 + ‘3’ ?",
        ans: "1 và 2 là kiểu integer, khi cộng lại sẽ được 3, sau đó sẽ nối với string ‘3’ để được kết quả là 33.",
        result: "",
        belong: "javascript"
    },
    20: {
        ask: "Promise trong javascript là gì ?",
        ans: "Promise là một cơ chế trong JavaScript giúp bạn thực thi các tác vụ bất đồng bộ mà không rơi vào callback hell hay pyramid of doom, là tình trạng các hàm callback lồng vào nhau ở quá nhiều tầng. Có 3 trạng thái: pending, fulfilled, reject.",
        result: "",
        belong: "javascript"
    },
    21: {
        ask: "Hàm setTimeout() dùng để làm gì ?",
        ans: "Hàm setTimeout() chỉ định một function đợi 1 quãng thời gian rồi thực thi code, code chỉ thực thi 1 lần",
        result: "",
        belong: "javascript"
    },
    22: {
        ask: "Hàm setInterval() dùng để làm gì ?",
        ans: "Hàm setInterval() chỉ định một function thực thi lặp lại sau 1 quãng thời gian",
        result: "",
        belong: "javascript"
    },
    23: {
        ask: "Giá trị nguyên thủy (primitive value) là gì ?",
        ans: "Giá trị nguyên thủy là giá trị mà không có thuộc tính hoặc phương thức.",
        result: "",
        belong: "javascript"
    },
    24: {
        ask: "Nói ngắn gọn về break?",
        ans: "Break dùng để dừng thực thi loop hoặc switch ngay lập tức. Có 5 yếu tố: 1: Break chỉ có thể dùng trong khối lệnh vòng lặp hoặc switch. 2. Nếu break dùng trong khối lệnh vòng lặp thì code thực thi đến break sẽ dừng vòng lặp ngay lập tức, không thực thi vòng lặp nữa và chuyển đến câu lệnh tiếp theo. 3. Trong vòng lặp lồng, break chỉ thoát vòng lặp bên trong. 4. Trong switch, break dùng để kết thúc 1 case. 5. Break có thể nằm trong khối lệnh if else, tuy nhiên khối lệnh if else đó phải nằm trong khối lệnh vòng lặp.",
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
        belong: "javascript"

    },
    30: {
        ask: "array là gì ?",
        ans: "Array là một danh sách các giá trị",
        result: "",
        belong: "array"
    },
    31: {
        ask: "array có chỉ mục bắt đầu là bao nhiêu ?",
        ans: "0",
        result: "",
        belong: "array"
    }
    ,
    32: {
        ask: "Làm sao để thay đổi một giá trị trong danh sách array",
        ans: "Gán một giá trị mới vào chỉ mục của danh sách đó. VD: cars[0]=\"volvo\"",
        result: "",
        belong: "array"
    },
    33: {
        ask: "Làm sao để truy cập toàn bộ các chỉ mục của array",
        ans: "chỉ cần gán array cần truy cập toàn bộ cho consolog hoặc innerHtml",
        result: "",
        belong: "array"
    },
    34: {
        ask: "Array có kiểu giá trị là gì ?",
        ans: "Object",
        result: "",
        belong: "array"
    },
    35: {
        ask: "array có thể chứa thứ gì",
        ans: "array có thể chứa nhiều thứ, ví dụ: các kiểu giá trị nguyên thủy, hoặc là object, function, hoặc là array trong array.",
        result: "",
        belong: "array"
    },
    36: {
        ask: "Cách truy cập giá trị đầu tiên và cuối cùng của một arrray",
        ans: "array[0], array[array.length-1]",
        result: "",
        belong: "array"
    },
    37: {
        ask: "Làm sao để thêm mới 1 phần tử vào danh sách array",
        ans: "Có 2 cách: Cách 1: dùng phương thức push(), vd: car.push(\"volvol\"), hành động push sẽ đẩy dữ liệu vào vị trí cuối cùng của danh sách. Cách 2: gán dữ liệu vào vị trí cuối cùng của array, vd array.length = something",
        result: "",
        belong: "array"
    },
    38: {
        ask: "Điều gì xảy ra khi thêm một phần tử vượt quá độ dài của array",
        ans: "Array đó sẽ xuất hiện những phần tử chính giữa có giá trị underfined",
        result: "",
        belong: "array"
    },
    39: {
        ask: "Hãy nói sự khác nhau giữa array và object",
        ans: "array dùng chỉ mục bằng số, object dùng chỉ mục bằng chữ",
        result: "",
        belong: "array"
    },
    40: {
        ask: "Khi nào thì nên dùng array và khi nào thì nên dùng Object ?",
        ans: "Khi muốn đặt tên cho các chỉ mục là chữ thì dùng obj, bằng số thì dùng array",
        result: "",
        belong: "array"
    },
    41: {
        ask: "Cách tạo một Array mới an toàn nhất có thể ?",
        ans: "const myarray = [], trường hợp sử dụng new Array() khuyến cáo không nên dùng vì myarray có thể bị gán lại.",
        result: "",
        belong: "array"
    },
    42: {
        ask: "Cách nhận biết 1 array thông qua phương thức ?",
        ans: "Kiểm tra 1 array bằng cú pháp trả về boolean, đó là Array.isArray(myarray), cách 2 là dùng instanceof",
        result: "",
        belong: "array"
    },
    43: {
        ask: "Em hãy sắp xếp lại các phần tử trong 1 mảng theo thứ tự bảng chữ cái ?",
        ans: "Dùng hàm sort(). LƯU Ý: Hàm sort chỉ sắp xếp theo string, không theo giá trị.",
        result: "",
        belong: "array"
    },
    44: {
        ask: "Dùng hàm số sắp xếp mảng giá trị của một danh sách array các giá trị theo thứ tự tăng dần",
        ans: "Gọi hàm sort và truyền vào compare function. myarray.sort(function(a,b){return a-b})",
        result: "",
        belong: "array"
    },
    45: {
        ask: "Hãy sắp xếp các giá trị trong 1 mảng theo thứ tự từ lớn tới nhỏ",
        ans: "myarray.sort(function(a,b){return b-a})",
        result: "",
        belong: "array"
    },
    46: {
        ask: "Hãy sắp xếp các giá trị trong mảng một cách ngẫu nhiên.",
        ans: "myarray.sort(funtion(){return 0.5-Math.random()} theo cách này thì có thể sắp xếp ngẫu nhiên từ number đến string",
        result: "",
        belong: "array"
    },
    47: {
        ask: "Cho 1 danh sách myarray. Hãy viết 1 giải thuật sắp xếp các phần tử trong danh sách myarray một cách ngẫu nhiên.",
        ans: "for (let i = points.length -1; i &amp;gt; 0; i--) { let j = Math.floor(Math.random() * (i+1)); let k = points[i]; points[i] = points[j]; points[j] = k; }",
        result: "",
        belong: "array"
    },
    48: {
        ask: "Tìm giá trị nhỏ nhất và lớn nhất trong mảng.",
        ans: "Sắp xếp mảng theo giá trị tăng dần. Vị trí đầu tiên là giá trị nhỏ nhất, vị trí cuối cùng là giá trị lớn nhất. myarray.sort(funtion(a,b){return a-b}); giá trị nhỏ nhất là myarray[0], giá trị lớn nhất là myarray[myarray.length-1]",
        result: "",
        belong: "array"
    },
    49: {
        ask: "Cho trước 1 dãy số từ 1 đến 10, có bao nhiêu cách để lấy log ra từng dòng giá trị theo định dạng: phần tử thứ 1: 1, phần tử thứ 2: 2",
        ans: "const myarray = [&quot;CH&Oacute;&quot;,&quot;M&Egrave;O&quot;,&quot;HEO&quot;,&quot;GẤU&quot;]; // C&aacute;ch 1: duyệt mảng bằng v&ograve;ng lặp for console.log(&quot;==============C&Aacute;CH 1========================&quot;) for (let i = 0; i &lt; myarray.length; i++) { const element = myarray[i]; console.log(`C1:for G&iacute;a trị thứ ${i} l&agrave;: ${element}`); } console.log(&quot;===============END C&Aacute;CH 1========================&quot;) console.log(&quot;===============C&Aacute;CH 2========================&quot;) // C&aacute;ch 2: duyệt mảng bằng foreach myarray.forEach((value,index) =&gt; console.log(`C2:foreach Gi&aacute; trị thứ ${index} l&agrave; ${value}`)); console.log(&quot;===============END C&Aacute;CH 2========================&quot;) console.log(&quot;===============C&Aacute;CH 3========================&quot;) // C&aacute;ch 3: duyệt mảng bằng map myarray.map((value,index) =&gt; console.log(`C3:map Gi&aacute; trị thứ ${index} l&agrave; ${value}`)); console.log(&quot;===============END C&Aacute;CH 3========================&quot;)",
        result: "",
        belong: "array"
    },
    50: {
        ask: "Có 1 array từ 1 đến 10, làm sao để lọc những số lớn hơn 5 ?",
        ans: "Dùng filter,const resultArray =  myarray.filter((value)=>value>5);",
        result: "",
        belong: "array"
    },
    51: {
        ask: "Em hãy nói cho anh cách tính tổng tấc cả giá trị của các phần tử trong 1 danh sách các số.",
        ans: "Dùng vòng lặp for hoặc reduce. vd: myarray.reduce((total,value)=>total+value)",
        result: "",
        belong: "array"
    },
    52: {
        ask: "Nói cho chị nghe cách tính tổng 1 danh sách với 1 số cho trước, ví dụ số cho trước là 100.",
        ans: "Dùng reduce, truyền vào 2 đối số. Đối số 1: là arrow function 2 đối số là total, value, trả về total + value, đối số 2 là : 100. VD: console.log(myarray.reduce(((total,value)=>total+value),100));",
        result: "",
        belong: "array"
    },
    53: {
        ask: "Giờ nói cho anh biết làm sao để biết các giá trị số trong 1 array có lớn hơn 1 số cho trước không.",
        ans: "Dùng every. vd: const myarray = [1,2,3,4,5,6,7,8,9] ; console.log(\"Toàn bộ giá trị các phần tử bé hơn 0 là: \" + myarray.every((value) => value<0));",
        result: "",
        belong: "array"
    },
    54: {
        ask: "Em nói cho chị nghe làm sao biết trong 1 dãy số có array có phần tử nào lớn hơn 1 số cho trước không.",
        ans: "Dùng some. Vd: console.log(Trong dãy số này có vài số lớn hơn 10 là sai + myarray.some((value)=>value>10))",
        result: "",
        belong: "array"
    },
    55: {
        ask: "Trong 1 mảng táo dừa lê cam quýt. Em nói cho chị biết làm sao biết được cam nằm ở thứ tự nào.",
        ans: "Dùng indexOf. VD. myarray.indexOf(\"cam\")+1",
        result: "",
        belong: ""
    },
    56:{
        ask: "Nếu trong 1 danh sách có các phần tử lặp đi lặp lại. Chị muốn tìm kiếm vị trí cuối cùng mà phần tử xuất hiện thì làm sao.",
        ans: "Dùng lastIndexOf(), vd: myarray.lastIndexOf(\"cam\")",
        result:"",
        belong:"array"
    },
    57:{
        ask: "Em nói cho cô nghe, cô có 1 mảng các số, làm sao tìm ra số lớn hơn số cho trước. số lơn hơn là số đầu tiên",
        ans: "Dùng find. vd myarray.find((value)=> value>18);",
        result:"",
        belong:"array"
    },
    58:{
        ask: "Con có biết cách tìm vị trí của một số, mà số đó lớn hơn 1 số cho trước không.",
        ans: "Dùng findIndex. vd myarray.findIndex((value)=> value>18);",
        result:"",
        belong:"array"
    },
    58:{
        ask: "Cô có 1 chuỗi các chữ ABCDEMFLKDJFDLJK, có cách nào chuyển chuỗi đó thành 1 danh sách các ký tự không.",
        ans: "Có. Đó là Array.from(\"ABCDEMFLKDJFDLJK)\"",
        result:"",
        belong:"array"
    },
    59:{
        ask: "Em hãy in ra toàn bộ key của 1 array.",
        ans: "console.log(myarray.keys())",
        result:"",
        belong:"array"
    },
    60:{
        ask:"cho array a2 a2, dung spread operator de tao a3. Tao 3 bien b1,b2,rest tu b3 bang spread operator. Cho truoc 2 Object. o1,o2. Tao o3 bang cach noi 2 object o1 va o2 ",
        ans:"const a1 = Array.from(\"ABCD\");const a2 = Array.from(\"hhiklm\");const a3 = [...a1,...a2];const [b1,b2,...rest] = a3;const o1 = {ten: \"linh\",ho: \"pham\",chudem: \"ngoc\"}const o2 = {tuoi: 31,nghe: {nghe1: \"lamthinh\",nghe2: \"hihi\"}}const o3 = {...o1,...o2};"},
        result:"",
        belong:"es6"
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
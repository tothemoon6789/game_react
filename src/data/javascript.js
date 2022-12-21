
const javascript = {

    1: {
        ask: "Javascript là gì?",
        ans: "Javascript là một ngôn ngữ lập trình kịch bản dựa vào đối tượng phát triển có sẵn hoặc tự định nghĩa ra, javascript được sử dụng rộng rãi trong các ứng dụng Website. Nó là một ngôn ngữ thông dịch",
        result: "",
        belong: "javascript"

    },
    2: {
        ask: "Các kiểu dữ liệu nguyên thủy trong Javascript?",
        ans: "Có 7 kiểu đó là string, number, boolean, null, undefined, symbol, bigint",
        result: "",
        belong: "object"
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
        ans: "Hoisting là hành động mặc định của Javascript, nó sẽ chuyển phần khai báo lên phía trên top Trong Javascript của một current scope., một biến (variable) có thể được khai báo sau khi được sử dụng.",
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
        belong: "object"
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
        ans: "A JavaScript object là một tập hợp các cặp named:value, Vì vậy, có thể nói object chứa rất nhiều biến, và rất nhiều giá trị.",
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
        belong: "array"
    },
    56: {
        ask: "Nếu trong 1 danh sách có các phần tử lặp đi lặp lại. Chị muốn tìm kiếm vị trí cuối cùng mà phần tử xuất hiện thì làm sao.",
        ans: "Dùng lastIndexOf(), vd: myarray.lastIndexOf(\"cam\")",
        result: "",
        belong: "array"
    },
    57: {
        ask: "Em nói cho cô nghe, cô có 1 mảng các số, làm sao tìm ra số lớn hơn số cho trước. số lơn hơn là số đầu tiên",
        ans: "Dùng find. vd myarray.find((value)=> value>18);",
        result: "",
        belong: "array"
    },
    58: {
        ask: "Con có biết cách tìm vị trí của một số, mà số đó lớn hơn 1 số cho trước không.",
        ans: "Dùng findIndex. vd myarray.findIndex((value)=> value>18);",
        result: "",
        belong: "array"
    },
    58: {
        ask: "Cô có 1 chuỗi các chữ ABCDEMFLKDJFDLJK, có cách nào chuyển chuỗi đó thành 1 danh sách các ký tự không.",
        ans: "Có. Đó là Array.from(\"ABCDEMFLKDJFDLJK)\"",
        result: "",
        belong: "array"
    },
    59: {
        ask: "Em hãy in ra toàn bộ key của 1 array.",
        ans: "console.log(myarray.keys())",
        result: "",
        belong: "array"
    },
    60: {
        ask: "cho array a2 a2, dung spread operator de tao a3. Tao 3 bien b1,b2,rest tu b3 bang spread operator. Cho truoc 2 Object. o1,o2. Tao o3 bang cach noi 2 object o1 va o2 ",
        ans: "const a1 = Array.from(\"ABCD\");const a2 = Array.from(\"hhiklm\");const a3 = [...a1,...a2];const [b1,b2,...rest] = a3;const o1 = {ten: \"linh\",ho: \"pham\",chudem: \"ngoc\"}const o2 = {tuoi: 31,nghe: {nghe1: \"lamthinh\",nghe2: \"hihi\"}}const o3 = {...o1,...o2};",
        result: "",
        belong: "es6"
    },
    61: {
        ask: "Có bao nhiêu cách in một mảng ra console ?",
        ans: "Hiện tại có 6 cách. console.log(myarray), myarray.map((element)=>consolo.log(element)), myarray.foreach((element)=>consolo.log(element)), forlop.....console.log(myarry[i]), for let key of myarray.keys()....consolo.log(myarray[key]), for let iterator of myarray.entries() ....console.log(myarray[iterator])",
        result: "",
        belong: "array"
    },
    62: {
        ask: "Làm sao để kiểm tra 1 phần tử có mặt trong 1 danh sách không ?",
        ans: "Dùng vòng lặp kiểm tra hoặc đơn giản là dùng myarray.includes(\"something\")",
        result: "",
        belong: "array"
    },
    63: {
        ask: "Hãy giải thích tại sao ES6 luôn khai báo const cho 1 Array ?",
        ans: "Bởi vì, khi khai báo const cho 1 array thì array đó không thể khai báo lại, const có nghĩa là không thay đổi. nhưng không đồng nghĩa là khai báo 1 array không thay đổi. mà const array có nghĩa là tham chiếu tới array không thay đổi, nhưng các phần tử của array có thể thay đổi.",
        result: "",
        belong: "array"
    },
    64: {
        ask: "Em có biết sự khác nhau giữa Function Declarations và Function Expressions không ?",
        ans: "Sự khác nhau ở cách khai báo. Function Declarationns được khai báo bắt đầu bằng chữ function tiếp đến là tên của function, tới tham số(paramater) đến cặp dấu ngoặc nhọn. Tùy trường hợp mà có trả về hay không trả về 1 giá trị sau quá trình tính toán. Còn Function Expressions là kiểu function được gán cho 1 biến. Sau khi gán 1 function cho biến, thì biến đó được sử dụng như 1 function. Function được gán cho biến cũng được gọi là anoymos function (function vô danh). Qua đó, ta thấy function declartion khi muốn tạo ra function để sử dụng ở bất cứ đâu trong toàn bộ mã code và sử dụng function expression khi function bị giới hạn vùng sử dụng, giúp global scope nhẹ và sạch hơn",
        result: "",
        belong: "function"
    },
    65: {
        ask: "Anonymos self-invoking function là gì ,VD?",
        ans: "là function tự thực thi, không cần phải gọi mới thực thi, () bọc function đến () đến {} đến (). VD: (function(){console.log(\"HELLO WWOLRD\")}())",
        result: "",
        belong: "function"
    },
    66: {
        ask: "Function co the su dung nhu mot bien duoc khong ? ",
        ans: "Được, ví dụ có 1 function total(a,b) {return a+b}.  Gọi total truyền vào đối số là 4, 5 rồi đêm nhân với 2. Sẽ được 40.",
        result: "",
        belong: "function"
    },
    67: {
        ask: "Kiểu của function là kiểu gì khi gọi typeOf",
        ans: "Kiểu của function là function.",
        result: "",
        belong: "function"
    },
    68: {
        ask: "Làm sao in function ra như một chuỗi string. ?",
        ans: "console.log(myfunction.toString()). Nhớ là không có dấu () khi dùng chung với String",
        result: "",
        belong: "function"
    },
    69: {
        ask: "Một function được định* nghĩa như một thuộc tính của object thì nó được gọi là gì của object ?",
        ans: "Phương thức - method",
        result: "",
        belong: "function"
    },
    70: {
        ask: "Một function được thiết kế để tạo một object mới, thì nó được gọi là gì ?",
        ans: "Object constructor",
        result: "",
        belong: "function"
    },
    71: {
        ask: "Em biết gì về Arrow function ?",
        ans: " Arrow functions là cú pháp ngắn gọn của funnction expresstions.VD: const time = now => 26 + now; af KHÔNG CẦN từ khóa function. af KHÔNG CẦN từ khóa return. af KHÔNG CẦN dấu ngoặc nhọn {}. af KHÔNG CẦN dấu ngoặc tròn nơi truyền tham số. af KHÔNG CÓ tính năng hoisted, chúng phải được khai báo trước khi sử dụng. ",
        result: "",
        belong: "function"
    },
    72: {
        ask: "Script nghĩa là gì ?",
        ans: " Ngĩa là tập lệnh ! ",
        result: "",
        belong: "javascript"
    },
    73: {
        ask: "Function parameters là gì ?",
        ans: "Là tham số, là list tên gọi trong phần định nghĩa Function",
        result: "",
        belong: "function"
    },
    74: {
        ask: "Function arguments là gì ?",
        ans: "Là đối số, là các giá trị thực tế truyền vào Function.",
        result: "",
        belong: "function"
    }
    ,
    75: {
        ask: "Js có chỉ định kiểu dữ liệu cho parameters không  ?",
        ans: "Không",
        result: "",
        belong: "function"
    }
    ,
    76: {
        ask: "Js có tự kiểm tra kiểu của đối số truyền vào function không ?",
        ans: "Không",
        result: "",
        belong: "function"
    },
    77: {
        ask: "Js có kiểm tra số lượng đối số truyền vào không ?",
        ans: "Không",
        result: "",
        belong: "function"
    }
    ,
    78: {
        ask: "Nếu như một function được gọi nhưng thiếu đối số truyền vào, thì giá trị không được truyền vào đó được đặt lại là kiểu gì?",
        ans: "undefined",
        result: "",
        belong: "function"
    }
    ,
    79: {
        ask: "Làm sao để tạo giá trị default cho 1 tham số ?",
        ans: "Gán giá trị vào tham số lúc khai báo.",
        result: "",
        belong: "function"
    }
    ,
    80: {
        ask: "Nếu muốn truyền vào vô số đối số cho function thì phải làm sao?",
        ans: "Định nghĩa 1 tham số có dấu ba chấm.",
        result: "",
        belong: "function"
    }
    ,
    81: {
        ask: "Argument Object là gì ?",
        ans: "Argument object là object được xây dựng sẵn. Khi khai báo function không cần khai báo tham số. Vị trí của tham số được xây dựng logic bây giơ biến thành arguments",
        result: "",
        belong: "function"
    }
    ,
    82: {
        ask: "Khi tạo mới 1 function, code bên trong function có tự động thực thi không?",
        ans: "Không.",
        result: "",
        belong: "function"
    }
    ,
    83: {
        ask: "Khi nào thì code trong function được thực thi?",
        ans: "Khi được gọi (invoked)",
        result: "",
        belong: "function"
    }
    ,
    84: {
        ask: "Từ ngữ nào trong tiếng anh miêu tả việc gọi 1 function.?",
        ans: "Call a function OR Invoke a function OR Call upon a function, Start a function, execute a function",
        result: "",
        belong: "function"
    }
    ,
    85: {
        ask: "Khi khai báo 1 function, nến không gán vào object nào thì function đó thuộc về object nào?",
        ans: "window, và function đó được gọi là window funtion",
        result: "",
        belong: "function"
    }

    ,
    86: {
        ask: "gọi myFunction() và window.myFunction() thì có khác nhau không?",
        ans: "giống nhau",
        result: "",
        belong: "function"
    }
    ,
    87: {
        ask: "Em hiểu như thế nào khi khai báo từ khóa this?",
        ans: "Từ khóa this ám chỉ đến Object, tùy theo cách sử dụng của chúng.",
        result: "",
        belong: "function"
    }

    ,
    88: {
        ask: "Trong 1 phương thức của object, từ khóa this ám chỉ ai VD?",
        ans: "Ám chỉ chính object đó, VD: const myObj = {one:\"flower\",two:\"animal\",...this.one } , this.one có ngĩa là myObj.one",
        result: "",
        belong: "function"
    }

    ,
    89: {
        ask: "Nếu đứng 1 mình một cõi, từ khóa this ám chỉ ai?",
        ans: "Global object",
        result: "",
        belong: "function"
    }

    ,
    90: {
        ask: "Nếu khai báo this trong 1 function thì this ám chỉ ai?",
        ans: "Global object",
        result: "",
        belong: "function"
    }

    ,
    91: {
        ask: "Trong strict mode this là gì?",
        ans: "undeefined",
        result: "",
        belong: "function"
    }

    ,
    92: {
        ask: "Trong một sự kiện, this ám chỉ ai , VD?",
        ans: "Ám chỉ element nhận được sự kiện, VD: <button onclick = this.style.display = \"none\"/> this ở đây có nghĩa là windown.document.getElementById()",
        result: "",
        belong: "function"
    }

    ,
    93: {
        ask: "Scope lớn nhất là gì ??",
        ans: "Global scope, hay còn gọi là Window Scope",
        result: "",
        belong: "function"
    }

    ,
    94: {
        ask: "Trong javascript, tấc cả các function là gì?",
        ans: "Là object methods",
        result: "",
        belong: "function"
    }

    ,
    95: {
        ask: "Nếu 1 function không phải là phương thức của Js Object, thì function đó của ai?",
        ans: "Global object",
        result: "",
        belong: "function"
    }

    ,
    96: {
        ask: "Ý nghĩa của call() là gì ? vd ?",
        ans: "là một đối tượng call(thisObj) sử dụng phương thức của đối tượng khác, thatObj.method, Câu lệnh đầy đủ là thatObj.thatmethod.call(thisObj",
        result: "",
        belong: "function"
    }

    ,
    97: {
        ask: "Nếu muốn truyền đối số vào call() thì truyền như thế nào?",
        ans: "thatObj.method.call(thisObj, one, two)",
        result: "",
        belong: "function"
    }
    ,
    98: {
        ask: "Nêu sự giống nhau và khác nhau giữa call() và apply()?",
        ans: "2 method này giống nhau về cách hoạt động, tuy nhiên, đối số của call truyền vào được ngăn cách bởi dấu phẩy, còn của apply() là một array. VD: thatObj.method.call(thisObj, firstArgumnet, seconArgument) so với thatObj.method.apply(thisObj, firstArgument, seconArgument)",
        result: "",
        belong: "function"
    }
    ,
    99: {
        ask: "Em biết gì về bind()?",
        ans: "Với bind(), một đối tượng có thể mượn 1 phương thức từ một đối tượng khác.",
        result: "thatObj.method.bind(thisObj). trong trường hợp này, thatObj và thisObj có cùng this.something1, this.something2. Ngược lại với call() và apply()",
        belong: "function"
    }
    ,
    100: {
        ask: "Khi một function được sử dụng như hàm callback, thừ khóa this bị đánh mất, giờ đây, this.something được hiển thị là undefined, trong trường hợp này, mình phải làm gì để callback hoạt động VD: như trong callback trong khi setTimeout(myobj.method.bind(myobj),3000)?",
        ans: "",
        result: "",
        belong: "function"
    }
    ,
    101: {
        ask: "Javascript variable có thể thuộc về local(nội bộ) hoặc global (toàn cục), điều này đúng hay sai?",
        ans: "Đúng",
        result: "",
        belong: "function"
    }
    ,
    102: {
        ask: "Closure là gì ?",
        ans: "là một function có khả năng truy cập đến parent scope, thậm chí sau khi function cha đã đóng",
        result: "",
        belong: "function"
    }
    ,
    103: {
        ask: "Closure có thể làm gì?",
        ans: "Cô lập biến toàn cục trở thành biến nội bộ, hay local (private). Truy cập toàn bộ biến bên trong function. Truy cập toàn bộ biến bên ngoài function. Các biến bên trong function nào thì được function đó sử dụng và bị ẩn đi bởi các function và các tệp lệnh khác. Nếu như một biến global và local có cùng tên thì 2 biến này vẫn là 2 biến khác nhau. Một biến được khai báo không đi kèm các từ khóa var let const thì nó luôn luôn là của global, cho dù nó có nằm bên trong function hay một block scope nào, nhớ là phải gọi đến function để kiểm tra. Vòng đời của globle variable thì dài. Chúng tồn tại khi đến page được hủy bỏ, Local variable tồn tại rất ngắn, Chúng được tạo khi hàm được gọi và bị xóa khi hàm kết thúc. Trong Js, Funtion có thể viết lồng vào nhau.",
        result: "",
        belong: "function"
    },
    104: {
        ask: "Instance Object là gì ?",
        ans: "Là một thực thể",
        result: "",
        belong: "object"
    },
    105: {
        ask: "Constructor là gì ?",
        ans: "Là một khuôn mẫu",
        result: "",
        belong: "object"
    },
    106: {
        ask: "Trong javascript, cái gì là object",
        ans: "Mọi giá trị trong javascript, ngoại trừ giá trị nguyên thủy, đều là object. Nhưng nếu giá trị nguyên thủy(Chỉ bao gồm: number, string, boolean) được định nghĩa với từ khóa key, thì chúng vẫn là object.",
        result: "",
        belong: "object"
    },
    107: {
        ask: "Primitive value có nghĩa là gì ?",
        ans: "Giá trị nguyên thủy.",
        result: "",
        belong: "object"
    },
    108: {
        ask: "Primitive data type có nghĩa là gì ?",
        ans: "Kiểu giá trị nguyên thủy.",
        result: "",
        belong: "object"
    },
    109: {
        ask: "An Object method là gì ?",
        ans: "Là một Object property có giá trị được định nghĩa bằng một function",
        result: "",
        belong: "object"
    },
    110: {
        ask: "Javascript object chứa gì ?",
        ans: "Javascript object chứa named:values, được gọi là properties và methods",
        result: "",
        belong: "object"
    },
    111: {
        ask: "Em hãy nói cách tạo 1 object !",
        ans: "Có 4 cách. 1: tạo 1 object literal . 2: Tạo object với từ khóa new. 3: Tạo 1 object constructor, rồi sau đó tạo những object của constructor đó. 4: Khởi tạo bằng phương thức: Object.create()",
        result: "",
        belong: "object"
    },
    112: {
        ask: "Em biết gì về cách tạo object literal ?",
        ans: "Mình có thể tạo 1 object chứa sẵn các cặp named:values, hoặc tạo 1 object rỗng, rồi gán dữ liệu vào thông qua gán giá trị vào toán tử chấm của object key",
        result: "",
        belong: "object"
    },
    113: {
        ask: "Ví dụ có 1 object person. Nếu như ta gán person cho x, thì x và person là 2 object khác nhau phải không.",
        ans: "Không, x và person đều là 1 object. Nếu ta tác động vào x thì cũng có nghĩa là tác động vào person",
        result: "",
        belong: "object"
    },
    114: {
        ask: "Em nói cho anh biết gì đó về Object constructor đi !",
        ans: "object constructor chính là constructor function. Được định nghĩa :function name(something1,something2){this.something1 = something1, this.something2 = something2}, object constructure hay constructor function có kiểu là một function;",
        result: "",
        belong: "object"
    },
    115: {
        ask: "Có thể nói properties là phần quan trọng nhất của bất cứ 1 object nào. Điều này đúng hay sai ?",
        ans: "Đúng",
        result: "",
        belong: "object"
    },
    116: {
        ask: "Nếu nói rằng Javascript object là một tập hợp các properties không theo thứ tự, điều này đúng hay sai ?",
        ans: "Đúng",
        result: "",
        belong: "object"
    },
    117: {
        ask: "Properties có thể thay đổi, thêm mới, xóa đi, và một số cái thì chỉ có thể được đọc thôi. Em hãy liệt kê các cách thức để làm điều đó !",
        ans: "thay đổi: myobject.myproperty = something, thêm mới: myobj.myNewProperty = newthing, xóa đi: delete myobj.myproperty, chỉ đọc: sử dụng writable:false như sau Object.defineProperty(myobj,myproperty,{value=something,wirteable:false}",
        result: "",
        belong: "object"
    },
    118: {
        ask: "Làm sao để truy cập vào một property của obj ?",
        ans: "Có thể dùng chấm, hoặc truyền string vào cặp ngoặc vuông, hoặc truyền 1 biến vào cặp ngoặc vuông.",
        result: "",
        belong: "object"
    },
    119: {
        ask: "Vòng lặp dùng để truy cập tấc cả properties của object là for in hay for of, hãy giải thích vòng lặp đó ? Nếu không có vòng lặp đó thì còn cách nào không ?",
        ans: "Là for in. Cú pháp như sau: for(let keys in myobj){console.log(keys)}, giải thích: Keys chính là thành phần đầu tiên của property hay gọi là name. Nếu không có for in thì dùng for kết hợp với Object.keys(myobj)_trả về 1 array.",
        result: "",
        belong: "object"
    },
    120: {
        ask: "delete có thể xóa methods của object không ?",
        ans: "delete chỉ có thể xóa properties của obj",
        result: "",
        belong: "object"
    },
    121: {
        ask: "Cách truy cập vào các object lồng nhau là gì ?",
        ans: "Chấm nhiều lần trên 1 object để đến điểm truy cập.",
        result: "",
        belong: "object"
    },
    122: {
        ask: "Methods là các function được lưu trữ dưới dạng object properties, phát biểu như vậy có đúng không ?",
        ans: "Đúng",
        result: "",
        belong: "object"
    },
    123: {
        ask: "Làm sao để truy cập một method ?",
        ans: "Dùng cú pháp myobj.mymethod()",
        result: "",
        belong: "object"
    },
    124: {
        ask: "Nếu truy cập một method mà không có dấu () thì nó sẽ trả về cái gì ?",
        ans: "function definition",
        result: "",
        belong: "object"
    },
    125: {
        ask: "Thêm 1 method vào object thì làm sao ?",
        ans: "Gán vào myobj.methodName = funtion literal",
        result: "",
        belong: "object"
    },
    126: {
        ask: "toUperCase(), toLowerCase(), toString()... được gọi là gì ?",
        ans: "Built-in methods",
        result: "",
        belong: "object"
    },
    127: {
        ask: "Khi gọi 1 object để hiển thị, kết quả trả về thường là [object Object], ta sẽ không biết trong obj đó có gì ? Vậy, có cách nào để hiển thị object không ?",
        ans: "Có 4 cách: 1: dùng name của properties hoặc Object.keys() trả về 1 mảng các key, 2: dùng Object.values() trả về một mảng các value của properties, 3: Dùng vòng lặp for in hoặc for, 4: Dùng JSON.stringify(), tuy nhiên JSON.stringify() không convert function, để sửa lại, ta phải convert object sang String trước",
        result: "",
        belong: "object"
    },
    128: {
        ask: "Object Accessors là gì ?",
        ans: "Chính là getters và setters",
        result: "",
        belong: "object"
    },
    129: {
        ask: "Ví dụ về getters của Object Accessors.",
        ans: "Getter của object giống như một Function Declaration nhưng không dùng từ khóa funtion. VD: fullName(){ return this.fistName + this.lastName}",
        result: "",
        belong: "object"
    },
    130: {
        ask: "getters và function có gì khác nhau ?",
        ans: "Trong cách gọi, getter thì gọi như là một thuộc tính của obj và không có dấu (), function thì cần phải có.",
        result: "",
        belong: "object"
    },
    131: {
        ask: "setter dùng để làm gì , vd:?",
        ans: "Dùng để gán giá trị cho name của properties. VD: giả sử dó obj person. Để tạo setter language, tạo set lang(lang){this.language = lang}. Muốn truy cập person.language thì phải gán giá trị cho person.lang trước.",
        result: "",
        belong: "object"
    },
    132: {
        ask: "Tại sao sử dụng setter và getter",
        ans: "Vì nó cho cú pháp đơn giản và có sự giống nhau về cú pháp giữa obj method và obj properties, nó cho sự chắn chắn về chất lượng dữ liệu, nó hữu ích để làm nhiều điều đằng sau màn hình.",
        result: "",
        belong: "object"
    },
    133: {
        ask: "Em có biết gì về phương thức Object.defineproperty để thêm setter và getter cho object không ?",
        ans: "Giả sử có obj = {counter:0}, Khởi tạo phương thức tăng counter 1 đơn vị mỗi khi gọi: Object.defineproperty(obj,\"mysetter\",{get: function(){this.counter++}}). Khi gọi obj.mysetter thì counter tăng thêm 1 đơn vị. Còn về setter thì khởi tạo Object.defineproperty(obj,\"tangThemVaiDonVi\",{set:function(value){this.counter += value}})",
        result: "",
        belong: "object"
    },
    134: {
        ask: "Khởi tạo 1 method bằng arrow function được không, tại sao ?",
        ans: "Nên hạn chế: bởi vì khi gọi đến this thì this không ám chỉ đến object của method.",
        result: "",
        belong: "object"
    },
    135: {
        ask: "Em hãy nói sự khác nhau giữa cách tạo sẵn method và định nghĩa method thông qua Object.defineProperty ?",
        ans: "Sự khác nhau là, 1 cái tạo trước, 1 cái tạo sau. Về phương thức get thì khi gọi hàm, cái tạo sẵn phải dùng (), còn cái tạo sau không dùng (). Về setter thì cái tạo trước gán đối số bằng cách truyền vào cặp ngoặc (), còn cái tạo sau được gán thông qua toán tử gán =",
        result: "",
        belong: "object"
    }
    ,
    136: {
        ask: "Nêu đặc điểm nhận dạng một object constructor ?",
        ans: "Object constructor có cách khai báo giống như function bởi từ khóa function, nếu function là tên 1 function có chữ đầu tiên viết thường thì constructor là kiểu dữ liệu và có chữ cái đầu tiền là VIẾT HOA, tiếp đến là cá tham số, khi khởi tạo 1 thực thể, 1 object, đối số truyền vào tham số chính là giá trị của thuộc tính. Riêng phần thân của constructor thì khai báo các thuộc tính của object, bắt đầu bằng từ khóa this. Vd: This chấm name bằng name, thì this.name ám chỉ đến name của thực thể được tạo, hay nhìn góc độ khác thì name chí là key của thực thể được tạo. Còn name dùng để gán chính là value(giá trị) của thuộc tính, của thực thể được tạo. Vậy, khuôn đúc constructor có các kiểu dữ liệu thay thế cho tên của function và đã có các khuôn đúc thuộc tính được khai báo sẵn. Bây giờ chúng ta khởi tạo Object với từ khóa new là đã có thể dùng được rồi. Riêng về phần method, chúng ta cũng sẽ tạo những khuôn đúc method cần thiết cho tấc cả các thực thể được dùng sau này. Cú pháp thì đơn giản như là properties, nhưng value giờ đây sẽ là một function vô danh (Không được dùng arrow function bởi vì sẽ có dính liếu tới từ khóa this).",
        result: "",
        belong: "object"
    }
    ,
    137: {
        ask: "Giả sử có constructor Person, khởi tạo thực thể (obj) mới father, mother. Hỏi: Nếu thêm 1 property, hoặc 1 method mới cho fater thì mother có property và method đó không ? Giải thích",
        ans: "Không, bởi vì chỉ thêm cho father, nếu như mather muốn có các thuộc tính và phương thức đó, thì phải thêm vào constructor lúc khởi tạo. Hình như không có cách khởi tạo rồi và thêm sau.",
        result: "",
        belong: "object"
    }
    ,
    138: {
        ask: "Đã tìm thấy sự nhầm lẫn tai hại giữa property của Object constructor function và method Class. Bạn có nhớ không ? ",
        ans: "Nhầm lẫn về cú pháp. Trước nhất. Phải nhìn nhận lại Function construtor và Class constructor có cách khai báo property giống nhau. Nhưng cú pháp bao bọc khác nhau. Vậy, muốn thêm 1 method vào constructor thì phải đi kèm từ khóa this rồi chấm mymethod, gán function anymos cho method đó. Thế là xong. Còn phần nhầm lẫn là nhầm lẫn viết function giữa 3 nhánh đó là: 1: trong constructor method phải có this, 2: trong class, method của class không khai báo chữ function. Và nó như là 1 function bình thường, có thể gọi đến mọi property của class thống qua từ khóa this. 3. Viết method vào constructor function nhưng không dùng từ khóa this và cứ nhầm lẫn với class.",
        result: "",
        belong: "object"
    }
    ,
    139: {
        ask: "Bạn không thể thêm mới một method vào constructor funtion giống như cách thêm mới 1 method vào 1 thực thể. Điều này đúng hay sai ?",
        ans: "Đúng",
        result: "",
        belong: "object"
    }
    ,
    140: {
        ask: "Đống bùi nhùi này new String(), new Number(), new Boolean(), new Array(), new RegExp(), new Function(), new Date(), chúng được gọi là cái quái gì ?",
        ans: "built-in constructor",
        result: "",
        belong: "object"
    }
    ,
    141: {
        ask: "Hãy khởi tạo string literals, number literals, boolean literals, object literals, array literals, patter literals, function expression ",
        ans: " const x1 = \"\"; const x2 = 0; const x3 = false; const x4 = {}; const x5 = []; const x6 = function(){}",
        result: "",
        belong: "object"
    }
    ,
    142: {
        ask: "Tấc cả object trong javascript đều kế thừa properties và methods từ một prototype. Nói như vậy có nghĩa là sao ?",
        ans: "Phát biểu vậy là đúng. Nói như vậy có nghĩa là tấc cả các object trong javascript chẳng hạn x = \"hello world\", x là string thì x kế thừa các properties và method từ object String, có nghĩa là mọi biến kiểu string đều được kế thừa hay nói cách khác là có các thuộc tính và phương thức từ String như (console.log(String.prototype)) slice(), toUpperCase(), toLowerCase(), trim()...., Mọi object khác cũng tương tự như vậy . VD: Date có getDay(), getFullMonth(), getFullYear().... Number cũng vậy....",
        result: "",
        belong: "object"
    }
    ,
    143: {
        ask: "Thêm property và method vào object thì làm như thế nào thông qua prototype.",
        ans: "1 Constructor không có phương thức để thêm method và object. Tuy nhiên, thông qua prototype, chúng ta có thể thêm property và method. Và thế là tấc cả các thực thể (object mới) được tạo thành sau này đều có các thuộc tính và method được thêm vào đó. Thêm property thì gọi Constructor chấm prototype chấm tên thuộc tính bằng giá trị thuộc tính. Và thế là tấc cả các thực thể, object mới được tạo sau này đều có property đó. Thêm method: gọi Constructor chấm prototype chấm tên function bằng function anonymos , code viết bên trong function anonymos, và thế là các thực thể, các object mới được tạo sau này đều có method đó.",
        result: "",
        belong: "object"
    }

    ,
    144: {
        ask: "Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects. Tại sao w3chool lại nói như vậy ?",
        ans: "Bởi vì nếu chỉnh sửa prototype của chuẩn object thì trong tương lai, khi gọi đến property, method được chỉnh sửa, nó sẽ trả về kết quả sai bét. Ví dụ: có thực thể day = new Date(). Vậy: nếu chỉnh sửa Date.prototype.getFullYear() sẽ không trả về năm hiện tại nữa. Mà là một thứ khác. Vậy, chỉ nên chỉnh sửa prototype của bạn. Không nên sửa code nguồn.",
        result: "",
        belong: "object"
    }

    ,
    145: {
        ask: "Trong console của Chrome, nêu dấu hiệu nhận biết 1 thuộc tính(property) của prototype, và nêu dấu hiệu nhận biết một method của prototype, dấu hiệu property và method nào là thêm mới sau này, cái nào là cái cũ ?",
        ans: "Dấu hiệu của 1 thuộc tính là cách viết như property của một object, có tên gọi và giá trị, dấu hiệu nhận biết 1 method là có mũi tên chỉ sang phải, có tên gọi và giá trị là 1 funtion. Nếu thêm mới thì property và method được in đậm, còn lại in thường.",
        result: "",
        belong: "object"
    }

    ,
    146: {
        ask: "prototype(giải thích): Em hãy giải thích về method constructor của prototype ?",
        ans: "Constructor của protoype là 1 khuôn mẫu để khởi tạo nên object. Trên hệ quy chiếu object, thì name là constructor còn value là một contructor, ví dụ Date()",
        result: "",
        belong: "object"
    }

    ,
    147: {
        ask: "Em biết gì về sự kế thừa của 1 thực thể, ví dụ const today = new Date()",
        ans: "today kế thừa toàn bộ properties và methods của Date, ví dụ getDate(), getDay(), getFullYear(), getMonth(). Rồi các method đó kế thừa các method của funtion như apply(), bind(), call(), toString(),getargument()",
        result: "",
        belong: "object"
    }

    ,
    148: {
        ask: "Làm sao log 1 prototype của constructor.",
        ans: "Dùng constructor chấm prototype",
        result: "",
        belong: "object"
    }

    ,
    149: {
        ask: "Làm sao thêm mới prototype con Number",
        ans: "gọi Number.prototype.propertyName = value đối với method thì value là funtion anonymos",
        result: "",
        belong: "object"
    }

    ,
    150: {
        ask: "Có cách nào dễ hiểu sự kế thừa không ?",
        ans: "Có 2 cách: 1 là xem log của 1 prototype. 2 là khởi tạo 1 thực thể, rồi lên vscode chấm theo emmet",
        result: "",
        belong: "object"
    }

    ,
    151: {
        ask: "Prototype là cách thiết kế lên 1 dòng lệnh trong javascript. Điều này có đúng không, giải thích ?",
        ans: "Có thể là đúng. Ví dụ: tạo const day = new Date(). Gọi day.getDate() thì trả về ngày hôm nay, dạng number, nên number được kế thừa các methods là toFixed,... nên có thể lựa chọn ra lệnh tiếp. và cứ thế tiếp diễn đến mục tiêu của dòng lệnh. Ví dụ.Chữ số cuối cùng của Ngày hôm nay có phải là ngày 9 hay không thì gọi day.getDate().toString().endWith(9)",
        result: "",
        belong: "object"
    }

    ,
    152: {
        ask: "A Javascript Set là gì ?",
        ans: "Là một tập hợp các giá trị độc nhất.",
        result: "",
        belong: "object"
    }

    ,
    153: {
        ask: "Độc nhất trong set là gì ?",
        ans: "Mỗi giá trị trong Set chỉ có thể xảy ra 1 lần.",
        result: "",
        belong: "object"
    }

    ,
    154: {
        ask: "Set có thể nắm giữ gì ?",
        ans: "Bất cứ giá trị nào của các bất cứ kiểu dữ liệu nào..",
        result: "",
        belong: "object"
    }

    ,
    155: {
        ask: "Làm sao để tạo set ?",
        ans: "Dán array vào new Set(). Hoặc tạo set mới vào sử dụng add() để them giá trị hoặc value.",
        result: "",
        belong: "object"
    }

    ,
    156: {
        ask: "Chuyện gì xảy ra nếu add() các giá trị bằng nhau vao set ?",
        ans: "Chỉ có giá trị đầu tiên được lưu.",
        result: "",
        belong: "object"
    }

    ,
    157: {
        ask: "Co cach nao de log gia tri cua set ra console khong ?",
        ans: "Dung forEach(). ",
        result: "",
        belong: "object"
    }

    ,
    158: {
        ask: "Có cách nào để bóc tách dữ liệu của một set dùng method values() không ?",
        ans: "Có. for of , object là myset.value()",
        result: "",
        belong: "object"
    }

    ,
    159: {
        ask: "Dùng keys() có bóc tách được dữ liệu của set không ?",
        ans: "Có. NHƯNG NÊN NHỚ LÀ SET KHÔNG CÓ KEY. Trong trường hợp này, khi dùng myset.keys() thì giá trị trả về cũng là một mảng giống như khi gọi myset.values()",
        result: "",
        belong: "object"
    }

    ,
    160: {
        ask: "Trong phạm trù Set, method entries() dùng làm gì vậy em ?",
        ans: "Entries dịch sang TV có nghĩa là mục (mục lục). Nên khi gọi entries() thì chương trình trả về các cặp [value,value] thay vì [key,value]. Và cũng lưu ý lại là Set không có key.",
        result: "",
        belong: "object"
    }

    ,
    161: {
        ask: "Đố em biết, khi gọi console.log(typeof myset) thì trả về là cái gì ? Và, console.log(myset instanceof Set) là cái gì ?",
        ans: "typeof myset trả về là object, còn lại là true.",
        result: "",
        belong: "object"
    }

    ,
    162: {
        ask: "Em hay ke ten nhung method cua set và ví dụ.",
        ans: "new Set(), add(), delete(), has(), clear(), forEach(), value(), keys(), entries()",
        result: "",
        belong: "object"
    }

    ,
    163: {
        ask: "Khi nao nen dung set ?",
        ans: "Khi tao 1 mang gia tri khong trung nhau. Voi chi 1 dong code.",
        result: "",
        belong: "object"
    }

    ,
    164: {
        ask: "Hãy kể các method của map",
        ans: "Method giống Set: clear(), delete(), has(), forEach(), entries(), value(). Khác: Map: new Map(), set(), get(), size. Còn Set thì :  add(). Map có các method sau: new Map(), set(), get(), clear(), delete(), has(), forEach(), entries(), keys(), values() và property size",
        result: "",
        belong: "object"
    }

    ,
    165: {
        ask: "Có thể nói, Map dùng new Set() và add() để khởi tạo, thì Set dùng new Map() và set() để khởi tạo, điều này đúng hay sai ?",
        ans: "Sai, map dùng new Map() và set(), còn set dùng new Set() và add()",
        result: "",
        belong: "object"
    }

    ,
    166: {
        ask: "Em có biết method get() trong Map dùng để làm gì không. Ví dụ ?",
        ans: "Dùng để trả về giá trị của 1 key. Vd: myMap.get(\"mykey\"), giá trị trả về là value",
        result: "",
        belong: "object"
    }

    ,
    167: {
        ask: "Trong Map, nếu có key giống nhau, nhưng value khác nhau thì điều gì xảy ra ?",
        ans: "Chương trình chỉ ghi nhận giá trị cuối cùng",
        result: "",
        belong: "object"
    }

    ,
    168: {
        ask: "Nếu muốn biết số lượng phần tử trong map thì phải làm sao ?",
        ans: "Gọi mymap.size",
        result: "",
        belong: "object"
    }

    ,
    169: {
        ask: "Em hãy ví dụ về các method sau của map: delete(), clear(), has(), typeof, instanceof, forEach(), entries(), keys(), values()",
        ans: "",
        result: "",
        belong: "object"
    }

    ,
    170: {
        ask: "Lập bảng nêu sự khác nhau giữa Set và Map",
        ans: "Set: Không thể lặp trực tiếp, Map: Có vòng lặp trực tiếp. Set: không có thuộc tính size, Map: Có thuộc tính size. Set có key là string hoặc symbol. Map có key có thể là bất cứ thứ j, kiểu dữ liệu nào. Set không có vị trí. Map có vị trí. Set có default keys, Map Không có default keys",
        result: "",
        belong: "object"
    }

    ,
    171: {
        ask: "Có thể sử dụng Object như là key của Map. Em có hiểu câu nói trên không hay nghe như vịt nghe sấm.",
        ans: "Vì Map có key có thể là bất cứ thứ gì như string, number, boolean, null, undefine, object,function... Nên sử dụng Object làm key của Map là chuyện hết sức bình thường.",
        result: "",
        belong: "object"
    }

    ,
    172: {
        ask: "Tạo đoạn code review sau. declaration, expression, method, constructor",
        ans: "Tự tìm câu trả lời",
        result: "",
        belong: "function"
    }

    ,
    173: {
        ask: "Theo kinh nghiệm thực chiến của mình, em nói cho anh biết call() đơn giản có nghĩa là gì ?",
        ans: "Có nghĩa là chụp lấy những thuộc tính của bạn làm thuộc tính của mình.",
        result: "",
        belong: "function"
    }

    ,
    174: {
        ask: "Em biet apply() giong ai khong ? Ma hinh nhu cung co diem khac .khac cho nao vay",
        ans: "apply() giong call, khac cho truyen vao argument la 1 array",
        result: "",
        belong: "function"
    }

    ,
    175: {
        ask: "bind() giong phuong thuc nao em ?",
        ans: "call(), call di muon vi call khong co, nhung bind tham lam, bind co roi bind van di muon.",
        result: "",
        belong: "function"
    }

    ,
    176: {
        ask: "Tom gon phan function trong w3school bằng cái sườn sau: declaration, expression, method, constructor, call(), apply(), bind()",
        ans: "Tu tim cau tra loi em nhe",
        result: "",
        belong: "function"
    }

    ,
    177: {
        ask: "Khi call back 1 method cua object, tu khoa this bi lose. Vay phai lam sao",
        ans: "Dung bind() nhe be obj.method.bind(obj)",
        result: "",
        belong: "function"
    }
    ,
    178: {
        ask: "Class là gì đối với object",
        ans: "templates",
        result: "",
        belong: "class"
    }
    ,
    179: {
        ask: "Cú pháp class ?",
        ans: "keyword class, tên class viết hoa chữ đầu tiên, không có dấu () như function, tiếp đến là cặp dấu ngoặc nhọn. Rồi đến khai báo constructor, keyword constructor. Construtor cấu trúc cú pháp như function nhưng không có chữ function. Truyền tham số. Gán tham số cho this.key.",
        result: "",
        belong: "class"
    }
    ,
    180: {
        ask: "Em hãy viết 1 class có 2 thuộc tính khởi tạo ban đầu name year ?",
        ans: "Tự nhó viết nhá !",
        result: "",
        belong: "class"
    }
    ,
    181: {
        ask: "Class có phải là 1 object không ?",
        ans: "Class không phải là một object, class là 1 template dùng cho object.",
        result: "",
        belong: "class"
    }
    ,
    182: {
        ask: "Làm sao để sử dụng class ?",
        ans: "Khai báo như khai báo tạo object đối với function constructor, cũng với từ khóa new, đến tên class và truyền tham số vào. Sau đó dùng thực thể để chấm.",
        result: "",
        belong: "class"
    }
    ,
    183: {
        ask: "Nêu 3 đặc điểm của constructor class ?",
        ans: "1. constructor class được viết chính xác là constructor, in thường hết. 2. contructor được tự động gọi khi khởi tạo thực thể. 3. contructor dùng để khai báo các giá trị ban đầu của thực thể (object)",
        result: "",
        belong: "class"
    }
    ,
    184: {
        ask: "Ví dụ bây giờ tạo class mà không tạo constructor thì điều gì xảy ra ?",
        ans: "Js sẽ thêm một contructor rỗng vào",
        result: "",
        belong: "class"
    }
    ,
    185: {
        ask: "Bà bán cháo bảo, class method được tạo giống như cú pháp của object method, Điều này đúng hay sai ?",
        ans: "Điều này SAI NHE. Class method có cách viết giống như function nhưng không khai báo chữ function. Còn method của object có cách viết giống như khai báo property của object nhưng giá trị được gán vào là một function anonymos (function vô danh)",
        result: "",
        belong: "class"
    }
    ,
    186: {
        ask: "Em hãy tạo 1 class có tên Car, 2 thuộc tính ban đầu name, age, 3 method welCome(), myName(), myAge()",
        ans: "Tự tạo đi nhé",
        result: "",
        belong: "class"
    }
    ,
    187: {
        ask: "Để tạo kế thừa cho class, dùng từ khóa gì, cú pháp gì ?",
        ans: "extends, cú pháp là class1 extends class2, nếu class cha có tham số a thì người nhận thừa kế phải khai báo a trong danh sách tham số của mình, và khai báo thừa kế cho a bằng super(brand)",
        result: "",
        belong: "class"
    }
    ,
    188: {
        ask: "Sau khi kế thừa, điều kỳ diệu gì sẽ xảy ra ?",
        ans: "Người nhận thừa kế sẽ có đầy đủ method của người cho",
        result: "",
        belong: "class"
    }
    ,
    189: {
        ask: "Có 1 class Car có para là brand, method là myOwn, Viết class thừa kế Model với Car.",
        ans: "Tự viết nhá, có 2 đặc điểm cần nhớ, 1 là dùng keyword extends, 2 là dùng supper",
        result: "",
        belong: "class"
    }
    ,
    190: {
        ask: "Gọi super() để làm gì ?",
        ans: "Để gọi đến constructor class cha, hay có thể hiểu là giúp class con khởi tạo nơi chứa thuộc tính ban đầu cho class cha. Để dễ hình dung, tự hỏi là khi tạo class thừa kế, thì các thuộc tính ban đầu của class cha sẽ được truyền vào đâu ????. Tiếp theo, chúng ta có thể set luôn giá trị ban đầu của class cha bên trong supper, tuy nhiên, điều này rất bất tiện trong việc khởi tạo đối tượng sau này.",
        result: "",
        belong: "class"
    }
    ,
    191: {
        ask: "Tác dụng của sự kế thừa là gì ?",
        ans: "Tác dụng là sử dụng lại method và properties của class đã có khi khởi tạo 1 object mới.",
        result: "",
        belong: "class"
    }
    ,
    192: {
        ask: "Làm sao thêm getter và setter vào class ?",
        ans: "Sử dụng từ khóa get và set.",
        result: "",
        belong: "class"
    }
    ,
    193: {
        ask: "Cho ví dụ về từ khóa get và set của class ?",
        ans: "Tự làm nhé",
        result: "",
        belong: "class"
    }
    ,
    194: {
        ask: "tên của getter và setter có thể giống với tên properties được không ?",
        ans: "Không nhé bé",
        result: "",
        belong: "class"
    }
    ,
    195: {
        ask: "Nêu cách truyền tham số vào setter ?",
        ans: "Gán dấu = thay vì truyền vào ()",
        result: "",
        belong: "class"
    }
    ,
    196: {
        ask: "Class có hoisted không ?",
        ans: "Không, có nghĩa là mi phải khai báo trước khi mi sử dụng",
        result: "",
        belong: "class"
    }
    ,
    197: {
        ask: "Static class method là gì ?",
        ans: "Là method mà class mới gọi được, object không gọi được.",
        result: "",
        belong: "class"
    }
    ,
    198: {
        ask: "Cho ví dụ về static class method ?",
        ans: "W3school nhé",
        result: "",
        belong: "class"
    }
    ,
    199: {
        ask: "Làm sao lấy static method về cho cho object ?",
        ans: "Gọi class chấm static method , truyền object vào static method. Ở trong class, thiết kế static method có tham số truyền vào là x, ròi từ x ưng gọi j thì chấm tới nó.",
        result: "",
        belong: "class"
    }
    ,
    200: {
        ask: "Em có biết syntax static của class không ?",
        ans: "thêm chữ static vào phía trước của 1 thuộc tính hay phương thức của class. Và kết quả là phương thức và thuộc tính đó chỉ class mới có thể gọi. static methodName(){}; static propertyName = value; static{} được gọi tự động khi gọi đến static của CLass(bao gồm static methods và static properties)",
        result: "",
        belong: "class"
    }
    ,
    201: {
        ask: "[XEM LẠI GIÚP: khi thao tác với regex, đầu tiên là phải xem mẫu regx là mẫu hình bao nhiêu ký tự . XEM LẠI REPORT]i có nghĩa là gì trong regex ?",
        ans: "case-insensitive, i có nghĩa không phân biệt chữ hoa và chữ thường, mặc định là có phân biệt",
        result: "",
        belong: "regex"
    }
    ,

    202: {
        ask: "g có nghĩa là gì trong regex ?",
        ans: "global match, g có nghĩa tìm toàn bộ, thay vì dừng tại vị trí đầu tiên",
        result: "",
        belong: "regex"
    }
    ,
    203: {
        ask: "m có nghĩa là gì trong regex ?",
        ans: "multiline",
        result: "",
        belong: "regex"
    }
    ,
    204: {
        ask: "p = /[is]/;  log(p.test(txt)) có nghĩa là gì?",
        ans: "kiểm tra sự tồn tại mẫu hình i 1 ký tự in thường HOẶC s in thường trong 1 chuỗi txt cho trước, khác với /is/ là mẫu hình 2 ký tự.",
        result: "",
        belong: "regex"
    }
    ,
    205: {
        ask: "p =/[a-h]/; log(p.test(txt)) có nghĩa là gì ?",
        ans: "Kiểm tra sự tồn tại mẫu hình 1 ký tự từ a in thường đến h in thường trong 1 chuỗi txt cho trước.",
        result: "",
        belong: "regex"
    }
    ,
    206: {
        ask: "p =/[A-Z]/; log(p.test(txt)) có nghĩa là gì ?",
        ans: "",
        result: "Kiểm tra có hoặc không sự tồn tại mẫu hình in hoa từ A đến Z rằng chúng có trong chuỗi txt không, chỉ cần tìm thấy tồn tại trên 1 ký tự, method trả về true",
        belong: "regex"
    }
    ,
    207: {
        ask: "p =/[A-e]/; log(p.test(txt)) có nghĩa là gì ? ?",
        ans: "Kiểm tra có hoặc không sự tồn tại mẫu hình in hoa từ A đến Z, và in thường từ a đến e",
        result: "",
        belong: "regex"
    }
    ,
    208: {
        ask: "p =/[^m]/; log(p.test(txt)) có nghĩa là gì  ?",
        ans: "Kiểm tra sự tồn tại của tấc cả các ký tự KHÔNG BAO GỒM m, có nằm trong txt không, ở đây là KHÔNG PHẢI m, chứ không phải là m",
        result: "",
        belong: "regex"
    }
    ,
    209: {
        ask: "p =/[^is]/; log(p.test(txt)) có nghĩa là gì  ?",
        ans: "Kiểm tra sự tồn tại của tấc cả các ký tự KHÔNG BAO GỒM i HOẶC s, các ký tự không bao gồm đó có nằm trong mảng không ?",
        result: "",
        belong: "regex"
    }
    ,
    210: {
            ask: "p =/[^a-h]/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của tấc cả các ký tự KHÔNG BAO GỒM từ a in thường đến h in thường (kiểu 1 ký tự), các ký tự KHÔNG BAO GỒM đó, có trong txt hay không ?",
            result: "",
            belong: "regex"
        }
    ,
    211: {
            ask: "p =/[^A-Z]/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của mẫu hình KHÔNG PHẢI từ A in hoa đến Z in hoa, chúng có nằm trong txt hay không ?",
            result: "",
            belong: "regex"
        }
    ,
    212: {
            ask: "p =/[^A-h]/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của mẫu hình KHÔNG BAO GỒM từ A in hoa đến Z in hoa, từ a in thường đến h in thường trong chuỗi txt.",
            result: "",
            belong: "regex"
        }
    ,
    213: {
            ask: "p =/[^a-h]/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của mẫu hình KHÔNG PHẢI từ a in thường đến h in thường trong chuỗi txt cho trước.",
            result: "",
            belong: "regex"
        }
    ,
    214: {
            ask: "p =/[3]/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của số 3 có trong txt hay không ?",
            result: "",
            belong: "regex"
        }
    ,
    215: {
            ask: "p =/[^5-9]/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của tấc cả các ký tự KHÔNG BAO GỒM  từ số 5 đến số 9 có nằm trong mảng txt hay không ?",
            result: "",
            belong: "regex"
        }
    ,
    216: {
            ask: "p =/(red|green)/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của red hoặc green có nằm trong mảng hay không ?",
            result: "",
            belong: "regex"
        }
    ,
    217: {
            ask: "p =/(0|5|9)/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của 0 hoặc 5 hoặc 9 có nằm trong mảng hay không ?",
            result: "",
            belong: "regex"
        }
    ,
    218: {
            ask: "Trong regex dấu () và dấu [] được gọi là gì ?",
            ans: "group",
            result: "",
            belong: "regex"
        }
    ,
    219: {
            ask: "p =/l.h/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của mẫu hình 3 ký tự, ký tự đầu tiên là l, tiếp đến là j cũng được, rồi đến h",
            result: "",
            belong: "regex"
        }
    ,
    220: {
            ask: "p =/l..h/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của mẫu hình 4 ký tự, ký tự đầu tiên là l, tiếp đến là j cũng được, rồi tiếp đến nữa là gì cũng được, rồi đến h",
            result: "",
            belong: "regex"
        }
    ,
    221: {
            ask: "p =/l...h/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của mẫu hình 5 ký tự, ký tự đầu tiên là l, tiếp đến là j cũng được, rồi tiếp đến nữa là gì cũng được,rồi tiếp đến nữa là gì cũng được, rồi đến h",
            result: "",
            belong: "regex"
        }
    ,
    222: {
            ask: "p =/\w/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của word hay \w, \w có nghĩa là các ký tự từ a đến z, từ A đến Z từ 0 đến 9 và bao gồm luôn dấu _",
            result: "",
            belong: "regex"
        }
    ,
    223: {
            ask: "p =/\W/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại ký tự KHÔNG PHẢI LÀ word, \W, \W (IN HOA NHÉ EM) có nghĩa là KHÔNG BAO GỒM các ký tự từ a đến z, từ A đến Z từ 0 đến 9 và dấu _",
            result: "",
            belong: "regex"
        }
    ,
    224: {
            ask: "p =/\d/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của các số từ 0 đến 9, d có nghĩa là digits đó chị nghen",
            result: "",
            belong: "regex"
        }
    ,
    225: {
            ask: "p =/\D/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của các ký tự KHÔNG PHẢI từ 0 đến 9, D IN HOA NHÉ CHỊ, d có nghĩa là digits đó chị nghen",
            result: "",
            belong: "regex"
        }
    ,
    226: {
            ask: "p =/\s/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của khoảng trắng trong txt.",
            result: "",
            belong: "regex"
        }
    ,
    227: {
            ask: "p =/\S/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại không phải là khoảng trắng trong txt. S IN HOA NHÉ, vd txt là /"                /"",
            result: "",
            belong: "regex"
        }
    ,
    228: {
            ask: "p =/\ba/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "\b là begining, Kiểm tra sự tồn tại của chữ a đầu tiên của chuỗi, ngoài a ra còn có thể là một chuỗi như anh...",
            result: "",
            belong: "regex"
        }
    ,
    229: {
            ask: "p =/a\b/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "\b là begining, Nhưng \b đứng sau a có nghĩa là Kiểm tra sự tồn tại của chữ a cuối cùng của chuỗi, ngoài a ra còn có thể là một chuỗi như anh...",
            result: "",
            belong: "regex"
        }
    ,
    230: {
            ask: "p =/\Ba/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "\B (viết hoa nhé) thì là không phải begining, mà cũng không có nghĩa là end mà có nghĩa là Kiểm tra sự tồn tại của chữ a nằm bên trong chuỗi, ngoài a ra còn có thể là một chuỗi như anh...",
            result: "",
            belong: "regex"
        }
    ,
    231: {
            ask: "",
            ans: "",
            result: "",
            belong: "regex"
        }
    ,
    232: {
            ask: "p =/\0/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "\0 nói về kiểm tra rỗng.",
            result: "",
            belong: "regex"
        }
    ,
    233: {
            ask: "p =/\n/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "\n kiểm tra là một new line.",
            result: "",
            belong: "regex"
        }
    ,
    234: {
            ask: "p =/o+/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "+ là kiểm tra sự tồn tại ít nhất 1 lần của chữ o có trong chuỗi không, ",
            result: "",
            belong: "regex"
        }
    ,
    235: {
            ask: "p =/\w+/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "+ là kiểm tra sự tồn tại ít nhất 1 lần của word [a-zA-X0-9_] có trong chuỗi không, ",
            result: "",
            belong: "regex"
        }
    ,
    236: {
            ask: "p =/lo*/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "+ là kiểm tra sự tồn tại ít nhất 0 lần của chữ l, lo,hoặc loo, hoặc looo và nhiều o hơn nữa. ",
            result: "",
            belong: "regex"
        }
    ,
    237: {
            ask: "p =/loo?/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "? nghĩa là kiểm tr sự tồn tại của loo hoặc lo trong chuỗi hay không . ",
            result: "",
            belong: "regex"
        }
    ,
    238: {
            ask: "p =/\d{4,8}/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của 1 cụm 4 số liên tiếp hoặc 8 số liên tiếp trong chuỗi txt.",
            result: "",
            belong: "regex"
        }
    ,
    239: {
            ask: "p =/\d{4}/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của 1 cụm ít nhất 4 số trong chuỗi txt.",
            result: "",
            belong: "regex"
        }
    ,
    240: {
            ask: "p =/is$/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của pattern is ở vị trí cuối chuỗi.",
            result: "",
            belong: "regex"
        }
    ,
    241: {
            ask: "p =/^Is/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của pattern Is ở vị trí đầu chuỗi.",
            result: "",
            belong: "regex"
        }
    ,
    242: {
            ask: "p =/is(?= the)/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của pattern is the bên trong chuỗi.",
            result: "",
            belong: "regex"
        }
    ,
    243: {
            ask: "p =/is(?! the)/; log(p.test(txt)) có nghĩa là gì  ?",
            ans: "Kiểm tra sự tồn tại của pattern is theo sau không phải là the (xem chừng trước chữ the có space) bên trong chuỗi.",
            result: "",
            belong: "regex"
        }
    ,
    244: {
            ask: "Promise là gì ?",
            ans: "",
            result: "",
            belong: "promise"
        }
    
    ,
    245: {
            ask: "Cách hoạt động của promise",
            ans: "",
            result: "",
            belong: "promise"
        }
    
    ,
    246: {
            ask: "Làm thế nào để tạo ra 1 promise ?",
            ans: "tạo biến promise( hay nói cách khác là tạo 1 thực thể), gán vào nó 1 object constructor new Promise có sẵn trong JS, phiên bản ES6,tiếp theo, truyền vào promise constructor 1 function, function này được gọi là Executor, Executor là thực thi luôn khi gọi đến contructor promise, executor function trả về 2 tham số khi nó được thực thi, 2 tham số đó đều là hàm, tham số thứ nhất là resolve, thứ 2 là reject, resolve có nghĩa là thành công, reject là thất bại. Trong Function truyền vào contructor chúng ta viết logic xử lý của chúng ta, khi thành công thì gọi đến resolve(), khi thất bại thì gọi đến reject(). NHỚ LÀ TRONG EXECUTOR FUNCTION PHẢI GỌI ĐẾN resolve() hoặc reject(), nếu không gọi đến thì nó sẽ bị treo, và gây ra vấn đề rò rỉ bộ nhớ (memory leak), và thế là object promise đã được tạo.",
            result: "",
            belong: "promise"
        }
    
    ,
    247: {
            ask: "Promise giải quyết vấn đề gì ?",
            ans: "xem lại, hình như khi nào helll hay fail j đó thì mới cần dùng promise, ",
            result: "",
            belong: "promise"
        }
    
    ,
    248: {
            ask: "thực thể promise được tạo từ contructor Promise được gọi đến phương thức nào ?",
            ans: "Thực thể promise sẽ được gọi đến 3 phương thức .then() .catch() .finally(), 3 phương thức này đều nhận callback. Nhưng khi nào các call back được thực thi ? callback của then() được thực thi khi function resolve() trong promise được thực thi. Tiếp đến, catch() được gọi khi reject() trong executor function được gọi. Cuối cùng, finnaly() được gọi khi 1 trong 2 resolvo hoặc reject được gọi.",
            result: "",
            belong: "promise"
        }
    
    ,
    249: {
            ask: "Promise có bao nhiêu trạng thái ? Kể tên các trạng thái đó.",
            ans: "Promise có 3 trạng thái, 1 là pendding nghĩa là đang chờ, khi không resolve hoặc reject, nó sẽ bị rò rỉ bộ nhớ, memory leak, 2 là fulfilled nghĩa là thành công, resolve() đã được gọi, khi ở trạng thái này thì nó sẽ lọt vào then(), rồi sau đó lọt vào finally(), 3 là rejected nghĩa là thất bại, executor function gọi đến reject(), khi ở trạng thái rejected thì nó sẽ lọt vào catch(), rồi sao đó vào finally()",
            result: "",
            belong: "promise"
        }
    
    ,
    250: {
            ask: "Làm sao để nhận dữ liệu từ executor ?",
            ans: "Khi promise ở trạng thái fulfilled - thành công thì resolve() được gọi. Nếu muốn trả về giá trị gì đó trong callback của then thì truyền giá trị đó vào resolve, sau đó tạo biến hứng giá trị đó trong then, rồi sử dụng chúng.",
            result: "",
            belong: "promise"
        }
    
    ,
    251: {
            ask: "tại sao lỗi (in promise) xảy ra ?",
            ans: "Bởi vì không có catch để bắt lỗi.",
            result: "",
            belong: "promise"
        }
    
    ,
    252: {
            ask: "Em có nắm khái niệm về promise không ?",
            ans: "Dạ có, promise sinh ra để xử lý các thao tác bất đồng bộ, trước khi có promise thì chúng ta thường sử dụng callback, callback sẻ xảy ra 1 vấn đề là callback hell, code nó rất rối rắm, khó đọc , khó hiểu. Promise được sinh ra từ ES6 để khắc phục tình trạng callback hell, làm code dể đọc dể hiểu hơn. Để tạo ra 1 promise thì khởi tạo với từ khóa new với contructor promise và trong constructor promise, chúng ta sẽ truyền vào 1 excutor function, trong excutor function, mình sẽ nhận được 2 tham số dạng hàm, 1 là resolve, 2 là reject, resolve được gọi khi thao tác xử lý thành công, reject được gọi khi thao tác xử lý thất bại. Đối tượng promise được tạo ra có thể gọi đến then() và catch(). then() và catch() sẽ nhận được các cacback function. then() sẽ được thực thi khi promise được resolve, và sẽ lọt vào thằng catch() thi promise bị reject",
            result: "",
            belong: "promise"
        }
    
    ,
    253: {
            ask: "Đối tượng promise có thể gọi bao nhiêu then() ?",
            ans: "Đối tượng promise có thể gọi ra nhiều then(), và đặc biệt là then() được gọi theo trình tự từ trước ra sau. then() thứ nhất có thể return về 1 giá trị, rồi sau đó hứng giá trị đó ở then thứ 2 bằng các truyền tham số vào then() thứ 2, then() thứ 2 cũng có thể return về 1 giá trị , rồi dùng then thứ 3 hứng giá trị đó. Cứ xâu chuỗi như vậy.",
            result: "",
            belong: "promise"
        }
    
    ,
    254: {
            ask: "Khi return trong then(), nếu không return về giá trị mà return về 1 new Promise thì vấn đề gì xảy ra ?",
            ans: "Thì phải đợi cho Promise của then() phía trước giải quyết xong thì nó mới lọt qua then() tiếp theo, khác với return về giá trị, nó nhảy qua liền then() tiếp theo.",
            result: "",
            belong: "promise"
        }
    
    ,
    255: {
            ask: "chấm then() phía sau 1 then() retunr new Promise thì then() đó được chấm trên promise đầu tiên hay promise của then() được return",
            ans: "promise được return",
            result: "",
            belong: "promise"
        }
    
    ,
    256: {
            ask: "Khi xuất hiện nhiều then(), then() đứng trước return về 1 new Promise, thì muốn bóc tách dữ liệu từ resolve() của new promise thì chúng ta phải làm sao ?",
            ans: "then() đứng sau return new Promise là function được gọi từ new Promise, cho nên, muốn bóc tác dữ liệu thì truyền dữ liệu vào resolve, sau đó nhận tại then như của promise đầu tiên.",
            result: "",
            belong: "promise"
        }
    
    ,
    257: {
            ask: "Ví dụ có 1 chuỗi than() đang chạy, nếu vị trí thứ 2 báo lỗi thì ai sẽ bắt được lỗi sinh ra ?",
            ans: ".catch(), đứng đằng sau chuỗi",
            result: "",
            belong: "promise"
        }
    
    ,
    258: {
            ask: "getter và setter có phải là method của class không ?",
            ans: "Getter và setter là property của class. Tuy nhìn hình thức viết thì có vẻ giống function nhưng chúng thực chất là property",
            result: "",
            belong: "class"
        }
    
    ,
    259: {
            ask: "Nói tới class, chúng ta có thể tao tác nghiệp vụ gì ?",
            ans: "Khởi tạo class, khởi tạo contructor, khởi tạo method, khởi tạo property setter và getter, khởi tạo static, khởi tạo supper, khởi tạo extends.",
            result: "",
            belong: "class"
        }
    
    ,
    260: {
            ask: "Nói tới Array, chúng ta có thể thao tác nghiệp vụ gì ?",
            ans: "KHỞI TẠO array literal, THÊM BỚT dữ liệu vào đầu mảng và cuối mảng hay bất cứ vị trí nào bằng push,pop,shift,unshif,splice, TRUY CẬP bất cứ chỉ mục nào từ 0 đến length-1 bằng dấu [], SẮP XẾP danh sách bằng sort() tăng giảm random, TÍNH TOÁN tổng bằng reduce, TÌM KIẾM giá trị lớn nhất nhỏ nhất hoặc lớn hơn 1 giá trị nào đó, TRUY XUẤT giá trị bằng for lop, for of, for each, map  ",
            result: "",
            belong: "array"
        }
    
    ,
    261: {
            ask: "sync là gì, vd ?",
            ans: "sync nghĩa là đồng bộ, cái nào viết trước chạy trước, cái nào viết sau chạy sau. Vd. log số 1 và log số 2, log số 1 chạy trước.",
            result: "",
            belong: "promise"
        }
    ,
    261: {
            ask: "async là gì ? vd ?",
            ans: "async là bất đồng bộ, viết trước nhưng chạy sau, vd setTimeout, setInterval,fetch, XMLHttpRequest, file reading, request animation frame. Thao tác bất đồng bộ sử dụng callback",
            result: "",
            belong: "promise"
        }
    ,
    261: {
            ask: "Nỗi đau trong lập trình bất động async khi gọi callback là gì ?",
            ans: "callback hell, là chuỗi các công việc liên quan nối tiếp nhau 1 cách rối rắm, khó hiểu.",
            result: "",
            belong: "promise"
        }
    ,
    261: {
            ask: "Khi nào nên khởi tạo new Promise",
            ans: "Khi cần viết logic bên trong.",
            result: "",
            belong: "promise"
        }
    ,
    261: {
            ask: "Cách đơn giản để gọi promise thành công là gì",
            ans: "const promise = Promise.resolve()",
            result: "",
            belong: "promise"
        }
    ,
    261: {
            ask: "Cách đơn giản để gọi promise thất bại là gì ?",
            ans: "const promise = Promise.reject()",
            result: "",
            belong: "promise"
        }
    ,
    261: {
            ask: "Khi nào nên sử dụng Promise.all() ?",
            ans: "Khi muốn chạy đồng thời 2 promise bất đồng bộ, thời gian thực thi giảm lại so với việc nối đuôi nhau.",
            result: "",
            belong: "promise"
        }
    ,
    261: {
            ask: "Cho ví dụ Promise.all()",
            ans: "?",
            result: "",
            belong: "promise"
        }
    ,
    261: {
            ask: "Cho ví dụ về Promise.resolve() ?",
            ans: "",
            result: "",
            belong: "promise"
        }
    ,
    262: {
            ask: "Cho ví dụ về Promise.reject()",
            ans: "",
            result: "",
            belong: "promise"
        }
    ,
    262: {
            ask: "Ví dụ khi dùng Promise.all() nhưng gặp lỗi thì sao ?",
            ans: "Thì gọi .catch, 1 thằng lỗi thôi là báo lỗi ngay.",
            result: "",
            belong: "promise"
        }
    ,
    // 135: {
    //         ask: "",
    //         ans: "",
    //         result: "",
    //         belong: "regex"
    //     }
    // ,
    // 135: {
    //         ask: "",
    //         ans: "",
    //         result: "",
    //         belong: "regex"
    //     }
    // ,
    // 135: {
    //         ask: "",
    //         ans: "",
    //         result: "",
    //         belong: "class"
    //     }
    // ,
    // 135: {
    //         ask: "",
    //         ans: "",
    //         result: "",
    //         belong: "class"
    //     }
    // ,
    // 135: {
    //         ask: "",
    //         ans: "",
    //         result: "",
    //         belong: "class"
    //     }
    // ,
    // 135: {
    //         ask: "",
    //         ans: "",
    //         result: "",
    //         belong: "class"
    //     }
    // ,
    // 135: {
    //         ask: "",
    //         ans: "",
    //         result: "",
    //         belong: "class"
    //     }

    // -----------------------------------BAI PROTOTYPE CHUA XONG-----------------

}
/**
* RANDOM
* Creat total key to be taked;
* Creat all key from object
* Sort random all key
* take all key from the total
* use forin to access all properties of the obj
* if the key of obj do not contain in the random key. Delete it.
* 
*/
const javascriptDefault = () => {
    const TOTAL = 20; //CHANGE HERE
    const myarray = Object.keys(javascript)
    const sortedArray = myarray.sort(() => 0.5 - Math.random());
    const spliceArray = sortedArray.slice(0, TOTAL);
    for (const iterator in javascript) {
        if (!spliceArray.includes(iterator)) delete javascript[iterator];
    }
    return javascript;
}
/**
 * CHOOSE BELONG
 * javascript
 * object
 * operator
 * array
 * function
 * class
 * regex
 * dom
 * bom
 * spread
 * loop
 * es6
 * promise
 */

const belong = "regex";
for (const key in javascript) {
    if (javascript[key]["belong"] != belong) delete javascript[key];
}
const choseBelong = () => {
    const belong = "javascript";
    for (const key in javascript) {
        if (javascript[key]["belong"] != belong) delete javascript[key];
    }

}
export default javascript;
// export { javascriptDefault };
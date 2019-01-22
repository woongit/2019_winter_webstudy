

/* $.ajax({
    url: 'example.php', // 요청 할 주소
    async: true, // false 일 경우 동기 요청으로 변경
    type: 'GET', // GET, POST
    data: {
        Name: 'ajax',
        Age: '10'
    }, // 전송할 데이터
    dataType: 'text', // xml, json, script, html
    beforeSend: function(jqXHR) {}, // 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
    success: function(jqXHR) {}, // 요청 완료 시
    error: function(jqXHR) {}, // 요청 실패.
    complete: function(jqXHR) {} // 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
}); */
//영화진흥위원회 오픈 api 사용 http://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do
var temp;
var apiurl = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=";
$.ajax({
    type: "GET",
    url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20181110",
    success: function (data) {
        temp = JSON.stringify(data);
        for (let i = 0; i < 10; i++) {

        }
        //$('#rank').html()
        $('#show').html(temp);
    }
});

function getData(callbackFunc) {
    $.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20181110', function (response) {
        callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
    });
}

getData(function (tableData) {
    console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
/* $(function(){
    $('#call').click(function(){
      $('#show').html('....loading...');
  
      $.ajax({
          type: "GET",
          url: "MOCK_DATA.json",
          success:function(data){
              $('#show').html(JSON.stringify(data));
          }
      })
  })
  })

function getData() {
    return new Promise(function (resolve, reject) {
      $.get('url 주소/products/1', function (response) {
        if (response) {
          resolve(response);
        }
        reject(new Error("Request is failed"));
      });
    });
  }
  
  // Fulfilled 또는 Rejected의 결과 값 출력
  getData().then(function (data) {
    console.log(data); // response 값 출력
  }).catch(function (err) {
    console.error(err); // Error 출력
  });

 */

//callback
var plus = function(a, b, callback){
    var result = a+b
    callback(result);
}

plus(5, 10, function(res){
    console.log(res);
})

//bad callback
function sleep(callback) {
    setTimeout(function () {
        callBback();
    }, 1000);
}
sleep(function () {
    console.log("A");
    sleep(function () {
        console.log("B");
        sleep(function () {
            console.log("C");

        })
    })
})

function inputSearchDate() {
    return new Promise(function (resolve, reject) {
        var date = parseInt(prompt("날짜 입력 ex 20161024"));
        $.get(apiurl + date.toString(), function (response) {
            if (response) {
                resolve(response);
                $('#show').html(JSON.stringify(response));
            }
           else{
               reject(new Error("Error!"));
           }
        });
    });
}


inputSearchDate().then(function(data){
    console.log(data);
}, function(err){
    console.log(err);
}).then(function(){
    console.log('a');
}).then(function(){
    console.log('b');
});


inputSearchDate().then(function (data) {
    throw new Error("error inputSearchDate");
}).catch(function (err) {
    console.log(err);
});

function buyAsync(mymoney) {
    return new Promise(function (resolve, reject) {   //resolve = 성공시 함수, reject 실패시
        setTimeout(function () {
            var payment = parseInt(prompt("지불하고자 하는 금액 입력"));
            var balance = mymoney - payment;
            if (balance > 0) {
                console.log(`${payment}원 지불했습니다.`);
                resolve(balance);
            } else {
                reject(`잔액은 ${mymoney}원입니다. 구매할 수 없습니다.`);
            }
        }, 1000);
    });
}

buyAsync(500)
    .then(function (balance) {  //성공시
        console.log(`잔액은 ${balance}원 입니다. `);
    })
    .catch(function (error) {   //실패시
        console.log(error);
    });


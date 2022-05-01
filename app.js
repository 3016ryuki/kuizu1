const quiz =[
{
  question: '最もプレイ人口が多いスポーツは？',
  answers: [
    '野球',
    '水泳',
    'サッカー',
    'テニス'
  ],
  correct :'サッカー'
},
{
  question: '一般的に大変な部活はどれ？',
  answers: [
    '野球部',
    '茶道部',
    '生物部',
    '家庭科部'
  ],
  correct :'野球部'
},
{
  question: '道具を使わないスポーツはどれ？',
  answers: [
    'バスケ',
    '水泳',
    'バトミントン',
    '野球'
  ],
  correct :'水泳'
}
];

//一つのクイズを作る時に使った
// const question =　'最もプレイ人口が多いスポーツは？';
// const answers = [
//   '野球',
//   '水泳',
//   'サッカー',
//   'テニス'
// ];

// const correct ='サッカー';

const quizLength = quiz.length;
let quizIndex = 0;


//ボタンの関数を定義した
const $button = document.getElementsByTagName('button');


//ボタンの作成
//問題文の出力
const setupQuiz = () =>{
   document.getElementById('js-question').textContent = quiz[quizIndex].question;
   let buttonIndex = 0;
     while(buttonIndex < $button.length){
      $button[buttonIndex].textContent= quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
     }
}
setupQuiz();

//クリックする関数
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解です');
  }
  else{
    window.alert('不正解です');
  }
  quizIndex++;

  if(quizIndex < quizLength ){
    setupQuiz();
  }
  else{
window.alert('終わり！')
  }
};
//正誤出力
let handlerIndex = 0;
const buttonLength = $button.length;

while(handlerIndex<$button.length){
   $button[handlerIndex].addEventListener('click',(e) =>　{
     clickHandler(e);
    });
  handlerIndex++;
}


// //正誤の出力
// $button[0].addEventListener('click',(e) =>　{
//   if(correct === e.target.textContent){
//     window.alert('正解です');
//   }
//   else{
//     window.alert('不正解です');
//   }
// });

// $button[1].addEventListener('click',(e) =>　{
//   if(correct === e.target.textContent){
//     window.alert('正解です');
//   }
//   else{
//     window.alert('不正解です');
//   }
// });

// $button[2].addEventListener('click',(e) =>　{
//   if(correct === e.target.textContent){
//     window.alert('正解です');
//   }
//   else{
//     window.alert('不正解です');
//   }
// });

// $button[3].addEventListener('click',(e) =>　{
//   if(correct ===e.target.textContent){
//     window.alert('正解です');
//   }
//   else{
//     window.alert('不正解です');
//   }
// });
// header action
$(document).on('click','.list_selector__item-show', function() {
  $(this).parents('.list_selector__item').toggleClass("is-hide");
  $(this).parents('.list_selector__item').siblings().addClass("is-hide");
});

$(window).on('click touchend', function(event) {//セレクター範囲外クリック時
  if (!$(event.target).closest('.list_selector__item').length) {
    $('.list_selector__item').addClass("is-hide");
  }
});

//スマホ用メニュー
$(function() {
  $('.drawer').drawer();
});

//send coin アドレス入力
$(".hideList_form__item").on('mousedown click', function(event) {
        var GET_TEXT = $(this).text();
        var WRITE_TEXT = '@ '+ GET_TEXT ;
        var TARGET_PARENT = $(this).parents('#auto-complete-address');
        var TARGET = TARGET_PARENT.children('input');
        TARGET_PARENT.addClass('to-group');
        TARGET.val(WRITE_TEXT);
});
$("#auto-complete-address input").on({
    change: function(){
      var TARGET_PARENT = $(this).parents('#auto-complete-address');
      TARGET_PARENT.removeClass('to-group');
      $(this).blur();
    }
 });

//transactionHistory リスト アクション
$(".list_transactionHistory--header").on('click', function(event) {
  $(this).parents('.list_transactionHistory--item').toggleClass("is-close");
});

//chart
Chart.defaults.global.defaultFontColor = '#1C1C1C';
Chart.defaults.global.defaultFontFamily = "'游ゴシック', YuGothic, 'Yu Gothic', 'Hiragino Kaku Gothic Pro', Meiryo, sans-serif";

var config = {
  // 作成するグラフの種類
  type: 'bar',

  // ラベルとデータセットを設定
  data: {
    labels: ["12/28", "29", "30", "31", "01/01", "02", "03"],
    datasets: [{
      backgroundColor: 'rgb(140, 198, 63)',
      borderColor: 'rgb(140, 198, 63)',
      data: [0, 0, 0, 0, 0, 0, 0]
    }]
  },

  // オプション設定
  options: {
    animation: {
      duration:1200,
      easing: 'easeOutQuart'
    },
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          min: 0,
          max: 100,
          fontSize: 10,
          stepSize: 20,
          padding: 8
        }
      }],
      xAxes: [{
        display: true,
        barPercentage: 0.3,
        gridLines: {
          display: false
        },
        ticks: {
          fontSize: 12,
          fontStyle: 'bold',
          padding: 8
        },
      }]
    }
  }
};

// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, config);
//
// var config2 = {
//   // 作成するグラフの種類
//   type: 'doughnut',
//
//   // ラベルとデータセットを設定
//   data: {
//     labels: ["takashi", "ron", "monika", "micky", "jane"],
//     datasets: [{
//       backgroundColor: ["#FF2738", "#00C2BF", "#FFB237", "#929FB4", "#4C5362"],
//       borderColor: '#ffffff',
//       hoverBorderColor: '#ffffff',
//       borderWidth: 2,
//       data: [0, 0, 0, 0, 0],
//     }]
//   },
//
//   // オプション設定
//   options: {
//     animation: {
//       duration:1200,
//       easing: 'easeOutQuart'
//     },
//     maintainAspectRatio: false,
//     legend: {
//       position: 'right',
//       labels: {
//         boxWidth: 14,
//         fontStyle: 'bold',
//       }
//     }
//   }
// };
// var ctx2 = document.getElementById('myChart2').getContext('2d');
// var chart2 = new Chart(ctx2, config2);
//
// var config2b = {
//   // 作成するグラフの種類
//   type: 'doughnut',
//
//   // ラベルとデータセットを設定
//   data: {
//     labels: ["takashi", "ron", "monika", "micky", "jane"],
//     datasets: [{
//       backgroundColor: ["#FF2738", "#00C2BF", "#FFB237", "#929FB4", "#4C5362"],
//       borderColor: '#ffffff',
//       hoverBorderColor: '#ffffff',
//       borderWidth: 3,
//       data: [0, 0, 0, 0, 0],
//     }]
//   },
//
//   // オプション設定
//   options: {
//     animation: {
//       duration:1200,
//       easing: 'easeOutQuart'
//     },
//     maintainAspectRatio: false,
//     legend: {
//       position: 'bottom',
//       labels: {
//         boxWidth: 12,
//         fontStyle: 'bold',
//         padding: 15
//       }
//     }
//   }
// };
// var ctx2b = document.getElementById('myChart2b').getContext('2d');
// var chart2b = new Chart(ctx2b, config2b);
//
// //画面表示時にchartにデータを上書きして表示
// $(window).on("load scroll", function(e){
//   var scrollTop = $(this).scrollTop();
//   var windowHeight = $(this).height();
//   if($("#inview_amount").offset().top - windowHeight + windowHeight/3 < scrollTop){
//     var dataset_chart = new Array(40, 20, 12, 18, 62, 80, 95);
//     for (var index=0; index < config.data.labels.length; ++index) {
//       chart.data.datasets[0].data[index] = dataset_chart[index];
//     };
//     chart.update();
//   };
//   if($("#inview_contributionRateA").offset().top - windowHeight + windowHeight/3 < scrollTop){
//     var dataset_chart2 = new Array(15, 10, 5, 2, 20);
//     for (var index=0; index < config2.data.labels.length; ++index) {
//       chart2.data.datasets[0].data[index] = dataset_chart2[index];
//     };
//     chart2.update();
//   };
//   if($("#inview_contributionRateB").offset().top - windowHeight + windowHeight/3 < scrollTop){
//     var dataset_chart2b = new Array(15, 10, 5, 2, 20);
//     for (var index=0; index < config2b.data.labels.length; ++index) {
//       chart2b.data.datasets[0].data[index] = dataset_chart2b[index];
//     };
//     chart2b.update();
//   }
// });

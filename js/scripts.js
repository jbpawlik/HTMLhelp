$(document).ready(function() {
    
  const pageElement = ['h1', 'p' , 'img']
  const elementLabel = ['This is a heading', 'This is a paragraph' , 'This is an image']

  $('*').click(function(e) {
    event.stopPropagation()
    const target = $(e.target)
    pageElement.forEach(function(element, index) {
      
    if (target.is(element, index)) {
      alert(elementLabel[index]);
    };
    
    });
  });
});
    
    // if (target.is('h1')) {
    //   alert('This is a heading.')
    // } else if (target.is('p')) {
    //   alert('This is a paragraph.')
    // } else if (target.is('img')) {
    //   alert('This is an image.')
    // }

  // $("h1").click(function() {
  //   alert("This is a heading.");
  // });

//   $("p").click(function() {
//     alert("This is a paragraph.");
//   });

//   $("img").click(function() {
//     alert("This is an image.");
//   });
// });

// const classifier = [$('h1').click, $("p").click, $("img").click]

// classifier.forEach(function(click) {
//   click(function() {
//     alert("This is a heading.");
//   });


  // iteration 1: click = $("h1").click
  // iteration 2: click = $('p').click
  // iteration 3: click = $('img').click

  // classifier = alert(click);
// })

// const classifier = ['This is a heading' , 'This is a paragraph' , 'This is an image']

// classifier.forEach(function(element) {
//   classifier = $(element).click(function() {
//     alert(element);
//   })

// });



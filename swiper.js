  var items = document.getElementsByClassName('item')//图片
  var points = document.getElementsByClassName("point")//点
  var goPreBtn = document.getElementById('goPre')
  var goNextBtn = document.getElementById('goNext')

  var time = 0//定时器跳转参数
  // 表示第几张图片在展示--->第index张图片有active这个类名
  var index = 0

  // 删除active类
  clearActive = function(){
    for(var i=0;i<items.length;i++){
      items[i].className = 'item'
    }
    for(var j=0;j<points.length;j++){
      points[j].className = 'point'
    }
  }

  var goIndex = function(){
    // 先将所有的active删掉
    clearActive()
    items[index].className = 'item active'
    points[index].className = 'point active'
  }

  var goNext = function(){
    if(index<4){
      index++
    }else{
      index=0
    } 
    goIndex()
  }

  var goPre = function(){
    if(index==0){
      index=4
    }else{
      index--
    }
    goIndex()
  }
  
  goPreBtn.addEventListener('click',function(){
    goPre()
  })

  goNextBtn.addEventListener('click',function(){
    goNext()
  })

  for (let i = 0; i < points.length; i++) {
    points[i].addEventListener('click',function(){
      var pointIndex = this.getAttribute('data-index')
      index = pointIndex 
      goIndex()
      time = 0
    })
  }
  // 2000ms 跳转一次
  
  setInterval(function(){
    time ++
    if(time==20){
      goNext()
      time=0
    }
  },100)

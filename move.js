document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("downlist");
    var chatgptButton = document.getElementById("Chatgptbutton");

    if (chatgptButton.contains(event.target) && dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else if (!dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});

document.querySelector('.sidebarclosebutton').addEventListener('mouseover', function() {
  // 获取 .sidebarcloseicondown 元素
  var sidebarcloseicondown = document.querySelector('.sidebarcloseicondown');
  var sidebarcloseiconup = document.querySelector('.sidebarcloseiconup');
  var div = document.getElementById("box1");
  // 添加或移除相应的类名来应用样式
  if (div.classList.contains("closed")){
    sidebarcloseicondown.classList.add('sidebarcloseiconuphovered');
    sidebarcloseiconup.classList.add("sidebarcloseicondownhovered");
  }else{
    sidebarcloseicondown.classList.add('sidebarcloseicondownhovered');
    sidebarcloseiconup.classList.add("sidebarcloseiconuphovered");
  }
  
});

document.querySelector('.sidebarclosebutton').addEventListener('mouseout', function() {
  sidebarcloseicondown.classList.remove('sidebarcloseicondownhovered');
  sidebarcloseicondown.classList.remove('sidebarcloseiconuphovered');
  sidebarcloseiconup.classList.remove("sidebarcloseiconuphovered");
  sidebarcloseiconup.classList.remove("sidebarcloseicondownhovered");
});

function checkTextarea() {
    var textarea = document.getElementById('myTextarea');
    var button = document.getElementById('buttomtextbutton');
    if (textarea.value.trim() !== '') {
      button.style.backgroundColor = 'black'; // 设置 button 的背景颜色
    } else {
      button.style.backgroundColor = '#cccccc'; // 恢复 button 的默认背景颜色
    }
  };

function closeDiv() {
    var div = document.getElementById("box1");
    var upbar = document.getElementById("box2upbar");
    var sidebarclosebutton =document.getElementById("sidebarclosebutton");
    if (div.classList.contains("closed")){
      div.classList.remove("closed");
      upbar.style.left= '230px';
      sidebarclosebutton.style.left='230px';
    }else{
      div.classList.add("closed");
      upbar.style.left= '0%';
      sidebarclosebutton.style.left='0%';
    }
    
}
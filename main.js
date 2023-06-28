let saturate=document.getElementById("saturate"),contrast=document.getElementById("contrast"),brightness=document.getElementById("brightness"),sepia=document.getElementById("sepia"),grayscale=document.getElementById("grayscale"),blur=document.getElementById("blur"),hueRotate=document.getElementById("hue-rotate"),upload=document.getElementById("upload"),download=document.getElementById("download"),img=document.getElementById("img"),reset=document.querySelector("span"),imgBox=document.querySelector(".img-box"),canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d");function resetValue(){img.style.filter="none",saturate.value="100",contrast.value="100",brightness.value="100",sepia.value="0",grayscale.value="0",blur.value="0",hueRotate.value="0"}window.onload=function(){download.style.display="none",reset.style.display="none",imgBox.style.display="none"},upload.onchange=function(){resetValue(),download.style.display="block",reset.style.display="block",imgBox.style.display="block";let e=new FileReader;e.readAsDataURL(upload.files[0]),e.onload=function(){img.src=e.result},img.onload=function(){canvas.width=img.width,canvas.height=img.height,ctx.drawImage(img,0,0,canvas.width,canvas.height),img.style.display="none"}};let filters=document.querySelectorAll("ul li input");filters.forEach(e=>{e.addEventListener("input",function(){ctx.filter=`
      saturate(${saturate.value}%)
      contrast(${contrast.value}%)
      brightness(${brightness.value}%)
      sepia(${sepia.value}%)
      grayscale(${grayscale.value})
      blur(${blur.value}px)
      hue-rotate(${hueRotate.value}deg)
    `,ctx.drawImage(img,0,0,canvas.width,canvas.height)})}),download.onclick=function(){download.href=canvas.toDataURL()};

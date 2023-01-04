function addingEventListener(){
    const glrBtn = document.getElementById('gallerybutton');
    glrBtn.addEventListener('click',clickImages);
}

function clickImages(){
    const img1 = document.createElement("img");
    img1.src = "./img/koifeeding.jpg";
    img1.className = "newpics";
    document.body.append(img1);
    const img2 = document.createElement("img");
    img2.src = "./img/koipond4.jpg";
    img2.className = "newpics";
    document.body.append(img2);
    const img3  = document.createElement("img");
    img3.src = "./img/koischool.jpg";
    img3.className = "newpics";
    document.body.append(img3);
}

addingEventListener();
const form = document.querySelector('#memeForm');
const topText = document.querySelector('input[name="topText"]');
const bottomText = document.querySelector('input[name="bottomText"]');
const imageURL = document.querySelector('input[name="imageURL"]');
const memeArea = document.querySelector('#memeList');



form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(`The top text is ${topText.value}`);
    console.log(`The bottom text is ${bottomText.value}`);
    console.log(`The image URL is ${imageURL.value}`);

    let newImg = document.createElement('img');
    let newImgDiv = document.createElement('div');
    let newTTDiv = document.createElement('div');
    let newTTLabel = document.createElement('label');
    let newBTDiv = document.createElement('div');
    let newBTLabel = document.createElement('label');
    let newbtn = document.createElement('button');

    newImgDiv.className = "meme-container";
    newImg.src = imageURL.value;
    newImg.className = "picture";
    newImg.style = "width:100%";
    newTTDiv.innerText = topText.value;
    newTTDiv.className = "top";
    newBTDiv.innerText = bottomText.value;
    newBTDiv.className = "bottom";
    newbtn.textContent = "Remove";
    newbtn.className = "top-right"
    addRemoveBtn(newbtn)

    newImgDiv.appendChild(newImg);
    newImgDiv.appendChild(newTTDiv);
    newImgDiv.appendChild(newBTDiv);
    newImgDiv.appendChild(newbtn);
    memeArea.appendChild(newImgDiv);
    
    form.reset();
    
    
})

function addRemoveBtn(rButton) {
    rButton.addEventListener('click', function(e){
        e.target.parentElement.remove();
    })
}
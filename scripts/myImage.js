getData(myURL).then(dataStijn =>{

    let mySection = document.querySelector('section:nth-of-type(1)');
    let myAvatar = dataStijn.data.avatar;
    let myName = dataStijn.data.name;
    
    let myImg = document.createElement("img");
    
    myImg.src = myAvatar;
    myImg.alt = myName;
    
    mySection.append(myImg);
    
} ) ;


















/**************/
/* SPIEKBRIEF */
/**************/

// const mySection = document.querySelector('section:nth-of-type(1)');

// getMyImage();

// function getMyImage() {
// 	getData(urlMe).then( data => {  
// 		const myData = data.data;
// 		let myName = myData.name;
// 		let myImgSrc = myData.avatar;

// 		if (!myImgSrc) {
// 			myImgSrc = "images/placeholder1.svg";
// 		}

// 		const myImg = document.createElement("img");

// 		myImg.src = myImgSrc;
// 		myImg.alt = myName;

// 		mySection.append(myImg);
// 	});	
// }
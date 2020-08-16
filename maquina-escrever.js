function typeWriter(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    console.log(textArray)
    textArray.forEach((letter,i)=> {
      setTimeout(()=>element.innerHTML += letter,50*i)
    });
  }

  const text = document.querySelector('#title-page');
  const title = document.querySelector('#second-title-page');
  const subtitle = document.querySelector('#third-title-page');
  typeWriter(title);
  typeWriter(subtitle);
  typeWriter(text);
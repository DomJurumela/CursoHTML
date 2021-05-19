//getElementById()

let element = document.getElementById('blog-title')
console.log(element)

//getElementsByClassName

element = document.getElementsByClassName("one");
console.log(element)


//getElementsByTagName

element = document.getElementsByTagName("meta");
console.log(element);


//querySelector

element = document.querySelector('.two');
console.log(element);

//querySelectorAll

let elements = document.querySelectorAll('meta');
elements.forEach(el => console.log(el));

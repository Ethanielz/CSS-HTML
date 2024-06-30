const element = document.querySelector('.my-element');
const options = { root: null, rootMargin: '0px', threshold: 0.5 }; 
const observer = new IntersectionObserver(function(entries, observer) { entries.forEach(entry => { if (entry.isIntersecting) { element.classList.add('show');
} else { element.classList.remove('show');
} });
 }, options); 
observer.observe(element);
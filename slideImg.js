		var prev = document.getElementById("i-left");
		var next = document.getElementById("i-right");
		var slide = document.getElementsByClassName('slide-1')[0];
		var size = document.getElementsByClassName('slide')[0].clientWidth;
		var img = document.getElementsByClassName('slide-img');

		var max = img.length * size;
		max -= size;
		var current = 0;

		prev.addEventListener('click', () => {
			current -= size;
			// console.log(current);
			if(current < 0) {
				current = max;
			}
				slide.style.marginLeft = '-' + current + 'px'; 
				slide.style.transition = "1.5s";
		});

		next.addEventListener('click', nextImg);

		function nextImg(){
			// console.log(current);
			if(current < max) {
				current += size;
			} else {
				current = 0;
			}
			slide.style.marginLeft = '-' + current + 'px'; 
			slide.style.transition = "1.5s";
		}

		setInterval(nextImg, 5000);
		var model1 = document.getElementById('modal1');
		if(model1) {
			var modalWindow1 = document.getElementById('modalWindow1'),
			exit = document.getElementsByClassName('exit')[0],
			exitbtn = document.getElementsByClassName('exitbtn')[0];

			model1.onclick = function() {
				modalWindow1.style.display = 'flex';
			}

			exit.onclick = function() {
				modalWindow1.style.display = 'none';
			}

			exitbtn.onclick = function() {
				modalWindow1.style.display = 'none';
			}
		}

		var model2 = document.getElementById('modal2');
		if(model2) {
			var modalWindow2 = document.getElementById('modalWindow2'),
			exit2 = document.getElementsByClassName('exit2')[0],
			exitbtn2 = document.getElementsByClassName('exitbtn2')[0];

			model2.onclick = function() {
				modalWindow2.style.display = 'flex';
			}

			exit2.onclick = function() {
				modalWindow2.style.display = 'none';
			}

			exitbtn2.onclick = function() {
				modalWindow2.style.display = 'none';
			}
		}
/*
 * Archivo principal de funcionalidad de JS
 */

(function main(){
	var boxes = Array.from(document.getElementsByClassName('box-work'));//me devuelve una colección de a
	var modal=document.getElementById('box-work-modal');
	var bodyModal, close;

	boxes.forEach(function(box){
		box.addEventListener('click', function(){
			modal.innerHTML=box.innerHTML;

			bodyModal = document.createElement('div');
			bodyModal.classList.add('modal-body');

			bodyModal.innerHTML = box.innerHTML;

			modal.appendChild(bodyModal);
			modal.classList.remove('hide');

			close = document.createElement('div');
			close.classList.add('close');
			img = document.createElement('img');

			//img.classList.add('img-modal');
			//img.setAttribute('id', 'img-modal');
			img.setAttribute('src', 'http://tojaeurope.com/gallery/Close-icon.png');
			

			

			close.appendChild(img);
			modal.appendChild(close);

			close.addEventListener('click', function(){
			modal.classList.add('hide');
			});
		});
	})
})();
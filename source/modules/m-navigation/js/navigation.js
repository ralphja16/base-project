// 'use strict';

// class mModal {
// 	constructor(holder) {

// 		this.holder = holder;
// 		console.log('=============');
// 		console.log(this.holder);
// 		console.log('=============');


// 		this.bodyEl          = document.getElementsByTagName('body')[0];
//         this.modalButton     = document.querySelectorAll('.js--m-modal__trigger');
//         this.span            = document.querySelectorAll('.m-modal__close');
//         this.len             = this.modalButton.length;

//         this.showModal = this.showModal.bind(this);
//         this.hideModal = this.hideModal.bind(this);
//         this.bindActions();



// 	}

// 	bindActions () {
//         for (let i = 0; i < this.len; i++) {
//             this.modalButton[i].addEventListener('click', this.showModal, false);
//             this.span[i].addEventListener('click', this.hideeModal, false);
//         }


//     }

// 	addEventListeners () {

// 		this.modalButton[0].addEventListener('click', this.showModal, false);
// 		this.span[0].addEventListener('click', this.hideModal);
// 	}

// 	showModal (e) {
// 		console.log('showModal');
// 		  console.log('=============');
// 		console.log(this.bodyEl);
// 		console.log('=============');

// 		// get data-modal ID of clicked button
//         let _hashId = e.target.dataset.modal;

//         // strip data-modal from #
//         let _id = _hashId.substr(1);

//         // Add class to the modal with same ID as data-modal
//         document.getElementById(_id).classList.add('is__open');
//         this.bodyEl.classList.add('m-modal--open');
// 	}

// 	hideModal () {
// 		console.log('hideModal');
// 		document.querySelector('.is__open').classList.remove('is__open');
//         this.body.classList.remove('m-modal--open');

// 	}
// }




// const callback = function(){
//     // Handler when the DOM is fully loaded
//     new mModal({ holder: document.querySelectorAll('.m-modal')});
// };

// if ( document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll) ) {
//     callback();
// } else {
//     document.addEventListener('DOMContentLoaded', callback);
// }

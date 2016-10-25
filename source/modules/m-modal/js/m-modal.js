jQuery.extend({

    mModal: function(holder){
        'use strict';

        // VERSION : 150702

        // PUBLIC
        var _this         = this;

        var _private = {

            // PRIVATE OBJECTS
            holder              : _this,
            body                : $('body'),
            backdrop            : $('<div class="m-modal__backdrop fade"></div>'),
            modal               : $('.m-modal'),

            // PRIVATE FUNCTIONS
            setup:function() {
            },

            clickListener:function(){
                $(holder).bind('click', _private.showModal);
            },

            showModal:function() {
                _private.body.addClass('m-modal--open');

                _private.body.append(_private.backdrop);
                _private.backdrop.addClass('in');

                _private.modal.addClass('in').fadeIn(300);

            },

            closeModal:function() {
                $('.m-modal').mousedown(function(e) {
                    var clicked = $(e.target);

                    if (clicked.is('.m-modal__content') || clicked.parents().is('.m-modal__content')) {
                        return;
                    } else {
                        $('.m-modal').hide();
                    }

                    console.log(clicked);
                });

            }

        };

        function initialize()
        {
            _private.setup();
            _private.clickListener();
            _private.closeModal();
        }

        if($(holder).length > 0) {
            initialize();
        }

        return {
            setup : _private.setup,
            clickListener : _private.clickListener,
            closeModal : _private.closeModal,
        };
    }
});



// $(function()
// {
//   $(document).ready(function(onReady){
        var mModal = new $.mModal($('.m-btn[data-toggle="modal"]'));
//     });
// });

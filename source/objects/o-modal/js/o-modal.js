jQuery.extend({

    oModal: function(holder){
        'use strict';

        // VERSION : 150702

        // PUBLIC
        var _this         = this;

        var _private = {

            // PRIVATE OBJECTS
            holder              : _this,
            body                : $('body'),
            backdrop            : $('<div class="o-modal__backdrop fade"></div>'),
            modal               : $('.o-modal'),

            // PRIVATE FUNCTIONS
            setup:function() {
            },

            clickListener:function(){
                $(holder).bind('click', _private.showModal);
            },

            showModal:function() {
                _private.body.addClass('o-modal--open');

                _private.body.append(_private.backdrop);
                _private.backdrop.addClass('in');

                _private.modal.addClass('in').fadeIn(300);

            },

            closeModal:function() {
                $('.o-modal').mousedown(function(e) {
                    var clicked = $(e.target);

                    if (clicked.is('.o-modal__content') || clicked.parents().is('.o-modal__content')) {
                        return;
                    } else {
                        $('.o-modal').hide();
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
        var oModal = new $.oModal($('.o-btn[data-toggle="modal"]'));
//     });
// });

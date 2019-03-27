define([
    'jquery',
], function ($) {
    'use strict';

    return function(Confirm){
        $.widget('mage.confirm', $.mage.confirm, {
            options: {
                modalClass: 'confirm',
                title: '',
                focus: '.action-accept',
                actions: {

                    /**
                     * Callback always - called on all actions.
                     */
                    always: function () {
                    },

                    /**
                     * Callback confirm.
                     */
                    confirm: function () {
                    },

                    /**
                     * Callback cancel.
                     */
                    cancel: function () {
                    }
                },
                buttons: [{
                    text: $.mage.__('Abbrechen'),
                    class: 'action-secondary action-dismiss',

                    /**
                     * Click handler.
                     */
                    click: function (event) {
                        this.closeModal(event);
                    }
                }, {
                    text: $.mage.__('OK'),
                    class: 'action-primary action-accept',

                    /**
                     * Click handler.
                     */
                    click: function (event) {
                        this.closeModal(event, true);
                    }
                }]
            }
        });

        return Confirm;
    };
});

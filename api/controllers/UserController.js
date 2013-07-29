/**
 * UserController
 *
 * @module        :: Controller
 * @description    :: Contains logic for handling requests.
 */

module.exports = {

    /* e.g.
     sayHello: function (req, res) {
     res.send('hello world!');
     }
     */

    /**
     * /user/index
     */
    index: function (req, res) {

        // This will render the view:
        // /Users/leah/Sites/robotlegs/views/user/index.ejs
        res.view();

    },


    /**
     * /user/show
     */
    show: function (req, res) {

        // This will render the view:
        // /Users/leah/Sites/robotlegs/views/user/show.ejs
        res.view();

    },


    /**
     * /user/edit
     */
    edit: function (req, res) {

        // This will render the view:
        // /Users/leah/Sites/robotlegs/views/user/edit.ejs
        res.view();

    },


    /**
     * /user/delete
     */
    delete: function (req, res) {

        // This will render the view:
        // /Users/leah/Sites/robotlegs/views/user/delete.ejs
        res.view();

    }

};

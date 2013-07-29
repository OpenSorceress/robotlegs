/**
 * ImageController
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
     * /image/index
     */
    index: function (req, res) {

        // This will render the view:
        // /Users/leah/Sites/robotlegs/views/image/index.ejs
        res.view();

    },


    /**
     * /image/show
     */
    show: function (req, res) {

        // This will render the view:
        // /Users/leah/Sites/robotlegs/views/image/show.ejs
        res.view();

    },


    /**
     * /image/edit
     */
    edit: function (req, res) {

        // This will render the view:
        // /Users/leah/Sites/robotlegs/views/image/edit.ejs

        res.view();

    },

    post: function (req, res) {
        var img = req.files.imagefile;
        res.view({name: img.name});
    },


    /**
     * /image/delete
     */
    delete: function (req, res) {

        // This will render the view:
        // /Users/leah/Sites/robotlegs/views/image/delete.ejs
        res.view();

    }

};

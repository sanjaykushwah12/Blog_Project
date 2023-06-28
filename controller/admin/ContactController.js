const ContactModel = require("../../model/fcontact");
class ContactController {
  static contact = async (req, res) => {
    const result = await ContactModel.find().sort({ _id: -1 }).limit(10);
    // console.log(result)
    res.render("admin/contact/contactdisplay", { fc: result });
  };
}
module.exports = ContactController;

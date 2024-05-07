const hooke = require("hookejs");
require('dotenv').config();

exports.detect = async (text) => {
  try {
    let result = await hooke.matchPrint({text: text});
    if (result.length === 0) {
        return {
            status: "This text may be original text",
            report: result
        }
        
    } else {
        return {
            status: "This text may be plagiarized",
            report: result
        }
    }
    
  } catch (error) {
    throw new Error ("Unable to use plagiarism service");
  }
};
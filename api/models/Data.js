/**
* Data.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	start_date: {
      type: 'string',
      required: true
    },
  	duration: {
      type: 'string',
      required: true
    },
  	text: {
      type: 'string',
      required: true
    },
  	progress: {
      type: 'string',
      required: true
    },
  	sortorder: {
      type: 'string',
      required: true
    },
  	parent: {
      type: 'string',
      required: true
    },
  	open: {
      type: 'string',
      required: true
    }
  }
};


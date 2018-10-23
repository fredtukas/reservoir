
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './task.js';
import './body.html';
import './template.js';

Template.body.helpers({

  tasks() {

    return Tasks.find({}, { sort: { createdAt: -1 } });

  },

});

Template.body.events({

    'submit .new-task'(event) {
  
      // Prevent default browser form submit
  
      event.preventDefault();
  
   
  
      // Get value from form element
  
      const target = event.target;
      const input1 = target.titre.value;
      const input2 = target.desc.value;
      const input3 = target.url.value;
  
      // Insert a task into the collection

      Tasks.insert({

        input1,
        input2,
        input3,
  
        createdAt: new Date(), // current time
  
      });
  
      // Clear form
  
      target.text.value = '';
  
    },

    'submit .momod'(event) {

      event.preventDefault();

      const target = event.target;
      const input10 = target.modif1.value;
      const input20 = target.modif2.value;
      const input30 = target.modif3.value;
      const id = target.editId.value;

      console.log(input10);
      console.log(input20);
      console.log(input30);
      console.log(id);

      Tasks.update(id,{
        $set: {input1:input10, input2:input20, input3:input30}
      })
    },




    'click .btn-edit-membre'(event) {
    const target = event.target;
    const idMembre = target.getAttribute ("data-id");
    const membre = Tasks.findOne({_id:idMembre});

   const form1 = document.querySelector("#element1");
   const form2 = document.querySelector("#element2");
   const form3 = document.querySelector("#element3");
   const hidden = document.querySelector("#edit-id");

   console.log(hidden);
   hidden.value = idMembre;
   form1.value = membre.input1;
   form2.value = membre.input2;
   form3.value = membre.input3;

    },

  });
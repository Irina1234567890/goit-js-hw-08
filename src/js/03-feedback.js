import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = "feedback-form-state";
let formData = {};

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(savedData, 500));

populateFormsFields();

function onSubmitForm(event) {

      event.preventDefault();
      console.log(formData);
      event.currentTarget.reset();
      localStorage.removeItem(STORAGE_KEY);
      formData = {};
};

  function savedData(event) {
        formData[event.target.name] = event.target.value;
        localStorage.setItem(STORAGE_KEY,JSON.stringify(formData));
    };

  function populateFormsFields() {
    const saveValues = localStorage.getItem(STORAGE_KEY);
    if (saveValues) {
      const valuesObject = JSON.parse(saveValues);
      formData = valuesObject;

      const entries = Object.entries(formData);
      for(const key of entries) {
        if (input.name === key[0]) {
          input.value = key[1];
        };
        if (textArea.name === key[0]) {
          textArea.value = key[1];
        };
      };

    };
    
  };





  

// const formRef = document.querySelector('.feedback-form');
// const textAreaRef = document.querySelector('.feedback-form textarea');

// const STORAGE_KEY = "feedback-form-state";
// let formData = {};

// formRef.addEventListener('submit', onFormSubmit);
// textAreaRef.addEventListener('input', throttle(onTextAreaInput, 500));
// formRef.addEventListener('input', throttle(savedData, 500));
// populateForm();

 
// function onFormSubmit(event) {
//     event.preventDefault();
//     console.log(formData);
//     event.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
//     formData = {};
// }

// function savedData(event) {
//     formData[event.target.name] = event.target.value;
//     localStorage.setItem(STORAGE_KEY,JSON.stringify(formData));
// }

// function onTextAreaInput(event) {
//    let message = event.target.value;
//     localStorage.setItem(STORAGE_KEY,message);
// }

// function populateForm() {
//     let savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     for (const key in savedInfo) {
    
//       if (key) {
//         formRef[key].value = savedInfo[key];
//         formData = savedInfo;
//       } 
//     }
//   }






// import throttle from 'lodash.throttle';

// const refs = {
//     form: document.querySelector('.feedback-form'),
// };

// const STORAGE_KEY = 'feedback-form-state';

// const formData = {};

// refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', throttle(onTextareaInput, 500));


// refs.form.addEventListener('input', e => {

//     formData[e.target.name] = e.target.value;
// });

// setTextareaInput();

// function onFormSubmit(e) {
//     e.preventDefault();

//     if (!e.target.message.value || !e.target.email.value) {
//         Notify.failure('Error. All fields must be filled');
//         return;
//     }

//     const dataSubmit = {
//     email: e.currentTarget.email.value,
//     message: e.currentTarget.message.value,
//     };

//     console.log('Send form');
//     console.log(dataSubmit);

//     e.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
// };


// function onTextareaInput(e) {
//     formData[e.target.name] = e.target.value;
//     const inputText = JSON.stringify(formData);
//     localStorage.setItem(STORAGE_KEY, inputText);
// };


// function setTextareaInput() {
//     const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     if (!savedMessage) {
//         return;
//     }
//     if (savedMessage.message) {
//         refs.form.message.value = savedMessage.message;
//     }
//       if (savedMessage.email) {
//     refs.form.email.value = savedMessage.email;
//   }
// };


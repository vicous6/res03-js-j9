  import { TextField } from './textField.js';
  import { EmailField } from './emailField.js';
  import { PasswordField } from './passwordField.js';
  
    import { Form } from './form.js';

  window.addEventListener('DOMContentLoaded', (event) => {




      let firstName = document.getElementById("firstname")
      let lastName = document.getElementById("lastname")
      let email = document.getElementById("email")
      let pass = document.getElementById("password")
      let repass = document.getElementById("confirm-password")
      
      let htmlFormulaire = document.getElementById("user-information")

      let objetFirstName = new TextField(firstName);

        objetFirstName.name=(firstName.getAttribute("name"));
   
      let objetLastName = new TextField(lastName);
       objetLastName.name=(lastName.getAttribute("name"));
       
      let objetEmail = new EmailField(email);
       objetEmail.name=(email.getAttribute("name"));
       
      let objetPass = new PasswordField(pass);
       objetPass.name=(pass.getAttribute("name"));
       
      let objetRepass = new PasswordField(repass);
       objetRepass.name=(repass.getAttribute("name"));
      
      let form = new Form()
     
      form.addField(objetFirstName)
      form.addField(objetLastName)
      form.addField(objetEmail)
      form.addField(objetPass)
      form.addField(objetRepass)

      console.log(form)
    //   objetFirstName.validate()
      
    //   objetLastName.validate()
      
    //   objetEmail.validate()
      
    //   objetPass.validate()
      
    //   objetRepass.validate()
    
    console.log(form)
          for (let i = 0 ; i < form.fields.length;i++){
              
              
              form.fields[i].element.addEventListener("change",function(){
                  
               form.validate();
                  console.log(form);
              })
          }
         
      
      htmlFormulaire.addEventListener("submit",function(e){
          
          console.log("ok");
          e.preventDefault();
          
             form.submit()
        
         
      })
      
      
      
      
  });
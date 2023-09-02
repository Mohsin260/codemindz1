'use server'

import dbConn from "@/app/utils/dbConn";
import Contact from "@/app/models/contact";

 
export const submitContact = async (data) => {

  try {
    await dbConn();

    await Contact.create(data);
    return { status: "OK", message: "Message Sent Successfully!" }

  } catch (error) {
    return { status: "ERROR", message: "Server Error, Please Try Again!" }
  }
    
}
  
 

    // const [formData, setFormData] = useState({});

    // const handleSubmit = async (formData) => {
    
        // e.preventDefault();
        // Perform server action with form data
        // const response = await fetch("/api/submit-form", {
        //   method: "POST",
        //   body: JSON.stringify(formData),
        // });
        // const name = formData.get('name')
        // Handle the response
        // const data = await response.json();
        // console.log('name');
      // };
    
    //   const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    //   };
  // ...
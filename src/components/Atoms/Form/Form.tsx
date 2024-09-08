import { useState } from "react";
import { toast } from "sonner";

function Form() {
     const cols = 30;
     const rows = 5;

     const [status, setStatus] = useState<string | null>(null);
     const [error, setError] = useState<string | null>(null);

     const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          try {
               setStatus("pending");
               setError(null);
               const myForm = event.currentTarget;
               const formData = new FormData(myForm);

               const urlSearchParams = new URLSearchParams();
               formData.forEach((value, key) => {
                    urlSearchParams.append(key, value as string);
               });

               const res = await fetch("./forms.html", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: urlSearchParams.toString(),
               });

               if (res.status === 200) {
                    setStatus("ok");
               } else {
                    setStatus("error");
                    setError(`${res.status} ${res.statusText}`);
               }
          } catch (e: any) {
               setStatus("error");
               setError(`${e}`);
          }
     };

     if (status === "ok") {
          toast.success("Form Submitted, We will connect Soon");
     }
     if (status === "error") {
          toast.success("Failed to Submit the form");
     }

     return (
          <>
               <div className="container">
                    <input type="hidden" name="form-name" value="feedback" />
                    <div className="contact-form-container">
                         <form className="contact-form" onSubmit={handleFormSubmit} name="feedback">
                              <input type="hidden" name="form-name" value="contact" />
                              <span className="form-header">Contact us</span>
                              <input type="text" className="email-input" placeholder="Name" id="name" name="name" required />
                              <input type="email" id="email" name="email" className="email-input" placeholder="Email" required />
                              <textarea cols={cols} rows={rows} id="message" name="message" className="message" placeholder="Message..." required />
                              <button className="submit" type="submit" value="Submit message">
                                   Submit
                              </button>
                         </form>
                    </div>
               </div>
          </>
     );
}

export default Form;

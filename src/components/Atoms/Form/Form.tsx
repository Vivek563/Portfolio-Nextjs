"use client";

import React, { useState } from "react";
import Card from "./card";

interface FeedbackFormProps {}

const FeedbackForm: React.FC<FeedbackFormProps> = () => {
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

     return (
          <div className="w-full md:max-w-md">
               <Card title="Leave Feedback">
                    <form name="feedback" onSubmit={handleFormSubmit} className="text-black flex flex-col gap-3 align-center">
                         <input type="hidden" name="form-name" value="feedback" />
                         <input name="name" type="text" placeholder="Name" required className="input input-bordered" />
                         <input name="email" type="email" placeholder="Email (optional)" className="input input-bordered" />
                         <input name="message" type="text" placeholder="Message" required className="input input-bordered" />
                         <button className="btn btn-primary" type="submit" disabled={status === "pending"}>
                              Submit
                         </button>
                         {status === "ok" && (
                              <div className="alert alert-success">
                                   <SuccessIcon />
                                   Submitted!
                              </div>
                         )}
                         {status === "error" && (
                              <div className="alert alert-error">
                                   <ErrorIcon />
                                   {error}
                              </div>
                         )}
                    </form>
               </Card>
          </div>
     );
};

const SuccessIcon: React.FC = () => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
     );
};

const ErrorIcon: React.FC = () => {
     return (
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
     );
};

export default FeedbackForm;

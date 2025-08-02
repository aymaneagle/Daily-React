import React, {useState} from 'react';

const CompleteForm = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        contact:'',
        subject:'',
        resume:'',
        url:'',
        about:'',
    });
    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }
    const resetFun = () =>{
        setValues({
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            contact:'',
            subject:'',
            resume:'',
            url:'',
            about:'',
        })
    }
    return (
        <div className="flex justify-center items-center">
            <div className="p-5 shadow-md rounded-lg border border-gray-200 w-[500px]">
                <h1 className="text-2xl font-bold text-blue-700 text-center mb-5">Complete React Form</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-1">
                    <label htmlFor="firstName">First Name</label>
                    <input className ="border px-2 py-1"
                           type="text"
                           name="firstName"
                           placeholder="Enter First Name"
                           value={values.firstName} onChange={(e)=>handleChange(e)}
                    />

                    <label htmlFor="lastName">First Name</label>
                    <input className ="border px-2 py-1"
                           type="text"
                           name="lastName"
                           placeholder="Enter Last Name"
                           value={values.lastName} onChange={(e)=>handleChange(e)}
                    />
                    <label htmlFor="email">Email</label>
                    <input className ="border px-2 py-1"
                           type="email"
                           name="email"
                           placeholder="Enter Email"
                           value={values.email} onChange={(e)=>handleChange(e)}
                    />
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <input className ="border px-2 py-1" type="radio" name="gender" value="male" onChange={(e)=>handleChange(e)}/>
                        Male
                        <input className ="border px-2 py-1" type="radio" name="gender" value="female" onChange={(e)=>handleChange(e)}/>
                        Female
                        <input className ="border px-2 py-1" type="radio" name="gender" value="other" onChange={(e)=>handleChange(e)}/>
                        Others
                    </div>
                    <label htmlFor="contact">contact</label>
                    <input className ="border px-2 py-1"
                           type="contact"
                           name="contact"
                           placeholder="Enter your contact"
                           value={values.contact} onChange={(e)=>handleChange(e)}
                    />
                    <label htmlFor="subject" className = "font-semibold">Subject</label>
                    <select name="subject"
                            id="subject"
                            value={values.subject} onChange={(e)=>handleChange(e)}
                    >
                        <option value="">Select a subject</option>
                        <option value="math">Math</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="physics">Physics</option>
                    </select>

                    <label htmlFor="resume">Resume</label>
                    <input className ="border px-2 py-1"
                           type="file"
                           name="resume"
                           value={values.resume} onChange={(e)=>handleChange(e)}
                    />
                    <label htmlFor="url">URL</label>
                    <input className ="border px-2 py-1"
                           type="text"
                           placeholder="Enter URL"
                           name="url"
                           value={values.url} onChange={(e)=>handleChange(e)}
                    />
                    <label htmlFor="about">About</label>
                    <textarea name="about" placeholder="Enter Description" onChange={(e)=>handleChange(e)}></textarea>
                    <div className="flex space-x-2 justify-center items-center">
                        <button
                            className="px-2 py-1 w-full bg-green-500"
                            onClick={resetFun}
                        >Reset
                        </button>
                        <button type="submit" className="px-2 py-1 w-full bg-orange-500"
                        >Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CompleteForm;

import React, {useState} from "react";


function Form () {
   const [data, setData] = useState ( {
        firstName: "",
        lastName : "",
        middleName: "",
        gender : "",
        dateOfBirth: "",
        phoneNumber: "",
        email: "",
    });
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setData({...data, [name]: value})

    };
    console.log(data)
    return (
        
        <div className="h-screen bg-gradient-to-br from-fuchsia-400 to-peach-500 to-red-300 flex justify-center items-center ">
            <div className="max-w-2xl w-full bg-white p-10 rounded-xl">
                  
                  <div className="bg-blue-600 text-center font-bold rounded-md p-2 m-2 max-w-2xl text-white" >
                    <h2>REGISTRATION FORM</h2>
                  </div>
                  <form >
                    {/* Creating a form */}
                    {/* RESPONSIVE DESIGN WHERE THE FLEX CHANGES WHENTHE SCREEN IS STRETCHED OR REDUCED */}
                 <div className=" flex space-y-3 flex-col md:flex-row md:space-y-0 md:gap-x-2">

                    <div>

                    <label className="form-label" htmlFor="firstName">First Name</label>
                    <input 
                    type="text" 
                    name="firstName" 
                    id="firstName" 
                    className="form-input"
                    // the value is whatever you want to be in the input box
                    value={data.firstName}
                    // onChange={(e) => setData({...data, firstname: e.target.value})}
                    onChange={handleChange}
                    />
                    </div>
                    <div>

                    <label className="form-label" htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" 
                    className="form-input"
                    value={data.lastName}
                    onChange={handleChange}
                    />
                    </div>
                    <div>
                        
                    <label htmlFor="gender" className="form-label"></label>
                    <label className="form-label" htmlFor="middleName"> Middle Name</label>
                    <input 
                    type="text" 
                    name="middleName" 
                    id="middleName"   
                    className="form-input"
                    value={data.middleName}
                    onChange={handleChange}
                    />
                    </div>
                 </div>
                 <label htmlFor="form-label">Gender:</label>
                    <div>
                        
                        <label htmlFor="male">
                        <input type="radio" name="gender" value="male" id="male"
                       
                       onChange={handleChange}
                        /> Male
                        </label>
                    </div>

        <div>
            <label htmlFor="female">
            <input type="radio" name="gender" value="female" id="female"
            
            onChange={handleChange}
            /> 
            Female
            </label>
        </div>

        <div>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="date" 
            name="dateOfBirth"
            value={data.dateOfBirth}
            onChange={handleChange}
            />
        </div>

        <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="number" placeholder="xxx-xxx-xxxx" 
            name="phoneNumber"
            id="phoneNumber"
            value={data.phoneNumber}
            onChange={handleChange}
            />
            
        </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                    name="email" 
                    id="email"
                    placeholder="john.doe@email.com"
                    value={data.email}
                    onChange={handleChange}
                    />
                </div>
                <div 
                className="bg-blue-600 w-8 rounded-md text-red-50 " >
                    <button  
                    type="submit">Edit</button>
                </div>
                <div>
                    <button  type="submit">Register</button>
                </div>

        </form>
            </div>
            

        </div>
   )

}
export default Form;
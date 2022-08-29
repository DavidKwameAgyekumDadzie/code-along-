import React from "react";

function LoginItem() {
  return (
    <div className="h-screen bg-pink-200 flex items-center justify-center flex-col">
      <h1 className="font-bold items-center">LOGIN</h1>
      <form className="max-w-xl rounded-xl bg-white py-10 px-5 max-h-96 overflow-hidden shadow-lg space-y-2">
        <div className=" bg-blue-400 p-2 rounded-md space-x-3 ">
          <label htmlFor="username" className="text-white font-bold">
            Username
          </label>
          <input
            type="text"
            placeholder="Type your username"
            className="max-h-20 rounded-md"
          />
        </div>
        <div className=" bg-blue-300 p-2 rounded-md space-x-10">
          <label htmlFor="email" className="text-white font-bold">
            Email
          </label>
          <input
            type="email"
            placeholder="Type your email"
            className="max-h-20 rounded-md"
          />
        </div>
        <div className=" bg-gray-400 p-2 rounded-md space-x-3">
          <label htmlFor="password" className="text-white font-bold">
            Password
          </label>
          <input
            type="password"
            placeholder="Type your password"
            className="max-h-20 rounded-md"
          />
        </div>
        <div className=" flex items-center justify-center">
          <button className="bg-blue-300 rounded-2xl shadow-sm px-5 py-2 hover:bg-white">
            <h2 className="font-bold">LOGIN</h2>
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginItem;

// import React from "react";

// function LoginItem() {
//   return (
//     <div className="bg-blue-400 h-screen max-w-2xl w-full block ">
//       <h1 className="">LOGIN</h1>
//       <form className="bg-blue-600 w-20 h-400 items-center">
//         <label htmlFor="username">Username</label>
//         <span className="">
//           <input
//             type="text"
//             placeholder="type your username or email"
//             className=""
//           />
//         </span>

//         <label htmlFor="password">Password</label>
//         <span>
//           <input
//             type="password"
//             placeholder="Type your password"
//             className=""
//           />
//         </span>
//       </form>
//     </div>
//   );
// }

// export default LoginItem;

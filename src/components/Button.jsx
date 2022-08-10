// export const Button1 = () => {
//     return <button className="bg-red-500 px-2 m-1 text-white rounded-full">Add to Cart</button>;
// };
// export const Button2 = () => {
//     return <button className="bg-yellow-500 px-2 m-1 text-white rounded-full">Login</button>;
// };
// export const Button3 = () => {
//     return <button className="bg-green-500 px-2 m-1 text-white rounded-full">Register</button>;
// };
// export const Button4 = () => {
//     return <button className="bg-purple-500 px-2 m-1 text-white rounded-full">Sign in</button>;
// };

function Button({label}) {
    return <button className="border-2 border-red-500 py-2 px-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white">{label}</button>;
}
export default Button;
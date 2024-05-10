const Contact=()=>{
    return(
        <div className="text-center">
            <h2 className="font-bold text-2xl m-4 ">Contact Us</h2>
            <div>
                <div className="m-2 p-2 border-gray-300  text-left border-b-2 flex justify-between w-3/12 m-auto rounded-md shadow-lg">
            <form className="m-auto">
                    <div className=" mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2 items-center">Name</label>
                        <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                        <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mx-14 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                </form>
                </div>
                
            </div>
        </div>
    )
};
export default Contact;
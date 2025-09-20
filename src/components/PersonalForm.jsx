export function PersonalForm ({ userData, setUserData }) {

    //Tailwindcss styling
    const inputStyle = `bg-gray-100 text-black p-1 px-3 text-sm md:py-2 md:text-base font-semibold rounded-md outline-none focus:border-blue-500 focus:border-2 border-2 border-gray-100`
    const labelStyle= `break-words text-sm font-medium md:text-base lg:text-lg`

    // HandleChange function gets called everytime the user types into any of the input fields
    // Updates our userData State by making a shallow copy of the previous state
    function handleChange (e) {
        setUserData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <form action="" className="p-4 flex flex-col gap-3 md:gap-6">
            <div className="flex flex-col">
                <label htmlFor="name" className={`${labelStyle}`}>Full Name</label>
                <input type="text" name="name" id="name" className={`${inputStyle}`} placeholder="John Doe" value={userData.name} onChange={(e) => handleChange(e)}/>
            </div> 
            <div className="flex flex-col">
                <label htmlFor="email" className={`${labelStyle}`}>Email</label>
                <input type="email" name="email" id="email" className={`${inputStyle}`} placeholder="Enter your email" value={userData.email} onChange={(e) => handleChange(e)}/>
            </div> 
            <div className="flex flex-col">
                <label htmlFor="birthday" className={`${labelStyle}`}>Date of Birth</label>
                <input type="date" name="birthday" id="birthday" className={`${inputStyle}`} value={userData.birthday} onChange={(e) => handleChange(e)}/>
            </div> 
        </form>
    );
}
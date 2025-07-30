import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const handleChange = (e) => {
        // console.log(e.target.value);
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }
    console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.username || !formData.email || !formData.password) {
            return setErrorMessage("please fill all fields")
        }
        try {
            setLoading(true)
            setErrorMessage(null)
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData),

            })
            const data = await res.json()
            if (data.sucess === false) {
                return setErrorMessage(data.message)
            }
            setLoading(false)
            if (res.ok) {
                navigate("/sign-in")
            }
        } catch (error) {
            setErrorMessage(error.message)
            setErrorMessage(false)
        }
    }
    return (
        <div className='min-h-screen mt-20'>
            <div className='flex max-w-xl mx-auto p-3 flex-col gap-5 md:flex-row md:items-center'>
                {/* left */}
                <div className='flex-1'>
                    <Link to='/' className='font-bold dark:text-black text-4xl'>
                        <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 rounded-lg text-white'>Sagar's</span>
                        Blog</Link>
                    <p className='mt-5 text-sm'>this is demo project</p>
                </div>
                {/* right */}
                <div className='flex-1'>
                    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                        <div>
                            <Label color='gray'>Username</Label>
                            <TextInput type='text' placeholder='Username' color='info' onChange={handleChange} />
                        </div>
                        <div>
                            <Label color='gray'>email</Label>
                            <TextInput type='email' placeholder='email' color='info' onChange={handleChange} />
                        </div>
                        <div>
                            <Label color='gray'>password</Label>
                            <TextInput type='password' placeholder='password' color='info' onChange={handleChange} />
                        </div>
                        <Button className='bg-gradient-to-r from-purple-500 to-pink-500' disabled={loading}>
                            {loading ? (
                                <>
                                    <Spinner size='sm' />
                                    <span className='pl-3'>Loading...</span>
                                </>
                            ) : "Sign up"}
                        </Button>
                    </form>
                    <div className='flex gap-2 mt-5 text-sm'>
                        <span>have an account?</span>
                        <Link to='/sign-in' className='text-blue-500'>SignIn</Link>
                    </div>
                    {errorMessage && (
                        <Alert className='mt-5' color='failure' >
                            {errorMessage}
                        </Alert >
                    )}
                </div>
            </div>
        </div>
    )
}

export default Signup
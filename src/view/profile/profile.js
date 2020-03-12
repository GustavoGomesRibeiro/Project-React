import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: ''
        }
    }

    render() {
        return (
            <form className='w-full max-w-lg'>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Usuario
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        </label>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Password
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}


export default Profile;
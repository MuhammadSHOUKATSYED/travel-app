import React from 'react'

export default function HotelLogin() {
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputUserName" class="form-label">User Name</label>
                    <input type="email" class="form-control" id="exampleInputUserName" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

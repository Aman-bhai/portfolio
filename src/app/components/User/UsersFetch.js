"use client"

import { useState, useEffect } from "react"

const UsersFetch = (props) => {
    async function fetchUser(email) {

        const response = await fetch(`/api/FetchUser`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify(email)

        })

        let data = await response.json()
        localStorage.setItem("isAdmin", data.isAdmin)
        localStorage.setItem("userName", data.email.split("@")[0])
        console.log("email ass", { email })
        console.log("data ass", data)


    }

    useEffect(() => {
        fetchUser(props.email)
    })

    return (
        <div></div>
    )
}

export default UsersFetch
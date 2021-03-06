export const APIConsumerUser = {

    registerUser: async (data) => {
        try{
            let res = await fetch('https://backend-vet-clinic.herokuapp.com/user/', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: data
            })

            return await res.json()

        } catch {
            console.log("ERROR EN EL REGISTRO", (data))
        }
    },

    loginUser: async (data) => {
        try{
            let res = await fetch('https://backend-vet-clinic.herokuapp.com/user/login', {
                method: "POST",
                header: {'Content-Type': 'application/json'},
                body: data
            })

            res = await res.json()
            localStorage.setItem('token', result.data)

        } catch {
            console.log("ERROR EN EL LOGIN", data)
        }
    },

    findUser: async (data) => {
        try {
            let res = await fetch('https://backend-vet-clinic.herokuapp.com/user/', {
                method: "GET",
                body: data
            })
        } catch {
            console.log("ERROR AL ENCONTRAR USUARIO", data)
        }
    },

    findAllUser: async (data) => {
        try{
            let res = await fetch('https://backend-vet-clinic.herokuapp.com/user/all', {
                method: "GET",
                body: data
            })
        } catch{
            console.log ("ERROR EN LA BÚSQUEDA DE USUARIOS", data)
        }
    },

    deleteUser: async (data) => {
        try{
            let res = await fetch('https://backend-vet-clinic.herokuapp.com/user/', {
                method: "DELETE",
                body: data
            })
        } catch {
            console.log ("ERROR EN EL BORRADO DE USUARIO", data)
        }
    }
}

export default APIConsumerUser
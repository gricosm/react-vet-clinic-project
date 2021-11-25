export const APIConsumerPet = {

    registerPet: async (data) => {
        try{
            let res = await fetch('http://localhost:0420/pet',{
                method: "POST",
                body: data
            })

            return await res.json()

        } catch {
            console.log("ERROR EN EL REGISTRO DE MASCOTAS", data)
        }
    },

    searchPet: async (data) => {
        try{
            let res = await fetch('http://localhost:0420/pet', {
                method: "GET",
                body: data
            })
        } catch {
            console.log("ERROR EN LA BÚSQUEDA DE MASCOTA", data)
        }
    },

    searchAllPet: async (data) => {
        try{
            let res = await fetch('http://localhost:0420/pet/all', {
                method: "GET",
                body: data
            })
        } catch {
            console.log("ERROR EN LA BÚSQUEDA DE TODAS LAS MASCOTAS", data)
        }
    },

    deletePet: async (data) => {
        try{
            let res = await fetch('http://localhost:0420/pet', {
                method: "DELETE",
                body: data
            })
        } catch {
            console.log("ERROR EN EL BORRADO DE LA MASCOTA", data)
        }
    }

}

export default APIConsumerPet
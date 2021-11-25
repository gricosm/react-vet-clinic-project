export const APIConsumerAppointment = {

    createAppointment: async (data) => {
        try{
            let res = await fetch('http://localhost:0420/appointment', {
                method: "POST",
                body: data
            })

            return await res.json()

        } catch {
            console.log("ERROR EN LA CREACIÓN DE LA CITA", data)
        }
    },

    searchAppointment: async (data) =>{
        try{
            let res = await fetch('http://localhost:0420/appointment', {
                method: "GET",
                body: data
            })

            return await res.json()

        } catch {
            console.log ("ERROR EN LA BÚSQUEDA DE LA CITA", data)
        }
    },

    searchAllAppointment: async (data) => {
        try{
            let res = await fetch('http://localhost:0420/appointment/all', {
                method: "GET",
                body: data
            })

            return await res.json()

        } catch {
            console.log ("ERROR EN LA BÚSQUEDA DE LAS CITAS", data)
        }
    }, 

    deleteAppointment : async (data) => {
        try{
            let res = await fetch('http://localhost:0420/appointment', {
                method: "DELETE",
                body: data
            })
        } catch {
            console.log("ERROR EN EL BORRADO DE LA CITA", data)
        }
    }
}

export default APIConsumerAppointment
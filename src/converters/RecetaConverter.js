export const createReceta = (RecetaForm)=>{
    return {
 
        "recipe": [
            {
                "id": RecetaForm.id,
                "product": {
                    "id": RecetaForm.id,
                    "name": RecetaForm.name
                },
                "quantity": {
                    "value": RecetaForm.value,
                    "measure": {
                        "code": RecetaForm.code,
                        "name": RecetaForm.name
                    }
                }
            }]}
    }
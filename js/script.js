$(`#tel`).mask(`(00) 00000-0000`)
$(`#cpf`).mask(`000.000.000-00`)
$(`#cep`).mask(`00000-000`)

$('#form_cadastro').validate({
    rules:{

        name:{
            required: true,
        },
        
        email:{
            required: true,
            email: true,
        },

        tel:{
            required: true,
        },

        cpf:{
            required: true,

        },

        adress:{
            required: true,

        },

        cep:{
            required: true, 

        }

}})


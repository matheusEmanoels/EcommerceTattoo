$(function(){
    console.log("Entrou Aqui");
    $('#btEnviar').click((e)=>{
        e.preventDefault();
        $('.erromsg').remove();
        validate();
    })

    $('#formCadastro input').change((e)=>{
        $('.erromsg').remove();
        validate();
    })
})

let erromsg = '<div class="erromsg"><span></span></div>'
let validateRequiredMsg =  "Campo de preenchimento obrigatorio.";
const validateEmailMsg = "Email inválido";
let validatePassWordLength = "Tamanho da senha invalido por gentileza informar um senha entre 4 e 8 caracteres."


function validate(){
    $('#formCadastro input').each(function(){
        if($(this).val() === ""){
            $(this).addClass('invalid');
            $(this).after(erromsg);
            $('.erromsg span').html(validateRequiredMsg);
            $(this).focus();
            return false;
        }else{
            $(this).removeClass('invalid');
            
        }

        if($(this).hasClass('email')){
            const email = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
            if(!email.test($(this).val())){
                $(this).addClass('invalid');
                $(this).after(erromsg);
                $('.erromsg span').html(validateEmailMsg);
                $(this).focus();
                return false;
            }else{
                $(this).removeClass('invalid');
            }
        }

        if($(this).hasClass('password')){
            if(($(this).val().length > 8)||($(this).val().length < 4)){
                $(this).addClass('invalid');
                $(this).after(erromsg);
                $('.erromsg span').html(validatePassWordLength);
                $(this).focus();
                return false;
            }else{
                $(this).removeClass('invalid');
            }
        }

        if($(this).hasClass('rpassword')){
            if($(this).val() != $('.password').val()){
                $(this).addClass('invalid');
                $(this).after(erromsg);
                $('.erromsg span').html(validateRpasswordIgual);
                $(this).focus();
                return false;
            }else{
                $(this).removeClass('invalid');
            }
        }

    })
}
 //2º FORMA DE HACER LAS FUNCIONES, ESTILO LAMBDA
        //SI MI FUNCIÓN TIENE VARIAS INSTRUCCIONES, SE HACE ASÍ
        let sum = (a, b) => {

            console.log("oper1", a);
            console.log("oper2", b);
            return a +b;

        }

        //SI MI FUNCIÓN ES SIMPLE Y SOLO DEVUELVE UNA COSA, ES ASÍ
        let sum2 = (a, b) => a+b;
        console.log(sum2(12, 55));